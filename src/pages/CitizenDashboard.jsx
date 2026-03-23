import { useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { copy } from "../utils/i18n";

const center = [26.843, 75.5654];
const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

function Picker({ onPick }) {
  useMapEvents({
    click(e) {
      onPick([e.latlng.lat, e.latlng.lng]);
    }
  });
  return null;
}

export default function CitizenDashboard({ language, session, issues, addIssue, settings }) {
  const t = copy[language];
  const [draft, setDraft] = useState({
    title: "",
    description: "",
    category: "Road",
    locationName: "",
    image: ""
  });
  const [selectedLoc, setSelectedLoc] = useState(center);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("newest");

  const myIssues = useMemo(
    () =>
      issues.filter((issue) => {
        if (issue.reporterId !== session.userId) return false;
        if (status !== "all" && issue.status !== status) return false;
        if (query && !`${issue.title} ${issue.description}`.toLowerCase().includes(query.toLowerCase())) {
          return false;
        }
        return true;
      }),
    [issues, session.userId, status, query]
  );

  const sorted = [...myIssues].sort((a, b) =>
    sort === "newest" ? b.createdAt - a.createdAt : a.createdAt - b.createdAt
  );
  const pending = myIssues.filter((i) => i.status === "pending").length;

  const useMyLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setSelectedLoc([coords.latitude, coords.longitude]),
      () => {},
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const onImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setDraft((s) => ({ ...s, image: String(reader.result || "") }));
    reader.readAsDataURL(file);
  };

  const submitIssue = (event) => {
    event.preventDefault();
    addIssue({
      ...draft,
      location: selectedLoc
    });
    setDraft({ title: "", description: "", category: "Road", locationName: "", image: "" });
  };

  return (
    <div className={`dashboard ${settings.theme}`}>
      <section className="stats-grid">
        <article className="glass stat">
          <h3>{t.totalIssues}</h3>
          <p>{myIssues.length}</p>
        </article>
        <article className="glass stat">
          <h3>{t.pending}</h3>
          <p>{pending}</p>
        </article>
        <article className="glass stat">
          <h3>{t.resolved}</h3>
          <p>{myIssues.length - pending}</p>
        </article>
      </section>

      <section className="grid-two">
        <form className="glass card" onSubmit={submitIssue}>
          <h2>{t.reportIssue}</h2>
          <input
            placeholder="Issue title"
            value={draft.title}
            onChange={(e) => setDraft((s) => ({ ...s, title: e.target.value }))}
            required
          />
          <textarea
            placeholder="Describe the issue"
            value={draft.description}
            onChange={(e) => setDraft((s) => ({ ...s, description: e.target.value }))}
            required
          />
          <select
            value={draft.category}
            onChange={(e) => setDraft((s) => ({ ...s, category: e.target.value }))}
          >
            <option>Road</option>
            <option>Water</option>
            <option>Electricity</option>
            <option>Sanitation</option>
            <option>Other</option>
          </select>
          <input
            placeholder="Location notes"
            value={draft.locationName}
            onChange={(e) => setDraft((s) => ({ ...s, locationName: e.target.value }))}
            required
          />
          <input type="file" accept="image/*" onChange={onImage} />
          {draft.image && <img className="preview" src={draft.image} alt="preview" />}
          <div className="actions">
            <button className="btn-secondary" type="button" onClick={useMyLocation}>
              {t.useMyLocation}
            </button>
            <button className="btn-primary" type="submit">
              {t.submit}
            </button>
          </div>
        </form>

        <div className="glass card map-card">
          <h2>Select on Map</h2>
          <MapContainer center={selectedLoc} zoom={14} className="map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Picker onPick={setSelectedLoc} />
            <Marker position={selectedLoc} icon={icon}>
              <Popup>Selected location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>

      <section className="glass card">
        <div className="toolbar">
          <input placeholder={t.search} value={query} onChange={(e) => setQuery(e.target.value)} />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="all">All</option>
            <option value="pending">{t.pending}</option>
            <option value="resolved">{t.resolved}</option>
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="newest">{t.newest}</option>
            <option value="oldest">{t.oldest}</option>
          </select>
        </div>
        <div className="issues">
          {sorted.map((issue) => (
            <article key={issue.id} className="issue-card">
              <h4>{issue.title}</h4>
              <p>{issue.description}</p>
              <div className="meta">
                <span>{issue.category}</span>
                <span className={issue.status}>{issue.status}</span>
                <span>{new Date(issue.createdAt).toLocaleString()}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
