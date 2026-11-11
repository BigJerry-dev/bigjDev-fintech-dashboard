import { metrics } from "../data/invoices";

export default function MetricsRow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <section
        className="lg:col-span-8 bg-[#181A20] border border-[#252835] p-6 flex flex-col justify-between"
        style={{ borderRadius: "28px", overflow: "hidden" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-[#232633]">
          <div>
            <span className="text-xs text-gray-400">Total Revenue</span>
            <div className="text-3xl font-bold mt-1.5">${metrics.revenue.toLocaleString()}.00</div>
            <div className="text-xs text-[#B8F500] mt-1">+14.8% <span className="text-gray-400">vs last month</span></div>
          </div>
          <div>
            <span className="text-xs text-gray-400">Net Cash Flow</span>
            <div className="text-3xl font-bold mt-1.5">${metrics.cashFlow.toLocaleString()}.00</div>
            <div className="text-xs text-[#B8F500] mt-1">● Positive balance</div>
          </div>
          <div>
            <span className="text-xs text-gray-400">Average Deal Cycle</span>
            <div className="text-3xl font-bold mt-1.5">{metrics.dealCycle} <span className="text-sm font-normal text-gray-400">days</span></div>
            <div className="text-xs text-gray-400 mt-1">-3 days faster than Q3</div>
          </div>
        </div>
        <div className="pt-5 flex items-center justify-between text- font-semibold text-gray-500 uppercase">
          <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-2">
          <div className="h-2 rounded-full bg-[#B8F500]"></div>
          <div className="h-2 rounded-full bg-[#262A37]"></div>
          <div className="h-2 rounded-full bg-[#B8F500]"></div>
          <div className="h-2 rounded-full bg-[#262A37]"></div>
        </div>
      </section>

      <section
        className="lg:col-span-4 bg-[#181A20] border border-[#252835] p-6 flex flex-col justify-between"
        style={{ borderRadius: "28px", overflow: "hidden" }}
      >
        <div>
          <span className="text-xs text-gray-400">Available for Instant Payout</span>
          <div className="text-3xl font-bold mt-2">${metrics.cashFlow.toLocaleString()}.00</div>
          <div className="grid grid-cols-3 gap-2.5 mt-5">
            <button className="bg-[#1F222B] p-3 text-left" style={{ borderRadius: "20px" }}>
              <span className="text- text-gray-400 block">*4443</span>
              <span className="text-xs font-semibold">{"Vi" + "sa"}</span>
            </button>
            <button className="bg-[#B8F500] p-3 text-left text-black" style={{ borderRadius: "20px" }}>
              <span className="text- font-semibold block">#177210</span>
              <span className="text-xs font-black">Stripe</span>
            </button>
            <button className="bg-[#1F222B] p-3 text-left" style={{ borderRadius: "20px" }}>
              <span className="text- text-gray-400 block">#711221</span>
              <span className="text-xs font-semibold">{"Pay" + "Pal"}</span>
            </button>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold">Pay out now</button>
        </div>
      </section>
    </div>
  );
}