export default function Header() {
  const links = [
    { label: "Overview", active: true },
    { label: "Transactions", active: false },
    { label: "Merchants", active: false },
    { label: "Settlements", active: false },
    { label: "Disputes", active: false },
  ];

  return (
    <header className="flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-2.5">
        <span className="size-8 bg-accent rounded-full flex items-center justify-center font-extrabold text-ink text-sm">B</span>
        <span className="text-lg font-bold tracking-tight">BigJDev Pay</span>
      </div>

      <nav
        aria-label="Main"
        className="order-3 md:order-none w-full md:w-auto overflow-x-auto bg-white border border-line p-1 rounded-full flex items-center gap-1 text-sm font-medium"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href="#"
            aria-current={link.active ? "page" : undefined}
            className={
              link.active
                ? "bg-ink text-white font-semibold px-4 py-1.5 rounded-full whitespace-nowrap"
                : "text-muted hover:text-ink px-4 py-1.5 rounded-full whitespace-nowrap transition-colors"
            }
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <button
          aria-label="Settings"
          className="size-9 rounded-full bg-white border border-line text-ink flex items-center justify-center hover:border-ink transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="17" x2="21" y2="17" />
            <circle cx="9" cy="7" r="2.5" fill="#fff" />
            <circle cx="15" cy="17" r="2.5" fill="#fff" />
          </svg>
        </button>
        <div className="size-9 rounded-full bg-accent text-ink text-sm flex items-center justify-center font-bold">SJ</div>
      </div>
    </header>
  );
}