import { overview } from "../data/transactions";
import type { Transaction } from "../data/transactions";
import { guard, toCsv } from "./csv";
import { getBreakdown } from "./payments";

// Cents -> "184.50". Plain numbers, so a spreadsheet can add them up.
const dollars = (cents: number) => (cents / 100).toFixed(2);

// The transactions you are looking at, one row each.
export function transactionsCsv(items: Transaction[]): string {
  const header = [
    "Reference",
    "Date (UTC)",
    "Merchant",
    "Channel",
    "Method",
    "Status",
    "Amount (USD)",
    "Fee (USD)",
    "Net to merchant (USD)",
    "Customer",
    "Failure reason",
  ];

  const rows = items.map((tx) => {
    const { fee, net } = getBreakdown(tx);
    return [
      tx.id,
      tx.createdAt,
      guard(tx.merchant),
      tx.channel,
      guard(tx.method),
      tx.status,
      dollars(tx.amount),
      dollars(fee),
      dollars(net),
      guard(tx.customerEmail),
      guard(tx.failureReason ?? ""),
    ];
  });

  return toCsv([header, ...rows]);
}

// The 30 day summary a CEO would send around.
export function summaryCsv(generatedAt: Date): string {
  const share = (amount: number) => `${Math.round((amount / overview.pendingSettlement) * 100)}%`;
  const sign = (value: number) => (value >= 0 ? "+" : "");

  return toCsv([
    ["BigJDev Pay report", "Last 30 days"],
    ["Generated (UTC)", generatedAt.toISOString().slice(0, 16).replace("T", " ")],
    [],
    ["Metric", "Value", "Change vs previous 30 days"],
    ["Total payment volume (USD)", dollars(overview.volume), `${sign(overview.volumeChangePct)}${overview.volumeChangePct}%`],
    ["Net revenue (USD)", dollars(overview.netRevenue), `${sign(overview.netRevenueChangePct)}${overview.netRevenueChangePct}%`],
    ["Success rate", `${overview.successRate}%`, `${sign(overview.successRateChangePct)}${overview.successRateChangePct} pts`],
    ["Pending settlements (USD)", dollars(overview.pendingSettlement), ""],
    ["Next settlement", overview.nextSettlement, ""],
    [],
    ["Month", "Payment volume (USD)"],
    ...overview.volumeByMonth.map((m) => [m.month, dollars(m.volume)]),
    [],
    ["Pending settlements by channel", "Amount (USD)", "Share"],
    ...overview.pendingByChannel.map((c) => [c.channel, dollars(c.amount), share(c.amount)]),
  ]);
}