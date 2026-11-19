"use client";
import { useState } from "react";
import { channels, statuses, transactions } from "../data/transactions";
import FilterBar from "./FilterBar";
import type { StatusFilter } from "./FilterBar";
import TransactionsWorkspace from "./TransactionsWorkspace";

const merchants = Array.from(new Set(transactions.map((t) => t.merchant))).sort();

export default function Transactions() {
  const [status, setStatus] = useState<StatusFilter>("All");
  const [merchant, setMerchant] = useState("all");
  const [channel, setChannel] = useState("all");
  const [selectedId, setSelectedId] = useState("");

  // Merchant and channel narrow the list first. The tab counts come from that narrowed list.
  const base = transactions.filter(
    (t) => (merchant === "all" || t.merchant === merchant) && (channel === "all" || t.channel === channel),
  );

  const counts = { All: base.length } as Record<StatusFilter, number>;
  for (const s of statuses) counts[s] = base.filter((t) => t.status === s).length;

  const items = status === "All" ? base : base.filter((t) => t.status === status);

  // If the selected transaction was filtered out, fall back to the first one in the list.
  const selected = items.find((t) => t.id === selectedId) ?? items[0];

  return (
    <>
      <FilterBar
        counts={counts}
        status={status}
        onStatusChange={setStatus}
        merchants={merchants}
        merchant={merchant}
        onMerchantChange={setMerchant}
        channels={channels}
        channel={channel}
        onChannelChange={setChannel}
      />
      <TransactionsWorkspace items={items} selected={selected} onSelect={setSelectedId} />
    </>
  );
}