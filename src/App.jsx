import { useEffect, useMemo, useState } from "react";
import LiquidEther from "./components/LiquidEther";
import Login from "./pages/Login";
import CitizenDashboard from "./pages/CitizenDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import {
  clearSession,
  ensureSeedAdmin,
  getIssues,
  getSession,
  getSettings,
  getUsers,
  setIssues,
  setSession,
  setSettings,
  setUsers
} from "./utils/storage";
import { copy } from "./utils/i18n";

function App() {
  const [session, setSessionState] = useState(() => getSession());
  const [users, setUsersState] = useState(() => getUsers());
  const [issues, setIssuesState] = useState(() => getIssues());
  const [settings, setSettingsState] = useState(() => getSettings());
  const [toast, setToast] = useState("");

  const language = settings.language || "en";
  const t = useMemo(() => copy[language], [language]);

  useEffect(() => {
    ensureSeedAdmin();
    setUsersState(getUsers());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const mode =
      settings.theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : settings.theme;
    root.dataset.theme = mode;
  }, [settings.theme]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  const onAuth = ({ role, mode, name, email, password }) => {
    const allUsers = getUsers();
    if (mode === "signup") {
      if (allUsers.some((u) => u.email === email)) {
        setToast("User already exists");
        return;
      }
      const user = { id: crypto.randomUUID(), role, name, email, password, createdAt: Date.now() };
      const next = [...allUsers, user];
      setUsers(next);
      setUsersState(next);
      setToast("Account created");
      return;
    }
    const user = allUsers.find((u) => u.email === email && u.password === password && u.role === role);
    if (!user) {
      setToast("Invalid credentials");
      return;
    }
    const nextSession = { userId: user.id, role: user.role, name: user.name };
    setSession(nextSession);
    setSessionState(nextSession);
    setToast("Welcome back");
  };

  const addIssue = (issue) => {
    const newIssue = {
      ...issue,
      id: crypto.randomUUID(),
      reporterId: session.userId,
      status: "pending",
      createdAt: Date.now()
    };
    const next = [newIssue, ...issues];
    setIssues(next);
    setIssuesState(next);
    setToast("Issue reported");
  };

  const updateIssue = (id, patch) => {
    const next = issues.map((issue) => (issue.id === id ? { ...issue, ...patch } : issue));
    setIssues(next);
    setIssuesState(next);
    setToast("Issue updated");
  };

  const deleteIssue = (id) => {
    const next = issues.filter((issue) => issue.id !== id);
    setIssues(next);
    setIssuesState(next);
    setToast("Issue deleted");
  };

  const logout = () => {
    clearSession();
    setSessionState(null);
  };

  const updateSettings = (patch) => {
    const next = { ...settings, ...patch };
    setSettings(next);
    setSettingsState(next);
  };

  return (
    <div className="app-container">
      <LiquidEther
        className="background"
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        color0="#5227FF"
        color1="#FF9FFC"
        color2="#B19EEF"
      />
      <div className="content">
        <header className="topbar glass">
          <h1>{t.appName}</h1>
          <div className="topbar-actions">
            <select
              value={settings.language}
              aria-label={t.language}
              onChange={(e) => updateSettings({ language: e.target.value })}
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
            <select
              value={settings.theme}
              aria-label={t.theme}
              onChange={(e) => updateSettings({ theme: e.target.value })}
            >
              <option value="light">{t.light}</option>
              <option value="dark">{t.dark}</option>
              <option value="system">{t.system}</option>
            </select>
            {session && (
              <button className="btn-secondary" onClick={logout}>
                {t.logout}
              </button>
            )}
          </div>
        </header>

        {!session ? (
          <Login language={language} onAuth={onAuth} />
        ) : session.role === "citizen" ? (
          <CitizenDashboard
            language={language}
            session={session}
            issues={issues}
            addIssue={addIssue}
            settings={settings}
          />
        ) : (
          <AdminDashboard
            language={language}
            issues={issues}
            updateIssue={updateIssue}
            deleteIssue={deleteIssue}
            settings={settings}
          />
        )}
      </div>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
