export type Invoice = {
  id: string;
  customer: string;
  company: string;
  role: string;
  amount: number;
  status: "Unsent" | "Viewed" | "Paid";
  due: string;
};

export const invoices: Invoice[] = [
  { id: "# 404-002", customer: "Acme Corp", company: "Acme Corp", role: "Design Sprint", amount: 80770, status: "Unsent", due: "In 2 days" },
  { id: "# 426-001", customer: "Northwind", company: "Northwind", role: "Web App", amount: 27114, status: "Viewed", due: "In 4 days" },
  { id: "# 427-012", customer: "Maria Jones", company: "BlueRock", role: "CRM Development", amount: 53154, status: "Unsent", due: "In 5 days" },
  { id: "# 424-112", customer: "Vertex Labs", company: "Vertex Labs", role: "API Build", amount: 61223, status: "Viewed", due: "In 16 days" },
  { id: "# 417-020", customer: "Kite Studio", company: "Kite Studio", role: "Landing Page", amount: 7311, status: "Viewed", due: "In 19 days" },
];

export const metrics = {
  revenue: 482950,
  cashFlow: 214390,
  dealCycle: 18,
};