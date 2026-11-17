const filters = ["All customers", "All statuses", "November 2023", "December 2023"];

const tabs = [
  { label: "All Invoices", count: null, active: false },
  { label: "Draft", count: 3, active: false },
  { label: "Unpaid", count: 5, active: true },
];

export default function FilterBar() {
  return (
    <div className="flex items-center justify-between gap-3 flex-wrap text-xs">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="bg-white border border-line text-ink px-3 py-1.5 rounded-full font-semibold flex items-center gap-2">
          Active filters
          <span className="w-5 h-5 rounded-full bg-ink text-white text-[11px] flex items-center justify-center font-bold">2</span>
        </span>
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
        {tabs.map((tab) => (
          <button
            key={tab.label}
            aria-pressed={tab.active}
            className={`px-3.5 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 transition-colors ${
              tab.active ? "bg-ink text-white font-semibold" : "text-muted hover:text-ink"
            }`}
          >
            {tab.label}
            {tab.count !== null && (
              <span
                className={`min-w-5 h-5 px-1 rounded-full text-[11px] font-bold inline-flex items-center justify-center ${
                  tab.active ? "bg-accent text-ink" : "bg-surface text-muted"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}