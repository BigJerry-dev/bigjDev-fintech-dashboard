import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import MetricsRow from "../../components/MetricsRow";

export const metadata: Metadata = { title: "Settlements | BigJDev Pay" };

export default function SettlementsPage() {
  return (
    <PageShell title="Settlements">
      <MetricsRow part="settlements" />
    </PageShell>
  );
}