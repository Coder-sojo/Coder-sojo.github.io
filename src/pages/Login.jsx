import { useState } from "react";
import { copy } from "../utils/i18n";

export default function Login({ language, onAuth }) {
  const t = copy[language];
  const [roleTab, setRoleTab] = useState("citizen");
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const roleLabel = roleTab === "citizen" ? t.citizen : t.admin;

  const submit = (event) => {
    event.preventDefault();
    onAuth({
      role: roleTab,
      mode,
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      password: form.password
    });
  };

  return (
    <div className="page-shell">
      <div className="auth-panel glass">
        <h1>{t.appName}</h1>
        <p className="muted">Civic issue reporting and resolution platform.</p>

        <div className="segmented">
          <button className={roleTab === "citizen" ? "active" : ""} onClick={() => setRoleTab("citizen")}>
            {t.citizen}
          </button>
          <button className={roleTab === "admin" ? "active" : ""} onClick={() => setRoleTab("admin")}>
            {t.admin}
          </button>
        </div>

        <div className="segmented mode">
          <button className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>
            Login
          </button>
          <button className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")}>
            Signup
          </button>
        </div>

        <form className="auth-form" onSubmit={submit}>
          {mode === "signup" && (
            <label>
              Name
              <input
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                required
              />
            </label>
          )}
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              minLength={6}
              value={form.password}
              onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
              required
            />
          </label>
          <button className="btn-primary" type="submit">
            {mode === "login" ? `Login as ${roleLabel}` : `Create ${roleLabel} Account`}
          </button>
        </form>
        <p className="muted seed">Demo admin: admin@civicconnect.local / admin123</p>
      </div>
    </div>
  );
}
