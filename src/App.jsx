// src/App.jsx
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AdminLayout from "./admin/AdminLayout";
import AdminOverviewPage from "./admin/AdminOverviewPage";
import AdminUsersPage from "./admin/AdminUsersPage";
import AdminTransactionsPage from "./admin/AdminTransactionsPage";
import AdminBanksPage from "./admin/AdminBanksPage";
import AdminReferralsPage from "./admin/AdminReferralsPage";
import AdminNotificationsPage from "./admin/AdminNotificationsPage";
import AdminSettingsPage from "./admin/AdminSettingsPage";
import AdminLoginPage from "./admin/AdminLoginPage";

// Simple Protected Route for admin
function AdminProtectedRoute({ children }) {
  const isAuthed =
    typeof window !== "undefined" &&
    localStorage.getItem("game1pro_admin_auth") === "true";

  if (!isAuthed) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Login (public) */}
        <Route path="/admin-login" element={<AdminLoginPage />} />

        {/* Admin panel (protected) */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          {/* Dashboard / Overview (default) */}
          <Route index element={<AdminOverviewPage />} />

          {/* Users list / detail */}
          <Route path="users" element={<AdminUsersPage />} />

          {/* Add Fund + Withdraw requests */}
          <Route path="transactions" element={<AdminTransactionsPage />} />

          {/* Saved Banks / Wallets (user-side profile se) */}
          <Route path="banks" element={<AdminBanksPage />} />

          {/* Referrals stats */}
          <Route path="referrals" element={<AdminReferralsPage />} />

          {/* Notifications (send in-app) */}
          <Route path="notifications" element={<AdminNotificationsPage />} />

          {/* Settings: bonus slabs, withdraw note, referral bonus + admin account */}
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>

        {/* Default → admin-login */}
        <Route path="*" element={<Navigate to="/admin-login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
