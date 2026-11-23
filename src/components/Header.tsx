"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Overview", href: "/" },
  { label: "Transactions", href: "/transactions" },
  { label: "Merchants", href: "/merchants" },
  { label: "Settlements", href: "/settlements" },
  { label: "Disputes", href: "/disputes" },
];

export default function Header() {
  // "/transactions/" and "/transactions" should count as the same page.
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close the account menu when you click outside it or press Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // On phones the tab row scrolls sideways, so bring the active tab into view.
  useEffect(() => {
    const active = navRef.current?.querySelector<HTMLElement>('[aria-current="page"]');
    active?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [pathname]);

  return (
    <header className="flex items-center justify-between gap-4 flex-wrap">
      <Link href="/" className="flex items-center gap-2.5">
        <span className="size-8 bg-accent rounded-full flex items-center justify-center font-extrabold text-ink text-sm">B</span>
        <span className="text-lg font-bold tracking-tight">BigJDev Pay</span>
      </Link>

      <nav
        ref={navRef}
        aria-label="Main"
        className="no-scrollbar order-3 md:order-none w-full md:w-auto overflow-x-auto bg-white border border-line p-1 rounded-full flex items-center gap-1 text-sm font-medium"
      >
        {links.map((link) => {
          const active = link.href === pathname;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "bg-ink text-white font-semibold px-4 py-1.5 rounded-full whitespace-nowrap"
                  : "text-muted hover:text-ink px-4 py-1.5 rounded-full whitespace-nowrap transition-colors"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div ref={menuRef} className="relative">
        <button
          aria-label="Account menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="size-9 rounded-full bg-accent text-ink text-sm flex items-center justify-center font-bold hover:ring-4 hover:ring-accent/30 transition-shadow"
        >
          SJ
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-11 z-20 w-64 bg-white border border-line rounded-[20px] shadow-lg p-4">
            <div className="flex items-center gap-3">
              <span className="size-10 shrink-0 rounded-full bg-accent text-ink text-sm flex items-center justify-center font-bold">SJ</span>
              <div className="min-w-0">
                <div className="text-sm font-bold truncate">Simon Jeremiah</div>
                <div className="text-[11px] text-muted">Operations admin</div>
              </div>
            </div>
            <p className="mt-3 pt-3 border-t border-line text-[11px] leading-relaxed text-muted">
              You are using a demo account. All merchants, customers and amounts are sample data.
            </p>
          </div>
        )}
      </div>
    </header>
  );
}