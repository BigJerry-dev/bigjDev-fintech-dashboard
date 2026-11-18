// All money in this file is stored in cents (whole numbers), the way payment systems do it.
// 18450 means $184.50. Whole numbers avoid the rounding mistakes that decimals cause.

export type Channel = "Card" | "Bank transfer" | "Wallet";
export type TxStatus = "Successful" | "Pending" | "Failed" | "Refunded";

export type Transaction = {
  id: string;
  merchant: string;
  customerEmail: string; // masked, a gateway never shows the full address in a list
  channel: Channel;
  method: string;
  amount: number; // cents
  status: TxStatus;
  createdAt: string; // ISO time, UTC
  failureReason?: string;
};

export const channels: Channel[] = ["Card", "Bank transfer", "Wallet"];
export const statuses: TxStatus[] = ["Successful", "Pending", "Failed", "Refunded"];

// The latest transactions, newest first.
export const transactions: Transaction[] = [
  { id: "TXN-90412", merchant: "Lagos Fresh Market", customerEmail: "a***e@gmail.com", channel: "Card", method: "Visa •••• 4242", amount: 18450, status: "Successful", createdAt: "2026-11-18T09:42:00Z" },
  { id: "TXN-90411", merchant: "Kite Studio", customerEmail: "m***a@kitestudio.io", channel: "Wallet", method: "Apple Pay", amount: 4900, status: "Successful", createdAt: "2026-11-18T09:31:00Z" },
  { id: "TXN-90410", merchant: "BlueRock Logistics", customerEmail: "o***n@bluerock.co", channel: "Bank transfer", method: "Bank transfer", amount: 125000, status: "Pending", createdAt: "2026-11-18T09:12:00Z" },
  { id: "TXN-90409", merchant: "Northwind Store", customerEmail: "j***s@outlook.com", channel: "Card", method: "Mastercard •••• 5100", amount: 7999, status: "Failed", createdAt: "2026-11-18T08:57:00Z", failureReason: "Insufficient funds" },
  { id: "TXN-90408", merchant: "Vertex Labs", customerEmail: "t***i@vertexlabs.dev", channel: "Card", method: "Visa •••• 1881", amount: 256000, status: "Successful", createdAt: "2026-11-18T08:40:00Z" },
  { id: "TXN-90407", merchant: "Lagos Fresh Market", customerEmail: "c***o@yahoo.com", channel: "Wallet", method: "Google Pay", amount: 3200, status: "Successful", createdAt: "2026-11-18T08:15:00Z" },
  { id: "TXN-90406", merchant: "Acme Corp", customerEmail: "s***h@acme.com", channel: "Bank transfer", method: "Bank transfer", amount: 89900, status: "Successful", createdAt: "2026-11-17T17:50:00Z" },
  { id: "TXN-90405", merchant: "Kite Studio", customerEmail: "d***a@gmail.com", channel: "Card", method: "Verve •••• 0087", amount: 15500, status: "Failed", createdAt: "2026-11-17T16:22:00Z", failureReason: "3D Secure authentication failed" },
  { id: "TXN-90404", merchant: "Northwind Store", customerEmail: "r***t@gmail.com", channel: "Card", method: "Mastercard •••• 7733", amount: 42000, status: "Refunded", createdAt: "2026-11-17T14:08:00Z" },
  { id: "TXN-90403", merchant: "BlueRock Logistics", customerEmail: "f***e@bluerock.co", channel: "Bank transfer", method: "Bank transfer", amount: 640000, status: "Pending", createdAt: "2026-11-17T11:30:00Z" },
  { id: "TXN-90402", merchant: "Vertex Labs", customerEmail: "l***a@vertexlabs.dev", channel: "Card", method: "Visa •••• 9012", amount: 9800, status: "Successful", createdAt: "2026-11-17T10:05:00Z" },
  { id: "TXN-90401", merchant: "Acme Corp", customerEmail: "p***r@acme.com", channel: "Wallet", method: "Apple Pay", amount: 21750, status: "Failed", createdAt: "2026-11-17T09:44:00Z", failureReason: "Network timeout" },
];

// Totals for the last 30 days. A real gateway sends these from its servers,
// because the list above is only the latest few transactions, not all of them.
export const overview = {
  volume: 482950000, // $4,829,500.00 processed
  volumeChangePct: 14.8,
  netRevenue: 6761300, // $67,613.00 earned in fees
  netRevenueChangePct: 9.2,
  successRate: 96.4,
  successRateChangePct: 0.6,
  pendingSettlement: 21439000, // $214,390.00 waiting to be paid out to merchants
  nextSettlement: "Today, 4:00 PM",
  pendingByChannel: [
    { channel: "Card" as Channel, amount: 13292180 },
    { channel: "Bank transfer" as Channel, amount: 6002920 },
    { channel: "Wallet" as Channel, amount: 2143900 },
  ],
  volumeByMonth: [
    { month: "Jun", volume: 312400000 },
    { month: "Jul", volume: 341800000 },
    { month: "Aug", volume: 366200000 },
    { month: "Sep", volume: 398500000 },
    { month: "Oct", volume: 420600000 },
    { month: "Nov", volume: 482950000 },
  ],
};