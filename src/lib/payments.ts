import type { Transaction } from "../data/transactions";

// Money is stored in cents, so every amount goes through these helpers before it is shown.

const usd = (options: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", ...options });

// 18450 -> "$184.50"
export const formatMoney = (cents: number) => usd({}).format(cents / 100);

// 482950000 -> "$4,829,500" (big dashboard numbers look cleaner without cents)
export const formatMoneyWhole = (cents: number) =>
  usd({ maximumFractionDigits: 0 }).format(cents / 100);

// 482950000 -> "$4.8M" (small labels under charts)
export const formatCompact = (cents: number) =>
  usd({ notation: "compact", maximumFractionDigits: 1 }).format(cents / 100);

// Times are always shown in UTC, so the server and the browser print the same text.
const shortTime = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  timeZone: "UTC",
});

const fullTime = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  timeZone: "UTC",
});

// "2026-11-18T09:42:00Z" -> "Nov 18, 09:42"
export const formatTime = (iso: string) => shortTime.format(new Date(iso));

// "2026-11-18T09:42:00Z" -> "Nov 18, 2026, 09:42 UTC"
export const formatDateTime = (iso: string) => `${fullTime.format(new Date(iso))} UTC`;

// Gateway fee rules (simplified for the demo):
//   Card 1.5% + $0.20, Bank transfer 0.8% capped at $5.00, Wallet 1.2%.
// Failed and refunded payments earn no fee and pay nothing to the merchant.
export function getBreakdown(tx: Transaction) {
  if (tx.status === "Failed" || tx.status === "Refunded") return { fee: 0, net: 0 };

  let fee: number;
  if (tx.channel === "Card") fee = Math.round(tx.amount * 0.015) + 20;
  else if (tx.channel === "Bank transfer") fee = Math.min(Math.round(tx.amount * 0.008), 500);
  else fee = Math.round(tx.amount * 0.012);

  return { fee, net: tx.amount - fee };
}