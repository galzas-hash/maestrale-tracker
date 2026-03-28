import { useState, useEffect, useRef } from "react";

const G = ({ children }) => (
  <span style={{ color: "#1a7a4a", fontWeight: 600 }}>{children}</span>
);

const ROW1  = "CH 5. 1 DC in the 4th CH from the hook, 1 DC in the last CH.";
const ROW2  = "(WS) CH 4, 2 DC in the 4th CH from the hook, CH 3, skip the next 2 sts, CL in the top of the turning CH.";
const ROW3  = "(RS) CH 4, 2 DC in the 4th CH from the hook, CH 3, skip CL, SC in the CH 3 space, CH 3, skip the next 2 sts, CL in the top of the turning CH.";
const ROW4  = "CH 4, 2 DC in the 4th CH from the hook, CH 3, skip CL, SC in the CH 3 space, SC in the next st, SC in the CH 3 space, CH 3, skip the next 2 sts, CL in the top of the turning CH.";
const ROW5  = "CH 4, 2 DC in the 4th CH from the hook, CH 4, skip CL, SC in the CH 3 space, SC in each of the next 3 sts, SC in the CH 3 space, CH 4, skip the next 2 sts, CL in the top pf the turning CH.";
const ROW6  = "CH 4, 2 DC in the 4th CH from the hook, CH 3, skip CL, 3 DC in the CH 4 space, CH 4, skip the next st, SC in each of the next 3 sts, CH 4, skip the next st, 3 DC in the CH 4 space, CH 3, skip the next 2 sts, CL in the top of the turning CH.";

const ROW7  = <span>CH 4, 2 DC in the 4th CH form the hook, <G>*CH 3, skip the next 3 sts, SC in the CH 3 space, CH 3, skip the next 3 sts, 3 DC in the CH 4 space, CH 4, skip the next st, SC in the next st, CH 4, skip the next st, 3 DC in the CH 4 space*,</G> CH 3, skip the next 3 sts, SC in the CH 3 space, CH 3, skip the next 2 sts, CL in the top of the turning CH.</span>;
const ROW8  = <span>CH 4, 2 DC in the 4th Ch from the hook, CH 3, <G>*skip the next 3 sts, SC in the CH 3 space, SC in the next st, SC in the CH 3 space, CH 3, skip the next 3 sts, 3 DC in the CH 4 space, CH 3, skip the next st, 3 DC in the CH 4 space, CH 3*,</G> skip the next 3 sts, SC in the CH 3 space, SC in the next st, SC in the CH 3 space, CH 3, skip the next 2 sts, CL in the top of the turning CH.</span>;
const ROW9  = <span>CH 4, 2 DC in the 4th CH from the hook, CH 4, skip the next 3 sts, SC in the CH 3 space, <G>*SC in the next 3 sts, SC in the CH 3 space, CH 4, skip the next 3 sts, 3 DC in the CH 3 space, CH 4, skip the next 3 sts, SC in the CH 3 space*,</G> SC in the next 3 sts, SC in the CH 3 space, CH 4, skip the next 2 sts, CL in the top of the turning CH.</span>;
const ROW10 = <span>CH 4, 2 DC in the 4th CH from the hook, <G>*CH 3, skip the next 3 sts, 3 DC in the CH 4 space, CH 4, skip the next st, *SC in the next 3 sts, CH 4, skip the next st, 3 DC in the next CH 4 space, CH 3, 3 DC in the next CH 4 space, CH 4, skip the next st *, SC in the next 3 sts, CH 4, skip the next st, 3 DC in the CH 4 space, CH 3, skip the next 2 sts,</G> CL in the top of the turning CH.</span>;
const ROW34 = "(WS) CH 4, 2 DC in the first st, DC in every stitch to end (3 DC in every CH space), CL in the top of the turning CH.";
const ROW35 = "(RS) CH 4, 2 DC in the BL of the first st, DC in the BL of every stitch, CL in the top of the turning CH.";
const ROW36 = "CH 4, 2 DC in the FL of the first st, DC in the FL of every stitch, CL on top of the turning CH.";
const ROW37 = "As row 35";
const ROW38 = <span>CH 4, 2 DC in the 1st st, <G>*CH 3, skip the next 3 sts, DC in the next 3 sts, CH 4, skip the next st, SC in the next 3 sts, CH 4, skip the next st, DC in the next 3 sts*,</G> CH 3, skip the next 3 sts, CL in the top of the turning CH.</span>;

