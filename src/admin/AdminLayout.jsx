
// src/admin/AdminLayout.jsx
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: "📊", exact: true },
  { to: "/admin/users", label: "Users", icon: "👤" },
  { to: "/admin/transactions", label: "Transactions", icon: "💸" },
  { to: "/admin/banks", label: "Saved Banks", icon: "🏦" },
  { to: "/admin/referrals", label: "Referrals", icon: "🎁" },
  { to: "/admin/notifications", label: "Notifications", icon: "🔔" },
  { to: "/admin/settings", label: "Settings", icon: "⚙️" },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex">
      {/* SIDEBAR for desktop */}
      <aside className="hidden md:flex md:flex-col w-60 bg-[#050816] border-r border-slate-800">
        {/* Brand */}
        <div className="flex items-center gap-2 px-4 py-4 border-b border-slate-800">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-sky-500 to-amber-400 shadow-[0_0_18px_rgba(34,197,94,0.7)] text-xs font-black tracking-tight">
            G1
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Game1Pro Admin</div>
            <div className="text-[10px] text-slate-400">
              Control • Monitor • Approve
            </div>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/admin"}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-slate-900 shadow-[0_0_18px_rgba(16,185,129,0.9)]"
                    : "text-slate-200 hover:bg-slate-900/70"
                }`
              }
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-slate-800 px-4 py-3 text-[11px] text-slate-400">
          Logged in as <span className="text-emerald-300">Admin</span>
        </div>
      </aside>

      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="flex-1 bg-black/50 backdrop-blur-sm"
          />
          <div className="w-64 bg-[#050816] border-l border-slate-800 flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 via-sky-500 to-amber-400 text-[11px] font-black">
                  G1
                </div>
                <div className="leading-tight">
                  <div className="text-xs font-semibold">
                    Game1Pro Admin
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Quick Navigation
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-slate-200"
              >
                ✕
              </button>
            </div>

            <nav className="flex-1 px-3 py-3 space-y-1 text-sm overflow-y-auto">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/admin"}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-xl px-3 py-2 transition ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-slate-900 shadow-[0_0_18px_rgba(16,185,129,0.9)]"
                        : "text-slate-200 hover:bg-slate-900/70"
                    }`
                  }
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-slate-800 bg-[#020617]/95 backdrop-blur flex items-center">
          <div className="flex-1 flex items-center justify-between px-4 py-3 max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-2">
              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-700 bg-slate-900/80 text-slate-200"
              >
                ☰
              </button>
              <div>
                <div className="text-xs text-slate-400">Admin Panel</div>
                <div className="text-sm sm:text-base font-semibold">
                  Game1Pro Control Center
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col text-right text-[10px] text-slate-400">
                <span>Environment: Development</span>
                <span>Backend Status: <span className="text-emerald-300">Planned</span></span>
              </div>
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-200 hover:border-emerald-400"
              >
                <span>⏎</span>
                <span>User Site</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-3 sm:px-4 py-4">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
