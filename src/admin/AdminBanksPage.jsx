// src/admin/AdminBanksPage.jsx
import React, { useState } from "react";

const mockBankAccounts = [
  {
    id: "b1",
    userName: "Siku Handsome",
    userId: "G1P-102938",
    bankName: "JazzCash",
    holderName: "Siku A.",
    accountNumber: "0300-****123",
    isDefault: true,
    createdAt: "2025-11-10",
  },
  {
    id: "b2",
    userName: "Ali Gamer",
    userId: "G1P-332211",
    bankName: "Easypaisa",
    holderName: "Ali G.",
    accountNumber: "0311-****456",
    isDefault: false,
    createdAt: "2025-11-11",
  },
  {
    id: "b3",
    userName: "Pro Player",
    userId: "G1P-778899",
    bankName: "Meezan Bank",
    holderName: "Pro Player",
    accountNumber: "PK12-MEEZ-****-789",
    isDefault: true,
    createdAt: "2025-11-09",
  },
];

export default function AdminBanksPage() {
  const [search, setSearch] = useState("");
  const [onlyDefault, setOnlyDefault] = useState(false);

  const filtered = mockBankAccounts.filter((acc) => {
    if (onlyDefault && !acc.isDefault) return false;
    if (!search.trim()) return true;
    const term = search.toLowerCase();
    return (
      acc.userName.toLowerCase().includes(term) ||
      acc.userId.toLowerCase().includes(term) ||
      acc.bankName.toLowerCase().includes(term) ||
      acc.accountNumber.toLowerCase().includes(term)
    );
  });

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg sm:text-xl font-bold mb-1">Saved Banks / Wallets</h1>
        <p className="text-[11px] sm:text-xs text-slate-400">
          These payout accounts are added by users on profile screen. Admin can review which bank or wallet is used for withdrawals.
        </p>
      </div>

      {/* Filters */}
      <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] sm:text-xs">
        <div className="flex flex-1 gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by user, ID, bank or account number"
            className="flex-1 rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-[11px] sm:text-xs text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="inline-flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={onlyDefault}
              onChange={(e) => setOnlyDefault(e.target.checked)}
              className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
            />
            <span className="text-slate-300">Show only default accounts</span>
          </label>
        </div>
      </section>

      {/* Table */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4 space-y-2">
        <div className="text-[10px] sm:text-[11px] text-slate-400">
          Showing {filtered.length} of {mockBankAccounts.length} saved accounts
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
          <table className="min-w-full text-[10px] sm:text-xs">
            <thead className="bg-slate-900/80 text-slate-300">
              <tr>
                <th className="px-2 py-2 text-left font-medium">User</th>
                <th className="px-2 py-2 text-left font-medium">User ID</th>
                <th className="px-2 py-2 text-left font-medium">Bank / Wallet</th>
                <th className="px-2 py-2 text-left font-medium">Holder Name</th>
                <th className="px-2 py-2 text-left font-medium">Account Number</th>
                <th className="px-2 py-2 text-center font-medium">Default</th>
                <th className="px-2 py-2 text-left font-medium">Created</th>
                <th className="px-2 py-2 text-right font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((acc) => (
                <tr
                  key={acc.id}
                  className="border-t border-slate-800/80 hover:bg-slate-900/80"
                >
                  <td className="px-2 py-2 text-slate-100">{acc.userName}</td>
                  <td className="px-2 py-2 text-slate-300">{acc.userId}</td>
                  <td className="px-2 py-2 text-slate-200">{acc.bankName}</td>
                  <td className="px-2 py-2 text-slate-200">{acc.holderName}</td>
                  <td className="px-2 py-2 text-slate-300">
                    {acc.accountNumber}
                  </td>
                  <td className="px-2 py-2 text-center">
                    {acc.isDefault ? (
                      <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-400/60 px-2 py-0.5 text-[9px]">
                        DEFAULT
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center rounded-full bg-slate-800/80 text-slate-200 border border-slate-700 px-2 py-0.5 text-[9px]">
                        Secondary
                      </span>
                    )}
                  </td>
                  <td className="px-2 py-2 text-slate-400">{acc.createdAt}</td>
                  <td className="px-2 py-2 text-right text-[9px] text-slate-400">
                    User-side controlled
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-2 py-3 text-center text-slate-400"
                  >
                    No saved payout accounts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1">
          These accounts are used when processing withdrawals. Make sure details look valid before sending any payment from your side.
        </p>
      </section>
    </div>
  );
}
