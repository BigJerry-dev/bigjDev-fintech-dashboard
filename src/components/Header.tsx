export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 bg-[#B8F500] rounded-full flex items-center justify-center font-black text-black">✦</span>
        <span className="text-xl font-bold tracking-tight">BigJDev Finance</span>
      </div>
      <nav className="bg-white/60 backdrop-blur p-1.5 rounded-full flex items-center gap-1 border text- font-medium text-gray-500 shadow-sm">
        <a className="bg-[#B8F500] text-black font-semibold px-4 py-1.5 rounded-full" href="#">Overview</a>
        <a className="px-3 py-1.5 hover:text-black" href="#">Estimates</a>
        <a className="px-3 py-1.5 hover:text-black" href="#">Invoices</a>
        <a className="px-3 py-1.5 hover:text-black" href="#">Payments</a>
      </nav>
      <div className="flex items-center gap-2">
        <button className="w-9 h-9 rounded-full bg-white/60 border flex items-center justify-center">⚙️</button>
        <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold">SJ</div>
      </div>
    </header>
  );
}