import { useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { copy } from "../utils/i18n";

const center = [26.843, 75.5654];
const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function AdminDashboard({ language, issues, updateIssue, deleteIssue, settings }) {
  const t = copy[language];
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(
    () =>
      issues.filter((issue) => {
        if (status !== "all" && issue.status !== status) return false;
        if (category !== "all" && issue.category !== category) return false;
        if (query && !`${issue.title} ${issue.description}`.toLowerCase().includes(query.toLowerCase())) {
          return false;
        }
        return true;
      }),
    [issues, status, category, query]
  );

  const sorted = [...filtered].sort((a, b) =>
    sort === "newest" ? b.createdAt - a.createdAt : a.createdAt - b.createdAt
  );
  const pending = issues.filter((i) => i.status === "pending").length;
  const resolved = issues.length - pending;
  const resolutionPct = issues.length ? Math.round((resolved / issues.length) * 100) : 0;

  return (
    <div className={`dashboard ${settings.theme}`}>
      <section className="stats-grid">
        <article className="glass stat">
          <h3>{t.totalIssues}</h3>
          <p>{issues.length}</p>
        </article>
        <article className="glass stat">
          <h3>{t.pending}</h3>
          <p>{pending}</p>
        </article>
        <article className="glass stat">
          <h3>{t.resolved}</h3>
          <p>{resolved}</p>
        </article>
      </section>

      <section className="grid-two">
        <div className="glass card">
          <h2>Resolution Chart</h2>
          <div className="chart-wrap">
            <div className="chart-track">
              <div className="chart-fill" style={{ width: `${resolutionPct}%` }} />
            </div>
            <p>{resolutionPct}% resolved</p>
          </div>
          <div className="toolbar">
            <input placeholder={t.search} value={query} onChange={(e) => setQuery(e.target.value)} />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="all">All</option>
              <option value="pending">{t.pending}</option>
              <option value="resolved">{t.resolved}</option>
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="Road">Road</option>
              <option value="Water">Water</option>
              <option value="Electricity">Electricity</option>
              <option value="Sanitation">Sanitation</option>
              <option value="Other">Other</option>
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="newest">{t.newest}</option>
              <option value="oldest">{t.oldest}</option>
            </select>
          </div>
        </div>
        <div className="glass card map-card">
          <h2>Issue Map</h2>
          <MapContainer center={center} zoom={14} className="map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {issues.map((issue) => (
              <Marker key={issue.id} position={issue.location || center} icon={icon}>
                <Popup>{issue.title}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      <section className="glass card issues">
        {sorted.map((issue) => (
          <article key={issue.id} className="issue-card">
            <h4>{issue.title}</h4>
            <p>{issue.description}</p>
            <div className="meta">
              <span>{issue.category}</span>
              <span className={issue.status}>{issue.status}</span>
              <span>{new Date(issue.createdAt).toLocaleString()}</span>
            </div>
            <div className="actions">
              {issue.status !== "resolved" && (
                <button className="btn-secondary" onClick={() => updateIssue(issue.id, { status: "resolved" })}>
                  Mark Resolved
                </button>
              )}
              <button className="danger" onClick={() => deleteIssue(issue.id)}>
                Delete
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
