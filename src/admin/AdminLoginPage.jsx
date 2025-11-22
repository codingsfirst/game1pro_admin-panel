// src/admin/AdminLoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@game1pro.com");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Demo login rule:
    // You can change this later to real backend auth
    if (email === "admin@game1pro.com" && password === "admin123") {
      if (remember) {
        localStorage.setItem("game1pro_admin_auth", "true");
        localStorage.setItem("game1pro_admin_email", email);
      } else {
        localStorage.setItem("game1pro_admin_auth", "true");
      }

      navigate("/admin", { replace: true });
    } else {
      setError("Invalid admin email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-4 py-6">
      {/* soft glow background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -left-32 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#020617_0,_#000000_55%,_#000000_100%)] opacity-80" />
      </div>

      <div className="w-full max-w-md">
        {/* logo / title */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-sky-500 to-amber-400 shadow-[0_0_24px_rgba(34,197,94,0.7)] text-sm font-black tracking-tight">
            G1
          </div>
          <div className="mt-2 text-lg font-semibold">Game1Pro Admin</div>
          <div className="text-[11px] text-slate-400">
            Secure access to dashboard controls
          </div>
        </div>

        {/* card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.7)] p-5 sm:p-6">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-amber-100">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" />
              <span>Admin Panel Login</span>
            </div>
          </div>

          {error && (
            <div className="mb-3 text-[11px] rounded-2xl border border-rose-500/60 bg-rose-500/10 px-3 py-2 text-rose-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm text-slate-200">
                Admin Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition"
                placeholder="admin@game1pro.com"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm text-slate-200">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 transition"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between text-[11px] sm:text-xs">
              <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                />
                <span className="text-slate-200">Remember this device</span>
              </label>
              <span className="text-slate-500">
                Default: admin@game1pro.com / admin123
              </span>
            </div>

            <button
              type="submit"
              className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-400 px-4 py-2.5 text-sm sm:text-base font-semibold text-slate-900 shadow-[0_0_25px_rgba(34,197,94,0.7)] hover:brightness-110 active:scale-[0.98] transition"
            >
              Login to Admin Panel
              <span className="inline-block text-lg leading-none">⮞</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
