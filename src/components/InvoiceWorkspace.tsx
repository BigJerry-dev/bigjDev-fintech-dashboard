import { metrics } from "../data/invoices";

const usd = (amount: number) => `$${amount.toLocaleString()}.00`;

const months = [
  { label: "Sep", fill: 100 },
  { label: "Oct", fill: 60 },
  { label: "Nov", fill: 85 },
  { label: "Dec", fill: 30 },
];

const methods = [
  { ref: "*4443", name: "Visa", selected: false },
  { ref: "#177210", name: "Stripe", selected: true },
  { ref: "#711221", name: "PayPal", selected: false },
];

export default function MetricsRow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <section className="lg:col-span-8 bg-white border border-line rounded-[28px] p-6 flex flex-col justify-between overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-line">
          <div>
            <span className="text-xs text-muted">Total Revenue</span>
            <div className="text-3xl font-bold mt-1.5">{usd(metrics.revenue)}</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">+14.8% <span className="text-muted font-normal">vs last month</span></div>
          </div>
          <div>
            <span className="text-xs text-muted">Net Cash Flow</span>
            <div className="text-3xl font-bold mt-1.5">{usd(metrics.cashFlow)}</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">● Positive balance</div>
          </div>
          <div>
            <span className="text-xs text-muted">Average Deal Cycle</span>
            <div className="text-3xl font-bold mt-1.5">{metrics.dealCycle} <span className="text-sm font-normal text-muted">days</span></div>
            <div className="text-xs text-muted mt-1">-3 days faster than Q3</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 pt-5">
          {months.map((m) => (
            <div key={m.label}>
              <div className="h-2 rounded-full bg-surface overflow-hidden">
                <div className="h-full rounded-full bg-accent" style={{ width: `${m.fill}%` }}></div>
              </div>
              <div className="mt-2 text-[11px] font-semibold text-muted">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="lg:col-span-4 bg-white border border-line rounded-[28px] p-6 flex flex-col justify-between overflow-hidden">
        <div>
          <span className="text-xs text-muted">Available for Instant Payout</span>
          <div className="text-3xl font-bold mt-2">{usd(metrics.cashFlow)}</div>
          <div className="grid grid-cols-3 gap-2.5 mt-5">
            {methods.map((m) => (
              <button
                key={m.name}
                className={`p-3 text-left rounded-[20px] border transition-colors ${
                  m.selected ? "bg-accent border-accent text-ink" : "bg-surface border-line text-ink hover:border-ink"
                }`}
              >
                <span className={`text-[11px] block ${m.selected ? "text-ink/70" : "text-muted"}`}>{m.ref}</span>
                <span className="text-xs font-bold">{m.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-ink text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-accent hover:text-ink transition-colors">
            Pay out now
          </button>
        </div>
      </section>
    </div>
  );
}