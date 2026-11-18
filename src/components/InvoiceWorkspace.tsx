"use client";
import { useState } from "react";
import { invoices } from "../data/invoices";

const money = (amount: number) =>
  amount.toLocaleString("en-US", { style: "currency", currency: "USD" });

// How an invoice total is split across its three line items.
const splits = [
  { label: "Concept Development", share: 0.2 },
  { label: "CRM Development", share: 0.6 },
];

function getLineItems(total: number) {
  const items = splits.map((s) => ({
    label: s.label,
    amount: Math.round(total * s.share * 100) / 100,
  }));
  const used = items.reduce((sum, item) => sum + item.amount, 0);
  // The last item takes whatever is left, so the three always add up to the total.
  items.push({ label: "CRM Integration", amount: Math.round((total - used) * 100) / 100 });
  return items;
}

export default function InvoiceWorkspace() {
  const [selectedId, setSelectedId] = useState("# 427-012");
  const selected = invoices.find((i) => i.id === selectedId) || invoices[2];
  const lineItems = getLineItems(selected.amount);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <section className="lg:col-span-5 bg-white border border-line rounded-[28px] p-5">
        <h2 className="text-base font-bold pb-4 px-1">Unpaid Invoices</h2>
        <div className="flex flex-col gap-2">
          {invoices.map((inv) => {
            const active = inv.id === selectedId;
            return (
              <button
                key={inv.id}
                onClick={() => setSelectedId(inv.id)}
                aria-pressed={active}
                className={`flex items-center justify-between gap-3 p-2.5 text-left w-full transition-colors ${
                  active ? "bg-ink text-white rounded-full" : "hover:bg-surface rounded-[20px]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`size-9 rounded-full flex items-center justify-center font-bold text-xs ${
                      active ? "bg-white text-ink" : "bg-surface text-ink"
                    }`}
                  >
                    {inv.customer[0]}
                  </div>
                  <div>
                    <div className="text-xs font-bold">{inv.id}</div>
                    <div className={`text-[11px] ${active ? "text-white/60" : "text-muted"}`}>{inv.due}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[11px] px-2.5 py-0.5 rounded-full ${
                      active ? "bg-white/15 text-white" : "bg-surface text-muted"
                    }`}
                  >
                    {inv.status}
                  </span>
                  <span className="text-xs font-bold">{money(inv.amount)}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="lg:col-span-7 bg-white border border-line rounded-[28px] p-6 flex flex-col justify-between">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b border-line">
            <div>
              <span className="text-[11px] text-muted">Invoice details</span>
              <div className="text-xl font-bold mt-1">
                {selected.id}{" "}
                <span className="text-[11px] font-medium text-muted bg-surface px-2 py-0.5 rounded-full align-middle">{selected.status}</span>
              </div>
            </div>
            <div>
              <span className="text-[11px] text-muted">Company</span>
              <div className="text-base font-bold mt-1">{selected.company}</div>
            </div>
            <div>
              <span className="text-[11px] text-muted">Customer</span>
              <div className="text-xs font-bold mt-1">{selected.customer}</div>
              <div className="text-[11px] text-muted">CEO {selected.company} Pvt Ltd</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-6">
            {lineItems.map((item) => (
              <div key={item.label} className="bg-surface rounded-[20px] p-4">
                <div className="text-sm font-bold">{money(item.amount)}</div>
                <span className="text-[11px] text-muted">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-5 border-t border-line flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <div><span className="text-[11px] text-muted block">Sub Total</span><span className="text-sm font-bold">{money(selected.amount)}</span></div>
            <div><span className="text-[11px] text-muted block">Total</span><span className="text-sm font-bold">{money(selected.amount)}</span></div>
            <div><span className="text-[11px] text-muted block">Balance Due</span><span className="text-sm font-bold">{money(selected.amount)}</span></div>
          </div>
          <button className="bg-accent text-ink font-bold px-5 py-2.5 rounded-full text-xs hover:bg-ink hover:text-white transition-colors">
            Pay out now
          </button>
        </div>
      </section>
    </div>
  );
}