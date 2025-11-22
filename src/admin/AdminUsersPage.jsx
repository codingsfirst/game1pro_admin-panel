// src/admin/AdminUsersPage.jsx
import React from "react";

const mockUsers = [
  {
    id: "u1",
    username: "Siku Handsome",
    phone: "+92 300 0000000",
    balance: 12500.75,
    withdrawable: 8200.5,
    level: 12,
    referralCode: "SIKU1029",
    status: "ACTIVE",
  },
  {
    id: "u2",
    username: "Ali Gamer",
    phone: "+92 301 1111111",
    balance: 4500,
    withdrawable: 2000,
    level: 4,
    referralCode: "ALIG4567",
    status: "ACTIVE",
  },
  {
    id: "u3",
    username: "Test Blocked",
    phone: "+92 302 2222222",
    balance: 0,
    withdrawable: 0,
    level: 1,
    referralCode: "TEST9999",
    status: "BLOCKED",
  },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg sm:text-xl font-bold mb-1">Users</h1>
        <p className="text-[11px] sm:text-xs text-slate-400">
          View player accounts, balances, referral codes and account status.
        </p>
      </div>

      {/* Filters / search (UI only) */}
      <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] sm:text-xs">
        <div className="flex flex-1 gap-2">
          <input
            type="text"
            placeholder="Search by username / phone / ID"
            className="flex-1 rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-[11px] sm:text-xs text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
          />
        </div>
        <div className="flex gap-2">
          <select className="rounded-2xl border border-slate-700 bg-slate-900/80 px-2 py-2 text-[11px] sm:text-xs text-slate-100 outline-none focus:border-emerald-400">
            <option>All Status</option>
            <option>ACTIVE</option>
            <option>BLOCKED</option>
          </select>
          <button className="rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-[11px] text-slate-200 hover:border-emerald-400">
            Reset
          </button>
        </div>
      </section>

      {/* Users table */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4">
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
          <table className="min-w-full text-[10px] sm:text-xs">
            <thead className="bg-slate-900/80 text-slate-300">
              <tr>
                <th className="px-2 py-2 text-left font-medium">User</th>
                <th className="px-2 py-2 text-left font-medium">Phone</th>
                <th className="px-2 py-2 text-right font-medium">Balance</th>
                <th className="px-2 py-2 text-right font-medium">
                  Withdrawable
                </th>
                <th className="px-2 py-2 text-center font-medium">Level</th>
                <th className="px-2 py-2 text-left font-medium">
                  Referral Code
                </th>
                <th className="px-2 py-2 text-center font-medium">Status</th>
                <th className="px-2 py-2 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((u) => (
                <tr
                  key={u.id}
                  className="border-t border-slate-800/80 hover:bg-slate-900/80"
                >
                  <td className="px-2 py-2 text-slate-100">{u.username}</td>
                  <td className="px-2 py-2 text-slate-300">{u.phone}</td>
                  <td className="px-2 py-2 text-right text-emerald-300">
                    {u.balance.toLocaleString()} PKR
                  </td>
                  <td className="px-2 py-2 text-right text-sky-300">
                    {u.withdrawable.toLocaleString()} PKR
                  </td>
                  <td className="px-2 py-2 text-center text-slate-100">
                    {u.level}
                  </td>
                  <td className="px-2 py-2 text-slate-200">{u.referralCode}</td>
                  <td className="px-2 py-2 text-center">
                    <StatusBadge status={u.status} />
                  </td>
                  <td className="px-2 py-2 text-right">
                    <div className="inline-flex gap-1">
                      <button className="rounded-full px-2 py-1 bg-slate-800 text-[9px] hover:bg-slate-700">
                        View
                      </button>
                      <button className="rounded-full px-2 py-1 bg-amber-500/20 text-amber-100 border border-amber-400/50 text-[9px] hover:bg-amber-500/30">
                        Block
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {mockUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-2 py-3 text-center text-slate-400"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function StatusBadge({ status }) {
  if (status === "ACTIVE") {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-400/60 px-2 py-0.5 text-[9px]">
        ACTIVE
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-rose-500/15 text-rose-200 border border-rose-400/60 px-2 py-0.5 text-[9px]">
      BLOCKED
    </span>
  );
}
