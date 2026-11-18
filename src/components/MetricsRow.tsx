import { overview } from "../data/transactions";
import { formatCompact, formatMoneyWhole } from "../lib/payments";

function Change({ value, unit = "%" }: { value: number; unit?: string }) {
  const positive = value >= 0;
  return (
    <span className={positive ? "text-emerald-600" : "text-red-600"}>
      {positive ? "+" : ""}
      {value}
      {unit}
    </span>
  );
}

export default function MetricsRow() {
  const maxVolume = Math.max(...overview.volumeByMonth.map((m) => m.volume));
  const lastIndex = overview.volumeByMonth.length - 1;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <section className="lg:col-span-8 bg-white border border-line rounded-[28px] p-6 flex flex-col justify-between overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-line">
          <div>
            <span className="text-xs text-muted">Total payment volume</span>
            <div className="text-3xl font-bold mt-1.5">{formatMoneyWhole(overview.volume)}</div>
            <div className="text-xs font-semibold mt-1">
              <Change value={overview.volumeChangePct} /> <span className="text-muted font-normal">vs previous 30 days</span>
            </div>
          </div>
          <div>
            <span className="text-xs text-muted">Net revenue</span>
            <div className="text-3xl font-bold mt-1.5">{formatMoneyWhole(overview.netRevenue)}</div>
            <div className="text-xs font-semibold mt-1">
              <Change value={overview.netRevenueChangePct} /> <span className="text-muted font-normal">fees, vs previous 30 days</span>
            </div>
          </div>
          <div>
            <span className="text-xs text-muted">Success rate</span>
            <div className="text-3xl font-bold mt-1.5">{overview.successRate}%</div>
            <div className="text-xs font-semibold mt-1">
              <Change value={overview.successRateChangePct} unit=" pts" /> <span className="text-muted font-normal">vs previous 30 days</span>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <p className="text-xs text-muted">Payment volume by month</p>
          <div className="grid grid-cols-6 gap-3 mt-4">
            {overview.volumeByMonth.map((m, i) => {
              const current = i === lastIndex;
              const height = Math.round((m.volume / maxVolume) * 100);
              return (
                <div key={m.month} className="flex flex-col items-center gap-2" title={`${m.month}: ${formatMoneyWhole(m.volume)}`}>
                  <span className="text-[11px] font-semibold">{formatCompact(m.volume)}</span>
                  <div className="h-20 w-full max-w-12 flex items-end">
                    <div
                      className={`w-full rounded-lg ${current ? "bg-accent" : "bg-line"}`}
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                  <span className="text-[11px] font-semibold text-muted">{m.month}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lg:col-span-4 bg-white border border-line rounded-[28px] p-6 flex flex-col justify-between overflow-hidden">
        <div>
          <span className="text-xs text-muted">Pending settlements</span>
          <div className="text-3xl font-bold mt-2">{formatMoneyWhole(overview.pendingSettlement)}</div>
          <div className="text-xs text-muted mt-1">
            Next settlement: <span className="font-semibold text-ink">{overview.nextSettlement}</span>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            {overview.pendingByChannel.map((c) => {
              const share = Math.round((c.amount / overview.pendingSettlement) * 100);
              return (
                <div key={c.channel}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold">{c.channel}</span>
                    <span className="text-muted">
                      {formatMoneyWhole(c.amount)} · {share}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-surface overflow-hidden">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${share}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <button className="bg-ink text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-accent hover:text-ink transition-colors">
            Review settlements
          </button>
        </div>
      </section>
    </div>
  );
}