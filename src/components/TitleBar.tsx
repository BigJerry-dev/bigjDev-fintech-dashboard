export default function TitleBar() {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-full bg-[#181A20] border border-[#272B38] flex items-center justify-center text-gray-400">←</button>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <span className="ml-2 px-3 py-1 bg-[#181A20] border border-[#272B38] rounded-full text-xs font-semibold text-gray-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#B8F500]"></span>
          Q4 FY24 • Last 30 Days
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        <button className="bg-[#181A20] border border-[#2B2F3D] px-4 py-2 rounded- text-xs font-medium text-white">Export Report</button>
        <button className="bg-[#20232C] border border-[#303646] px-4 py-2 rounded- text-xs font-medium text-white flex items-center gap-2">
          <span className="text-[#B8F500] text-base">+</span> New Transaction
        </button>
      </div>
    </div>
  );
}