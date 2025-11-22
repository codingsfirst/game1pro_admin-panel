// src/admin/AdminReferralsPage.jsx
import React from "react";

const referralStats = {
  totalReferrals: 142,
  totalBonusPaid: 14200, // assuming 100 per referral
  activeReferrers: 27,
};

const mockReferrers = [
  {
    id: "r1",
    userName: "Siku Handsome",
    userId: "G1P-102938",
    referralCode: "SIKU1029",
    totalReferrals: 25,
    totalBonus: 2500,
    lastReferral: "2025-11-13",
  },
  {
    id: "r2",
    userName: "Ali Gamer",
    userId: "G1P-332211",
    referralCode: "ALIG4567",
    totalReferrals: 10,
    totalBonus: 1000,
    lastReferral: "2025-11-12",
  },
  {
    id: "r3",
    userName: "Pro Player",
    userId: "G1P-778899",
    referralCode: "PRO777",
    totalReferrals: 5,
    totalBonus: 500,
    lastReferral: "2025-11-10",
  },
];

export default function AdminReferralsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg sm:text-xl font-bold mb-1">Referrals & Bonus</h1>
        <p className="text-[11px] sm:text-xs text-slate-400">
          Track how many referrals players have generated and how much referral
          bonus (100 PKR per referral) has been given.
        </p>
      </div>

      {/* Top stats */}
      <section className="grid grid-cols-3 gap-2 sm:gap-3 text-[11px] sm:text-xs">
        <StatCard
          label="Total Referrals"
          value={referralStats.totalReferrals.toLocaleString()}
          sub="Users joined via code"
          tone="emerald"
        />
        <StatCard
          label="Total Bonus Paid"
          value={`${referralStats.totalBonusPaid.toLocaleString()} PKR`}
          sub="100 PKR per referral"
          tone="sky"
        />
        <StatCard
          label="Active Referrers"
          value={referralStats.activeReferrers.toLocaleString()}
          sub="Users with 1+ referral"
          tone="violet"
        />
      </section>

      {/* Info banner */}
      <section className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-3 sm:px-4 sm:py-3 text-[10px] sm:text-[11px] text-emerald-100 space-y-1">
        <div className="font-semibold text-emerald-200">
          Referral Rule (UI note)
        </div>
        <p>
          Every time a user shares their referral ID and a new player joins +
          starts using the platform, the referrer gets{" "}
          <span className="font-semibold">100 PKR</span> as referral bonus
          (according to your requirement).
        </p>
        <p className="text-emerald-100/80">
          Actual logic of &quot;valid referral&quot; will be implemented in
          backend (e.g. first deposit, minimum play, etc.). This screen is to
          monitor stats from admin side.
        </p>
      </section>

      {/* Table */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4">
        <div className="flex items-center justify-between mb-2 text-[10px] sm:text-[11px]">
          <h2 className="text-sm sm:text-base font-semibold">Top Referrers</h2>
          <span className="text-slate-400">Sample data • Backend se ayega</span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
          <table className="min-w-full text-[10px] sm:text-xs">
            <thead className="bg-slate-900/80 text-slate-300">
              <tr>
                <th className="px-2 py-2 text-left font-medium">User</th>
                <th className="px-2 py-2 text-left font-medium">User ID</th>
                <th className="px-2 py-2 text-left font-medium">Referral Code</th>
                <th className="px-2 py-2 text-right font-medium">
                  Total Referrals
                </th>
                <th className="px-2 py-2 text-right font-medium">
                  Bonus Given (PKR)
                </th>
                <th className="px-2 py-2 text-left font-medium">Last Referral</th>
              </tr>
            </thead>
            <tbody>
              {mockReferrers.map((r) => (
                <tr
                  key={r.id}
                  className="border-t border-slate-800/80 hover:bg-slate-900/80"
                >
                  <td className="px-2 py-2 text-slate-100">{r.userName}</td>
                  <td className="px-2 py-2 text-slate-300">{r.userId}</td>
                  <td className="px-2 py-2 text-emerald-300">
                    {r.referralCode}
                  </td>
                  <td className="px-2 py-2 text-right text-slate-100">
                    {r.totalReferrals}
                  </td>
                  <td className="px-2 py-2 text-right text-emerald-300">
                    {r.totalBonus.toLocaleString()}
                  </td>
                  <td className="px-2 py-2 text-slate-400">{r.lastReferral}</td>
                </tr>
              ))}
              {mockReferrers.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-2 py-3 text-center text-slate-400"
                  >
                    No referrers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1">
          In backend, each successful referral will create a record (who referred, who joined, bonus amount, date). This page will just read from that collection.
        </p>
      </section>
    </div>
  );
}

function StatCard({ label, value, sub, tone }) {
  let classes =
    "border-slate-700 bg-slate-900/80 text-slate-100 shadow-[0_0_12px_rgba(15,23,42,0.8)]";
  if (tone === "emerald")
    classes =
      "border-emerald-500/50 bg-emerald-500/10 text-emerald-100 shadow-[0_0_14px_rgba(16,185,129,0.7)]";
  if (tone === "sky")
    classes =
      "border-sky-500/50 bg-sky-500/10 text-sky-100 shadow-[0_0_14px_rgba(56,189,248,0.7)]";
  if (tone === "violet")
    classes =
      "border-violet-500/50 bg-violet-500/10 text-violet-100 shadow-[0_0_14px_rgba(139,92,246,0.7)]";

  return (
    <div
      className={`rounded-2xl border px-3 py-2 sm:px-4 sm:py-3 flex flex-col gap-0.5 ${classes}`}
    >
      <span className="text-[10px] sm:text-[11px] opacity-90">{label}</span>
      <span className="text-sm sm:text-base font-bold">{value}</span>
      <span className="text-[9px] sm:text-[10px] opacity-80">{sub}</span>
    </div>
  );
}
