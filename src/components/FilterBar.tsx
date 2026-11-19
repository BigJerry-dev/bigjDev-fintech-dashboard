import { statuses } from "../data/transactions";
import type { TxStatus } from "../data/transactions";

export type StatusFilter = "All" | TxStatus;

const tabs: StatusFilter[] = ["All", ...statuses];

type SelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <label className="relative">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-white border border-line text-ink pl-3.5 pr-8 py-1.5 rounded-full font-medium hover:border-ink transition-colors cursor-pointer"
      >
        <option value="all">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">▾</span>
    </label>
  );
}

type Props = {
  counts: Record<StatusFilter, number>;
  status: StatusFilter;
  onStatusChange: (status: StatusFilter) => void;
  merchants: string[];
  merchant: string;
  onMerchantChange: (merchant: string) => void;
  channels: string[];
  channel: string;
  onChannelChange: (channel: string) => void;
};

export default function FilterBar(props: Props) {
  return (
    <div className="flex items-center justify-between gap-3 flex-wrap text-xs">
      <div className="flex items-center gap-2 flex-wrap">
        <Select label="All merchants" value={props.merchant} options={props.merchants} onChange={props.onMerchantChange} />
        <Select label="All channels" value={props.channel} options={props.channels} onChange={props.onChannelChange} />
      </div>

      <div className="max-w-full overflow-x-auto bg-white border border-line p-1 rounded-full flex items-center gap-1 font-medium">
        {tabs.map((tab) => {
          const active = tab === props.status;
          return (
            <button
              key={tab}
              onClick={() => props.onStatusChange(tab)}
              aria-pressed={active}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 transition-colors ${
                active ? "bg-ink text-white font-semibold" : "text-muted hover:text-ink"
              }`}
            >
              {tab}
              <span
                className={`min-w-5 h-5 px-1 rounded-full text-[11px] font-bold inline-flex items-center justify-center ${
                  active
                    ? "bg-accent text-ink"
                    : tab === "Failed"
                      ? "bg-red-50 text-red-600"
                      : "bg-surface text-muted"
                }`}
              >
                {props.counts[tab]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}