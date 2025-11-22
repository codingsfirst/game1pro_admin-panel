// src/admin/AdminDashboard.jsx
import React from "react";

const stats = {
  totalUsers: 325,
  activeToday: 87,
  totalDeposits: 452300,
  totalWithdraws: 291400,
  pendingDeposits: 3,
  pendingWithdraws: 2,
};

const recentTransactions = [
  {
    id: 1,
    user: "Siku Handsome",
    type: "DEPOSIT",
    method: "JazzCash",
    amount: 3000,
    status: "PENDING",
    createdAt: "2025-11-14 10:25",
  },
  {
    id: 2,
    user: "Ali Gamer",
    type: "WITHDRAW",
    method: "Bank",
    amount: 5000,
    status: "APPROVED",
    createdAt: "2025-11-14 09:10",
  },
  {
    id: 3,
    user: "Pro Player",
    type: "DEPOSIT",
    method: "Binance",
    amount: 10000,
    status: "APPROVED",
    createdAt: "2025-11-13 22:40",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-4">
      {/* Top heading */}
      <div>
        <h1 className="text-lg sm:text-xl font-bold mb-1">
          Dashboard Overview
        </h1>
        <p className="text-[11px] sm:text-xs text-slate-400">
          Monitor Game1Pro activity — users, deposits, withdrawals & pending
          approvals.
        </p>
      </div>

      {/* Stat cards */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        <StatCard
          label="Total Users"
          value={stats.totalUsers.toLocaleString()}
          sub="Registered"
          tone="primary"
        />
        <StatCard
          label="Active Today"
          value={stats.activeToday.toLocaleString()}
          sub="Last 24h"
          tone="success"
        />
        <StatCard
          label="Total Deposits"
          value={stats.totalDeposits.toLocaleString() + " PKR"}
          sub="All time"
          tone="sky"
        />
        <StatCard
          label="Total Withdraws"
          value={stats.totalWithdraws.toLocaleString() + " PKR"}
          sub="All time"
          tone="amber"
        />
      </section>

      {/* Pending summary */}
      <section className="grid grid-cols-2 gap-2 sm:gap-3 text-[11px] sm:text-xs">
        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 flex items-center justify-between">
          <div>
            <div className="font-semibold text-emerald-100">
              Pending Deposits
            </div>
            <div className="text-emerald-200/80 text-[10px]">
              Approve to credit user balance.
            </div>
          </div>
          <div className="text-lg sm:text-xl font-bold text-emerald-200">
            {stats.pendingDeposits}
          </div>
        </div>
        <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 px-3 py-2 flex items-center justify-between">
          <div>
            <div className="font-semibold text-amber-100">
              Pending Withdrawals
            </div>
            <div className="text-amber-200/80 text-[10px]">
              User is waiting, max 2 hours policy.
            </div>
          </div>
          <div className="text-lg sm:text-xl font-bold text-amber-200">
            {stats.pendingWithdraws}
          </div>
        </div>
      </section>

      {/* Recent transactions */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm sm:text-base font-semibold">
            Recent Transactions
          </h2>
          <span className="text-[10px] sm:text-[11px] text-slate-400">
            Quick view of last activity
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
          <table className="min-w-full text-[10px] sm:text-xs">
            <thead className="bg-slate-900/80 text-slate-300">
              <tr>
                <th className="px-2 py-2 text-left font-medium">User</th>
                <th className="px-2 py-2 text-left font-medium">Type</th>
                <th className="px-2 py-2 text-left font-medium">Method</th>
                <th className="px-2 py-2 text-left font-medium">Amount</th>
                <th className="px-2 py-2 text-left font-medium">Status</th>
                <th className="px-2 py-2 text-left font-medium">Created</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((t) => (
                <tr
                  key={t.id}
                  className="border-t border-slate-800/80 hover:bg-slate-900/80"
                >
                  <td className="px-2 py-2 text-slate-100">{t.user}</td>
                  <td className="px-2 py-2">
                    <TypePill type={t.type} />
                  </td>
                  <td className="px-2 py-2 text-slate-200">{t.method}</td>
                  <td className="px-2 py-2 text-emerald-300">
                    {t.amount.toLocaleString()} PKR
                  </td>
                  <td className="px-2 py-2">
                    <StatusPill status={t.status} />
                  </td>
                  <td className="px-2 py-2 text-slate-400">{t.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value, sub, tone }) {
  let bg = "bg-slate-900/80 border-slate-700";
  if (tone === "primary")
    bg = "bg-violet-500/10 border-violet-500/50 text-violet-100";
  if (tone === "success")
    bg = "bg-emerald-500/10 border-emerald-500/50 text-emerald-100";
  if (tone === "sky")
    bg = "bg-sky-500/10 border-sky-500/50 text-sky-100";
  if (tone === "amber")
    bg = "bg-amber-500/10 border-amber-500/50 text-amber-100";

  return (
    <div
      className={`rounded-2xl border px-3 py-2 sm:px-4 sm:py-3 flex flex-col gap-0.5 shadow-[0_0_14px_rgba(15,23,42,0.8)] ${bg}`}
    >
      <span className="text-[10px] sm:text-[11px] opacity-90">{label}</span>
      <span className="text-sm sm:text-base font-bold">{value}</span>
      <span className="text-[9px] sm:text-[10px] opacity-80">{sub}</span>
    </div>
  );
}

function TypePill({ type }) {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] border";
  if (type === "DEPOSIT")
    return (
      <span className={`${base} bg-emerald-500/10 text-emerald-200 border-emerald-400/60`}>
        DEPOSIT
      </span>
    );
  if (type === "WITHDRAW")
    return (
      <span className={`${base} bg-amber-500/10 text-amber-200 border-amber-400/60`}>
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
