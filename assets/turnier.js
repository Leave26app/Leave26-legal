// Leave26 Turnier-Planer
// Läuft komplett im Browser. Speicherstand in localStorage (KEY), Sicherung als JSON.
(function () {
"use strict";

var KEY = "leave26-turnier-v2";
var root = document.getElementById("tp");
var QR = root.getAttribute("data-qr") || "";

/* ---------- Sprache ---------- */
var EN = {
  "Turnier-Planer": "Tournament planner",
  "Teilnehmer": "Players", "Spielplan": "Schedule", "Boards": "Boards", "Turnierbaum": "Bracket", "Statistik": "Stats",
  "Name eingeben": "Enter name", "Hinzufügen": "Add",
  "Mehrere Namen auf einmal (einer pro Zeile)": "Several names at once (one per line)",
  "Namen übernehmen": "Add names",
  "Bezahlt": "Paid", "Anwesend": "Here", "Entfernen": "Remove",
  "Noch keine Teilnehmer.": "No players yet.",
  "Startgeld pro Person": "Entry fee per player",
  "Mit Einsatz spielen": "Play for a stake", "Ohne Einsatz": "No stake", "Preisgeld": "Prize money",
  "Währung": "Currency", "Topf": "Pot", "Zusätzliches Preisgeld (Sponsor)": "Extra prize money (sponsor)",
  "Abzug Veranstalter (%)": "Organiser share (%)", "Auszahlung": "Payout", "Platz hinzufügen": "Add place", "Platz entfernen": "Remove place",
  "Die Prozente ergeben zusammen {0} %, nicht 100 %.": "The percentages add up to {0} %, not 100 %.",
  "Topf = Startgeld × bezahlte Spieler + Sponsor, abzüglich Veranstalter-Anteil.": "Pot = entry fee × paid players + sponsor, minus organiser share.",
  "geteilt": "shared", "noch offen": "to be decided", "Eingenommen": "Collected", "offen": "outstanding",
  "Anwesend markiert": "Checked in",
  "Wenn mindestens ein Spieler als anwesend markiert ist, werden beim Start nur anwesende Spieler ausgelost.": "If at least one player is checked in, only checked-in players are drawn at the start.",
  "Turniername": "Tournament name", "z. B. Kneipenturnier November": "e.g. Pub tournament November",
  "Format": "Format",
  "Gruppen + K.O.": "Groups + knockout", "K.O.": "Knockout", "Doppel-K.O.": "Double elimination", "Liga (jeder gegen jeden)": "League (round robin)", "Schweizer System": "Swiss system",
  "Runden": "Rounds", "Danach K.O. für die Besten": "Then knockout for the best", "kein K.O.": "no knockout", "Top": "Top",
  "Schweizer System: In jeder Runde spielen Spieler mit gleich vielen Punkten gegeneinander, niemand zweimal gegen denselben. Runde 1 wird ausgelost, jede weitere Runde entsteht aus der aktuellen Tabelle.": "Swiss system: each round pairs players with the same number of points, nobody plays the same opponent twice. Round 1 is drawn, every further round is paired from the current table.",
  "Runde {0} wird ausgelost, sobald Runde {1} fertig ist.": "Round {0} is paired as soon as round {1} is finished.",
  "Rang: Punkte, Buchholz (Punkte der Gegner), Leg-Differenz, gewonnene Legs, Ø-Average.": "Rank: points, Buchholz (opponents' points), leg difference, legs won, average.",
  "Tabelle": "Table", "BH": "BH", "Freilos für {0} (2 Punkte)": "Bye for {0} (2 points)",
  "Schweizer System braucht mindestens 4 Spieler.": "The Swiss system needs at least 4 players.",
  "Schweizer-System-Runden noch nicht fertig – die K.O.-Paarungen stehen danach fest.": "Swiss rounds not finished – the knockout pairings follow afterwards.",
  "Gruppen / Liga / Runden": "Groups / league / rounds",
  "Anzahl Gruppen": "Number of groups", "Weiter pro Gruppe": "Qualify per group",
  "Hin- und Rückspiel": "Home and away", "Spiel um Platz 3": "Third place match",
  "Spielmodus": "Match format", "Gruppen / Liga": "Groups / league", "K.O.-Runden": "Knockout rounds", "Finale": "Final",
  "Best of": "Best of", "2 Legs fix (Unentschieden möglich)": "2 legs fixed (draw possible)",
  "Boards und Ablauf": "Boards and flow", "Anzahl Boards": "Number of boards",
  "Schreiber einteilen": "Assign markers",
  "Der Verlierer des letzten Spiels am Board schreibt das nächste Spiel. Ist er selbst dran, übernimmt ein anderer freier Spieler.": "The loser of the last match on a board marks the next match. If they are playing, another free player takes over.",
  "Nächstes Spiel automatisch ansagen": "Call the next match automatically",
  "Auslosen und starten": "Draw and start",
  "Mindestens 2 Spieler nötig.": "At least 2 players needed.",
  "Doppel-K.O. braucht mindestens 4 Spieler.": "Double elimination needs at least 4 players.",
  "Gruppen + K.O. braucht mindestens 4 Spieler.": "Groups + knockout needs at least 4 players.",
  "Zu viele Gruppen für so wenige Spieler.": "Too many groups for this number of players.",
  "Turnier läuft": "Tournament running", "Spieler": "players",
  "Neu auslosen": "Redraw", "Nur möglich, solange noch kein Ergebnis eingetragen ist.": "Only possible before the first result.",
  "Turnier zurücksetzen (Spieler bleiben)": "Reset tournament (keep players)",
  "Alles löschen": "Delete everything", "Wirklich? Nochmal klicken": "Sure? Click again", "Abbrechen": "Cancel",
  "Regeln": "Rules",
  "Gruppe": "Group", "Spiele": "Matches", "Sp": "P", "S": "W", "U": "D", "N": "L", "Legs": "Legs", "Diff": "Diff", "Pkt": "Pts", "Ø": "Avg",
  "Eintragen": "Enter result", "Ändern": "Edit", "Speichern": "Save",
  "Ø Average": "Avg", "180er": "180s", "High Finish": "High finish", "Bestes Leg (Darts)": "Best leg (darts)",
  "Ungültiges Ergebnis": "Invalid result",
  "Der Sieger braucht genau {0} Legs, der Verlierer weniger.": "The winner needs exactly {0} legs, the loser fewer.",
  "Bei 2 Legs fix muss die Summe 2 sein (2:0, 1:1, 0:2).": "With 2 fixed legs the sum must be 2 (2:0, 1:1, 0:2).",
  "frei": "free", "Board": "Board", "gegen": "vs", "Schreiber": "Marker",
  "Nächstes Spiel ansagen": "Call next match", "Keine Partie verfügbar.": "No match available.",
  "Als Nächstes": "Up next", "Zurück in die Warteschlange": "Back to the queue",
  "Ergebnis speichern und Board freigeben": "Save result and free board",
  "Warteschlange": "Queue", "Alle Spiele gespielt.": "All matches played.", "spielt gerade": "playing",
  "Wartezeiten": "Waiting times", "Niemand wartet.": "Nobody is waiting.", "Am Board": "On the board",
  "TV-Ansicht": "TV view", "TV-Ansicht beenden": "Exit TV view",
  "Nächste Spiele": "Next matches", "Top Average": "Top average",
  "Noch keine Averages.": "No averages yet.",
  "Mit Leave26 geplant. Checkouts sammeln, 180er zählen, mit Freunden vergleichen.": "Planned with Leave26. Collect checkouts, count your 180s, compare with friends.",
  "Gratis im Google Play Store – QR-Code scannen": "Free on Google Play – scan the QR code",
  "Turniersieger": "Champion", "Endstand": "Final standings", "vorläufig": "provisional",
  "Platz": "Place", "Siege": "Wins", "Bester Ø": "Best avg", "Höchstes Finish": "Highest finish", "Meiste 180er": "Most 180s", "Kürzestes Leg": "Shortest leg",
  "Bestes Ø-Average": "Best average",
  "Noch keine Spiele gespielt.": "No matches played yet.",
  "Datensicherung": "Backup", "Sichern (Datei herunterladen)": "Back up (download file)",
  "Wiederherstellen (Datei wählen)": "Restore (choose file)", "Oder gesicherten Text einfügen:": "Or paste a saved backup:",
  "Text importieren": "Import text", "Stand wiederhergestellt.": "Backup restored.",
  "Import fehlgeschlagen: Die Daten sind ungültig.": "Import failed: the data is invalid.",
  "Falls der Download nicht startet: Text kopieren und speichern.": "If the download does not start: copy and save this text.",
  "Wiederherstellen überschreibt den aktuellen Stand.": "Restoring replaces the current state.",
  "Freilos": "Bye", "Sieger": "Winner", "Verlierer": "Loser",
  "Viertelfinale": "Quarter-final", "Halbfinale": "Semi-final", "Achtelfinale": "Round of 16", "Runde": "Round",
  "Winner-Bracket": "Winners bracket", "Loser-Bracket": "Losers bracket", "Grand Final": "Grand final",
  "Winner-Finale": "Winners final", "Loser-Finale": "Losers final",
  "WB": "WB", "LB": "LB",
  "Gruppenphase noch nicht fertig – die K.O.-Paarungen stehen danach fest.": "Group stage not finished – the knockout pairings follow afterwards.",
  "Plane dein lokales Dartturnier kostenlos: Teilnehmer eintragen, auslosen, Spiele auf die Boards verteilen und alles live auf dem TV zeigen. Alles bleibt in deinem Browser gespeichert.": "Plan your local darts tournament for free: add players, draw, spread matches across the boards and show everything live on a TV. Everything stays saved in your browser.",
  "Spielnr.": "Match no.", "Rückspiel": "Return match", "gespielt": "played",
  "Spiele noch offen": "matches still open",
  "Punkte: Sieg 2, Unentschieden 1, Niederlage 0. Rang: Punkte, Leg-Differenz, gewonnene Legs, Ø-Average.": "Points: win 2, draw 1, loss 0. Rank: points, leg difference, legs won, average.",
  "Rang: Punkte, Leg-Differenz, gewonnene Legs, Ø-Average.": "Rank: points, leg difference, legs won, average.",
  "Grün = qualifiziert für die K.O.-Runde.": "Green = qualified for the knockout stage.",
  "Ausscore: Ist ein Leg nach 20 Aufnahmen nicht beendet, wirft jeder noch 3 Darts. Mehr Punkte gewinnt das Leg.": "Score-out: if a leg is not finished after 20 visits, each player throws 3 more darts. The higher score wins the leg.",
  "Doppel-K.O.: Wer zweimal verliert, scheidet aus. Wer im Winner-Bracket verliert, spielt im Loser-Bracket weiter. Im Grand Final trifft der Sieger des Winner-Brackets auf den Sieger des Loser-Brackets (ein Spiel).": "Double elimination: two losses and you are out. A loss in the winners bracket sends you to the losers bracket. The grand final is the winners bracket champion against the losers bracket champion (one match).",
  "K.O.: Wer verliert, scheidet aus. Freilose gehen an die ersten Plätze der Auslosung.": "Knockout: lose and you are out. Byes go to the top of the draw.",
  "Die Besten jeder Gruppe kommen in die K.O.-Runde, über Kreuz gesetzt (Gruppensieger gegen Zweite anderer Gruppen).": "The best of each group reach the knockout stage, seeded crosswise (group winners against runners-up of other groups).",
  "Liga: Jeder spielt gegen jeden, die Tabelle entscheidet.": "League: everyone plays everyone, the table decides.",
  "In neuem Fenster öffnen (2. Bildschirm)": "Open in a new window (second screen)",
  "Statistik pro Spiel ist freiwillig. Ø, 180er, High Finish und bestes Leg fliessen in die Auswertung ein.": "Per-match stats are optional. Avg, 180s, high finish and best leg feed into the stats.",
  "Kürzel": "Short", "Unentschieden": "Draw",
  "Beispielturnier laden": "Load example tournament",
  "Lädt ein Beispiel mit 12 Spielern, fertiger Gruppenphase und laufender K.O.-Runde. Der aktuelle Stand wird ersetzt.": "Loads an example with 12 players, a finished group stage and a running knockout stage. Replaces the current state.",
  "Diese Option gibt es nur in der Gruppenphase.": "This option is only available in the group stage."
};
function lang() { return document.documentElement.lang === "en" ? "en" : "de"; }
function t(s) {
  var r = lang() === "en" && EN[s] !== undefined ? EN[s] : s;
  for (var i = 1; i < arguments.length; i++) r = r.split("{" + (i - 1) + "}").join(arguments[i]);
  return r;
}

/* ---------- Zustand ---------- */
function fresh() {
  return {
    v: 2, name: "", players: [], nid: 1,
    fmt: "groups", ng: 2, adv: 2, rr2: false, third: true,
    mg: { bo: 3, x: 501, fix2: false }, mk: { bo: 3, x: 501 }, mf: { bo: 5, x: 501 },
    sr: 5, sko: 0,
    nb: 2, writer: false, auto: true, fee: 0, stake: false, cur: "CHF", extra: 0, house: 0, split: [50, 30, 20],
    started: false, draw: null, res: {}, board: {}, wr: {}, last: {}, wc: {}, fin: {}, defer: {}, t0: null, tab: "t"
  };
}
var S = fresh();
try { var raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch (e) {}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

var UI = { edit: null, err: {}, pend: null, backup: "", imp: "", tv: location.hash === "#tv" };

/* ---------- Helfer ---------- */
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
function num(v) { v = String(v == null ? "" : v).trim().replace(",", "."); if (v === "") return null; var n = parseFloat(v); return isNaN(n) ? null : n; }
function P(id) { for (var i = 0; i < S.players.length; i++) if (S.players[i].id === id) return S.players[i]; return null; }
function nm(id) { var p = P(id); return p ? p.name : "?"; }
function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
var LETTERS = "ABCDEFGH";
function pow2(n) { var p = 2; while (p < n) p *= 2; return p; }
function fmtTime(ts) { var s = Math.max(0, Math.floor((Date.now() - ts) / 1000)); var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); s %= 60; return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(s).padStart(2, "0"); }

/* ---------- Spielmodus ---------- */
function mode(k) { return k === "g" ? S.mg : k === "f" ? S.mf : S.mk; }
function fix2(k) { return k === "g" && S.mg.fix2; }
function need(k) { return fix2(k) ? 2 : (mode(k).bo + 1) / 2; }
function modeTxt(k) {
  var m = mode(k);
  if (fix2(k)) return (lang() === "en" ? "2 legs fixed · " : "2 Legs fix · ") + m.x;
  return "Best of " + m.bo + " · " + m.x;
}
function finished(r, k) {
  if (!r || r.la == null || r.lb == null) return false;
  if (fix2(k)) return r.la + r.lb === 2;
  var n = need(k);
  return r.la !== r.lb && Math.max(r.la, r.lb) === n && Math.min(r.la, r.lb) < n;
}

/* ---------- Spielplan aufbauen ---------- */
// Gruppen-Paarungen in fairer Reihenfolge (niemand zweimal hintereinander, Anwurf ausgeglichen)
function groupMatches() {
  if (!S.draw || !S.draw.groups) return [];
  var all = [];
  S.draw.groups.forEach(function (ids, g) {
    for (var i = 0; i < ids.length; i++) for (var j = i + 1; j < ids.length; j++) {
      var a = Math.min(ids[i], ids[j]), b = Math.max(ids[i], ids[j]);
      all.push({ id: "g" + g + "_" + a + "_" + b, g: g, p: [a, b], back: false });
      if (S.rr2) all.push({ id: "g" + g + "_" + a + "_" + b + "_r", g: g, p: [b, a], back: true });
    }
  });
  var last = {}, cnt = {}, first = {}, out = [], rem = all.slice();
  for (var pos = 0; rem.length; pos++) {
    var best = 0, bs = null;
    for (var i = 0; i < rem.length; i++) {
      var m = rem[i];
      var ra = Math.min(6, pos - (last[m.p[0]] == null ? -9 : last[m.p[0]]));
      var rb = Math.min(6, pos - (last[m.p[1]] == null ? -9 : last[m.p[1]]));
      var sc = [Math.min(ra, rb), ra + rb, -(cnt[m.p[0]] || 0) - (cnt[m.p[1]] || 0), m.back ? -1 : 0];
      if (!bs || sc[0] > bs[0] || (sc[0] === bs[0] && (sc[1] > bs[1] || (sc[1] === bs[1] && (sc[2] > bs[2] || (sc[2] === bs[2] && sc[3] > bs[3])))))) { bs = sc; best = i; }
    }
    var mm = rem.splice(best, 1)[0];
    if (!mm.back && (first[mm.p[0]] || 0) > (first[mm.p[1]] || 0)) mm.p = [mm.p[1], mm.p[0]];
    first[mm.p[0]] = (first[mm.p[0]] || 0) + 1;
    last[mm.p[0]] = last[mm.p[1]] = pos;
    cnt[mm.p[0]] = (cnt[mm.p[0]] || 0) + 1; cnt[mm.p[1]] = (cnt[mm.p[1]] || 0) + 1;
    mm.no = pos + 1;
    out.push(mm);
  }
  return out;
}

/* ---------- Schweizer System ---------- */
function swissRounds() { return (S.draw && S.draw.swiss) || []; }
function swissStand() {
  var T = {};
  S.draw.ids.forEach(function (id) { T[id] = { id: id, sp: 0, w: 0, d: 0, l: 0, lf: 0, la: 0, av: [], pts: 0, opp: [], bye: 0, first: 0 }; });
  swissRounds().forEach(function (round, r) {
    round.forEach(function (pr) {
      var a = T[pr[0]];
      if (pr[1] == null) { a.bye++; a.sp++; a.w++; a.pts += 2; return; }
      var b = T[pr[1]], id = "s" + (r + 1) + "_" + pr[0] + "_" + pr[1], res = S.res[id];
      a.opp.push(pr[1]); b.opp.push(pr[0]); a.first++;
      if (!res) return;
      if (res.a1 != null) a.av.push(res.a1);
      if (res.a2 != null) b.av.push(res.a2);
      if (!finished(res, "g")) return;
      a.sp++; b.sp++; a.lf += res.la; a.la += res.lb; b.lf += res.lb; b.la += res.la;
      if (res.la > res.lb) { a.w++; a.pts += 2; b.l++; } else if (res.lb > res.la) { b.w++; b.pts += 2; a.l++; } else { a.d++; b.d++; a.pts++; b.pts++; }
    });
  });
  var rows = Object.keys(T).map(function (k) { return T[k]; });
  rows.forEach(function (x) { x.bh = x.opp.reduce(function (s, o) { return s + T[o].pts; }, 0); x.diff = x.lf - x.la; x.avg = x.av.length ? x.av.reduce(function (s, v) { return s + v; }, 0) / x.av.length : 0; });
  return rows.sort(function (a, b) { return b.pts - a.pts || b.bh - a.bh || b.diff - a.diff || b.lf - a.lf || b.avg - a.avg; });
}
function swissRoundDone(r) {
  var round = swissRounds()[r]; if (!round) return false;
  return round.every(function (pr) { return pr[1] == null || finished(S.res["s" + (r + 1) + "_" + pr[0] + "_" + pr[1]], "g"); });
}
function swissDone() {
  if (S.fmt !== "swiss") return true;
  var rs = swissRounds(); return rs.length >= S.sr && swissRoundDone(rs.length - 1);
}
// nächste Runde: gleich starke Spieler gegeneinander, keine Wiederholung, Freilos an den Schwächsten ohne Freilos
function swissPair(rank) {
  var ids = rank.map(function (x) { return x.id; }), info = {};
  rank.forEach(function (x) { info[x.id] = x; });
  var pairs = [], byePair = null;
  if (ids.length % 2) {
    var by = null;
    for (var i = ids.length - 1; i >= 0; i--) if (!info[ids[i]].bye) { by = ids[i]; break; }
    if (by == null) by = ids[ids.length - 1];
    ids.splice(ids.indexOf(by), 1); byePair = [by, null];
  }
  var steps = 0;
  function go(list, allowRe) {
    if (!list.length) return [];
    if (++steps > 200000) return null;
    var a = list[0];
    for (var j = 1; j < list.length; j++) {
      var b = list[j];
      if (!allowRe && info[a].opp.indexOf(b) >= 0) continue;
      var rest = list.slice(1, j).concat(list.slice(j + 1)), sub = go(rest, allowRe);
      if (sub) return [[a, b]].concat(sub);
    }
    return null;
  }
  var res = go(ids, false); if (!res) { steps = 0; res = go(ids, true); }
  res.forEach(function (pr) { if (info[pr[0]].first > info[pr[1]].first) pr.reverse(); pairs.push(pr); });
  if (byePair) pairs.push(byePair);
  return pairs;
}
function swissNext() {
  if (S.fmt !== "swiss" || !S.draw) return false;
  var rs = swissRounds();
  if (rs.length >= S.sr || !swissRoundDone(rs.length - 1)) return false;
  rs.push(swissPair(swissStand()));
  return true;
}
function stageDone() { return S.fmt === "swiss" ? swissDone() : groupsDone(); }

function seedOrder(n) { var o = [1]; while (o.length < n) { var l = o.length * 2 + 1, nx = []; o.forEach(function (s) { nx.push(s, l - s); }); o = nx; } return o; }

// Teilnehmer der 1. K.O.-Runde: [[a,b],...] (null = Freilos) plus Platzhalter-Texte
function koFirstRound() {
  var seeds, ph = [], fromGroups = S.fmt === "groups";
  if (fromGroups) {
    seeds = []; ph = [];
    var st = S.draw.groups.map(function (_, g) { return stand(g); });
    for (var place = 0; place < S.adv; place++) S.draw.groups.forEach(function (_, g) {
      var row = st[g][place];
      seeds.push(row ? row.id : null); ph.push(LETTERS[g] + (place + 1));
    });
  } else if (S.fmt === "swiss") {
    var top = swissStand().slice(0, S.sko);
    seeds = []; ph = [];
    for (var z = 0; z < S.sko; z++) { seeds.push(top[z] ? top[z].id : null); ph.push((z + 1) + ". " + t("Tabelle")); }
  } else { seeds = S.draw.seeds.slice(); ph = seeds.map(function () { return ""; }); }
  var N = pow2(seeds.length), ord = seedOrder(N), pairs = [];
  for (var i = 0; i < N / 2; i++) {
    var x = ord[2 * i] - 1, y = ord[2 * i + 1] - 1;
    pairs.push([{ p: seeds[x] == null ? null : seeds[x], ph: ph[x] || "", bye: x >= seeds.length },
                { p: seeds[y] == null ? null : seeds[y], ph: ph[y] || "", bye: y >= seeds.length }]);
  }
  if (fromGroups) {
    // gleiche Gruppe in Runde 1 vermeiden
    var grp = function (s) { return s.ph ? s.ph[0] : ""; };
    for (var a = 0; a < pairs.length; a++) {
      if (pairs[a][0].bye || pairs[a][1].bye || grp(pairs[a][0]) !== grp(pairs[a][1])) continue;
      for (var b = 0; b < pairs.length; b++) {
        if (b === a || pairs[b][1].bye) continue;
        if (grp(pairs[b][1]) !== grp(pairs[a][0]) && grp(pairs[a][1]) !== grp(pairs[b][0])) { var tmp = pairs[a][1]; pairs[a][1] = pairs[b][1]; pairs[b][1] = tmp; break; }
      }
    }
  }
  return pairs;
}

function roundName(r, k) {
  var d = k - r;
  return d === 0 ? t("Finale") : d === 1 ? t("Halbfinale") : d === 2 ? t("Viertelfinale") : d === 3 ? t("Achtelfinale") : t("Runde") + " " + r;
}

// Alle Spiele als Liste {id, st (g|k|f), label, src:[slot, slot] | p:[a,b], order}
var CACHE = null;
function build() {
  var M = [], byId = {};
  function add(m) { M.push(m); byId[m.id] = m; }
  if (!S.started || !S.draw) return { list: M, byId: byId, k: 0 };
  var order = 0;
  if (S.fmt === "groups" || S.fmt === "league") {
    groupMatches().forEach(function (gm) {
      add({ id: gm.id, st: "g", g: gm.g, p: gm.p, no: gm.no, back: gm.back,
            label: S.fmt === "league" ? t("Spielnr.") + " " + gm.no : t("Gruppe") + " " + LETTERS[gm.g] + (gm.back ? " · " + t("Rückspiel") : ""), order: order++ });
    });
  }
  if (S.fmt === "swiss") {
    swissRounds().forEach(function (round, r) {
      round.forEach(function (pr, i) {
        if (pr[1] == null) return;
        add({ id: "s" + (r + 1) + "_" + pr[0] + "_" + pr[1], st: "g", sw: true, r: r + 1, p: [pr[0], pr[1]], label: t("Runde") + " " + (r + 1), order: (r + 1) * 100 + i });
      });
    });
  }
  var k = 0;
  if (S.fmt === "groups" || S.fmt === "ko" || (S.fmt === "swiss" && S.sko >= 2)) {
    var r1 = koFirstRound(), N = r1.length * 2; k = Math.log2(N);
    for (var r = 1; r <= k; r++) {
      for (var i = 0; i < N / Math.pow(2, r); i++) {
        add({ id: "k" + r + "_" + i, st: r === k ? "f" : "k", r: r, i: i, label: roundName(r, k) + (N / Math.pow(2, r) > 1 ? " " + (i + 1) : ""),
              src: r === 1 ? [{ first: r1[i][0] }, { first: r1[i][1] }] : [{ w: "k" + (r - 1) + "_" + (2 * i) }, { w: "k" + (r - 1) + "_" + (2 * i + 1) }], order: 1000 + r * 10 + (r === k ? 5 : 0) });
      }
    }
    if (S.third && k >= 2) add({ id: "p3", st: "k", label: t("Spiel um Platz 3"), src: [{ l: "k" + (k - 1) + "_0" }, { l: "k" + (k - 1) + "_1" }], order: 1000 + k * 10 + 1 });
  }
  if (S.fmt === "dko") {
    var r1d = koFirstRound(), Nd = r1d.length * 2; k = Math.log2(Nd);
    for (var r2 = 1; r2 <= k; r2++) for (var i2 = 0; i2 < Nd / Math.pow(2, r2); i2++) {
      add({ id: "w" + r2 + "_" + i2, st: "k", r: r2, i: i2, br: "w",
            label: (r2 === k ? t("Winner-Finale") : t("WB") + " " + t("Runde") + " " + r2) + (Nd / Math.pow(2, r2) > 1 ? " · " + (i2 + 1) : ""),
            src: r2 === 1 ? [{ first: r1d[i2][0] }, { first: r1d[i2][1] }] : [{ w: "w" + (r2 - 1) + "_" + (2 * i2) }, { w: "w" + (r2 - 1) + "_" + (2 * i2 + 1) }],
            order: 1000 + 2 * (r2 - 1) * 10 });
    }
    var J = 2 * (k - 1);
    for (var j = 1; j <= J; j++) {
      var cntL, tt;
      if (j === 1) cntL = Nd / 4;
      else if (j % 2 === 0) { tt = j / 2; cntL = Nd / Math.pow(2, tt + 1); }
      else { tt = (j - 1) / 2; cntL = Nd / Math.pow(2, tt + 2); }
      for (var q = 0; q < cntL; q++) {
        var src;
        if (j === 1) src = [{ l: "w1_" + (2 * q) }, { l: "w1_" + (2 * q + 1) }];
        else if (j % 2 === 0) src = [{ w: "l" + (j - 1) + "_" + q }, { l: "w" + (j / 2 + 1) + "_" + (cntL - 1 - q) }];
        else src = [{ w: "l" + (j - 1) + "_" + (2 * q) }, { w: "l" + (j - 1) + "_" + (2 * q + 1) }];
        add({ id: "l" + j + "_" + q, st: "k", r: j, i: q, br: "l",
              label: (j === J ? t("Loser-Finale") : t("LB") + " " + t("Runde") + " " + j) + (cntL > 1 ? " · " + (q + 1) : ""),
              src: src, order: 1000 + (j + 0.5) * 10 });
      }
    }
    add({ id: "gf", st: "f", label: t("Grand Final"), src: [{ w: "w" + k + "_0" }, { w: "l" + J + "_0" }], order: 9999 });
  }
  M.sort(function (a, b) { return a.order - b.order; });
  return { list: M, byId: byId, k: k };
}

var MEMO = {};
function B() { if (!CACHE) { CACHE = build(); MEMO = {}; } return CACHE; }
function dirty() { CACHE = null; MEMO = {}; }

function groupsDone() {
  if (S.fmt !== "groups") return true;
  return B().list.every(function (m) { return m.st !== "g" || finished(S.res[m.id], "g"); });
}

// Slot auflösen: {ready, p, ph}
function slot(src) {
  if (src.first) {
    var f = src.first;
    if (f.bye) return { ready: true, p: null, ph: t("Freilos") };
    if (!stageDone()) return { ready: false, p: null, ph: f.ph };
    return { ready: true, p: f.p, ph: f.ph };
  }
  var id = src.w || src.l, r = resolve(id), m = B().byId[id];
  if (!r.done) return { ready: false, p: null, ph: (src.w ? t("Sieger") : t("Verlierer")) + " " + (m ? m.label : "") };
  return { ready: true, p: src.w ? r.win : r.lose, ph: t("Freilos") };
}
// Spiel auflösen
function resolve(id) {
  if (MEMO[id]) return MEMO[id];
  var m = B().byId[id], out;
  if (!m) return { done: false };
  if (m.st === "g") {
    var r = S.res[id], d = finished(r, "g");
    out = { done: d, a: { ready: true, p: m.p[0] }, b: { ready: true, p: m.p[1] }, playable: !d };
    if (d) { out.win = r.la > r.lb ? m.p[0] : r.lb > r.la ? m.p[1] : null; out.lose = r.la > r.lb ? m.p[1] : r.lb > r.la ? m.p[0] : null; }
  } else {
    var a = slot(m.src[0]), b = slot(m.src[1]);
    if (!a.ready || !b.ready) out = { done: false, a: a, b: b };
    else if (a.p == null || b.p == null) out = { done: true, bye: true, win: a.p == null ? b.p : a.p, lose: null, a: a, b: b };
    else {
      var rr = S.res[id];
      if (finished(rr, m.st)) out = { done: true, win: rr.la > rr.lb ? a.p : b.p, lose: rr.la > rr.lb ? b.p : a.p, a: a, b: b };
      else out = { done: false, a: a, b: b, playable: true };
    }
  }
  MEMO[id] = out;
  return out;
}
function players(id) { var r = resolve(id); return [r.a && r.a.p, r.b && r.b.p]; }

/* ---------- Tabellen ---------- */
function stand(g) {
  var ids = S.draw.groups[g], T = {};
  ids.forEach(function (id) { T[id] = { id: id, sp: 0, w: 0, d: 0, l: 0, lf: 0, la: 0, av: [], pts: 0 }; });
  groupMatches().forEach(function (m) {
    if (m.g !== g) return;
    var r = S.res[m.id], a = T[m.p[0]], b = T[m.p[1]];
    if (!r) return;
    if (r.a1 != null) a.av.push(r.a1);
    if (r.a2 != null) b.av.push(r.a2);
    if (!finished(r, "g")) return;
    a.sp++; b.sp++; a.lf += r.la; a.la += r.lb; b.lf += r.lb; b.la += r.la;
    if (r.la > r.lb) { a.w++; a.pts += 2; b.l++; } else if (r.lb > r.la) { b.w++; b.pts += 2; a.l++; } else { a.d++; b.d++; a.pts++; b.pts++; }
  });
  return Object.keys(T).map(function (k) { var x = T[k]; x.diff = x.lf - x.la; x.avg = x.av.length ? x.av.reduce(function (s, v) { return s + v; }, 0) / x.av.length : 0; return x; })
    .sort(function (a, b) { return b.pts - a.pts || b.diff - a.diff || b.lf - a.lf || b.avg - a.avg; });
}

/* ---------- Statistik ---------- */
function stats() {
  var T = {};
  (S.draw ? S.draw.ids : []).forEach(function (id) { T[id] = { id: id, sp: 0, w: 0, d: 0, l: 0, lf: 0, la: 0, av: [], mx: 0, t180: 0, hf: 0, bl: 0 }; });
  B().list.forEach(function (m) {
    var r = S.res[m.id], res = resolve(m.id);
    if (!r || !res.done || res.bye) return;
    var p = players(m.id);
    [[p[0], r.la, r.lb, r.a1, r.o1, r.h1, r.b1], [p[1], r.lb, r.la, r.a2, r.o2, r.h2, r.b2]].forEach(function (x) {
      var s = T[x[0]]; if (!s) return;
      s.sp++; s.lf += x[1]; s.la += x[2];
      if (x[1] > x[2]) s.w++; else if (x[1] < x[2]) s.l++; else s.d++;
      if (x[3] != null) { s.av.push(x[3]); s.mx = Math.max(s.mx, x[3]); }
      s.t180 += x[4] || 0; s.hf = Math.max(s.hf, x[5] || 0);
      if (x[6]) s.bl = s.bl ? Math.min(s.bl, x[6]) : x[6];
    });
  });
  return Object.keys(T).map(function (k) { var s = T[k]; s.avg = s.av.length ? s.av.reduce(function (a, b) { return a + b; }, 0) / s.av.length : null; return s; });
}

/* ---------- Endstand ---------- */
// Plätze 1–4: [{from, to, ids}] – geteilte Plätze haben from < to
function places() {
  var b = B(), out = [];
  if (!S.started) return null;
  if (S.fmt === "swiss" && S.sko < 2) {
    if (!swissDone()) return null;
    swissStand().slice(0, 4).forEach(function (x, i) { out.push({ from: i + 1, to: i + 1, ids: [x.id] }); });
    return out;
  }
  if (S.fmt === "league") {
    if (!b.list.every(function (m) { return resolve(m.id).done; })) return null;
    stand(0).slice(0, 4).forEach(function (x, i) { out.push({ from: i + 1, to: i + 1, ids: [x.id] }); });
    return out;
  }
  var fin = S.fmt === "dko" ? "gf" : "k" + b.k + "_0";
  var rf = resolve(fin); if (!rf.done) return null;
  out.push({ from: 1, to: 1, ids: [rf.win] });
  if (rf.lose != null) out.push({ from: 2, to: 2, ids: [rf.lose] });
  if (S.fmt === "dko") {
    var J = 2 * (b.k - 1);
    var l1 = resolve("l" + J + "_0"); if (l1.done && l1.lose != null) out.push({ from: 3, to: 3, ids: [l1.lose] });
    if (J >= 2) { var l2 = resolve("l" + (J - 1) + "_0"); if (l2.done && l2.lose != null) out.push({ from: 4, to: 4, ids: [l2.lose] }); }
  } else if (b.k >= 2) {
    if (b.byId.p3) { var r3 = resolve("p3"); if (r3.done) { if (r3.win != null) out.push({ from: 3, to: 3, ids: [r3.win] }); if (r3.lose != null) out.push({ from: 4, to: 4, ids: [r3.lose] }); } }
    else { var sl = [resolve("k" + (b.k - 1) + "_0").lose, resolve("k" + (b.k - 1) + "_1").lose].filter(function (x) { return x != null; }); if (sl.length) out.push({ from: 3, to: 3 + sl.length - 1, ids: sl }); }
  }
  return out;
}
function podium() {
  var pl = places(); if (!pl) return null;
  var r = [null, null, null];
  pl.forEach(function (x) { if (x.from <= 3) r[x.from - 1] = x.ids[0]; });
  return r;
}
/* ---------- Preisgeld ---------- */
function pot() {
  var paid = S.players.filter(function (p) { return p.paid && (!S.started || S.draw.ids.indexOf(p.id) >= 0); }).length;
  var gross = paid * (S.fee || 0) + (S.extra || 0);
  return { paid: paid, gross: gross, net: gross * (1 - (S.house || 0) / 100) };
}
function money(v) { return (Math.round(v * 100) / 100).toFixed(2) + " " + esc(S.cur || ""); }
function prizeRows(withNames) {
  var P0 = pot(), pl = withNames ? places() : null, rows = [];
  S.split.forEach(function (pct, i) {
    var place = i + 1, who = "";
    if (pl) { pl.forEach(function (x) { if (place >= x.from && place <= x.to) who = x.ids.map(nm).map(esc).join(", ") + (x.to > x.from ? " (" + t("geteilt") + ")" : ""); }); }
    rows.push({ place: place, pct: pct, amount: P0.net * pct / 100, who: who });
  });
  if (pl) pl.forEach(function (x) {
    if (x.to <= x.from) return;
    var sum = 0; for (var q = x.from; q <= x.to; q++) sum += S.split[q - 1] || 0;
    rows.forEach(function (r) { if (r.place >= x.from && r.place <= x.to) r.shared = P0.net * sum / 100 / x.ids.length; });
  });
  return rows;
}

/* ---------- Boards ---------- */
function onBoard(id) { for (var k in S.board) if (S.board[k] === id) return +k; return -1; }
function busy(except) {
  var s = {};
  for (var k in S.board) {
    if (+k === except || !S.board[k]) continue;
    var id = S.board[k];
    players(id).forEach(function (p) { if (p != null) s[p] = 1; });
    if (S.wr[id] != null) s[S.wr[id]] = 1;
  }
  return s;
}
function queue() {
  var df = S.defer || {};
  return B().list.filter(function (m) { var r = resolve(m.id); return r.playable && onBoard(m.id) < 0; })
    .sort(function (a, b) { return (df[a.id] || 0) - (df[b.id] || 0); }).map(function (m) { return m.id; });
}
function nextFor(bi) {
  var bs = busy(bi), q = queue();
  for (var i = 0; i < q.length; i++) { var p = players(q[i]); if (!bs[p[0]] && !bs[p[1]]) return q[i]; }
  return null;
}
function pickWriter(bi, id) {
  var bs = busy(bi), p = players(id), q = queue();
  var soon = {}; q.slice(0, 2).forEach(function (x) { players(x).forEach(function (y) { soon[y] = 1; }); });
  function ok(x) { return x != null && !bs[x] && x !== p[0] && x !== p[1]; }
  if (ok(S.last[bi])) return S.last[bi];
  var c = S.draw.ids.filter(ok);
  if (!c.length) return null;
  c.sort(function (a, b) { return (soon[a] ? 1 : 0) - (soon[b] ? 1 : 0) || (S.wc[a] || 0) - (S.wc[b] || 0) || (S.fin[a] || 0) - (S.fin[b] || 0); });
  return c[0];
}
function callNext(bi) {
  if (S.board[bi]) return;
  var id = nextFor(bi); if (!id) return;
  S.board[bi] = id; S.t0 = S.t0 || Date.now(); if (S.defer) delete S.defer[id];
  if (S.writer) { var w = pickWriter(bi, id); if (w != null) { S.wr[id] = w; S.wc[w] = (S.wc[w] || 0) + 1; } }
}
function freeBoard(bi) {
  var id = S.board[bi]; if (!id) return;
  var r = resolve(id);
  if (r.done && r.lose != null) S.last[bi] = r.lose;
  S.board[bi] = null;
}
function syncBoards() {
  for (var k in S.board) { var id = S.board[k]; if (id && !B().byId[id]) S.board[k] = null; }
  if (!S.auto) return;
  for (var b = 0; b < S.nb; b++) if (!S.board[b]) callNext(b);
}

/* ---------- Aktionen ---------- */
function act(fn) { return function () { fn.apply(null, arguments); dirty(); save(); render(); }; }

function addPlayer(name) {
  name = String(name || "").trim(); if (!name) return;
  S.players.push({ id: S.nid++, name: name.slice(0, 40), paid: false, here: false });
}
function startDraw() {
  var here = S.players.filter(function (p) { return p.here; });
  var ps = (here.length ? here : S.players).map(function (p) { return p.id; });
  var err = null;
  if (ps.length < 2) err = t("Mindestens 2 Spieler nötig.");
  else if (S.fmt === "dko" && ps.length < 4) err = t("Doppel-K.O. braucht mindestens 4 Spieler.");
  else if (S.fmt === "swiss" && ps.length < 4) err = t("Schweizer System braucht mindestens 4 Spieler.");
  else if (S.fmt === "groups" && ps.length < 4) err = t("Gruppen + K.O. braucht mindestens 4 Spieler.");
  else if (S.fmt === "groups" && ps.length < S.ng * 2) err = t("Zu viele Gruppen für so wenige Spieler.");
  UI.err.start = err; if (err) return;
  shuffle(ps);
  var d = { ids: ps.slice() };
  if (S.fmt === "groups") { d.groups = []; for (var g = 0; g < S.ng; g++) d.groups.push([]); ps.forEach(function (id, i) { d.groups[i % S.ng].push(id); }); }
  else if (S.fmt === "league") d.groups = [ps.slice()];
  else if (S.fmt === "swiss") {
    S.sr = Math.min(S.sr, ps.length - 1);
    if (S.sko > ps.length) S.sko = ps.length >= 8 ? 8 : ps.length >= 4 ? 4 : 2;
    var r1 = []; for (var q = 0; q + 1 < ps.length; q += 2) r1.push([ps[q], ps[q + 1]]);
    if (ps.length % 2) r1.push([ps[ps.length - 1], null]);
    d.swiss = [r1];
  }
  else d.seeds = ps.slice();
  S.draw = d; S.started = true; S.res = {}; S.board = {}; S.wr = {}; S.last = {}; S.wc = {}; S.fin = {}; S.t0 = null; S.tab = "p";
  dirty(); syncBoards();
}
function resetTournament() { S.defer = {}; S.started = false; S.draw = null; S.res = {}; S.board = {}; S.wr = {}; S.last = {}; S.wc = {}; S.fin = {}; S.t0 = null; }
function hasResults() { return Object.keys(S.res).some(function (k) { var r = S.res[k]; return r && (r.la != null || r.lb != null); }); }

function saveResult(id, form) {
  var m = B().byId[id]; if (!m) return false;
  var g = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? num(el.value) : null; };
  var r = { la: g("la"), lb: g("lb"), a1: g("a1"), a2: g("a2"), o1: g("o1"), o2: g("o2"), h1: g("h1"), h2: g("h2"), b1: g("b1"), b2: g("b2") };
  ["la", "lb", "o1", "o2", "h1", "h2", "b1", "b2"].forEach(function (k) { if (r[k] != null) r[k] = Math.max(0, Math.round(r[k])); });
  if (r.h1 != null && r.h1 > 170) r.h1 = 170; if (r.h2 != null && r.h2 > 170) r.h2 = 170;
  if (!finished(r, m.st)) {
    UI.err[id] = fix2(m.st) ? t("Bei 2 Legs fix muss die Summe 2 sein (2:0, 1:1, 0:2).") : t("Der Sieger braucht genau {0} Legs, der Verlierer weniger.", need(m.st));
    return false;
  }
  delete UI.err[id];
  S.res[id] = r; dirty();
  var now = Date.now(), p = players(id);
  if (p[0] != null) S.fin[p[0]] = now; if (p[1] != null) S.fin[p[1]] = now;
  var bi = onBoard(id);
  if (bi >= 0) { freeBoard(bi); dirty(); if (S.auto) callNext(bi); }
  UI.edit = null;
  return true;
}


/* ---------- Beispielturnier ---------- */
function loadDemo() {
  var en = lang() === "en";
  S = fresh();
  S.name = en ? "Pub tournament (example)" : "Kneipenturnier (Beispiel)";
  ["Anna", "Ben", "Chris", "Dana", "Eli", "Finn", "Gina", "Hugo", "Ida", "Jan", "Kim", "Lea"].forEach(function (n, i) {
    addPlayer(n); var p = S.players[S.players.length - 1]; p.here = true; p.paid = i < 10;
  });
  S.fee = 10; S.stake = true; S.cur = "CHF"; S.split = [50, 30, 20]; S.nb = 3; S.writer = true; S.fmt = "groups"; S.ng = 2; S.adv = 4;
  startDraw();
  S.board = {}; S.wr = {}; S.wc = {};
  var skill = {}; S.players.forEach(function (p) { skill[p.id] = 45 + Math.random() * 32; });
  var clock = Date.now() - 95 * 60000, koDone = 0;
  S.t0 = clock;
  for (var guard = 0; guard < 200; guard++) {
    dirty();
    var q = queue(); if (!q.length) break;
    var id = q[0], m = B().byId[id];
    if (m.st !== "g") { if (koDone >= 2) break; koDone++; }
    var p = players(id), n = need(m.st);
    var aWins = skill[p[0]] + Math.random() * 14 > skill[p[1]] + Math.random() * 14;
    var lo = Math.floor(Math.random() * n);
    var av = function (x) { return Math.round((skill[x] + (Math.random() * 10 - 5)) * 100) / 100; };
    var r = { la: aWins ? n : lo, lb: aWins ? lo : n, a1: av(p[0]), a2: av(p[1]),
      o1: Math.random() < 0.3 ? 1 + (Math.random() < 0.2 ? 1 : 0) : 0, o2: Math.random() < 0.3 ? 1 : 0,
      h1: Math.random() < 0.25 ? 100 + Math.floor(Math.random() * 61) : null, h2: Math.random() < 0.2 ? 100 + Math.floor(Math.random() * 61) : null,
      b1: 12 + Math.floor(Math.random() * 12), b2: 13 + Math.floor(Math.random() * 12) };
    S.res[id] = r;
    clock += 6 * 60000; S.fin[p[0]] = clock; S.fin[p[1]] = clock - 60000;
  }
  dirty();
  for (var b = 0; b < S.nb; b++) callNext(b), dirty();
  S.tab = "p";
}

/* ---------- Ansichten ---------- */
function sel(name, opts, cur) {
  return '<select data-set="' + name + '">' + opts.map(function (o) { return '<option value="' + o[0] + '"' + (String(o[0]) === String(cur) ? " selected" : "") + ">" + esc(o[1]) + "</option>"; }).join("") + "</select>";
}
function confirmBtn(key, label) {
  if (UI.pend === key) return '<span class="row"><button class="b warn" data-do="confirm" data-k="' + key + '">' + t("Wirklich? Nochmal klicken") + '</button><button class="b" data-do="unpend">' + t("Abbrechen") + "</button></span>";
  return '<button class="b" data-do="confirm" data-k="' + key + '">' + label + "</button>";
}

function viewSetup() {
  var n = S.players.length, here = S.players.filter(function (p) { return p.here; }).length, paid = S.players.filter(function (p) { return p.paid; }).length;
  var locked = S.started;
  var h = "";
  if (locked) {
    h += '<div class="card"><h2>' + t("Turnier läuft") + " · " + S.draw.ids.length + " " + t("Spieler") + "</h2>" +
      '<p class="mu">' + esc(fmtName(S.fmt)) + (S.fmt === "groups" ? " · " + S.ng + " " + (lang() === "en" ? "groups" : "Gruppen") + ", " + S.adv + " " + (lang() === "en" ? "qualify" : "weiter") : "") + " · " + S.nb + " " + t("Boards") + "</p>" +
      '<div class="row">' + (hasResults() ? "" : '<button class="b" data-do="redraw">🎲 ' + t("Neu auslosen") + "</button>") +
      confirmBtn("reset", t("Turnier zurücksetzen (Spieler bleiben)")) + "</div>" +
      (hasResults() ? "" : '<p class="mu">' + t("Nur möglich, solange noch kein Ergebnis eingetragen ist.") + "</p>") + "</div>";
  }
  h += '<div class="card"><h2>' + t("Teilnehmer") + " (" + n + ")</h2>" +
    (locked ? "" : '<div class="row"><input id="tp-name" placeholder="' + t("Name eingeben") + '" maxlength="40" style="flex:1;min-width:150px"><button class="b p" data-do="add">' + t("Hinzufügen") + "</button></div>" +
      '<details class="multi"><summary>' + t("Mehrere Namen auf einmal (einer pro Zeile)") + '</summary><textarea id="tp-multi" rows="5"></textarea><button class="b" data-do="addmulti">' + t("Namen übernehmen") + "</button></details>") +
    '<div class="plist">' + (S.players.map(function (p) {
      var inT = !locked || S.draw.ids.indexOf(p.id) >= 0;
      return '<div class="pl' + (inT ? "" : " out") + '"><span class="nm">' + esc(p.name) + '</span>' +
        (S.stake ? '<label class="chk"><input type="checkbox" data-pf="paid" data-id="' + p.id + '"' + (p.paid ? " checked" : "") + "> " + t("Bezahlt") + "</label>" : "") +
        (locked ? "" : '<label class="chk"><input type="checkbox" data-pf="here" data-id="' + p.id + '"' + (p.here ? " checked" : "") + "> " + t("Anwesend") + "</label>" +
        '<button class="x" data-do="del" data-id="' + p.id + '" title="' + t("Entfernen") + '" aria-label="' + t("Entfernen") + '">✕</button>') + "</div>";
    }).join("") || '<p class="mu">' + t("Noch keine Teilnehmer.") + "</p>") + "</div>" +
    (here ? '<p class="mu">' + t("Anwesend markiert") + ": " + here + "/" + n + "</p>" : "") +
    (locked ? "" : '<p class="mu">' + t("Wenn mindestens ein Spieler als anwesend markiert ist, werden beim Start nur anwesende Spieler ausgelost.") + "</p>") + "</div>";

  h += prizeCard();
  if (!locked) {
    h += '<div class="card"><h2>' + t("Format") + "</h2>" +
      '<div class="row"><label>' + t("Turniername") + ' <input data-set="name" value="' + esc(S.name) + '" placeholder="' + t("z. B. Kneipenturnier November") + '" maxlength="60"></label></div>' +
      '<div class="seg">' + [["groups", t("Gruppen + K.O.")], ["ko", t("K.O.")], ["dko", t("Doppel-K.O.")], ["league", t("Liga (jeder gegen jeden)")], ["swiss", t("Schweizer System")]].map(function (o) {
        return '<button class="b' + (S.fmt === o[0] ? " p" : "") + '" data-do="fmt" data-v="' + o[0] + '">' + o[1] + "</button>"; }).join("") + "</div>" +
      (S.fmt === "groups" ? '<div class="row"><label>' + t("Anzahl Gruppen") + " " + sel("ng", [1, 2, 3, 4, 5, 6, 7, 8].map(function (x) { return [x, x]; }), S.ng) + "</label><label>" + t("Weiter pro Gruppe") + " " + sel("adv", [1, 2, 3, 4].map(function (x) { return [x, x]; }), S.adv) + "</label></div>" : "") +
      (S.fmt === "swiss" ? '<div class="row"><label>' + t("Runden") + " " + sel("sr", [3, 4, 5, 6, 7, 8, 9].map(function (x) { return [x, x]; }), S.sr) + "</label><label>" + t("Danach K.O. für die Besten") + " " + sel("sko", [[0, t("kein K.O.")], [2, t("Top") + " 2"], [4, t("Top") + " 4"], [8, t("Top") + " 8"], [16, t("Top") + " 16"]], S.sko) + "</label></div>" : "") +
      (S.fmt === "groups" || S.fmt === "league" ? '<label class="chk"><input type="checkbox" data-sb="rr2"' + (S.rr2 ? " checked" : "") + "> " + t("Hin- und Rückspiel") + "</label>" : "") +
      (S.fmt === "groups" || S.fmt === "ko" ? '<label class="chk"><input type="checkbox" data-sb="third"' + (S.third ? " checked" : "") + "> " + t("Spiel um Platz 3") + "</label>" : "") +
      '<p class="mu">' + rulesFmt() + "</p></div>";
    h += '<div class="card"><h2>' + t("Spielmodus") + "</h2>" +
      (S.fmt === "groups" || S.fmt === "league" || S.fmt === "swiss" ? modeRow("g", t("Gruppen / Liga / Runden")) : "") +
      (S.fmt !== "league" && !(S.fmt === "swiss" && S.sko < 2) ? modeRow("k", t("K.O.-Runden")) + modeRow("f", t("Finale")) : "") + "</div>";
  }
  h += '<div class="card"><h2>' + t("Boards und Ablauf") + "</h2>" +
    '<div class="row"><label>' + t("Anzahl Boards") + " " + sel("nb", [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16].map(function (x) { return [x, x]; }), S.nb) + "</label></div>" +
    '<label class="chk"><input type="checkbox" data-sb="auto"' + (S.auto ? " checked" : "") + "> " + t("Nächstes Spiel automatisch ansagen") + "</label>" +
    '<label class="chk"><input type="checkbox" data-sb="writer"' + (S.writer ? " checked" : "") + "> " + t("Schreiber einteilen") + "</label>" +
    '<p class="mu">' + t("Der Verlierer des letzten Spiels am Board schreibt das nächste Spiel. Ist er selbst dran, übernimmt ein anderer freier Spieler.") + "</p></div>";
  if (!locked) h += (UI.err.start ? '<p class="wa">' + esc(UI.err.start) + "</p>" : "") + '<button class="b p big-btn" data-do="start">🎯 ' + t("Auslosen und starten") + "</button>";
  h += backupCard();
  h += '<div class="danger row">' + (S.started || S.players.length ? confirmBtn("demo", "🎲 " + t("Beispielturnier laden")) : '<button class="b" data-do="demo">🎲 ' + t("Beispielturnier laden") + "</button>") + confirmBtn("all", "🗑 " + t("Alles löschen")) + '</div><p class="mu">' + t("Lädt ein Beispiel mit 12 Spielern, fertiger Gruppenphase und laufender K.O.-Runde. Der aktuelle Stand wird ersetzt.") + "</p>";
  return h;
}
function prizeCard() {
  var h = '<div class="card"><h2>' + t("Preisgeld") + '</h2><div class="seg">' +
    '<button class="b' + (!S.stake ? " p" : "") + '" data-do="stake" data-v="0">' + t("Ohne Einsatz") + "</button>" +
    '<button class="b' + (S.stake ? " p" : "") + '" data-do="stake" data-v="1">' + t("Mit Einsatz spielen") + "</button></div>";
  if (!S.stake) return h + "</div>";
  var P0 = pot(), n = S.started ? S.draw.ids.length : S.players.length, sum = S.split.reduce(function (a, b) { return a + (b || 0); }, 0);
  h += '<div class="row"><label>' + t("Startgeld pro Person") + ' <input class="n" data-set="fee" inputmode="decimal" value="' + (S.fee || "") + '"></label>' +
    "<label>" + t("Währung") + ' <input class="n" data-set="cur" maxlength="4" value="' + esc(S.cur) + '"></label></div>' +
    '<div class="row"><label>' + t("Zusätzliches Preisgeld (Sponsor)") + ' <input class="n" data-set="extra" inputmode="decimal" value="' + (S.extra || "") + '"></label>' +
    "<label>" + t("Abzug Veranstalter (%)") + ' <input class="n" data-set="house" inputmode="decimal" value="' + (S.house || "") + '"></label></div>' +
    '<p class="mu">' + t("Eingenommen") + ": <b>" + money(P0.paid * (S.fee || 0)) + "</b> (" + P0.paid + "/" + n + ") · " + t("offen") + ": " + money((n - P0.paid) * (S.fee || 0)) + "</p>" +
    '<div class="pot">' + t("Topf") + ": <b>" + money(P0.net) + '</b></div><div class="split">' +
    prizeRows(false).map(function (r, i) {
      return '<div class="pl"><span class="nm"><b>' + r.place + ". " + t("Platz") + '</b></span><input class="n" data-split="' + i + '" inputmode="decimal" value="' + r.pct + '"> %<b class="amt">' + money(r.amount) + "</b></div>";
    }).join("") + '</div><div class="row">' + (S.split.length < 4 ? '<button class="b sm" data-do="splitadd">+ ' + t("Platz hinzufügen") + "</button>" : "") +
    (S.split.length > 1 ? '<button class="b sm" data-do="splitdel">− ' + t("Platz entfernen") + "</button>" : "") + "</div>" +
    (Math.abs(sum - 100) > 0.01 ? '<p class="wa">' + t("Die Prozente ergeben zusammen {0} %, nicht 100 %.", Math.round(sum * 100) / 100) + "</p>" : "") +
    '<p class="mu">' + t("Topf = Startgeld × bezahlte Spieler + Sponsor, abzüglich Veranstalter-Anteil.") + "</p></div>";
  return h;
}
function prizeResult() {
  if (!S.stake || !S.started) return "";
  var rows = prizeRows(true), medal = ["🥇", "🥈", "🥉", "4."];
  return '<div class="card"><h2>💰 ' + t("Auszahlung") + ' <span class="mu">· ' + t("Topf") + ": " + money(pot().net) + "</span></h2>" +
    rows.map(function (r) {
      return '<div class="pl"><span class="tn">' + (medal[r.place - 1] || r.place + ".") + '</span><span class="nm">' + (r.who || '<span class="mu">' + t("noch offen") + "</span>") + '</span><span class="mu">' + r.pct + ' %</span><b class="amt">' + money(r.shared != null ? r.shared : r.amount) + (r.shared != null ? ' <span class="mu">/ ' + (lang() === "en" ? "each" : "pro Kopf") + "</span>" : "") + "</b></div>";
    }).join("") + "</div>";
}
function fmtName(f) { return f === "groups" ? t("Gruppen + K.O.") : f === "ko" ? t("K.O.") : f === "dko" ? t("Doppel-K.O.") : f === "swiss" ? t("Schweizer System") : t("Liga (jeder gegen jeden)"); }
function rulesFmt() {
  return S.fmt === "groups" ? t("Die Besten jeder Gruppe kommen in die K.O.-Runde, über Kreuz gesetzt (Gruppensieger gegen Zweite anderer Gruppen).")
    : S.fmt === "ko" ? t("K.O.: Wer verliert, scheidet aus. Freilose gehen an die ersten Plätze der Auslosung.")
    : S.fmt === "dko" ? t("Doppel-K.O.: Wer zweimal verliert, scheidet aus. Wer im Winner-Bracket verliert, spielt im Loser-Bracket weiter. Im Grand Final trifft der Sieger des Winner-Brackets auf den Sieger des Loser-Brackets (ein Spiel).")
    : S.fmt === "swiss" ? t("Schweizer System: In jeder Runde spielen Spieler mit gleich vielen Punkten gegeneinander, niemand zweimal gegen denselben. Runde 1 wird ausgelost, jede weitere Runde entsteht aus der aktuellen Tabelle.")
    : t("Liga: Jeder spielt gegen jeden, die Tabelle entscheidet.");
}
function modeRow(k, label) {
  var m = mode(k), opts = (k === "g" ? [[1], [3], [5], [7], ["fix2"]] : [[1], [3], [5], [7], [9], [11]]).map(function (o) { return [o[0], o[0] === "fix2" ? t("2 Legs fix (Unentschieden möglich)") : "Best of " + o[0]]; });
  return '<div class="pl"><span class="nm"><b>' + label + '</b><br><span class="mu">' + modeTxt(k) + "</span></span>" +
    sel("bo_" + k, opts, fix2(k) ? "fix2" : m.bo) + sel("x_" + k, [[301, 301], [501, 501], [701, 701]], m.x) + "</div>";
}

function backupCard() {
  return '<details class="card"><summary><b>' + t("Datensicherung") + "</b></summary>" +
    '<div class="row" style="margin-top:10px"><button class="b" data-do="export">⬇ ' + t("Sichern (Datei herunterladen)") + "</button>" +
    '<label class="b filebtn">⬆ ' + t("Wiederherstellen (Datei wählen)") + '<input type="file" accept=".json,application/json" data-do="importfile"></label></div>' +
    (UI.backup ? '<p class="mu">' + t("Falls der Download nicht startet: Text kopieren und speichern.") + '</p><textarea readonly rows="4" onclick="this.select()">' + esc(UI.backup) + "</textarea>" : "") +
    '<p class="mu">' + t("Oder gesicherten Text einfügen:") + '</p><textarea id="tp-imp" rows="2"></textarea><div class="row"><button class="b" data-do="importtext">' + t("Text importieren") + "</button></div>" +
    (UI.imp ? '<p class="' + (UI.imp.ok ? "w" : "wa") + '">' + esc(UI.imp.msg) + "</p>" : "") +
    '<p class="mu">' + t("Wiederherstellen überschreibt den aktuellen Stand.") + "</p></details>";
}

// Ergebnis-Formular oder Zusammenfassung
function matchBox(id, opts) {
  opts = opts || {};
  var m = B().byId[id], r = resolve(id), res = S.res[id] || {};
  var p = players(id);
  var nA = r.a && r.a.p != null ? esc(nm(r.a.p)) : '<span class="mu">' + esc(r.a ? r.a.ph : "") + "</span>";
  var nB = r.b && r.b.p != null ? esc(nm(r.b.p)) : '<span class="mu">' + esc(r.b ? r.b.ph : "") + "</span>";
  var wA = r.done && r.win != null && r.win === p[0], wB = r.done && r.win != null && r.win === p[1];
  var head = opts.form ? "" : '<div class="mh"><span class="mu">' + esc(m.label) + (m.no ? " · #" + m.no : "") + "</span>" +
    (S.wr[id] != null && !r.done ? '<span class="mu">✍ ' + t("Schreiber") + ": " + esc(nm(S.wr[id])) + "</span>" : "") + "</div>";
  if (UI.edit === id || opts.form) {
    var f = function (n, ph, cls) { return '<input class="n ' + (cls || "") + '" name="' + n + '" inputmode="decimal" placeholder="' + ph + '" value="' + (res[n] != null ? res[n] : "") + '">'; };
    return '<form class="m edit" data-id="' + id + '">' + head +
      '<div class="t"><div class="' + (wA ? "w" : "") + '">' + nA + "</div><div>" + f("la", "0") + " : " + f("lb", "0") + '</div><div class="' + (wB ? "w" : "") + '">' + nB + "</div></div>" +
      '<details class="st"' + (res.a1 != null || res.o1 ? " open" : "") + '><summary class="mu">' + t("Statistik") + " (Ø, 180er, High Finish, " + t("Bestes Leg (Darts)") + ")</summary>" +
      [["a", t("Ø Average")], ["o", t("180er")], ["h", t("High Finish")], ["b", t("Bestes Leg (Darts)")]].map(function (x) {
        return '<div class="a">' + f(x[0] + "1", "–") + "<span>" + x[1] + "</span>" + f(x[0] + "2", "–") + "</div>"; }).join("") +
      '<p class="mu">' + t("Statistik pro Spiel ist freiwillig. Ø, 180er, High Finish und bestes Leg fliessen in die Auswertung ein.") + "</p></details>" +
      (UI.err[id] ? '<p class="wa">' + esc(UI.err[id]) + "</p>" : "") +
      '<div class="row"><button class="b p" type="submit">' + (onBoard(id) >= 0 ? t("Ergebnis speichern und Board freigeben") : t("Speichern")) + "</button>" +
      (opts.form ? "" : '<button class="b" type="button" data-do="cancel">' + t("Abbrechen") + "</button>") + "</div></form>";
  }
  var score = r.done && !r.bye ? '<b class="sc">' + res.la + " : " + res.lb + "</b>" : r.bye ? '<span class="mu">' + t("Freilos") + "</span>" : '<span class="mu">–</span>';
  var btn = r.playable || (r.done && !r.bye) ? '<button class="b sm" data-do="edit" data-id="' + id + '">' + (r.done ? t("Ändern") : t("Eintragen")) + "</button>" : "";
  var bi = onBoard(id);
  return '<div class="m">' + head + '<div class="t"><div class="' + (wA ? "w" : "") + '">' + nA + "</div><div>" + score + '</div><div class="' + (wB ? "w" : "") + '">' + nB + "</div></div>" +
    '<div class="mf">' + (bi >= 0 ? '<span class="pill">🎯 ' + t("Board") + " " + (bi + 1) + "</span>" : "") + btn + "</div></div>";
}

function groupTable(g, tv) {
  var q = S.fmt === "groups" ? S.adv : 0, rows = stand(g), dr = fix2("g");
  return '<div class="sc"><table><tr><th>#</th><th class="l">' + (lang() === "en" ? "Player" : "Spieler") + "</th><th>" + t("Sp") + "</th>" + (tv ? "" : "<th>" + t("S") + "</th>" + (dr ? "<th>" + t("U") + "</th>" : "") + "<th>" + t("N") + "</th>") + "<th>" + t("Legs") + "</th>" + (tv ? "" : "<th>" + t("Diff") + "</th>") + "<th>" + t("Ø") + "</th><th>" + t("Pkt") + "</th></tr>" +
    rows.map(function (x, i) {
      return '<tr class="' + (i < q ? "q" : "") + '"><td>' + (i + 1) + '</td><td class="l">' + esc(nm(x.id)) + "</td><td>" + x.sp + "</td>" + (tv ? "" : "<td>" + x.w + "</td>" + (dr ? "<td>" + x.d + "</td>" : "") + "<td>" + x.l + "</td>") + "<td>" + x.lf + ":" + x.la + "</td>" + (tv ? "" : "<td>" + (x.diff > 0 ? "+" : "") + x.diff + "</td>") + "<td>" + (x.avg ? x.avg.toFixed(tv ? 1 : 2) : "–") + "</td><td><b>" + x.pts + "</b></td></tr>";
    }).join("") + "</table></div>";
}

function swissTable(tv, limit) {
  var rows = swissStand(), q = S.sko >= 2 ? S.sko : 0, dr = fix2("g");
  if (limit) rows = rows.slice(0, limit);
  return '<div class="sc"><table><tr><th>#</th><th class="l">' + (lang() === "en" ? "Player" : "Spieler") + "</th><th>" + t("Sp") + "</th>" + (tv ? "" : "<th>" + t("S") + "</th>" + (dr ? "<th>" + t("U") + "</th>" : "") + "<th>" + t("N") + "</th>") + "<th>" + t("Legs") + "</th>" + (tv ? "" : "<th>" + t("Diff") + "</th>") + "<th>" + t("BH") + "</th><th>" + t("Ø") + "</th><th>" + t("Pkt") + "</th></tr>" +
    rows.map(function (x, i) {
      return '<tr class="' + (i < q ? "q" : "") + '"><td>' + (i + 1) + '</td><td class="l">' + esc(nm(x.id)) + (x.bye ? ' <span class="mu">(F)</span>' : "") + "</td><td>" + x.sp + "</td>" + (tv ? "" : "<td>" + x.w + "</td>" + (dr ? "<td>" + x.d + "</td>" : "") + "<td>" + x.l + "</td>") + "<td>" + x.lf + ":" + x.la + "</td>" + (tv ? "" : "<td>" + (x.diff > 0 ? "+" : "") + x.diff + "</td>") + "<td>" + x.bh + "</td><td>" + (x.avg ? x.avg.toFixed(tv ? 1 : 2) : "–") + "</td><td><b>" + x.pts + "</b></td></tr>";
    }).join("") + "</table></div>";
}
function viewSwiss() {
  var rs = swissRounds(), h = "";
  h += '<p class="mu"><b>' + modeTxt("g") + "</b> · " + t("Runde") + " " + rs.length + "/" + S.sr + ". " + t("Rang: Punkte, Buchholz (Punkte der Gegner), Leg-Differenz, gewonnene Legs, Ø-Average.") + (S.sko >= 2 ? " " + t("Grün = qualifiziert für die K.O.-Runde.") : "") + "</p>";
  h += '<div class="card"><h2>' + t("Tabelle") + "</h2>" + swissTable() + "</div>";
  if (rs.length < S.sr) h += '<p class="mu">' + t("Runde {0} wird ausgelost, sobald Runde {1} fertig ist.", rs.length + 1, rs.length) + "</p>";
  for (var r = rs.length - 1; r >= 0; r--) {
    h += '<details class="card"' + (r === rs.length - 1 ? " open" : "") + "><summary><b>" + t("Runde") + " " + (r + 1) + "</b>" + (swissRoundDone(r) ? ' <span class="mu">✓</span>' : "") + "</summary>" +
      rs[r].map(function (pr) { return pr[1] == null ? '<p class="mu">' + t("Freilos für {0} (2 Punkte)", esc(nm(pr[0]))) + "</p>" : matchBox("s" + (r + 1) + "_" + pr[0] + "_" + pr[1]); }).join("") + "</details>";
  }
  return h;
}
function viewSchedule() {
  if (!S.started) return startHint();
  var b = B(), h = "";
  if (S.fmt === "swiss") h += viewSwiss();
  var gm = b.list.filter(function (m) { return m.st === "g" && !m.sw; });
  if (gm.length) {
    var done = gm.filter(function (m) { return resolve(m.id).done; }).length;
    h += '<p class="mu"><b>' + modeTxt("g") + "</b> · " + done + "/" + gm.length + " " + t("gespielt") + ". " + t(fix2("g") ? "Punkte: Sieg 2, Unentschieden 1, Niederlage 0. Rang: Punkte, Leg-Differenz, gewonnene Legs, Ø-Average." : "Rang: Punkte, Leg-Differenz, gewonnene Legs, Ø-Average.") + (S.fmt === "groups" ? " " + t("Grün = qualifiziert für die K.O.-Runde.") : "") + "</p>";
    h += '<div class="grid g2">' + S.draw.groups.map(function (_, g) {
      return '<div class="card"><h2>' + (S.fmt === "league" ? (S.name ? esc(S.name) : "Liga") : t("Gruppe") + " " + LETTERS[g]) + "</h2>" + groupTable(g) +
        '<h3 class="sub">' + t("Spiele") + "</h3>" + gm.filter(function (m) { return m.g === g; }).map(function (m) { return matchBox(m.id); }).join("") + "</div>";
    }).join("") + "</div>";
  }
  var km = b.list.filter(function (m) { return m.st !== "g"; });
  if (km.length) {
    if (!stageDone()) h += '<p class="wa">' + t(S.fmt === "swiss" ? "Schweizer-System-Runden noch nicht fertig – die K.O.-Paarungen stehen danach fest." : "Gruppenphase noch nicht fertig – die K.O.-Paarungen stehen danach fest.") + "</p>";
    h += '<div class="card"><h2>' + t("K.O.-Runden") + ' <span class="mu">· ' + modeTxt("k") + " · " + t("Finale") + ": " + modeTxt("f") + "</span></h2>" +
      km.filter(function (m) { var r = resolve(m.id); return !(r.bye); }).map(function (m) { return matchBox(m.id); }).join("") + "</div>";
  }
  return h;
}

function bracketCol(ids, title) {
  ids = ids.filter(function (id) { var r = resolve(id); return !(r.a && r.b && r.a.ready && r.b.ready && r.a.p == null && r.b.p == null); });
  if (!ids.length) return "";
  return '<div class="brc"><div class="brt mu">' + esc(title) + '</div><div class="brm">' + ids.map(function (id) {
    var r = resolve(id), p = players(id), res = S.res[id] || {};
    var row = function (side) {
      var s = side ? r.b : r.a, pid = p[side], w = r.done && r.win != null && r.win === pid && pid != null;
      var label = pid != null ? esc(nm(pid)) : '<span class="mu">' + esc(s ? s.ph : "") + "</span>";
      var sc = r.done && !r.bye ? (side ? res.lb : res.la) : "";
      var av = r.done && !r.bye ? (side ? res.a2 : res.a1) : null;
      return '<div class="br-r' + (w ? " wn" : "") + '"><span class="bn">' + label + "</span>" + (av != null ? '<span class="bav">Ø ' + Number(av).toFixed(2) + "</span>" : "") + "<b>" + (sc === undefined ? "" : sc) + "</b></div>";
    };
    var bi = onBoard(id);
    return '<div class="bm' + (bi >= 0 ? " live" : "") + (r.bye ? " byem" : "") + '">' + row(0) + row(1) + (bi >= 0 ? '<div class="mu bmb">🎯 ' + t("Board") + " " + (bi + 1) + "</div>" : "") + "</div>";
  }).join("") + "</div></div>";
}
function viewBracket() {
  if (!S.started) return startHint();
  if (S.fmt === "league" || (S.fmt === "swiss" && S.sko < 2)) return viewSchedule();
  var b = B(), h = "";
  if (S.fmt === "swiss" && !swissDone()) h += '<p class="wa">' + t("Schweizer-System-Runden noch nicht fertig – die K.O.-Paarungen stehen danach fest.") + "</p>";
  else if (!groupsDone()) h += '<p class="wa">' + t("Gruppenphase noch nicht fertig – die K.O.-Paarungen stehen danach fest.") + "</p>";
  var champ = podium();
  if (champ && champ[0] != null) h += '<div class="card champ">🏆 ' + t("Turniersieger") + "<b>" + esc(nm(champ[0])) + "</b></div>";
  if (S.fmt === "dko") {
    var k = b.k, J = 2 * (k - 1), wb = "", lb = "";
    for (var r = 1; r <= k; r++) wb += bracketCol(b.list.filter(function (m) { return m.br === "w" && m.r === r; }).map(function (m) { return m.id; }), r === k ? t("Winner-Finale") : t("Runde") + " " + r);
    for (var j = 1; j <= J; j++) lb += bracketCol(b.list.filter(function (m) { return m.br === "l" && m.r === j; }).map(function (m) { return m.id; }), j === J ? t("Loser-Finale") : t("Runde") + " " + j);
    h += '<div class="card"><h2>' + t("Grand Final") + '</h2><div class="br">' + bracketCol(["gf"], t("Sieger") + " WB – " + t("Sieger") + " LB") + "</div></div>";
    h += '<div class="card"><h2>' + t("Winner-Bracket") + '</h2><div class="br">' + wb + '</div></div><div class="card"><h2>' + t("Loser-Bracket") + '</h2><div class="br">' + lb + "</div></div>";
  } else {
    var cols = "";
    for (var r2 = 1; r2 <= b.k; r2++) cols += bracketCol(b.list.filter(function (m) { return m.id.indexOf("k" + r2 + "_") === 0; }).map(function (m) { return m.id; }), roundName(r2, b.k));
    h += '<div class="card"><div class="br">' + cols + "</div>" + (b.byId.p3 ? '<div class="br p3">' + bracketCol(["p3"], t("Spiel um Platz 3")) + "</div>" : "") + "</div>";
  }
  return h;
}

function waiting() {
  var bs = busy(-1), q = queue(), idx = {};
  q.forEach(function (id, n) { players(id).forEach(function (p) { if (idx[p] == null) idx[p] = n; }); });
  return S.draw.ids.filter(function (id) { return !bs[id] && idx[id] != null; })
    .map(function (id) { return { id: id, ts: S.fin[id] || S.t0 }; })
    .sort(function (a, b) { return (a.ts || 1e18) - (b.ts || 1e18) || idx[a.id] - idx[b.id]; });
}
function waitHtml(n) {
  var w = waiting().slice(0, n || 99);
  return w.map(function (x) { return '<div class="pl"><span class="nm">' + esc(nm(x.id)) + '</span><b class="tn" data-w="' + (x.ts || "") + '">' + (x.ts ? fmtTime(x.ts) : "–") + "</b></div>"; }).join("") || '<p class="mu">' + t("Niemand wartet.") + "</p>";
}
function boardCard(bi, tv) {
  var id = S.board[bi];
  if (!id) {
    var nx = nextFor(bi);
    if (tv) return '<div class="card tvb"><div class="mu">' + t("Board").toUpperCase() + " " + (bi + 1) + '</div><div class="big ac">' + t("frei") + "</div></div>";
    return '<div class="card"><h2>' + t("Board") + " " + (bi + 1) + ' <span class="ac">· ' + t("frei") + "</span></h2>" +
      (nx ? '<p>' + t("Als Nächstes") + ": <b>" + esc(nm(players(nx)[0])) + "</b> " + t("gegen") + " <b>" + esc(nm(players(nx)[1])) + '</b> <span class="mu">' + esc(B().byId[nx].label) + '</span></p><button class="b p" data-do="call" data-b="' + bi + '">📣 ' + t("Nächstes Spiel ansagen") + "</button>" : '<p class="mu">' + t("Keine Partie verfügbar.") + "</p>") + "</div>";
  }
  var m = B().byId[id], p = players(id);
  if (tv) return '<div class="card tvb"><div class="mu">' + t("Board").toUpperCase() + " " + (bi + 1) + " · " + esc(m.label) + '</div><div class="big">' + esc(nm(p[0])) + '</div><div class="mu">' + t("gegen") + '</div><div class="big">' + esc(nm(p[1])) + '</div><div class="mu">' + modeTxt(m.st) + (S.wr[id] != null ? " · ✍ " + esc(nm(S.wr[id])) : "") + "</div></div>";
  return '<div class="card"><h2>🎯 ' + t("Board") + " " + (bi + 1) + ' <span class="mu">· ' + esc(m.label) + " · " + modeTxt(m.st) + "</span></h2>" +
    '<div class="call">' + esc(nm(p[0])) + ' <span class="mu">' + t("gegen") + "</span> " + esc(nm(p[1])) + "</div>" +
    (S.wr[id] != null ? '<p class="mu ctr">✍ ' + t("Schreiber") + ": <b>" + esc(nm(S.wr[id])) + "</b></p>" : "") +
    matchBox(id, { form: true }) + '<button class="b sm" data-do="unboard" data-b="' + bi + '">' + t("Zurück in die Warteschlange") + "</button></div>";
}
function viewBoards() {
  if (!S.started) return startHint();
  var q = queue(), bs = busy(-1), h = "";
  h += '<div class="row tvrow"><button class="b" data-do="tv">📺 ' + t("TV-Ansicht") + "</button></div>";
  var champ = podium();
  if (champ && champ[0] != null) h += '<div class="card champ">🏆 ' + t("Turniersieger") + "<b>" + esc(nm(champ[0])) + "</b></div>";
  h += '<div class="grid">';
  for (var b = 0; b < S.nb; b++) h += boardCard(b);
  h += "</div>";
  h += '<div class="grid"><div class="card"><h2>⏱ ' + t("Wartezeiten") + "</h2>" + waitHtml() + "</div>" +
    '<div class="card"><h2>' + t("Warteschlange") + ' <span class="mu">(' + q.length + ")</span></h2>" +
    (q.slice(0, 15).map(function (id, n) {
      var p = players(id), bz = bs[p[0]] || bs[p[1]], free = [];
      for (var b2 = 0; b2 < S.nb; b2++) if (!S.board[b2]) free.push(b2);
      return '<div class="pl"><span class="mu tn">' + (n + 1) + '.</span><span class="nm">' + esc(nm(p[0])) + " – " + esc(nm(p[1])) + ' <span class="mu">' + esc(B().byId[id].label) + (bz ? " · ⏳ " + t("spielt gerade") : "") + "</span></span>" +
        (bz ? "" : free.slice(0, 3).map(function (fb) { return '<button class="b sm" data-do="assign" data-b="' + fb + '" data-id="' + id + '">' + t("Board") + " " + (fb + 1) + "</button>"; }).join("")) + "</div>";
    }).join("") || '<p class="mu">' + t(podium() ? "Alle Spiele gespielt." : "Gerade ist kein Spiel bereit. Die nächsten Paarungen ergeben sich aus den laufenden Spielen.") + "</p>") + "</div></div>";
  h += '<details class="card"><summary><b>' + t("Regeln") + '</b></summary><ul class="rules"><li>' + rulesFmt() + "</li><li>" + t("Ausscore: Ist ein Leg nach 20 Aufnahmen nicht beendet, wirft jeder noch 3 Darts. Mehr Punkte gewinnt das Leg.") + "</li>" + (S.writer ? "<li>" + t("Der Verlierer des letzten Spiels am Board schreibt das nächste Spiel. Ist er selbst dran, übernimmt ein anderer freier Spieler.") + "</li>" : "") + "</ul></details>";
  return h;
}

function viewStats() {
  if (!S.started) return startHint();
  var T = stats().filter(function (s) { return s.sp > 0; });
  if (!T.length) return '<div class="card"><p class="mu">' + t("Noch keine Spiele gespielt.") + "</p></div>";
  var pod = podium(), place = {}, pl = places();
  if (pl) pl.forEach(function (x) { x.ids.forEach(function (id) { place[id] = x.from; }); });
  T.sort(function (a, b) { return (place[a.id] || 99) - (place[b.id] || 99) || (b.avg || 0) - (a.avg || 0) || b.w - a.w; });
  function best(key, low, fmt) {
    var c = T.filter(function (s) { return s[key]; }).sort(function (a, b) { return low ? a[key] - b[key] : b[key] - a[key]; })[0];
    return c ? esc(nm(c.id)) + " <b>" + fmt(c[key]) + "</b>" : "–";
  }
  var chip = function (title, v) { return '<div class="chip"><div class="mu">' + title + "</div><div>" + v + "</div></div>"; };
  var medal = ["🥇", "🥈", "🥉", "4."];
  return (pod && pod[0] != null ? '<div class="card champ">🏆 ' + t("Turniersieger") + "<b>" + esc(nm(pod[0])) + "</b></div>" : "") +
    prizeResult() + '<div class="chips">' + chip("🎯 " + t("Bestes Ø-Average"), best("avg", false, function (v) { return v.toFixed(2); })) + chip("💯 " + t("Meiste 180er"), best("t180", false, function (v) { return v; })) +
    chip("🔥 " + t("Höchstes Finish"), best("hf", false, function (v) { return v; })) + chip("⚡ " + t("Kürzestes Leg"), best("bl", true, function (v) { return v + (lang() === "en" ? " darts" : " Darts"); })) + "</div>" +
    '<div class="card"><h2>' + t("Statistik") + (pod ? "" : ' <span class="mu">(' + t("vorläufig") + ")</span>") + '</h2><div class="sc"><table><tr><th>' + t("Platz") + '</th><th class="l">' + (lang() === "en" ? "Player" : "Spieler") + "</th><th>" + t("Sp") + "</th><th>" + t("S") + "</th><th>" + t("N") + "</th><th>" + t("Legs") + "</th><th>" + t("Ø") + "</th><th>" + t("Bester Ø") + "</th><th>180</th><th>HF</th><th>" + (lang() === "en" ? "Best leg" : "Bestes Leg") + "</th></tr>" +
    T.map(function (s) { var pl = place[s.id]; return "<tr><td>" + (pl ? medal[pl - 1] : "–") + '</td><td class="l">' + esc(nm(s.id)) + "</td><td>" + s.sp + "</td><td>" + s.w + "</td><td>" + s.l + "</td><td>" + s.lf + ":" + s.la + "</td><td><b>" + (s.avg != null ? s.avg.toFixed(2) : "–") + "</b></td><td>" + (s.mx ? s.mx.toFixed(2) : "–") + "</td><td>" + (s.t180 || "–") + "</td><td>" + (s.hf || "–") + "</td><td>" + (s.bl || "–") + "</td></tr>"; }).join("") +
    "</table></div></div>";
}
function startHint() { return '<div class="card"><p>' + (lang() === "en" ? "Add players on the first tab and start the draw." : "Trage im ersten Reiter die Teilnehmer ein und starte die Auslosung.") + '</p><button class="b p" data-do="tab" data-v="t">' + t("Teilnehmer") + "</button></div>"; }

function viewTv() {
  var h = '<div class="tvhead"><div class="big">🎯 ' + esc(S.name || (lang() === "en" ? "Darts tournament" : "Dartturnier")) + '</div><button class="b" data-do="tvoff">✕ ' + t("TV-Ansicht beenden") + "</button></div>";
  if (!S.started) return h + startHint();
  var pod = podium();
  if (pod && pod[0] != null) h += '<div class="card champ">🏆 ' + t("Turniersieger") + "<b>" + esc(nm(pod[0])) + "</b></div>";
  h += '<div class="grid tvboards">'; for (var b = 0; b < S.nb; b++) h += boardCard(b, true); h += "</div>";
  var q = queue().slice(0, 6), bs = busy(-1);
  var T = stats().filter(function (s) { return s.avg != null; }).sort(function (a, b) { return b.avg - a.avg; }).slice(0, 5);
  h += '<div class="grid"><div class="card"><h2>' + t("Nächste Spiele") + "</h2>" + (q.map(function (id, n) { var p = players(id); return '<div class="pl"><span class="mu tn">' + (n + 1) + '.</span><span class="nm">' + esc(nm(p[0])) + " – " + esc(nm(p[1])) + ' <span class="mu">' + esc(B().byId[id].label) + (bs[p[0]] || bs[p[1]] ? " · ⏳" : "") + "</span></span></div>"; }).join("") || '<p class="mu">' + t(podium() ? "Alle Spiele gespielt." : "Gerade ist kein Spiel bereit. Die nächsten Paarungen ergeben sich aus den laufenden Spielen.") + "</p>") + "</div>" +
    '<div class="card"><h2>' + t("Top Average") + "</h2>" + (T.map(function (s, i) { return '<div class="pl"><span class="mu tn">' + (i + 1) + '.</span><span class="nm">' + esc(nm(s.id)) + "</span><b>" + s.avg.toFixed(2) + "</b></div>"; }).join("") || '<p class="mu">' + t("Noch keine Averages.") + "</p>") + "</div>" +
    '<div class="card"><h2>⏱ ' + t("Wartezeiten") + "</h2>" + waitHtml(6) + "</div></div>";
  if (S.fmt === "swiss" && (!swissDone() || S.sko < 2)) h += '<div class="card"><h2>' + t("Tabelle") + " · " + t("Runde") + " " + swissRounds().length + "/" + S.sr + "</h2>" + swissTable(true, 12) + "</div>";
  else if (S.fmt === "swiss") h += viewBracket().replace(/<div class="card champ">[\s\S]*?<\/b><\/div>/, "");
  else if (S.draw.groups && !(S.fmt === "groups" && groupsDone())) h += '<div class="grid g2">' + S.draw.groups.map(function (_, g) { return '<div class="card"><h2>' + (S.fmt === "league" ? "Liga" : t("Gruppe") + " " + LETTERS[g]) + "</h2>" + groupTable(g, true) + "</div>"; }).join("") + "</div>";
  else if (S.fmt !== "league") h += viewBracket().replace(/<div class="card champ">[\s\S]*?<\/b><\/div>/, "");
  h += '<div class="tvbrand">' + (QR ? '<img src="' + QR + '" alt="QR" width="120" height="120">' : "") + '<div><div class="tvwm">LEAVE<b>26</b></div><div>' + t("Mit Leave26 geplant. Checkouts sammeln, 180er zählen, mit Freunden vergleichen.") + '</div><div class="mu">' + t("Gratis im Google Play Store – QR-Code scannen") + "</div></div></div>";
  return h;
}

/* ---------- Rendern ---------- */
var TABS = [["t", "Teilnehmer"], ["g", "Spielplan"], ["p", "Boards"], ["k", "Turnierbaum"], ["s", "Statistik"]];
function render() {
  dirty();
  if (S.started) { while (swissNext()) dirty(); dirty(); syncBoards(); dirty(); save(); }
  document.body.classList.toggle("tv", UI.tv);
  var intro = document.getElementById("tp-intro");
  var h1 = document.getElementById("tp-h1");
  if (h1) h1.textContent = t("Turnier-Planer");
  if (intro) { intro.textContent = t("Plane dein lokales Dartturnier kostenlos: Teilnehmer eintragen, auslosen, Spiele auf die Boards verteilen und alles live auf dem TV zeigen. Alles bleibt in deinem Browser gespeichert."); }
  var nav = document.getElementById("tp-nav"), view = document.getElementById("tp-view");
  if (UI.tv) { nav.innerHTML = ""; view.innerHTML = viewTv(); return; }
  var tabs = TABS.filter(function (x) { return !(x[0] === "k" && (S.fmt === "league" || (S.fmt === "swiss" && S.sko < 2))); });
  nav.innerHTML = tabs.map(function (x) { return '<button class="' + (S.tab === x[0] ? "on" : "") + '" data-do="tab" data-v="' + x[0] + '">' + t(x[1]) + "</button>"; }).join("");
  view.innerHTML = S.tab === "t" ? viewSetup() : S.tab === "g" ? viewSchedule() : S.tab === "p" ? viewBoards() : S.tab === "k" ? viewBracket() : viewStats();
}

/* ---------- Ereignisse ---------- */
function setOpt(k, v) {
  if (k === "fee") { S.fee = Math.max(0, num(v) || 0); return; }
  if (k === "extra") { S.extra = Math.max(0, num(v) || 0); return; }
  if (k === "house") { S.house = Math.min(100, Math.max(0, num(v) || 0)); return; }
  if (k === "cur") { S.cur = String(v).trim().slice(0, 4); return; }
  if (k === "name") { S.name = String(v).slice(0, 60); return; }
  if (k === "ng" || k === "adv" || k === "nb" || k === "sr" || k === "sko") { S[k] = +v; return; }
  var mk = k.split("_");
  if (mk[0] === "bo") { var m = mk[1] === "g" ? S.mg : mk[1] === "f" ? S.mf : S.mk; if (v === "fix2") { m.fix2 = true; m.bo = 3; } else { m.fix2 = false; m.bo = +v; } return; }
  if (mk[0] === "x") { (mk[1] === "g" ? S.mg : mk[1] === "f" ? S.mf : S.mk).x = +v; }
}
root.addEventListener("click", function (e) {
  var el = e.target.closest("[data-do]"); if (!el || !root.contains(el)) return;
  var d = el.getAttribute("data-do"), id = el.getAttribute("data-id"), bi = el.getAttribute("data-b");
  if (d === "importfile") return;
  if (d !== "confirm" && d !== "unpend") UI.pend = null;
  switch (d) {
    case "tab": S.tab = el.getAttribute("data-v"); UI.edit = null; break;
    case "add": var inp = document.getElementById("tp-name"); addPlayer(inp.value); break;
    case "addmulti": document.getElementById("tp-multi").value.split(/\n|,|;/).forEach(addPlayer); break;
    case "del": S.players = S.players.filter(function (p) { return p.id !== +id; }); break;
    case "fmt": S.fmt = el.getAttribute("data-v"); break;
    case "start": startDraw(); break;
    case "redraw": if (!hasResults()) { resetTournament(); startDraw(); } break;
    case "confirm":
      var k = el.getAttribute("data-k");
      if (UI.pend !== k) { UI.pend = k; break; }
      UI.pend = null;
      if (k === "reset") { resetTournament(); S.tab = "t"; }
      if (k === "all") { S = fresh(); UI.backup = ""; }
      if (k === "demo") loadDemo();
      break;
    case "unpend": UI.pend = null; break;
    case "demo": loadDemo(); break;
    case "stake": S.stake = el.getAttribute("data-v") === "1"; break;
    case "splitadd": if (S.split.length < 4) S.split.push(0); break;
    case "splitdel": if (S.split.length > 1) S.split.pop(); break;
    case "edit": UI.edit = id; break;
    case "cancel": UI.edit = null; break;
    case "call": callNext(+bi); break;
    case "assign": if (!S.board[+bi]) { S.board[+bi] = id; S.t0 = S.t0 || Date.now(); if (S.writer) { var w = pickWriter(+bi, id); if (w != null) { S.wr[id] = w; S.wc[w] = (S.wc[w] || 0) + 1; } } } break;
    case "unboard": var mid = S.board[+bi]; S.board[+bi] = null; if (mid) { S.defer = S.defer || {}; S.defer[mid] = Date.now(); if (S.wr[mid] != null) { S.wc[S.wr[mid]]--; delete S.wr[mid]; } } break;
    case "tv": UI.tv = true; try { var rq = document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); if (rq && rq.catch) rq.catch(function () {}); } catch (x) {} break;
    case "tvoff": UI.tv = false; try { if (document.fullscreenElement) document.exitFullscreen().catch(function () {}); if (location.hash === "#tv") history.replaceState(null, "", location.pathname + location.search); } catch (x) {} break;
    case "export":
      UI.backup = JSON.stringify(S);
      try { var bl = new Blob([UI.backup], { type: "application/json" }), u = URL.createObjectURL(bl), a = document.createElement("a"); a.href = u; a.download = "leave26-turnier-" + new Date().toISOString().slice(0, 16).replace(/[:T]/g, "-") + ".json"; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(u); }, 1000); } catch (x) {}
      break;
    case "importtext": importData(document.getElementById("tp-imp").value); break;
  }
  dirty(); save(); render();
  if (d === "add") { var n2 = document.getElementById("tp-name"); if (n2) n2.focus(); }
});
root.addEventListener("keydown", function (e) { if (e.key === "Enter" && e.target.id === "tp-name") { e.preventDefault(); addPlayer(e.target.value); dirty(); save(); render(); var n = document.getElementById("tp-name"); if (n) n.focus(); } });
root.addEventListener("change", function (e) {
  var el = e.target;
  if (el.matches("[data-set]")) { setOpt(el.getAttribute("data-set"), el.value); }
  else if (el.matches("[data-sb]")) { S[el.getAttribute("data-sb")] = el.checked; }
  else if (el.matches("[data-split]")) { S.split[+el.getAttribute("data-split")] = Math.max(0, num(el.value) || 0); }
  else if (el.matches("[data-pf]")) { var p = P(+el.getAttribute("data-id")); if (p) p[el.getAttribute("data-pf")] = el.checked; }
  else if (el.matches('[data-do="importfile"]')) { var f = el.files && el.files[0]; if (!f) return; var rd = new FileReader(); rd.onload = function () { importData(rd.result); dirty(); save(); render(); }; rd.readAsText(f); return; }
  else return;
  dirty(); save(); render();
});
root.addEventListener("submit", function (e) {
  var f = e.target.closest("form.edit"); if (!f) return;
  e.preventDefault();
  saveResult(f.getAttribute("data-id"), f);
  dirty(); save(); render();
});
function importData(txt) {
  try {
    var o = JSON.parse(String(txt).trim());
    if (!o || !Array.isArray(o.players) || o.v !== 2) throw 0;
    S = Object.assign(fresh(), o); S.tab = "t"; UI.imp = { ok: true, msg: t("Stand wiederhergestellt.") };
  } catch (x) { UI.imp = { ok: false, msg: t("Import fehlgeschlagen: Die Daten sind ungültig.") }; }
}
window.addEventListener("storage", function (e) { if (e.key === KEY && e.newValue) { try { S = Object.assign(fresh(), JSON.parse(e.newValue)); } catch (x) {} render(); } });
document.addEventListener("l26:lang", function () { render(); });
setInterval(function () { root.querySelectorAll("[data-w]").forEach(function (el) { var ts = +el.getAttribute("data-w"); if (ts) el.textContent = fmtTime(ts); }); }, 1000);

if (root.getAttribute("data-demo") === "auto" && !S.started && !S.players.length) { loadDemo(); dirty(); save(); }
render();
})();