function buildPattern() {
  const steps = [];
  let uid = 0;
  const add = (section, label, desc) =>
    steps.push({ id: `s${uid++}`, section, label, desc });

  const rows79 = (sec) => {
    add(sec, "Row 7", ROW7);
    add(sec, "Row 8", ROW8);
    add(sec, "Row 9", ROW9);
  };
  const rows710 = (sec) => {
    add(sec, "Row 7", ROW7);
    add(sec, "Row 8", ROW8);
    add(sec, "Row 9", ROW9);
    add(sec, "Row 10", ROW10);
  };
  const rows3438 = (sec) => {
    add(sec, "Row 34", ROW34);
    add(sec, "Row 35", ROW35);
    add(sec, "Row 36", ROW36);
    add(sec, "Row 37", ROW37);
    add(sec, "Row 38", ROW38);
  };

  add("Set up rows", "Start and row 1", ROW1);
  add("Set up rows", "Row 2", ROW2);
  add("Set up rows", "Row 3", ROW3);
  add("Set up rows", "Row 4", ROW4);
  add("Set up rows", "Row 5", ROW5);
  add("Set up rows", "Row 6", ROW6);

  rows710("Rows 7–10");
  for (let i = 1; i <= 5; i++) rows710(`Repeat rows 7–10 — ${i} of 5`);
  rows79("Repeat rows 7–9 once more (33 rows completed)");

  rows3438("Rows 34–38");
  rows79("Repeat rows 7–9 once");
  rows3438("Repeat rows 34–38 once");

  for (let i = 1; i <= 9; i++) rows710(`Repeat rows 7–10 — ${i} of 9`);
  rows79("Repeat rows 7–9 once more");

  rows3438("Repeat rows 34–38 once (2nd)");

  for (let i = 1; i <= 2; i++) rows710(`Repeat rows 7–10 — ${i} of 2`);
  rows79("Repeat rows 7–9 once more (final)");

  add("Rows 34 and 35", "Row 34", ROW34);
  add("Rows 34 and 35", "Row 35", ROW35);

  add("Finishing", "Weave in the ends", "Weave in the ends.");
  add("Finishing", "Blocking", "Wet blocking is recommended. Pin the two sides of the triangle to make them as straight as possible. Block the top of the shawl forming spikes at the centre of each motif.");

  return steps;
}

const ALL_STEPS = buildPattern();

const buildSections = () => {
  const order = [];
  const map = {};
  ALL_STEPS.forEach(step => {
    if (!map[step.section]) { map[step.section] = []; order.push(step.section); }
    map[step.section].push(step);
  });
  return { order, map };
};
const { order: SECTION_ORDER, map: SECTION_MAP } = buildSections();

const sectionColor = (sec) => {
  if (sec === "Set up rows")               return { bg: "#fff8ee", accent: "#c8813a" };
  if (sec.startsWith("Rows 7–10"))         return { bg: "#eef7f7", accent: "#2a7a7a" };
  if (sec.startsWith("Repeat rows 7–10"))  return { bg: "#eef7f7", accent: "#2a7a7a" };
  if (sec.startsWith("Repeat rows 7–9"))   return { bg: "#e8f4f0", accent: "#2a7a7a" };
  if (sec.startsWith("Rows 34–38"))        return { bg: "#f3eef7", accent: "#7a5a9a" };
  if (sec.startsWith("Repeat rows 34–38")) return { bg: "#f3eef7", accent: "#7a5a9a" };
  if (sec === "Rows 34 and 35")            return { bg: "#f3eef7", accent: "#7a5a9a" };
  if (sec === "Finishing")                 return { bg: "#eef7f4", accent: "#3a9a6a" };
  return { bg: "#f9f7f4", accent: "#666" };
};

