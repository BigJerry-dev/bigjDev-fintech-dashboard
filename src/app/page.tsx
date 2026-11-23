import PageShell from "../components/PageShell";
import MetricsRow from "../components/MetricsRow";
import Transactions from "../components/Transactions";

export default function Home() {
  return (
    <PageShell title="Overview">
      <MetricsRow />
      <Transactions />
    </PageShell>
  );
}