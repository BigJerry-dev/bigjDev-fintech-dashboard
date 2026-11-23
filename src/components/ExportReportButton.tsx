"use client";
import { downloadCsv } from "../lib/csv";
import { summaryCsv } from "../lib/reports";

export default function ExportReportButton() {
  const handleClick = () => {
    const now = new Date();
    downloadCsv(`bigjdev-pay-report-${now.toISOString().slice(0, 10)}.csv`, summaryCsv(now));
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white border border-line px-4 py-2 rounded-full text-xs font-semibold text-ink hover:border-ink transition-colors"
    >
      Export report
    </button>
  );
}