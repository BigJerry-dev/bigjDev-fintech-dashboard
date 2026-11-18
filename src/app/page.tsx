import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import MetricsRow from "../components/MetricsRow";
import FilterBar from "../components/FilterBar";
import InvoiceWorkspace from "../components/InvoiceWorkspace";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl p-6 flex flex-col gap-6">
      <Header />
      <TitleBar />
      <MetricsRow />
      <FilterBar />
      <InvoiceWorkspace />
    </main>
  );
}