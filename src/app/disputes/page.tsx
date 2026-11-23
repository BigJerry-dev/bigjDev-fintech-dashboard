import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import ComingSoon from "../../components/ComingSoon";

export const metadata: Metadata = { title: "Disputes | BigJDev Pay" };

export default function DisputesPage() {
  return (
    <PageShell title="Disputes">
      <ComingSoon name="Disputes" />
    </PageShell>
  );
}