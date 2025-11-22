// src/admin/AdminOverviewPage.jsx
import React from "react";

const mockStats = {
  totalUsers: 1284,
  activeToday: 213,
  totalBalance: 945230,
  withdrawPending: 7,
  withdrawCompletedToday: 32,
  addFundToday: 54,
};

const recentDeposits = [
  {
    id: 1,
    userId: "G1P-102938",
    name: "Siku Handsome",
    amount: 3000,
    method: "JazzCash",
    time: "10 min ago",
    status: "Completed",
  },
  {
    id: 2,
    userId: "G1P-102745",
    name: "Ali Raza",
    amount: 1000,
    method: "Easypaisa",
    time: "25 min ago",
    status: "Completed",
  },
  {
    id: 3,
    userId: "G1P-102221",
    name: "Sara Khan",
    amount: 500,
    method: "Sadapay",
    time: "1 hour ago",
    status: "Pending",
  },
];

const recentWithdraws = [
  {
    id: 1,
    userId: "G1P-102938",
    name: "Siku Handsome",
    amount: 2500,
    method: "JazzCash",
    time: "30 min ago",
    status: "Completed",
  },
  {
    id: 2,
    userId: "G1P-102111",
    name: "Hamza Ali",
    amount: 1500,
    method: "Meezan Bank",
    time: "2 hours ago",
    status: "Pending",
  },
];

const topReferrals = [
  { id: 1, userId: "G1P-100001", name: "Ali King", refs: 18, bonus: 1800 },
  { id: 2, userId: "G1P-100045", name: "Pro Gamer", refs: 12, bonus: 1200 },
  { id: 3, userId: "G1P-100078", name: "Lucky Star", refs: 9, bonus: 900 },
];

