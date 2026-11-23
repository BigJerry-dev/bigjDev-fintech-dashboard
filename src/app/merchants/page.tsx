import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import ComingSoon from "../../components/ComingSoon";

export const metadata: Metadata = { title: "Merchants | BigJDev Pay" };

export default function MerchantsPage() {
  return (
    <PageShell title="Merchants">
      <ComingSoon name="Merchants" />
    </PageShell>
  );
}