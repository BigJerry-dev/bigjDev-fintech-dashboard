import { statuses, transactions } from "../data/transactions";

const filters = ["All merchants", "All channels"];

const tabs = [
  { label: "All", count: transactions.length },
  ...statuses.map((status) => ({
    label: status,
    count: transactions.filter((t) => t.status === status).length,
  })),
];

const activeTab = "All";

export default function FilterBar() {
  return (
    <div className="flex items-center justify-between gap-3 flex-wrap text-xs">
      <div className="flex items-center gap-2 flex-wrap">
        {filters.map((label) => (
          <button
            key={label}
            className="bg-white border border-line text-ink px-3.5 py-1.5 rounded-full font-medium hover:border-ink transition-colors"
          >
            {label} <span className="text-muted">▾</span>
          </button>
        ))}
      </div>

      <div className="max-w-full overflow-x-auto bg-white border border-line p-1 rounded-full flex items-center gap-1 font-medium">
        {tabs.map((tab) => {
          const active = tab.label === activeTab;
          return (
            <button
              key={tab.label}
              aria-pressed={active}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 transition-colors ${
                active ? "bg-ink text-white font-semibold" : "text-muted hover:text-ink"
              }`}
            >
              {tab.label}
              <span
                className={`min-w-5 h-5 px-1 rounded-full text-[11px] font-bold inline-flex items-center justify-center ${
                  active
                    ? "bg-accent text-ink"
                    : tab.label === "Failed"
                      ? "bg-red-50 text-red-600"
                      : "bg-surface text-muted"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}