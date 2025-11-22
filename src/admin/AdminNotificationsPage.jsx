// src/admin/AdminNotificationsPage.jsx
import React, { useState } from "react";

const mockNotifications = [
  {
    id: "n1",
    title: "Welcome Bonus Active",
    message: "Get up to 7% extra on deposits today.",
    audience: "All Users",
    type: "INFO",
    createdAt: "2025-11-13 21:10",
  },
  {
    id: "n2",
    title: "Withdraw Delay Notice",
    message: "Due to high traffic, withdrawals may take up to 2 hours.",
    audience: "All Users",
    type: "ALERT",
    createdAt: "2025-11-12 18:40",
  },
];

export default function AdminNotificationsPage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [audience, setAudience] = useState("all");
  const [type, setType] = useState("INFO");

  const handleSend = (e) => {
    e.preventDefault();
    console.log("Notification send (UI only):", {
      title,
      message,
      audience,
      type,
    });
    // TODO: backend call yahan se
    setTitle("");
    setMessage("");
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg sm:text-xl font-bold mb-1">Notifications</h1>
        <p className="text-[11px] sm:text-xs text-slate-400">
          Send in-app notification messages to players (e.g., bonus offers,
          maintenance alerts, withdraw information).
        </p>
      </div>

      {/* Form to create notification */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4 space-y-3 text-[11px] sm:text-sm">
        <h2 className="text-sm sm:text-base font-semibold mb-1">
          Create New Notification
        </h2>

        <form onSubmit={handleSend} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm text-slate-200">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                maxLength={80}
                placeholder="Short heading, e.g. 'New Bonus Live Now'"
                className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm text-slate-200">
                Audience
              </label>
              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
              >
                <option value="all">All Users</option>
                <option value="active24">Active in last 24 hours</option>
                <option value="highrollers">High balance users</option>
                <option value="custom">Custom filter (backend)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm text-slate-200">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
              placeholder="Write the main notification message..."
              className="block w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-50 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 resize-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm text-slate-200">
              Type / Tone
            </label>
            <div className="inline-flex rounded-full bg-slate-900/80 border border-slate-700 p-0.5 text-[10px] sm:text-[11px]">
              {["INFO", "ALERT", "BONUS"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`px-3 py-1 rounded-full font-medium transition ${
                    type === t
                      ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-slate-900 shadow-[0_0_14px_rgba(16,185,129,0.8)]"
                      : "text-slate-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-400 px-4 py-2.5 text-sm sm:text-base font-semibold text-slate-900 shadow-[0_0_22px_rgba(34,197,94,0.7)] hover:brightness-110 active:scale-[0.98] transition"
          >
            Send Notification (UI Only)
          </button>

          <p className="text-[10px] sm:text-[11px] text-slate-400">
            Backend me is form se ek notification document create hoga aur users
            ko push / in-app feed me show hoga.
          </p>
        </form>
      </section>

      {/* Sent notifications list */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4 space-y-2">
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] mb-1">
          <h2 className="text-sm sm:text-base font-semibold">
            Recent Sent Notifications
          </h2>
          <span className="text-slate-400">
            Static sample, connect to DB later
          </span>
        </div>

        <div className="space-y-2 max-h-72 overflow-y-auto pr-1 no-scrollbar">
          {mockNotifications.map((n) => (
            <article
              key={n.id}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2.5 text-[10px] sm:text-[11px]"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-semibold text-slate-100 truncate">
                      {n.title}
                    </h3>
                    <TypeBadge type={n.type} />
                  </div>
                  <p className="text-slate-300">{n.message}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-[9px] text-slate-400">
                    <span>Audience: {n.audience}</span>
                    <span>•</span>
                    <span>{n.createdAt}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
          {mockNotifications.length === 0 && (
            <p className="text-center text-slate-400 text-[10px]">
              No notifications sent yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

function TypeBadge({ type }) {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-[9px] border";
  if (type === "INFO")
    return (
      <span
        className={`${base} bg-sky-500/15 text-sky-200 border-sky-400/60`}
      >
        INFO
      </span>
    );
  if (type === "ALERT")
    return (
      <span
        className={`${base} bg-amber-500/15 text-amber-200 border-amber-400/60`}
      >
        ALERT
      </span>
    );
  if (type === "BONUS")
    return (
      <span
        className={`${base} bg-emerald-500/15 text-emerald-200 border-emerald-400/60`}
      >
        BONUS
      </span>
    );
  return <span className={base}>{type}</span>;
}
