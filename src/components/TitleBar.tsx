export default function TitleBar() {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-3 flex-wrap">
        <button
          aria-label="Go back"
          className="w-8 h-8 rounded-full bg-white border border-line text-muted flex items-center justify-center hover:border-ink hover:text-ink transition-colors"
        >
          ←
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Overview</h1>
        <span className="px-3 py-1 bg-white border border-line rounded-full text-xs font-semibold text-muted flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          Last 30 days
        </span>
      </div>

      <div className="flex items-center gap-2.5">
        <button className="bg-white border border-line px-4 py-2 rounded-full text-xs font-semibold text-ink hover:border-ink transition-colors">
          Export report
        </button>
        <button className="group bg-ink border border-ink px-4 py-2 rounded-full text-xs font-semibold text-white flex items-center gap-2 hover:bg-accent hover:border-accent hover:text-ink transition-colors">
          <span className="text-accent text-base leading-none group-hover:text-ink">+</span> Add merchant
        </button>
      </div>
    </div>
  );
}