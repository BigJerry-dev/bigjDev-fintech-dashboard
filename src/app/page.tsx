import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import MetricsRow from "../components/MetricsRow";
import FilterBar from "../components/FilterBar";
import InvoiceWorkspace from "../components/InvoiceWorkspace";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#101216] text-white p-6 flex flex-col gap-6">
      <Header />
      <TitleBar />
      <MetricsRow />
      <FilterBar />
      <InvoiceWorkspace />
    </main>
  );
}