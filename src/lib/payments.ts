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