const STORAGE_KEY = "maestrale-tracker-v1";

export default function MaestraleTracker() {
  const [checked, setChecked]   = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  });
  const [collapsed, setCollapsed] = useState({});
  const [screenOn, setScreenOn]   = useState(false);
  const wakeLockRef               = useRef(null);

  // Save to localStorage whenever checked changes
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(checked)); }
    catch {}
  }, [checked]);

  const toggleScreenOn = async () => {
    if (screenOn) {
      if (wakeLockRef.current) {
        await wakeLockRef.current.release();
        wakeLockRef.current = null;
      }
      setScreenOn(false);
    } else {
      try {
        if ("wakeLock" in navigator) {
          wakeLockRef.current = await navigator.wakeLock.request("screen");
          wakeLockRef.current.addEventListener("release", () => {
            setScreenOn(false);
            wakeLockRef.current = null;
          });
        }
      } catch (e) {}
      setScreenOn(true);
    }
  };

  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleSection = (sec) => setCollapsed(prev => ({ ...prev, [sec]: !prev[sec] }));

  const total = ALL_STEPS.length;
  const done  = ALL_STEPS.filter(s => checked[s.id]).length;
  const pct   = total ? Math.round((done / total) * 100) : 0;

  return (
    <div style={{
      fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif",
      maxWidth: 720, margin: "0 auto", padding: "20px 16px 40px",
      background: "#faf8f5", minHeight: "100vh", color: "#2c2c2c",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 34, fontStyle: "italic", color: "#2a7a7a", margin: "0 0 4px" }}>
          🧶 Maestrale
        </h1>
        <p style={{ fontSize: 12, color: "#aaa", margin: "0 0 6px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Pattern Row Tracker · by Nimhriel
        </p>
        <p style={{ fontSize: 11.5, margin: "0 0 14px" }}>
          <span style={{ background: "#1a7a4a18", borderRadius: 4, padding: "2px 8px", color: "#1a7a4a", fontWeight: 600 }}>
            Green text = the repeating sequence between * … * in the original
          </span>
        </p>
        <div style={{ background: "#e0dbd3", borderRadius: 20, height: 10, overflow: "hidden", maxWidth: 400, margin: "0 auto 6px" }}>
          <div style={{
            background: "linear-gradient(90deg, #2a7a7a, #3aaa8a)",
            width: `${pct}%`, height: "100%",
            transition: "width 0.4s cubic-bezier(.4,0,.2,1)", borderRadius: 20,
          }} />
        </div>
        <p style={{ fontSize: 12, color: "#888", letterSpacing: "0.05em", margin: "0 0 10px" }}>
          {done} of {total} steps complete — {pct}%
        </p>
        <button
          onClick={toggleScreenOn}
          style={{
            background: screenOn ? "#2a7a7a" : "#f0ede8",
            border: `1px solid ${screenOn ? "#2a7a7a" : "#c0b8af"}`,
            borderRadius: 20, color: screenOn ? "#fff" : "#666",
            fontSize: 12, padding: "6px 18px", cursor: "pointer",
            letterSpacing: "0.05em", transition: "all 0.2s",
            fontFamily: "inherit",
          }}
        >
          {screenOn ? "☀️ Screen staying on" : "☀️ Keep screen on"}
        </button>
      </div>

      {/* Sections */}
      {SECTION_ORDER.map(sec => {
        const steps   = SECTION_MAP[sec];
        const secDone = steps.filter(st => checked[st.id]).length;
        const allDone = secDone === steps.length;
        const isOpen  = !collapsed[sec];
        const { bg, accent } = sectionColor(sec);

        return (
          <div key={sec} style={{ marginBottom: 10, borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
            <div
              onClick={() => toggleSection(sec)}
              style={{
                padding: "11px 16px", background: allDone ? "#e4f5ef" : bg,
                cursor: "pointer", display: "flex", justifyContent: "space-between",
                alignItems: "center", userSelect: "none",
              }}
            >
              <span>
                <span style={{ fontWeight: "bold", fontSize: 14, color: allDone ? "#2a7a7a" : accent }}>
                  {allDone ? "✓ " : ""}{sec}
                </span>
                <span style={{ fontSize: 12, color: "#aaa", marginLeft: 8 }}>({secDone}/{steps.length})</span>
              </span>
              <span style={{
                fontSize: 11, color: "#aaa",
                transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.2s", display: "inline-block",
              }}>▶</span>
            </div>

            {isOpen && steps.map(step => {
              const isDone = !!checked[step.id];
              return (
                <div
                  key={step.id}
                  onClick={() => toggle(step.id)}
                  style={{
                    padding: "10px 16px 10px 48px",
                    borderTop: "1px solid rgba(0,0,0,0.05)",
                    background: isDone ? "rgba(42,122,122,0.04)" : "#fff",
                    cursor: "pointer", position: "relative",
                    transition: "background 0.15s",
                  }}
                >
                  <div style={{
                    position: "absolute", left: 16, top: 12,
                    width: 20, height: 20, borderRadius: 4,
                    border: isDone ? "none" : "2px solid #ccc",
                    background: isDone ? accent : "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.15s",
                  }}>
                    {isDone && <span style={{ color: "#fff", fontSize: 13, lineHeight: 1 }}>✓</span>}
                  </div>

                  <div style={{
                    fontSize: 13.5, fontWeight: 600,
                    color: isDone ? "#aaa" : accent,
                    textDecoration: isDone ? "line-through" : "none",
                    marginBottom: 3,
                  }}>
                    {step.label}
                  </div>

                  <p style={{
                    fontSize: 12.5, color: isDone ? "#bbb" : "#444",
                    lineHeight: 1.65, margin: 0, opacity: isDone ? 0.55 : 1,
                  }}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}

      <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
        <button
          style={{ background: "none", border: "1px solid #2a7a7a", borderRadius: 6, color: "#2a7a7a", fontSize: 11, padding: "5px 14px", cursor: "pointer", letterSpacing: "0.05em" }}
          onClick={() => {
            const blob = new Blob([JSON.stringify(checked)], { type: "application/json" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "maestrale-progress.json";
            a.click();
          }}
        >Export progress</button>
        <button
          style={{ background: "none", border: "1px solid #2a7a7a", borderRadius: 6, color: "#2a7a7a", fontSize: 11, padding: "5px 14px", cursor: "pointer", letterSpacing: "0.05em" }}
          onClick={() => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = ".json";
            input.onchange = (e) => {
              const file = e.target.files[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = (ev) => {
                try {
                  const data = JSON.parse(ev.target.result);
                  setChecked(data);
                  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                } catch { alert("Invalid file"); }
              };
              reader.readAsText(file);
            };
            input.click();
          }}
        >Import progress</button>
        <button
          style={{ background: "none", border: "1px solid #ddd", borderRadius: 6, color: "#aaa", fontSize: 11, padding: "5px 14px", cursor: "pointer", letterSpacing: "0.05em" }}
          onClick={() => {
            if (window.confirm("Reset all progress?")) {
              setChecked({});
              localStorage.removeItem(STORAGE_KEY);
            }
          }}
        >Reset progress</button>
      </div>

      <p style={{ textAlign: "center", color: "#c0b8af", fontSize: 11, marginTop: 28, letterSpacing: "0.06em" }}>
        Pattern © 2017 Gaia Tarantino · Crafting Tales by Nimhriel
      </p>
    </div>
  );
}