function AdminOverviewPage() {
  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
      {/* HEADER */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-lg sm:text-xl font-semibold text-white">
            Overview
          </h1>
          <p className="text-[11px] sm:text-xs text-slate-400">
            Quick snapshot of Game1Pro users, balance, and transactions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px]">
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-2.5 py-1 text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live data: UI mock (backend pending)
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-slate-300">
            Game1Pro Admin Panel
          </span>
        </div>
      </header>

      {/* TOP STATS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
        <StatCard
          label="Total Users"
          value={mockStats.totalUsers.toLocaleString()}
          sub="Registered on platform"
          tone="primary"
        />
        <StatCard
          label="Active Today"
          value={mockStats.activeToday.toLocaleString()}
          sub="Logged in last 24h"
          tone="green"
        />
        <StatCard
          label="Total Balance (PKR)"
          value={mockStats.totalBalance.toLocaleString()}
          sub="Sum of user wallet balances"
          tone="blue"
        />
        <StatCard
          label="Withdraw Pending"
          value={mockStats.withdrawPending.toLocaleString()}
          sub="Requests awaiting approval"
          tone="amber"
        />
      </section>

      {/* MIDDLE GRID: Left = Transaction summary, Right = simple chart placeholder */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        {/* LEFT: Transaction summary cards */}
        <div className="lg:col-span-2 space-y-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4 shadow-[0_0_24px_rgba(15,23,42,0.8)]">
            <h2 className="text-sm sm:text-base font-semibold text-white mb-2">
              Today’s Flow (Last 24h)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] sm:text-xs">
              <MiniStat
                label="Add Fund Requests"
                value={mockStats.addFundToday}
                sub="Created today"
                tone="green"
              />
              <MiniStat
                label="Withdraw Completed"
                value={mockStats.withdrawCompletedToday}
                sub="Paid today"
                tone="blue"
              />
              <MiniStat
                label="Withdraw Pending"
                value={mockStats.withdrawPending}
                sub="Waiting review"
                tone="amber"
              />
            </div>
          </div>

          {/* Recent deposits + withdraws side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Recent deposits */}
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-3.5 sm:p-4 text-[11px] sm:text-xs shadow-[0_0_18px_rgba(16,185,129,0.5)]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-emerald-100">
                  Recent Add Funds
                </h3>
                <span className="rounded-full bg-emerald-500/20 border border-emerald-400/60 px-2 py-0.5 text-[10px] text-emerald-100">
                  Latest 3
                </span>
              </div>

              <div className="space-y-1.5">
                {recentDeposits.map((row) => (
                  <div
                    key={row.id}
                    className="rounded-2xl bg-slate-950/70 border border-emerald-500/30 px-2.5 py-1.5 flex flex-col gap-0.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-emerald-100 truncate">
                        {row.name}
                      </span>
                      <span className="text-emerald-300 font-semibold">
                        {row.amount.toLocaleString()} PKR
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-[10px]">
                      <span className="text-emerald-200/90">
                        {row.method} • {row.userId}
                      </span>
                      <span className="text-emerald-100/80">{row.time}</span>
                    </div>
                    <span className="mt-0.5 inline-flex w-fit items-center rounded-full bg-emerald-500/15 border border-emerald-400/60 px-1.5 py-0.5 text-[9px] text-emerald-100">
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent withdraws */}
            <div className="rounded-2xl border border-sky-500/40 bg-sky-500/5 p-3.5 sm:p-4 text-[11px] sm:text-xs shadow-[0_0_18px_rgba(56,189,248,0.5)]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sky-100">
                  Recent Withdrawals
                </h3>
                <span className="rounded-full bg-sky-500/20 border border-sky-400/60 px-2 py-0.5 text-[10px] text-sky-100">
                  Latest 2
                </span>
              </div>

              <div className="space-y-1.5">
                {recentWithdraws.map((row) => (
                  <div
                    key={row.id}
                    className="rounded-2xl bg-slate-950/70 border border-sky-500/30 px-2.5 py-1.5 flex flex-col gap-0.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-sky-100 truncate">
                        {row.name}
                      </span>
                      <span className="text-sky-300 font-semibold">
                        {row.amount.toLocaleString()} PKR
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-[10px]">
                      <span className="text-sky-200/90">
                        {row.method} • {row.userId}
                      </span>
                      <span className="text-sky-100/80">{row.time}</span>
                    </div>
                    <StatusPill status={row.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Simple chart / activity placeholder */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4 shadow-[0_0_24px_rgba(15,23,42,0.8)] flex flex-col justify-between">
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-white mb-2">
              Weekly Activity Snapshot
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-400 mb-3">
              Simple placeholder to show how add fund and withdraw trends may be
              visualized. You can replace this with a real chart library later.
            </p>
          </div>

          {/* Fake "chart" bars */}
          <div className="mt-1 flex-1 flex flex-col justify-end gap-1.5">
            {[
              { label: "Mon", add: 14, wd: 6 },
              { label: "Tue", add: 18, wd: 8 },
              { label: "Wed", add: 12, wd: 5 },
              { label: "Thu", add: 20, wd: 9 },
              { label: "Fri", add: 24, wd: 11 },
              { label: "Sat", add: 16, wd: 7 },
              { label: "Sun", add: 10, wd: 4 },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-2">
                <div className="w-8 text-[10px] text-slate-400">{d.label}</div>
                <div className="flex-1 flex items-center gap-1">
                  <div
                    className="h-2 rounded-full bg-emerald-500/70"
                    style={{ width: `${d.add * 4}%` }}
                  />
                  <div
                    className="h-2 rounded-full bg-sky-500/80"
                    style={{ width: `${d.wd * 4}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-4 rounded-full bg-emerald-500/70" />
                Add Funds
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-4 rounded-full bg-sky-500/80" />
                Withdraw
              </span>
            </div>
            <span>Mock data – replace with real stats later</span>
          </div>
        </div>
      </section>

      {/* BOTTOM: Top referrals */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4 shadow-[0_0_24px_rgba(15,23,42,0.8)]">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm sm:text-base font-semibold text-white">
            Top Referral Players
          </h2>
          <span className="text-[10px] sm:text-[11px] text-slate-400">
            Showing top 3 by referral count
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70">
          <table className="min-w-full text-[10px] sm:text-xs">
            <thead className="bg-slate-900/80 text-slate-300">
              <tr>
                <th className="px-2 py-2 text-left font-medium">Player</th>
                <th className="px-2 py-2 text-left font-medium">User ID</th>
                <th className="px-2 py-2 text-left font-medium">
                  Total Referrals
                </th>
                <th className="px-2 py-2 text-left font-medium">
                  Earned Bonus (PKR)
                </th>
              </tr>
            </thead>
            <tbody>
              {topReferrals.map((r) => (
                <tr
                  key={r.id}
                  className="border-t border-slate-800/80 hover:bg-slate-900/80"
                >
                  <td className="px-2 py-2 text-slate-100">{r.name}</td>
                  <td className="px-2 py-2 text-slate-300">{r.userId}</td>
                  <td className="px-2 py-2 text-emerald-300 font-semibold">
                    {r.refs}
                  </td>
                  <td className="px-2 py-2 text-emerald-200">
                    {r.bonus.toLocaleString()} PKR
                  </td>
                </tr>
              ))}
              {topReferrals.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-2 py-3 text-center text-slate-400"
                  >
                    No referral data yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-2 text-[10px] sm:text-[11px] text-slate-400">
          Referral logic is already defined in Help / About: players get 100 PKR
          per valid referral (configurable via Settings).
        </p>
      </section>
    </div>
  );
}

/* Helpers */

function StatCard({ label, value, sub, tone }) {
  let border = "border-slate-800";
  let bg = "bg-slate-900/80";
  let glow = "shadow-[0_0_18px_rgba(15,23,42,0.8)]";

  if (tone === "primary") {
    border = "border-amber-500/40";
    bg = "bg-gradient-to-br from-slate-900 via-slate-900 to-amber-900/40";
    glow = "shadow-[0_0_20px_rgba(245,158,11,0.5)]";
  } else if (tone === "green") {
    border = "border-emerald-500/50";
    bg = "bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-900/50";
    glow = "shadow-[0_0_20px_rgba(16,185,129,0.5)]";
  } else if (tone === "blue") {
    border = "border-sky-500/50";
    bg = "bg-gradient-to-br from-slate-900 via-slate-900 to-sky-900/50";
    glow = "shadow-[0_0_20px_rgba(56,189,248,0.5)]";
  } else if (tone === "amber") {
    border = "border-amber-500/50";
    bg = "bg-gradient-to-br from-slate-900 via-slate-900 to-amber-900/50";
    glow = "shadow-[0_0_20px_rgba(245,158,11,0.5)]";
  }

  return (
    <div
      className={`rounded-2xl border ${border} ${bg} ${glow} p-3.5 sm:p-4 flex flex-col gap-1`}
    >
      <span className="text-[11px] sm:text-xs text-slate-300">{label}</span>
      <span className="text-base sm:text-lg font-semibold text-slate-50">
        {value}
      </span>
      <span className="text-[10px] sm:text-[11px] text-slate-400">{sub}</span>
    </div>
  );
}

function MiniStat({ label, value, sub, tone }) {
  let color = "border-slate-700 bg-slate-950/70 text-slate-200";
  if (tone === "green")
    color = "border-emerald-500/40 bg-emerald-500/10 text-emerald-100";
  if (tone === "blue")
    color = "border-sky-500/40 bg-sky-500/10 text-sky-100";
  if (tone === "amber")
    color = "border-amber-500/40 bg-amber-500/10 text-amber-100";

  return (
    <div
      className={`rounded-2xl border ${color} px-3 py-2 flex flex-col gap-0.5`}
    >
      <span className="text-[10px] sm:text-[11px]">{label}</span>
      <span className="text-sm sm:text-base font-semibold">{value}</span>
      <span className="text-[10px] text-slate-300/80">{sub}</span>
    </div>
  );
}

function StatusPill({ status }) {
  let cls =
    "bg-slate-800 text-slate-200 border border-slate-700 text-[9px] px-2 py-0.5 rounded-full inline-flex items-center justify-center";

  if (status === "Completed") {
    cls =
      "bg-emerald-500/15 text-emerald-100 border border-emerald-400/60 text-[9px] px-2 py-0.5 rounded-full inline-flex items-center justify-center";
  } else if (status === "Pending") {
    cls =
      "bg-amber-500/15 text-amber-100 border border-amber-400/60 text-[9px] px-2 py-0.5 rounded-full inline-flex items-center justify-center";
  }

  return <span className={cls}>{status}</span>;
}

export default AdminOverviewPage;
