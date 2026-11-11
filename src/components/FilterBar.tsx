export default function FilterBar() {
  return (
    <div className="flex items-center justify-between gap-3 flex-wrap text-xs text-gray-400">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="bg-[#21242E] text-white px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5">
          Active filters <span className="w-4 h-4 rounded-full bg-[#2C3140] text- flex items-center justify-center font-bold">2</span>
        </span>
        <button className="bg-[#181A20] border border-[#272B38] px-3.5 py-1.5 rounded-full">All customers ▾</button>
        <button className="bg-[#181A20] border border-[#272B38] px-3.5 py-1.5 rounded-full">All statuses ▾</button>
        <button className="bg-[#181A20] border border-[#272B38] px-3.5 py-1.5 rounded-full">November 2023 📅</button>
        <button className="bg-[#181A20] border border-[#272B38] px-3.5 py-1.5 rounded-full">December 2023 📅</button>
      </div>
      <div className="bg-[#181A20] border border-[#272B38] p-1 rounded-full flex items-center gap-1 font-medium">
        <button className="px-3.5 py-1 rounded-full">All Invoices</button>
        <button className="px-3.5 py-1 rounded-full">Draft <span className="text-">3</span></button>
        <button className="bg-[#B8F500] text-black font-semibold px-3.5 py-1 rounded-full">Unpaid <span className="w-4 h-4 rounded-full bg-black text-[#B8F500] text- font-bold inline-flex items-center justify-center">5</span></button>
      </div>
    </div>
  );
}