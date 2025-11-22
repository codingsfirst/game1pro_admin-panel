// src/admin/AdminSettingsPage.jsx
import { useState } from "react";

function AdminSettingsPage() {
  // Fake state for bonus slabs / withdraw / referral
  const [bonus100to500, setBonus100to500] = useState(3);
  const [bonus1000, setBonus1000] = useState(5);
  const [bonus3000to10000, setBonus3000to10000] = useState(7);
  const [withdrawNote, setWithdrawNote] = useState(
    "Withdraw requests are processed within 2 hours (max)."
  );
  const [referralBonus, setReferralBonus] = useState(100);

  // Admin account settings
  const initialEmail =
    typeof window !== "undefined"
      ? localStorage.getItem("game1pro_admin_email") || "admin@game1pro.com"
      : "admin@game1pro.com";

  const [adminEmail, setAdminEmail] = useState(initialEmail);
  const [currentAdminPassword, setCurrentAdminPassword] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");
  const [confirmAdminPassword, setConfirmAdminPassword] = useState("");
  const [accountMessage, setAccountMessage] = useState(null);

  const handleSystemSave = (e) => {
    e.preventDefault();
    console.log("System settings save:", {
      bonus100to500,
      bonus1000,
      bonus3000to10000,
      withdrawNote,
      referralBonus,
    });
    // TODO: backend API
  };

  const handleAdminAccountSave = (e) => {
    e.preventDefault();
    setAccountMessage(null);

    if (!adminEmail) {
      setAccountMessage({
        type: "error",
        text: "Admin email cannot be empty.",
      });
      return;
    }

    if (newAdminPassword || confirmAdminPassword || currentAdminPassword) {
      if (!currentAdminPassword) {
        setAccountMessage({
          type: "error",
          text: "Please enter your current password.",
        });
        return;
      }
      if (newAdminPassword.length < 6) {
        setAccountMessage({
          type: "error",
          text: "New password should be at least 6 characters.",
        });
        return;
      }
      if (newAdminPassword !== confirmAdminPassword) {
        setAccountMessage({
          type: "error",
          text: "New password and confirm password do not match.",
        });
        return;
      }
    }

    // Demo: just log + save email to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("game1pro_admin_email", adminEmail);
    }

    console.log("Admin account update:", {
      adminEmail,
      currentAdminPassword,
      newAdminPassword,
    });

    setAccountMessage({
      type: "success",
      text: "Admin email / password settings updated (UI only, backend pending).",
    });

    setCurrentAdminPassword("");
    setNewAdminPassword("");
    setConfirmAdminPassword("");
  };

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
      {/* PAGE TITLE */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-lg sm:text-xl font-semibold text-white">
            Settings
          </h1>
          <p className="text-[11px] sm:text-xs text-slate-400">
            Control Game1Pro system rules and admin account details.
          </p>
        </div>
      </header>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        {/* LEFT: Admin Account Settings */}
        <section className="lg:col-span-1 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-[0_0_24px_rgba(15,23,42,0.8)]">
            <h2 className="text-sm sm:text-base font-semibold text-white mb-1">
              Admin Account Settings
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-400 mb-3">
              Update admin email and login password for Game1Pro dashboard.
            </p>

            {accountMessage && (
              <div
                className={`mb-3 text-[11px] rounded-2xl px-3 py-2 border ${
                  accountMessage.type === "success"
                    ? "bg-emerald-500/10 border-emerald-400/70 text-emerald-100"
                    : "bg-rose-500/10 border-rose-400/70 text-rose-100"
                }`}
              >
                {accountMessage.text}
              </div>
            )}

            <form onSubmit={handleAdminAccountSave} className="space-y-3">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm text-slate-200">
                  Admin Email
                </label>
                <input
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition"
                  placeholder="admin@game1pro.com"
                  required
                />
                <p className="text-[10px] text-slate-500">
                  This email can be used as login identity and for alerts.
                </p>
              </div>

              {/* Passwords */}
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm text-slate-200">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={currentAdminPassword}
                    onChange={(e) => setCurrentAdminPassword(e.target.value)}
                    className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition"
                    placeholder="Enter current password"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm text-slate-200">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={newAdminPassword}
                    onChange={(e) => setNewAdminPassword(e.target.value)}
                    className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm text-slate-200">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmAdminPassword}
                    onChange={(e) => setConfirmAdminPassword(e.target.value)}
                    className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition"
                    placeholder="Re-enter new password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-400 px-4 py-2.5 text-sm sm:text-base font-semibold text-slate-900 shadow-[0_0_22px_rgba(34,197,94,0.7)] hover:brightness-110 active:scale-[0.98] transition"
              >
                Save Admin Account
              </button>

              <p className="text-[10px] text-slate-500 mt-1">
                Backend integration will validate current password and store the
                new one securely (hashing).
              </p>
            </form>
          </div>
        </section>

        {/* RIGHT: System Settings */}
        <section className="lg:col-span-2 space-y-4">
          {/* Bonus slabs */}
          <form
            onSubmit={handleSystemSave}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 space-y-4 shadow-[0_0_24px_rgba(15,23,42,0.8)]"
          >
            <h2 className="text-sm sm:text-base font-semibold text-white">
              Deposit Bonus & System Rules
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm text-slate-200">
                  100 – 500 PKR Bonus (%)
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={bonus100to500}
                  onChange={(e) => setBonus100to500(Number(e.target.value))}
                  className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition"
                />
                <p className="text-[10px] text-slate-500">
                  Currently using {bonus100to500}% extra on 100, 250, 500 PKR.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm text-slate-200">
                  1,000 PKR Bonus (%)
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={bonus1000}
                  onChange={(e) => setBonus1000(Number(e.target.value))}
                  className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition"
                />
                <p className="text-[10px] text-slate-500">
                  Currently using {bonus1000}% extra on 1,000 PKR.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm text-slate-200">
                  3,000 – 10,000 PKR Bonus (%)
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={bonus3000to10000}
                  onChange={(e) =>
                    setBonus3000to10000(Number(e.target.value))
                  }
                  className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition"
                />
                <p className="text-[10px] text-slate-500">
                  Currently using {bonus3000to10000}% extra on 3,000 & 10,000
                  PKR.
                </p>
              </div>
            </div>

            {/* Withdraw note */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm text-slate-200">
                Withdraw Note (visible on help / about / add balance)
              </label>
              <textarea
                rows={3}
                value={withdrawNote}
                onChange={(e) => setWithdrawNote(e.target.value)}
                className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition resize-none"
              />
              <p className="text-[10px] text-slate-500">
                Example:{" "}
                <span className="italic">
                  Withdraw requests are processed within 2 hours (max).
                </span>
              </p>
            </div>

            {/* Referral bonus */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm text-slate-200">
                Referral Bonus (PKR)
              </label>
              <input
                type="number"
                min={0}
                value={referralBonus}
                onChange={(e) => setReferralBonus(Number(e.target.value))}
                className="block w-full max-w-xs rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition"
              />
              <p className="text-[10px] text-slate-500">
                Currently set to {referralBonus} PKR per valid referral
                (mentioned on Help / About).
              </p>
            </div>

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-400 px-4 py-2.5 text-sm sm:text-base font-semibold text-slate-900 shadow-[0_0_22px_rgba(56,189,248,0.7)] hover:brightness-110 active:scale-[0.98] transition"
            >
              Save System Settings
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default AdminSettingsPage;
