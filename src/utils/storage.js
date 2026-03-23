const USERS_KEY = "cc_users";
const ISSUES_KEY = "cc_issues";
const SESSION_KEY = "cc_session";
const SETTINGS_KEY = "cc_settings";

export const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
export const setUsers = (users) => localStorage.setItem(USERS_KEY, JSON.stringify(users));

export const getIssues = () => JSON.parse(localStorage.getItem(ISSUES_KEY) || "[]");
export const setIssues = (issues) => localStorage.setItem(ISSUES_KEY, JSON.stringify(issues));

export const getSession = () => JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
export const setSession = (session) =>
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
export const clearSession = () => localStorage.removeItem(SESSION_KEY);

export const getSettings = () =>
  JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{"language":"en","theme":"system"}');
export const setSettings = (settings) =>
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));

export const ensureSeedAdmin = () => {
  const users = getUsers();
  const hasAdmin = users.some((u) => u.role === "admin");
  if (!hasAdmin) {
    users.push({
      id: crypto.randomUUID(),
      name: "Civic Admin",
      email: "admin@civicconnect.local",
      password: "admin123",
      role: "admin",
      createdAt: Date.now()
    });
    setUsers(users);
  }
};
