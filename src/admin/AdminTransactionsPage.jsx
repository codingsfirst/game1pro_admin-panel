// src/admin/AdminTransactionsPage.jsx
import React, { useState } from "react";

const mockTransactions = [
  {
    id: "t1",
    user: "Siku Handsome",
    type: "DEPOSIT",
    amount: 3000,
    method: "jazzcash",
    status: "PENDING",
    createdAt: "2025-11-14 10:25",
  },
  {
    id: "t2",
    user: "Ali Gamer",
    type: "WITHDRAW",
    amount: 5000,
    method: "bank",
    status: "APPROVED",
    createdAt: "2025-11-14 09:10",
  },
  {
    id: "t3",
    user: "Pro Player",
    type: "DEPOSIT",
    amount: 10000,
    method: "binance",
    status: "APPROVED",
    createdAt: "2025-11-13 22:40",
  },
  {
    id: "t4",
    user: "Test User",
    type: "WITHDRAW",
    amount: 2500,
    method: "easypaisa",
    status: "PENDING",
    createdAt: "2025-11-13 20:05",
  },
];

export default function AdminTransactionsPage() {
  const [activeTab, setActiveTab] = useState("ALL"); // ALL | DEPOSIT | WITHDRAW
  const [statusFilter, setStatusFilter] = useState("ALL");

  const filtered = mockTransactions.filter((t) => {
    if (activeTab !== "ALL" && t.type !== activeTab) return false;
    if (statusFilter !== "ALL" && t.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg sm:text-xl font-bold mb-1">Transactions</h1>
        <p className="text-[11px] sm:text-xs text-slate-400">
          Review deposits & withdrawals, approve or reject pending requests.
        </p>
      </div>

      {/* Tabs + filters */}
      <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] sm:text-xs">
        <div className="inline-flex rounded-full bg-slate-900/80 border border-slate-700 p-0.5">
          {["ALL", "DEPOSIT", "WITHDRAW"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-slate-900 shadow-[0_0_14px_rgba(16,185,129,0.8)]"
                  : "text-slate-300"
              }`}
            >
              {tab === "ALL" ? "All" : tab === "DEPOSIT" ? "Deposits" : "Withdraws"}
            </button>
          ))}
        </div>

        <div className="flex gap-2 sm:items-center">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-2xl border border-slate-700 bg-slate-900/80 px-2 py-2 text-[11px] sm:text-xs text-slate-100 outline-none focus:border-emerald-400"
          >
            <option value="ALL">All Status</option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>
          <button
            type="button"
            onClick={() => {
              setActiveTab("ALL");
              setStatusFilter("ALL");
            }}
            className="rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-[11px] text-slate-200 hover:border-emerald-400"
          >
            Reset
          </button>
        </div>
      </section>

      {/* Table */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4 space-y-2">
        <div className="text-[10px] sm:text-[11px] text-slate-400 mb-1">
          Showing {filtered.length} of {mockTransactions.length} transactions
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
          <table className="min-w-full text-[10px] sm:text-xs">
            <thead className="bg-slate-900/80 text-slate-300">
              <tr>
                <th className="px-2 py-2 text-left font-medium">User</th>
                <th className="px-2 py-2 text-left font-medium">Type</th>
                <th className="px-2 py-2 text-left font-medium">Method</th>
                <th className="px-2 py-2 text-right font-medium">Amount</th>
                <th className="px-2 py-2 text-left font-medium">Status</th>
                <th className="px-2 py-2 text-left font-medium">Created</th>
                <th className="px-2 py-2 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t) => (
                <tr
                  key={t.id}
                  className="border-t border-slate-800/80 hover:bg-slate-900/80"
                >
                  <td className="px-2 py-2 text-slate-100">{t.user}</td>
                  <td className="px-2 py-2">
                    <TypePill type={t.type} />
                  </td>
                  <td className="px-2 py-2 text-slate-200">
                    {formatMethod(t.method)}
                  </td>
                  <td className="px-2 py-2 text-right text-emerald-300">
                    {t.amount.toLocaleString()} PKR
                  </td>
                  <td className="px-2 py-2">
                    <StatusPill status={t.status} />
                  </td>
                  <td className="px-2 py-2 text-slate-400">{t.createdAt}</td>
                  <td className="px-2 py-2 text-right">
                    <ActionButtons status={t.status} />
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-2 py-3 text-center text-slate-400"
                  >
                    No transactions found for this filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1">
          Approving deposits will credit user balance (with bonus rule). Approving withdrawals
          will deduct withdrawable balance. Policy: withdrawal processing within{" "}
          <span className="text-emerald-300 font-semibold">2 hours max</span>.
        </p>
      </section>
    </div>
  );
}

function formatMethod(m) {
  if (m === "jazzcash") return "JazzCash";
  if (m === "easypaisa") return "Easypaisa";
  if (m === "sadapay") return "Sadapay";
  if (m === "nayapay") return "NayaPay";
  if (m === "binance") return "Binance (USDT)";
  if (m === "bank") return "Bank Transfer";
  return m;
}

function TypePill({ type }) {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] border";
  if (type === "DEPOSIT")
    return (
      <span className={`${base} bg-emerald-500/15 text-emerald-200 border-emerald-400/60`}>
        DEPOSIT
      </span>
    );
  if (type === "WITHDRAW")
    return (
      <span className={`${base} bg-amber-500/15 text-amber-200 border-amber-400/60`}>
        WITHDRAW
      </span>
    );
  return <span className={base}>{type}</span>;
}

function StatusPill({ status }) {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] border";
  if (status === "PENDING")
    return (
      <span className={`${base} bg-amber-500/10 text-amber-200 border-amber-400/60`}>
        PENDING
      </span>
    );
  if (status === "APPROVED")
    return (
      <span className={`${base} bg-emerald-500/10 text-emerald-200 border-emerald-400/60`}>
        APPROVED
      </span>
    );
  if (status === "REJECTED")
    return (
      <span className={`${base} bg-rose-500/10 text-rose-200 border-rose-400/60`}>
        REJECTED
      </span>
    );
  return <span className={base}>{status}</span>;
}

function ActionButtons({ status }) {
  if (status === "PENDING") {
    return (
      <div className="inline-flex gap-1">
        <button className="rounded-full px-2 py-1 bg-emerald-500/20 text-emerald-100 border border-emerald-400/60 text-[9px] hover:bg-emerald-500/30">
          Approve
        </button>
        <button className="rounded-full px-2 py-1 bg-rose-500/20 text-rose-100 border border-rose-400/60 text-[9px] hover:bg-rose-500/30">
          Reject
        </button>
      </div>
    );
  }
  return (
    <span className="text-[9px] text-slate-400">No action</span>
  );
}
