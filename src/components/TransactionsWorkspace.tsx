import { overview } from "../data/transactions";
import type { Transaction, TxStatus } from "../data/transactions";
import { formatDateTime, formatMoney, formatTime, getBreakdown } from "../lib/payments";

const chipStyle: Record<TxStatus, string> = {
  Successful: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Failed: "bg-red-50 text-red-600",
  Refunded: "bg-surface text-muted",
};

function statusNote(tx: Transaction) {
  switch (tx.status) {
    case "Failed":
      return {
        text: `Declined: ${tx.failureReason ?? "Unknown reason"}. The customer was not charged.`,
        style: "bg-red-50 text-red-700",
      };
    case "Pending":
      return {
        text: "Waiting for confirmation from the bank. It settles once confirmed.",
        style: "bg-amber-50 text-amber-700",
      };
    case "Refunded":
      return {
        text: "Refunded to the customer. Nothing is due to the merchant.",
        style: "bg-surface text-muted",
      };
    default:
      return {
        text: `Included in the next settlement: ${overview.nextSettlement}.`,
        style: "bg-emerald-50 text-emerald-700",
      };
  }
}

type Props = {
  items: Transaction[];
  selected?: Transaction;
  onSelect: (id: string) => void;
};

export default function TransactionsWorkspace({ items, selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <section className="lg:col-span-5 bg-white border border-line rounded-[28px] p-5">
        <h2 className="text-base font-bold pb-4 px-1">
          Latest transactions <span className="text-muted font-medium">({items.length})</span>
        </h2>

        {items.length === 0 ? (
          <p className="px-1 py-10 text-sm text-muted text-center">No transactions match these filters.</p>
        ) : (
          <div className="flex flex-col gap-2 max-h-[540px] overflow-y-auto pr-1">
            {items.map((tx) => {
              const active = selected?.id === tx.id;
              return (
                <button
                  key={tx.id}
                  onClick={() => onSelect(tx.id)}
                  aria-pressed={active}
                  className={`flex items-center justify-between gap-3 p-2.5 text-left w-full transition-colors ${
                    active ? "bg-ink text-white rounded-full" : "hover:bg-surface rounded-[20px]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`size-9 shrink-0 rounded-full flex items-center justify-center font-bold text-xs ${
                        active ? "bg-white text-ink" : "bg-surface text-ink"
                      }`}
                    >
                      {tx.merchant[0]}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">{tx.merchant}</div>
                      <div className={`text-[11px] truncate ${active ? "text-white/60" : "text-muted"}`}>
                        {tx.id} · {formatTime(tx.createdAt)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="text-xs font-bold">{formatMoney(tx.amount)}</span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full ${
                        active ? "bg-white/15 text-white" : chipStyle[tx.status]
                      }`}
                    >
                      {tx.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {selected ? <Detail tx={selected} /> : (
        <section className="lg:col-span-7 bg-white border border-line rounded-[28px] p-6 flex items-center justify-center">
          <p className="text-sm text-muted">Select a transaction to see its details.</p>
        </section>
      )}
    </div>
  );
}

function Detail({ tx }: { tx: Transaction }) {
  const { fee, net } = getBreakdown(tx);
  const note = statusNote(tx);

  return (
    <section className="lg:col-span-7 bg-white border border-line rounded-[28px] p-6 flex flex-col justify-between">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b border-line">
          <div>
            <span className="text-[11px] text-muted">Reference</span>
            <div className="text-xl font-bold mt-1">{tx.id}</div>
            <span className={`inline-block mt-1 text-[11px] font-medium px-2 py-0.5 rounded-full ${chipStyle[tx.status]}`}>
              {tx.status}
            </span>
          </div>
          <div>
            <span className="text-[11px] text-muted">Merchant</span>
            <div className="text-base font-bold mt-1">{tx.merchant}</div>
            <div className="text-[11px] text-muted">{tx.channel}</div>
          </div>
          <div>
            <span className="text-[11px] text-muted">Customer</span>
            <div className="text-xs font-bold mt-1 break-all">{tx.customerEmail}</div>
            <div className="text-[11px] text-muted">{tx.method}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6">
          <div className="bg-surface rounded-[20px] p-4">
            <div className="text-sm font-bold">{formatMoney(tx.amount)}</div>
            <span className="text-[11px] text-muted">Gross amount</span>
          </div>
          <div className="bg-surface rounded-[20px] p-4">
            <div className="text-sm font-bold">{formatMoney(fee)}</div>
            <span className="text-[11px] text-muted">Gateway fee</span>
          </div>
          <div className="bg-surface rounded-[20px] p-4">
            <div className="text-sm font-bold">{formatMoney(net)}</div>
            <span className="text-[11px] text-muted">Net to merchant</span>
          </div>
        </div>

        <div className={`mt-4 mb-6 rounded-[20px] px-4 py-3 text-xs font-medium ${note.style}`}>{note.text}</div>
      </div>

      <div className="pt-5 border-t border-line flex items-center justify-between flex-wrap gap-4">
        <div>
          <span className="text-[11px] text-muted block">Processed</span>
          <span className="text-sm font-bold">{formatDateTime(tx.createdAt)}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="bg-white border border-line text-ink font-semibold px-5 py-2.5 rounded-full text-xs hover:border-ink transition-colors">
            Flag for review
          </button>
          {tx.status === "Successful" && (
            <button className="bg-accent text-ink font-bold px-5 py-2.5 rounded-full text-xs hover:bg-ink hover:text-white transition-colors">
              Issue refund
            </button>
          )}
        </div>
      </div>
    </section>
  );
}