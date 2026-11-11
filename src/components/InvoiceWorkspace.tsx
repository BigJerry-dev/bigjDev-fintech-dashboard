"use client";
import { useState } from "react";
import { invoices } from "../data/invoices";

export default function InvoiceWorkspace() {
  const [selectedId, setSelectedId] = useState("# 427-012");
  const selected = invoices.find((i) => i.id === selectedId) || invoices[2];

  return (
    <div
      className="bg-white p-3 text-black grid grid-cols-1 lg:grid-cols-12 gap-3"
      style={{ borderRadius: "32px", overflow: "hidden" }}
    >
      <section className="lg:col-span-5 p-4">
        <h2 className="text-base font-bold pb-4">Unpaid Invoices</h2>
        <div className="flex flex-col gap-2">
          {invoices.map((inv) => {
            const active = inv.id === selectedId;
            return (
              <button
                key={inv.id}
                onClick={() => setSelectedId(inv.id)}
                className={`flex items-center justify-between p-2.5 text-left w-full ${active ? "bg-[#111317] text-white" : "hover:bg-zinc-50"}`}
                style={{ borderRadius: active ? "999px" : "20px" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs">{inv.customer[0]}</div>
                  <div>
                    <div className="text-xs font-bold">{inv.id}</div>
                    <div className={`text- ${active ? "text-zinc-400" : "text-zinc-500"}`}>{inv.due}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text- px-2.5 py-0.5 rounded-full ${active ? "bg-[#252834] text-zinc-300" : "bg-zinc-100 text-zinc-500"}`}>{inv.status}</span>
                  <span className="text-xs font-bold">$ {inv.amount.toLocaleString()}.00</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section
        className="lg:col-span-7 bg-[#15171D] p-6 text-white flex flex-col justify-between border border-[#232734]"
        style={{ borderRadius: "28px", overflow: "hidden" }}
      >
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b border-[#232633]">
            <div>
              <span className="text- text-gray-400">Invoice details</span>
              <div className="text-xl font-bold mt-1">{selected.id} <span className="text- font-medium text-zinc-400 bg-[#212531] px-2 py-0.5 rounded-full">{selected.status}</span></div>
            </div>
            <div>
              <span className="text- text-gray-400">Company</span>
              <div className="text-base font-bold mt-1">{selected.company} ◆</div>
            </div>
            <div>
              <span className="text- text-gray-400">Customer</span>
              <div className="text-xs font-bold mt-1">{selected.customer}</div>
              <div className="text- text-gray-400">CEO {selected.company} Pvt Ltd</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-6">
            <div className="bg-[#1C1F28] p-4 border border-[#272B38]" style={{ borderRadius: "20px" }}><div className="text-xs font-bold">$ 10,630.80</div><span className="text- text-gray-400">Concept Development</span></div>
            <div className="bg-[#1C1F28] p-4 border border-[#272B38]" style={{ borderRadius: "20px" }}><div className="text-xs font-bold">$ 31,892.40</div><span className="text- text-gray-400">CRM Development</span></div>
            <div className="bg-[#1C1F28] p-4 border border-[#272B38]" style={{ borderRadius: "20px" }}><div className="text-xs font-bold">$ 10,630.80</div><span className="text- text-gray-400">CRM Integration</span></div>
          </div>
        </div>
        <div className="pt-5 border-t border-[#232633] flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6">
            <div><span className="text- text-gray-400 block">Sub Total</span><span className="text-sm font-bold">${selected.amount.toLocaleString()}.00</span></div>
            <div><span className="text- text-gray-400 block">Total</span><span className="text-sm font-bold">${selected.amount.toLocaleString()}.00</span></div>
            <div><span className="text- text-gray-400 block">Balance Due</span><span className="text-sm font-bold">${selected.amount.toLocaleString()}.00</span></div>
          </div>
          <button className="bg-[#B8F500] text-black font-extrabold px-5 py-2.5 rounded-full text-xs">Pay out now</button>
        </div>
      </section>
    </div>
  );
}