import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import Transactions from "../../components/Transactions";

export const metadata: Metadata = { title: "Transactions | BigJDev Pay" };

export default function TransactionsPage() {
  return (
    <PageShell title="Transactions">
      <Transactions />
    </PageShell>
  );
}