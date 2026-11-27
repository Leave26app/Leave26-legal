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
  "Ø Average": "Avg", "180er": "180s", "Höchstes Finish": "Highest finish", "Bestes Leg (Darts)": "Best leg (darts)",
  "Ungültiges Ergebnis": "Invalid result",
  "Der Sieger braucht genau {0} Legs, der Verlierer weniger.": "The winner needs exactly {0} legs, the loser fewer.",
  "Bei 2 Legs fix muss die Summe 2 sein (2:0, 1:1, 0:2).": "With 2 fixed legs the sum must be 2 (2:0, 1:1, 0:2).",
  "frei": "free", "Board": "Board", "gegen": "vs", "Schreiber": "Marker",
  "Nächstes Spiel ansagen": "Call next match", "Keine Partie verfügbar.": "No match available.",
  "Als Nächstes": "Up next", "Zurück in die Warteschlange": "Back to the queue",
  "Ergebnis speichern und Board freigeben": "Save result and free board",
  "Warteschlange": "Queue", "Alle Spiele gespielt.": "All matches played.", "spielt gerade": "playing",
  "Wartezeiten": "Waiting times", "Niemand wartet.": "Nobody is waiting.", "Am Board": "On the board",
  "TV-Ansicht": "TV view", "Vollbild": "Full screen", "TV-Ansicht beenden": "Exit TV view",
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
  "Statistik pro Spiel ist freiwillig. Ø, 180er, höchstes Finish und bestes Leg fliessen in die Auswertung ein.": "Per-match stats are optional. Avg, 180s, highest finish and best leg feed into the stats.",
  "Kürzel": "Short", "Unentschieden": "Draw",
  "Beispielturnier laden": "Load example tournament",
  "Lädt ein Beispiel mit 12 Spielern, fertiger Gruppenphase und laufender K.O.-Runde. Der aktuelle Stand wird ersetzt.": "Loads an example with 12 players, a finished group stage and a running knockout stage. Replaces the current state.",
  "Diese Option gibt es nur in der Gruppenphase.": "This option is only available in the group stage.",
  "Liga + Stufenleiter": "League + stepladder", "Play-offs": "Play-offs", "Spiel 1": "Match 1", "Spiel 2": "Match 2", "Spiel 1 und Rote Laterne": "Match 1 and wooden spoon",
  "Wetten": "Bets", "Schluck-Wetten (Partymodus)": "Sip bets (party mode)", "Ausgeschiedene dürfen auf die restlichen Spiele Schlücke setzen. Richtig getippt: Einsatz × Quote verteilen. Falsch: Einsatz selbst trinken.": "Eliminated players can bet sips on the remaining matches. Right: hand out stake × odds. Wrong: drink the stake yourself.",
  "Alle dürfen wetten (nicht nur Ausgeschiedene)": "Everyone may bet (not only eliminated players)", "Max. Schlücke pro Wette": "Max sips per bet",
  "Wer wettet": "Who bets", "Tipp": "Pick", "Schlücke": "Sips", "Wette platzieren": "Place bet", "Sieg": "Win", "Genaues Ergebnis": "Exact score",
  "Quote": "Odds", "offen": "open", "verteilt {0}": "hands out {0}", "trinkt {0}": "drinks {0}", "Schluck-Bilanz": "Sip balance", "Verteilt": "Handed out", "Getrunken": "Drunk",
  "Noch niemand ausgeschieden – Wetten starten, sobald der Erste raus ist.": "Nobody is out yet – betting starts once the first player is eliminated.",
  "Gerade ist kein Spiel offen, auf das gewettet werden kann.": "No match open for betting right now.",
  "Quoten aus Average und Leg-Differenz im Turnier. Ohne Daten gilt 50:50.": "Odds from average and leg difference in this tournament. Without data it is 50:50.",
  "Wette löschen": "Delete bet", "Pause": "Resting", "Wetten vom Handy": "Bets from phones", "Handy-Wetten starten": "Start phone betting", "verbunden": "connected", "verbinde …": "connecting …",
  "Jeder öffnet einen Link auf seinem Handy und wettet selbst. Die Wetten landen automatisch hier. Läuft über den kostenlosen Dienst ntfy.sh, solange diese Seite offen ist.": "Everyone opens a link on their phone and bets themselves. Bets arrive here automatically. Runs via the free service ntfy.sh while this page is open.",
  "Link in die WhatsApp-Gruppe schicken. Wetten kommen automatisch hier an, solange diese Seite offen ist.": "Send the link to your WhatsApp group. Bets arrive here automatically while this page is open.",
  "Link teilen": "Share link", "Beenden": "Stop", "Link kopiert.": "Link copied.", "Wer bist du?": "Who are you?", "Das Turnier ist vorbei.": "The tournament is over.",
  "Du spielst selbst – keine Wette möglich.": "You are playing – no bet possible.", "Wetten nur für Ausgeschiedene.": "Only eliminated players can bet.", "Genaues Ergebnis": "Exact score",
  "Tipp antippen, dann Schlücke wählen.": "Tap a pick, then choose sips.", "Meine Wetten": "My bets", "gesendet": "sent", "Wette abgelehnt": "Bet rejected", "Noch keine Wetten.": "No bets yet.",
  "Wetten der anderen": "Other bets", "Senden fehlgeschlagen – bitte nochmal.": "Sending failed – please try again.", "Warte auf den Turnier-Laptop … Die Seite mit dem Turnier muss dort offen sein.": "Waiting for the tournament laptop … the tournament page must be open there.", "schreibt an Board {0}": "scoring board {0}",
  "Voraussichtliches Ende": "Expected finish", "Ansage an": "Announcements on", "Ansage aus": "Announcements off",
  "Endstand teilen": "Share final standings", "Zwischenstand teilen": "Share current standings", "Endstand": "Final standings", "Zwischenstand": "Current standings",
  "Farbe ändern": "Change colour", "Trotzdem hier spielen (der Plan wird angepasst):": "Play here anyway (the plan adapts):", "Hier spielen": "Play here", "Abweichend vom Plan – der Rest wird neu verteilt": "Off plan – the rest gets redistributed", "wartet, bis beide frei sind": "waiting until both are free", "Liga: Jeder spielt an jedem Board gleich oft.": "League: everyone plays equally often on each board.", "Mehr Statistik": "More stats", "ab 100": "100+", "Wetten auf dieses Spiel": "Bets on this match", "Statt Bier geht alles, was im Glas ist.": "Anything in your glass counts, not just beer.",
  "Play-offs für die Top": "Play-offs for the top", "Spiel um die Rote Laterne": "Wooden spoon match",
  "Liga + Stufenleiter: Erst spielt jeder gegen jeden. Danach steigen die Besten nach Ligaplatz in die Play-offs ein: 3. gegen 4., der Sieger gegen den 2., der Sieger im Finale gegen den Ligasieger.": "League + stepladder: everyone plays everyone first. Then the best enter the play-offs by league position: 3rd vs 4th, the winner vs 2nd, the winner in the final vs the league winner.",
  "Liga + Stufenleiter: Erst spielt jeder gegen jeden. Danach spielt der 2. gegen den 3., der Sieger im Finale gegen den Ligasieger.": "League + stepladder: everyone plays everyone first. Then 2nd plays 3rd, the winner meets the league winner in the final.",
  "Der Letzte der Liga spielt gegen den Verlierer von Spiel 1.": "The last in the league plays the loser of match 1.",
  "Liga noch nicht fertig – die Play-off-Paarungen stehen danach fest.": "League not finished yet – the play-off pairings follow from the table.",
  "Liga + Stufenleiter braucht mindestens {0} Spieler.": "League + stepladder needs at least {0} players.",
  "Platz": "Place", "Ligasieger": "League winner",
  "Legs": "Legs", "Sets": "Sets", "Sätze": "Sets", "je Best of {0} Legs": "each best of {0} legs",
  "Der Sieger braucht genau {0} Sätze, der Verlierer weniger.": "The winner needs exactly {0} sets, the loser fewer.",
  "Legs gesamt": "Total legs", "Ergebnis in Sätzen eintragen.": "Enter the result in sets.",
  "Rang: Punkte, Satz-Differenz, Leg-Differenz, Ø-Average.": "Rank: points, set difference, leg difference, average.",
  "Legs gesamt eintragen (freiwillig), dann zählt bei Gleichstand die Leg-Differenz.": "Enter total legs (optional); the leg difference then breaks ties."
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
    fmt: "groups", ng: 2, adv: 2, rr2: false, third: true, ltop: 4, lantern: false,
    bet: { on: false, all: false, max: 10 }, bets: [], bid: 1,
    mg: { bo: 3, x: 501, fix2: false }, mk: { bo: 3, x: 501 }, me: { bo: 3, x: 501 }, mf: { bo: 5, x: 501 },
    sr: 5, sko: 0,
    nb: 2, writer: false, auto: true, fee: 0, stake: false, cur: "CHF", extra: 0, house: 0, split: [50, 30, 20],
    started: false, draw: null, res: {}, board: {}, wr: {}, last: {}, wc: {}, fin: {}, defer: {}, t0: null, tab: "t"
  };
}
var S = fresh();
try { var raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch (e) {}
if (!S.bet) S.bet = { on: false, all: false, max: 10 };
function save() { if (UI.tvTab) return; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

var UI = { edit: null, err: {}, pend: null, backup: "", imp: "", tv: location.hash === "#tv", tvTab: location.hash === "#tv" };   // tvTab: eigener Tab nur zum Anzeigen, schreibt nie

/* ---------- Helfer ---------- */
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
function num(v) { v = String(v == null ? "" : v).trim().replace(",", "."); if (v === "") return null; var n = parseFloat(v); return isNaN(n) ? null : n; }
function P(id) { for (var i = 0; i < S.players.length; i++) if (S.players[i].id === id) return S.players[i]; return null; }
var PAL = ["#FF5A5A", "#45A9FF", "#3EDC8A", "#B886FF", "#FF9F43", "#F2C14E", "#FF6FB5", "#2DD4BF", "#A3E635", "#E879F9", "#94A3B8", "#FDE68A"];
function pc(id) { var p = P(id); if (!p) return ""; if (p.col) return p.col; var i = S.players.indexOf(p); return PAL[(i < 0 ? 0 : i) % PAL.length]; }
function cn(id) { return '<span class="pc" style="color:' + pc(id) + '">' + esc(nm(id)) + "</span>"; }
function nm(id) { var p = P(id); return p ? p.name : "?"; }
function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
var LETTERS = "ABCDEFGH";
function pow2(n) { var p = 2; while (p < n) p *= 2; return p; }
function fmtTime(ts) { var s = Math.max(0, Math.floor((Date.now() - ts) / 1000)); var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); s %= 60; return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(s).padStart(2, "0"); }

/* ---------- Spielmodus ---------- */
function mode(k) { return k === "g" ? S.mg : k === "f" ? S.mf : k === "e" ? (S.me || (S.me = { bo: 3, x: 501 })) : S.mk; }
function fix2(k) { return k === "g" && S.mg.fix2; }
function need(k) { return fix2(k) ? 2 : (mode(k).bo + 1) / 2; }
function isSets(k) { return !fix2(k) && !!mode(k).sets; }
function unit(k) { return isSets(k) ? t("Sätze") : t("Legs"); }
function modeTxt(k) {
  var m = mode(k);
  if (fix2(k)) return (lang() === "en" ? "2 legs fixed · " : "2 Legs fix · ") + m.x;
  if (isSets(k)) return "Best of " + m.bo + " " + t("Sets") + " (" + t("je Best of {0} Legs", m.sets) + ") · " + m.x;
  return "Best of " + m.bo + " · " + m.x;
}
function ladModes() {
  return (S.ltop >= 4 ? t("Spiel 1") + ": " + modeTxt("e") + " · " + t("Spiel 2") + ": " : "") + modeTxt("k") + " · " + t("Finale") + ": " + modeTxt("f");
}
function isLeague() { return S.fmt === "league" || S.fmt === "ladder"; }
function hasGroups() { return S.fmt === "groups" || S.fmt === "league" || S.fmt === "ladder"; }
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
  if (hasGroups()) {
    var plan = activePlan(), pi = {};
    if (plan) plan.forEach(function (e, i) { pi[e.id] = { i: i, r: e.r, b: e.b }; });
    groupMatches().forEach(function (gm) {
      var e = pi[gm.id];
      if (e) add({ id: gm.id, st: "g", g: gm.g, p: gm.p, no: e.i + 1, back: gm.back, r: e.r + 1, pb: e.b,
                   label: t("Runde") + " " + (e.r + 1), order: e.i });
      else add({ id: gm.id, st: "g", g: gm.g, p: gm.p, no: gm.no, back: gm.back,
            label: isLeague() ? t("Spielnr.") + " " + gm.no : t("Gruppe") + " " + LETTERS[gm.g] + (gm.back ? " · " + t("Rückspiel") : ""), order: order++ });
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
  if (S.fmt === "ladder") {
    var seed = function (n) { return { seed: n }; };
    if (S.ltop >= 4) {
      add({ id: "lad1", st: "e", label: t("Spiel 1"), src: [seed(3), seed(4)], order: 1010 });
      add({ id: "lad2", st: "k", label: t("Spiel 2"), src: [seed(2), { w: "lad1" }], order: 1020 });
      add({ id: "ladf", st: "f", label: t("Finale"), src: [seed(1), { w: "lad2" }], order: 1030 });
      if (S.lantern && S.draw.ids.length >= 5) add({ id: "ladl", st: "e", label: t("Spiel um die Rote Laterne"), src: [seed(S.draw.ids.length), { l: "lad1" }], order: 1021 });
    } else {
      add({ id: "lad2", st: "k", label: t("Spiel 1"), src: [seed(2), seed(3)], order: 1020 });
      add({ id: "ladf", st: "f", label: t("Finale"), src: [seed(1), { w: "lad2" }], order: 1030 });
      if (S.lantern && S.draw.ids.length >= 4) add({ id: "ladl", st: "e", label: t("Spiel um die Rote Laterne"), src: [seed(S.draw.ids.length), { l: "lad2" }], order: 1021 });
    }
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
  if (S.fmt !== "groups" && S.fmt !== "ladder") return true;
  return B().list.every(function (m) { return m.st !== "g" || finished(S.res[m.id], "g"); });
}

// Slot auflösen: {ready, p, ph}
function slot(src) {
  if (src.seed) {
    var phs = src.seed + ". " + t("Platz");
    if (!stageDone()) return { ready: false, p: null, ph: phs };
    var row = stand(0)[src.seed - 1];
    return { ready: true, p: row ? row.id : null, ph: phs };
  }
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
  ids.forEach(function (id) { T[id] = { id: id, sp: 0, w: 0, d: 0, l: 0, lf: 0, la: 0, gf: 0, ga: 0, av: [], pts: 0 }; });
  groupMatches().forEach(function (m) {
    if (m.g !== g) return;
    var r = S.res[m.id], a = T[m.p[0]], b = T[m.p[1]];
    if (!r) return;
    if (r.a1 != null) a.av.push(r.a1);
    if (r.a2 != null) b.av.push(r.a2);
    if (!finished(r, "g")) return;
    a.sp++; b.sp++; a.lf += r.la; a.la += r.lb; b.lf += r.lb; b.la += r.la;
    if (r.g1 != null && r.g2 != null) { a.gf += r.g1; a.ga += r.g2; b.gf += r.g2; b.ga += r.g1; }
    if (r.la > r.lb) { a.w++; a.pts += 2; b.l++; } else if (r.lb > r.la) { b.w++; b.pts += 2; a.l++; } else { a.d++; b.d++; a.pts++; b.pts++; }
  });
  return Object.keys(T).map(function (k) { var x = T[k]; x.diff = x.lf - x.la; x.gd = x.gf - x.ga; x.avg = x.av.length ? x.av.reduce(function (s, v) { return s + v; }, 0) / x.av.length : 0; return x; })
    .sort(function (a, b) { return b.pts - a.pts || b.diff - a.diff || b.gd - a.gd || b.lf - a.lf || b.avg - a.avg; });
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

/* ---------- Schluck-Wetten ---------- */
// Spielstärke aus diesem Turnier: Average (falls eingetragen) plus Leg-Differenz pro Spiel
function strength() {
  var T = {}, all = [];
  (S.draw ? S.draw.ids : []).forEach(function (id) { T[id] = { av: [], ld: 0, n: 0, wl: 0 }; });
  B().list.forEach(function (m) {
    var r = S.res[m.id], res = resolve(m.id);
    if (!r || !res.done || res.bye) return;
    var p = players(m.id), a = T[p[0]], b = T[p[1]]; if (!a || !b) return;
    if (r.a1 != null) { a.av.push(r.a1); all.push(r.a1); }
    if (r.a2 != null) { b.av.push(r.a2); all.push(r.a2); }
    var d = r.g1 != null && r.g2 != null ? r.g1 - r.g2 : isSets(m.st) ? (r.la - r.lb) * 2 : r.la - r.lb;
    a.ld += d; b.ld -= d; a.n++; b.n++;
    if (r.la > r.lb) { a.wl++; b.wl--; } else if (r.lb > r.la) { b.wl++; a.wl--; }
  });
  var base = all.length ? all.reduce(function (s, v) { return s + v; }, 0) / all.length : 50, out = {};
  Object.keys(T).forEach(function (k) {
    var x = T[k], av = x.av.length ? x.av.reduce(function (s, v) { return s + v; }, 0) / x.av.length : base;
    // Die Bilanz im Turnier zählt am meisten (Siege, dann Legs), der Average nur als Feinschliff.
    // Ein Abend ist wenig Datenbasis: alles Richtung Feld ziehen, sonst schaukeln sich
    // die Quoten über Leg → Satz → Match unrealistisch auf.
    av = (av * x.av.length + base * 4) / (x.av.length + 4);
    out[k] = base + 0.3 * (av - base) + (x.n ? (2 * x.wl + 1.5 * x.ld) / (x.n + 2) : 0);
  });
  return out;
}
function binom(n, k) { var r = 1; for (var i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; }
// Wahrscheinlichkeit, ein "Best of" mit Ziel n zu gewinnen, bei Einzelchance p
function boWin(p, n) { var s = 0; for (var k = 0; k < n; k++) s += binom(n - 1 + k, k) * Math.pow(p, n) * Math.pow(1 - p, k); return s; }
// Alle Ergebnisse eines Spiels mit Wahrscheinlichkeit, aus Sicht Spieler A
function outcomes(id) {
  var m = B().byId[id], p = players(id), st = strength();
  var diff = (st[p[0]] || 50) - (st[p[1]] || 50);
  var pl = Math.max(0.3, Math.min(0.7, 1 / (1 + Math.exp(-diff / 22))));  // auch der Stärkste gewinnt nie mehr als 7 von 10 Legs                         // Leg-Chance
  var md = mode(m.st), n = need(m.st), pu = md.sets ? boWin(pl, (md.sets + 1) / 2) : pl;
  var out = [];
  for (var k = 0; k < n; k++) {
    out.push({ a: n, b: k, pr: binom(n - 1 + k, k) * Math.pow(pu, n) * Math.pow(1 - pu, k) });
    out.push({ a: k, b: n, pr: binom(n - 1 + k, k) * Math.pow(1 - pu, n) * Math.pow(pu, k) });
  }
  var pa = out.reduce(function (s, o) { return s + (o.a > o.b ? o.pr : 0); }, 0);
  return { win: [pa, 1 - pa], exact: out.sort(function (x, y) { return y.a - y.b - (x.a - x.b); }) };
}
function quote(pr) { return Math.max(1.1, Math.min(30, Math.round(0.95 / Math.max(pr, 0.001) * 10) / 10)); }
function fmtQ(q) { return lang() === "en" ? q.toFixed(1) : q.toFixed(1).replace(".", ","); }
function eliminated() {
  var out = {}, b = B();
  if (!S.started) return out;
  if (stageDone()) {
    var q = null;
    if (S.fmt === "ladder") q = stand(0).slice(0, S.ltop).map(function (x) { return x.id; });
    else if (S.fmt === "groups" || (S.fmt === "swiss" && S.sko >= 2)) { q = []; koFirstRound().forEach(function (pr) { pr.forEach(function (x) { if (x.p != null) q.push(x.p); }); }); }
    if (q) S.draw.ids.forEach(function (id) { if (q.indexOf(id) < 0) out[id] = 1; });
  }
  b.list.forEach(function (m) {
    if (m.st === "g" || (S.fmt === "dko" && m.br === "w")) return;
    var r = resolve(m.id); if (r.done && r.lose != null) out[r.lose] = 1;
  });
  return out;
}
function bettors(id) {
  var p = players(id), el = eliminated();
  return S.draw.ids.filter(function (x) { return x !== p[0] && x !== p[1] && (S.bet.all || el[x]); });
}
function betOpen(id) { var r = resolve(id), p = players(id); return S.started && r.playable && p[0] != null && p[1] != null && !fix2(B().byId[id].st); }
function betState(bt) {
  var r = resolve(bt.m), res = S.res[bt.m];
  if (!r || !r.done || !res) return null;
  var won = bt.kind === "w" ? r.win === bt.pick : (res.la + ":" + res.lb) === bt.pick;
  return { won: won, sips: won ? Math.round(bt.stake * bt.q) : bt.stake };
}
function stakeOpts() { var mx = (S.bet && S.bet.max) || 10, o = [1, 3, 5, 10].filter(function (v) { return v <= mx; }); if (o.indexOf(mx) < 0) o.push(mx); return o; }
function placeBet(id, form, st) {
  var g = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value : ""; };
  addBet(id, +g("by"), g("pick"), Math.round(num(st != null ? st : g("stake")) || 0));
}
function betLine(bt) {
  var p = players(bt.m), st = betState(bt);
  var what = bt.kind === "w" ? t("Sieg") + " " + esc(nm(bt.pick)) : esc(nm(p[0])) + " " + esc(bt.pick) + " " + esc(nm(p[1]));
  var res = st ? (st.won ? '<b class="w">✓ ' + t("verteilt {0}", st.sips) + "</b>" : '<b class="wa">✗ ' + t("trinkt {0}", st.sips) + "</b>") : '<span class="mu">' + t("offen") + "</span>" +
    ' <button class="x" data-do="delbet" data-id="' + bt.id + '" title="' + t("Wette löschen") + '" aria-label="' + t("Wette löschen") + '">✕</button>';
  return '<div class="pl"><span class="nm"><b>' + esc(nm(bt.by)) + "</b>: " + bt.stake + " " + t("Schlücke") + " · " + what + ' <span class="mu">(' + t("Quote") + " " + fmtQ(bt.q) + ")</span></span>" + res + "</div>";
}
function viewBets() {
  if (!S.started) return startHint();
  var h = '<p class="mu">' + t("Ausgeschiedene dürfen auf die restlichen Spiele Schlücke setzen. Richtig getippt: Einsatz × Quote verteilen. Falsch: Einsatz selbst trinken.") + " " + t("Quoten aus Average und Leg-Differenz im Turnier. Ohne Daten gilt 50:50.") + " " + t("Statt Bier geht alles, was im Glas ist.") + "</p>";
  h += liveCard();
  var open = B().list.filter(function (m) { return betOpen(m.id) && bettors(m.id).length; });
  if (!S.bet.all && !Object.keys(eliminated()).length) h += '<div class="card"><p class="mu">' + t("Noch niemand ausgeschieden – Wetten starten, sobald der Erste raus ist.") + "</p></div>";
  else if (!open.length) h += '<div class="card"><p class="mu">' + t("Gerade ist kein Spiel offen, auf das gewettet werden kann.") + "</p></div>";
  open.forEach(function (m) {
    var p = players(m.id), o = outcomes(m.id), bs = bettors(m.id);
    var opts = [["w0", t("Sieg") + " " + nm(p[0]) + " · " + fmtQ(quote(o.win[0]))], ["w1", t("Sieg") + " " + nm(p[1]) + " · " + fmtQ(quote(o.win[1]))]]
      .concat(o.exact.map(function (x) { return ["x" + x.a + ":" + x.b, nm(p[0]) + " " + x.a + ":" + x.b + " " + nm(p[1]) + " · " + fmtQ(quote(x.pr))]; }));
    var mine = (S.bets || []).filter(function (bt) { return bt.m === m.id; });
    h += '<div class="card"><h2>' + esc(nm(p[0])) + ' <span class="mu">' + t("gegen") + "</span> " + esc(nm(p[1])) + ' <span class="mu">· ' + esc(m.label) + " · " + modeTxt(m.st) + "</span></h2>" +
      '<div class="chips">' + '<div class="chip"><div class="mu">' + t("Sieg") + " " + esc(nm(p[0])) + "</div><div><b>" + fmtQ(quote(o.win[0])) + '</b></div></div><div class="chip"><div class="mu">' + t("Sieg") + " " + esc(nm(p[1])) + "</div><div><b>" + fmtQ(quote(o.win[1])) + "</b></div></div></div>" +
      '<form class="bet row" data-id="' + m.id + '"><label>' + t("Wer wettet") + ' <select name="by">' + bs.map(function (x) { return '<option value="' + x + '">' + esc(nm(x)) + "</option>"; }).join("") + "</select></label>" +
      "<label>" + t("Tipp") + ' <select name="pick">' + opts.map(function (x) { return '<option value="' + esc(x[0]) + '">' + esc(x[1]) + "</option>"; }).join("") + "</select></label>" +
      '<div class="stakes"><span class="mu">' + t("Schlücke") + ":</span>" + stakeOpts().map(function (v) { return '<button class="b p" type="submit" data-stake="' + v + '">🍺 ' + v + "</button>"; }).join("") + "</div></form>" +
      (mine.length ? '<h3 class="sub">' + t("Wetten auf dieses Spiel") + "</h3>" + mine.map(betLine).join("") : "") + "</div>";
  });
  var done = (S.bets || []).filter(function (bt) { return betState(bt); });
  if (done.length) {
    var bal = {};
    done.forEach(function (bt) { var st = betState(bt), x = bal[bt.by] = bal[bt.by] || { out: 0, drunk: 0 }; if (st.won) x.out += st.sips; else x.drunk += st.sips; });
    h += '<div class="card"><h2>🍺 ' + t("Schluck-Bilanz") + '</h2><div class="sc"><table><tr><th class="l">' + (lang() === "en" ? "Player" : "Spieler") + "</th><th>" + t("Verteilt") + "</th><th>" + t("Getrunken") + "</th></tr>" +
      Object.keys(bal).sort(function (a, b) { return bal[b].out - bal[a].out; }).map(function (k) { return '<tr><td class="l">' + esc(nm(+k)) + "</td><td>" + bal[k].out + "</td><td>" + bal[k].drunk + "</td></tr>"; }).join("") + "</table></div>" +
      done.slice().reverse().map(betLine).join("") + "</div>";
  }
  return h;
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
  if (S.fmt === "ladder") {
    var lf = resolve("ladf"); if (!lf.done) return null;
    out.push({ from: 1, to: 1, ids: [lf.win] });
    if (lf.lose != null) out.push({ from: 2, to: 2, ids: [lf.lose] });
    var l2 = resolve("lad2"); if (l2.done && l2.lose != null) out.push({ from: 3, to: 3, ids: [l2.lose] });
    if (b.byId.lad1) {
      var ll = b.byId.ladl ? resolve("ladl") : null;
      if (ll && ll.done && ll.win != null) out.push({ from: 4, to: 4, ids: [ll.win] });
      else { var l1 = resolve("lad1"); if (l1.done && l1.lose != null && !b.byId.ladl) out.push({ from: 4, to: 4, ids: [l1.lose] }); }
    }
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
// Liga auf mehreren Boards: feste Runden, jeder Spieler gleich oft an jedem Board
function boardPlan(ids) {
  if (S.nb < 2) return null;
  var ps = ids.slice(); if (ps.length % 2) ps.push(null);
  var n = ps.length, rounds = [];
  for (var r = 0; r < n - 1; r++) {
    var pr = [];
    for (var i = 0; i < n / 2; i++) { var a = ps[i], b = ps[n - 1 - i]; if (a != null && b != null) pr.push([Math.min(a, b), Math.max(a, b)]); }
    rounds.push(pr); ps = [ps[0], ps[n - 1]].concat(ps.slice(1, n - 1));
  }
  if (S.rr2) rounds = rounds.concat(rounds.map(function (pr) { return pr.map(function (x) { return [x[0], x[1], 1]; }); }));
  var k = rounds[0].length; if (k > S.nb || k < 2) return null;
  var games = {}, cnt = {}; ids.forEach(function (id) { games[id] = 0; cnt[id] = []; for (var b = 0; b < k; b++) cnt[id][b] = 0; });
  rounds.forEach(function (pr) { pr.forEach(function (x) { games[x[0]]++; games[x[1]]++; }); });
  function cap(id) { return Math.ceil(games[id] / k); }
  function perms(a) { if (a.length < 2) return [a]; var o = []; a.forEach(function (x, i) { perms(a.slice(0, i).concat(a.slice(i + 1))).forEach(function (r) { o.push([x].concat(r)); }); }); return o; }
  var out = [], steps = 0;
  function go(r) {
    if (r === rounds.length) return true;
    if (++steps > 200000) return false;
    var pr = rounds[r], all = perms(pr.map(function (_, i) { return i; }));
    for (var q = 0; q < all.length; q++) {
      var ok = true;
      for (var b = 0; b < pr.length && ok; b++) { var x = pr[all[q][b]]; if (cnt[x[0]][b] + 1 > cap(x[0]) || cnt[x[1]][b] + 1 > cap(x[1])) ok = false; }
      if (!ok) continue;
      for (b = 0; b < pr.length; b++) { x = pr[all[q][b]]; cnt[x[0]][b]++; cnt[x[1]][b]++; out.push({ id: "g0_" + x[0] + "_" + x[1] + (x[2] ? "_r" : ""), b: b, r: r }); }
      if (go(r + 1)) return true;
      for (b = 0; b < pr.length; b++) { x = pr[all[q][b]]; cnt[x[0]][b]--; cnt[x[1]][b]--; out.pop(); }
    }
    return false;
  }
  return go(0) ? out : null;
}
function activePlan() { var pl = S.draw && S.draw.plan; return pl && !pl.some(function (e) { return e.b >= S.nb; }) ? pl : null; }
function planned(bi) {
  var plan = activePlan(); if (!plan) return null;
  for (var j = 0; j < plan.length; j++) { var e = plan[j]; if (e.b === bi && resolve(e.id).playable && onBoard(e.id) < 0) return e.id; }
  return null;
}
function planTag(id) { var m = B().byId[id]; return m && m.pb != null && activePlan() ? " · " + t("Board") + " " + (m.pb + 1) : ""; }
// Board bi ist frei, aber keine eigene Partie spielbar: Restplan so umverteilen, dass eine
// Partie mit freien Spielern hierher kommt und trotzdem jeder gleich oft an jedem Board spielt.
function replan(bi, force, dry) {
  var plan = activePlan(); if (!plan) return null;
  var K = 0, games = {}, cnt = {}, rem = [], bz = busy(bi);
  plan.forEach(function (e) { K = Math.max(K, e.b + 1); });
  if (bi >= K) return null;
  plan.forEach(function (e) {
    var p = players(e.id); if (p[0] == null || p[1] == null) return;
    p.forEach(function (x) { games[x] = (games[x] || 0) + 1; cnt[x] = cnt[x] || []; for (var b = 0; b < K; b++) cnt[x][b] = cnt[x][b] || 0; });
    if (resolve(e.id).playable && onBoard(e.id) < 0) rem.push(e);
    else { var ob = onBoard(e.id); var b2 = ob >= 0 ? ob : e.b; cnt[p[0]][b2]++; cnt[p[1]][b2]++; }
  });
  var slack = 0;
  function cap(x) { return Math.ceil(games[x] / K) + slack; }
  function fits(e, b) { var p = players(e.id); return cnt[p[0]][b] < cap(p[0]) && cnt[p[1]][b] < cap(p[1]); }
  function put(e, b, d) { var p = players(e.id); cnt[p[0]][b] += d; cnt[p[1]][b] += d; }
  var sol = {}, steps = 0;
  function go(i) {
    if (i === rem.length) return true;
    if (++steps > 50000) return false;
    var e = rem[i], order = [e.b]; for (var b = 0; b < K; b++) if (b !== e.b) order.push(b);
    for (var q = 0; q < order.length; q++) {
      if (!fits(e, order[q])) continue;
      put(e, order[q], 1); sol[e.id] = order[q];
      if (go(i + 1)) return true;
      put(e, order[q], -1);
    }
    return false;
  }
  // erst perfekt ausgeglichen versuchen, sonst darf einer ein Spiel mehr an einem Board haben (3:1 statt 2:2)
  for (slack = 0; slack <= (force ? 1 : 0); slack++) {
    for (var c = 0; c < rem.length; c++) {
      var e = rem[c], p = players(e.id);
      if ((force ? e.id !== force : (bz[p[0]] || bz[p[1]])) || !fits(e, bi)) continue;
      put(e, bi, 1); sol = {}; sol[e.id] = bi; steps = 0;
      var others = rem.filter(function (x) { return x !== e; }), keep = rem; rem = others;
      var ok = go(0); rem = keep;
      if (ok && dry) return e.id;
      if (ok) { plan.forEach(function (x) { if (sol[x.id] != null) x.b = sol[x.id]; }); dirty(); return e.id; }
      // go() hat bei Erfolg nicht aufgeräumt, bei Misserfolg schon: nur die eigene Buchung zurücknehmen
      put(e, bi, -1);
    }
  }
  return null;
}
// Von Hand an ein anderes Board gelegt: Plan nachziehen und den Rest möglichst ausgeglichen umverteilen
function assignTo(bi, id) {
  if (S.board[bi]) return;
  var m = B().byId[id];
  if (m && m.st === "g" && activePlan() && m.pb !== bi && !replan(bi, id)) return;   // würde jemanden auf 4:0 bringen
  S.board[bi] = id; S.t0 = S.t0 || Date.now(); if (S.defer) delete S.defer[id]; stamp(id);
  if (S.writer) { var w = pickWriter(bi, id); if (w != null) { S.wr[id] = w; S.wc[w] = (S.wc[w] || 0) + 1; } }
}
function stamp(id) { S.ts = S.ts || {}; S.ts[id] = { s: Date.now() }; }
function nextFor(bi) {
  var plan = activePlan();
  if (plan) {
    for (var j = 0; j < plan.length; j++) {
      var e = plan[j]; if (e.b !== bi) continue;
      var rr = resolve(e.id); if (!rr.playable || onBoard(e.id) >= 0) continue;
      var bz = busy(bi), pp = players(e.id);
      if (!bz[pp[0]] && !bz[pp[1]]) return e.id;      // nächste freie Partie, die für dieses Board eingeplant ist
    }
    var moved = replan(bi);                             // sonst Restplan umbauen, damit das Board nicht leer steht
    if (moved) return moved;
    var rest = B().list.some(function (m) { return m.st === "g" && m.pb === bi && resolve(m.id).playable; });
    if (rest) return null;                              // alle Partien dieses Boards warten auf Spieler
  }
  var bs = busy(bi), q = queue();
  if (plan) q = q.filter(function (id) { return B().byId[id].st !== "g"; });
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
  S.board[bi] = id; S.t0 = S.t0 || Date.now(); if (S.defer) delete S.defer[id]; stamp(id);
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
  else if (S.fmt === "ladder" && ps.length < S.ltop) err = t("Liga + Stufenleiter braucht mindestens {0} Spieler.", S.ltop);
  UI.err.start = err; if (err) return;
  shuffle(ps);
  var d = { ids: ps.slice() };
  if (S.fmt === "groups") { d.groups = []; for (var g = 0; g < S.ng; g++) d.groups.push([]); ps.forEach(function (id, i) { d.groups[i % S.ng].push(id); }); }
  else if (isLeague()) { d.groups = [ps.slice()]; d.plan = boardPlan(ps); }
  else if (S.fmt === "swiss") {
    S.sr = Math.min(S.sr, ps.length - 1);
    if (S.sko > ps.length) S.sko = ps.length >= 8 ? 8 : ps.length >= 4 ? 4 : 2;
    var r1 = []; for (var q = 0; q + 1 < ps.length; q += 2) r1.push([ps[q], ps[q + 1]]);
    if (ps.length % 2) r1.push([ps[ps.length - 1], null]);
    d.swiss = [r1];
  }
  else d.seeds = ps.slice();
  S.draw = d; S.started = true; S.res = {}; S.bets = []; S.ts = {}; S.board = {}; S.wr = {}; S.last = {}; S.wc = {}; S.fin = {}; S.t0 = null; S.tab = "p";
  dirty(); syncBoards();
}
function resetTournament() { S.ts = {}; S.bets = []; S.defer = {}; S.started = false; S.draw = null; S.res = {}; S.board = {}; S.wr = {}; S.last = {}; S.wc = {}; S.fin = {}; S.t0 = null; }
function hasResults() { return Object.keys(S.res).some(function (k) { var r = S.res[k]; return r && (r.la != null || r.lb != null); }); }

function saveResult(id, form) {
  var m = B().byId[id]; if (!m) return false;
  var g = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? num(el.value) : null; };
  var r = { la: g("la"), lb: g("lb"), a1: g("a1"), a2: g("a2"), o1: g("o1"), o2: g("o2"), h1: g("h1"), h2: g("h2"), b1: g("b1"), b2: g("b2"), g1: g("g1"), g2: g("g2") };
  ["la", "lb", "o1", "o2", "h1", "h2", "b1", "b2", "g1", "g2"].forEach(function (k) { if (r[k] != null) r[k] = Math.max(0, Math.round(r[k])); });
  if (r.h1 != null && r.h1 > 170) r.h1 = 170; if (r.h2 != null && r.h2 > 170) r.h2 = 170;
  if (!finished(r, m.st)) {
    UI.err[id] = fix2(m.st) ? t("Bei 2 Legs fix muss die Summe 2 sein (2:0, 1:1, 0:2).") : isSets(m.st) ? t("Der Sieger braucht genau {0} Sätze, der Verlierer weniger.", need(m.st)) : t("Der Sieger braucht genau {0} Legs, der Verlierer weniger.", need(m.st));
    return false;
  }
  delete UI.err[id];
  S.res[id] = r; dirty();
  var now = Date.now(), p = players(id);
  if (S.ts && S.ts[id] && onBoard(id) >= 0) S.ts[id].e = now;
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
      return '<div class="pl' + (inT ? "" : " out") + '"><button class="dot" data-do="col" data-id="' + p.id + '" style="background:' + pc(p.id) + '" title="' + t("Farbe ändern") + '" aria-label="' + t("Farbe ändern") + '"></button><span class="nm">' + esc(p.name) + '</span>' +
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
      '<div class="seg">' + [["groups", t("Gruppen + K.O.")], ["ko", t("K.O.")], ["dko", t("Doppel-K.O.")], ["league", t("Liga (jeder gegen jeden)")], ["ladder", t("Liga + Stufenleiter")], ["swiss", t("Schweizer System")]].map(function (o) {
        return '<button class="b' + (S.fmt === o[0] ? " p" : "") + '" data-do="fmt" data-v="' + o[0] + '">' + o[1] + "</button>"; }).join("") + "</div>" +
      (S.fmt === "ladder" ? '<div class="row"><label>' + t("Play-offs für die Top") + " " + sel("ltop", [[3, 3], [4, 4]], S.ltop) + "</label></div>" +
        '<label class="chk"><input type="checkbox" data-sb="lantern"' + (S.lantern ? " checked" : "") + "> " + t("Spiel um die Rote Laterne") + " <span class=\"mu\">(" + t("Der Letzte der Liga spielt gegen den Verlierer von Spiel 1.") + ")</span></label>" : "") +
      (S.fmt === "groups" ? '<div class="row"><label>' + t("Anzahl Gruppen") + " " + sel("ng", [1, 2, 3, 4, 5, 6, 7, 8].map(function (x) { return [x, x]; }), S.ng) + "</label><label>" + t("Weiter pro Gruppe") + " " + sel("adv", [1, 2, 3, 4].map(function (x) { return [x, x]; }), S.adv) + "</label></div>" : "") +
      (S.fmt === "swiss" ? '<div class="row"><label>' + t("Runden") + " " + sel("sr", [3, 4, 5, 6, 7, 8, 9].map(function (x) { return [x, x]; }), S.sr) + "</label><label>" + t("Danach K.O. für die Besten") + " " + sel("sko", [[0, t("kein K.O.")], [2, t("Top") + " 2"], [4, t("Top") + " 4"], [8, t("Top") + " 8"], [16, t("Top") + " 16"]], S.sko) + "</label></div>" : "") +
      (hasGroups() ? '<label class="chk"><input type="checkbox" data-sb="rr2"' + (S.rr2 ? " checked" : "") + "> " + t("Hin- und Rückspiel") + "</label>" : "") +
      (S.fmt === "groups" || S.fmt === "ko" ? '<label class="chk"><input type="checkbox" data-sb="third"' + (S.third ? " checked" : "") + "> " + t("Spiel um Platz 3") + "</label>" : "") +
      '<p class="mu">' + rulesFmt() + "</p></div>";
    h += '<div class="card"><h2>' + t("Spielmodus") + "</h2>" +
      (hasGroups() || S.fmt === "swiss" ? modeRow("g", t("Gruppen / Liga / Runden")) : "") +
      (S.fmt !== "league" && !(S.fmt === "swiss" && S.sko < 2) ? (S.fmt === "ladder" && S.ltop >= 4 ? modeRow("e", t("Spiel 1 und Rote Laterne")) + modeRow("k", t("Spiel 2")) : modeRow("k", S.fmt === "ladder" ? t("Play-offs") : t("K.O.-Runden"))) + modeRow("f", t("Finale")) : "") + "</div>";
  }
  h += '<div class="card"><h2>' + t("Boards und Ablauf") + "</h2>" +
    '<div class="row"><label>' + t("Anzahl Boards") + " " + sel("nb", [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16].map(function (x) { return [x, x]; }), S.nb) + "</label></div>" +
    '<label class="chk"><input type="checkbox" data-sb="auto"' + (S.auto ? " checked" : "") + "> " + t("Nächstes Spiel automatisch ansagen") + "</label>" +
    '<label class="chk"><input type="checkbox" data-sb="writer"' + (S.writer ? " checked" : "") + "> " + t("Schreiber einteilen") + "</label>" +
    '<p class="mu">' + t("Der Verlierer des letzten Spiels am Board schreibt das nächste Spiel. Ist er selbst dran, übernimmt ein anderer freier Spieler.") + "</p></div>";
  h += '<div class="card"><h2>🍺 ' + t("Schluck-Wetten (Partymodus)") + '</h2><label class="chk"><input type="checkbox" data-bt="on"' + (S.bet.on ? " checked" : "") + "> " + t("Schluck-Wetten (Partymodus)") + "</label>" +
    (S.bet.on ? '<label class="chk"><input type="checkbox" data-bt="all"' + (S.bet.all ? " checked" : "") + "> " + t("Alle dürfen wetten (nicht nur Ausgeschiedene)") + "</label>" +
      '<div class="row"><label>' + t("Max. Schlücke pro Wette") + " " + sel("betmax", [3, 5, 10, 15, 20].map(function (x) { return [x, x]; }), S.bet.max) + "</label></div>" : "") +
    '<p class="mu">' + t("Ausgeschiedene dürfen auf die restlichen Spiele Schlücke setzen. Richtig getippt: Einsatz × Quote verteilen. Falsch: Einsatz selbst trinken.") + "</p></div>";
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
function fmtName(f) { return f === "groups" ? t("Gruppen + K.O.") : f === "ko" ? t("K.O.") : f === "dko" ? t("Doppel-K.O.") : f === "swiss" ? t("Schweizer System") : f === "ladder" ? t("Liga + Stufenleiter") : t("Liga (jeder gegen jeden)"); }
function rulesFmt() {
  return S.fmt === "groups" ? t("Die Besten jeder Gruppe kommen in die K.O.-Runde, über Kreuz gesetzt (Gruppensieger gegen Zweite anderer Gruppen).")
    : S.fmt === "ko" ? t("K.O.: Wer verliert, scheidet aus. Freilose gehen an die ersten Plätze der Auslosung.")
    : S.fmt === "dko" ? t("Doppel-K.O.: Wer zweimal verliert, scheidet aus. Wer im Winner-Bracket verliert, spielt im Loser-Bracket weiter. Im Grand Final trifft der Sieger des Winner-Brackets auf den Sieger des Loser-Brackets (ein Spiel).")
    : S.fmt === "ladder" ? t(S.ltop >= 4 ? "Liga + Stufenleiter: Erst spielt jeder gegen jeden. Danach steigen die Besten nach Ligaplatz in die Play-offs ein: 3. gegen 4., der Sieger gegen den 2., der Sieger im Finale gegen den Ligasieger." : "Liga + Stufenleiter: Erst spielt jeder gegen jeden. Danach spielt der 2. gegen den 3., der Sieger im Finale gegen den Ligasieger.")
    : S.fmt === "swiss" ? t("Schweizer System: In jeder Runde spielen Spieler mit gleich vielen Punkten gegeneinander, niemand zweimal gegen denselben. Runde 1 wird ausgelost, jede weitere Runde entsteht aus der aktuellen Tabelle.")
    : t("Liga: Jeder spielt gegen jeden, die Tabelle entscheidet.");
}
function modeRow(k, label) {
  var m = mode(k), opts = (k === "g" ? [[1], [3], [5], [7], ["fix2"]] : [[1], [3], [5], [7], [9], [11]]).map(function (o) { return [o[0], o[0] === "fix2" ? t("2 Legs fix (Unentschieden möglich)") : "Best of " + o[0]]; });
  var us = fix2(k) ? "" : sel("u_" + k, [[0, t("Legs")], [3, t("Sets") + " (" + t("je Best of {0} Legs", 3) + ")"], [5, t("Sets") + " (" + t("je Best of {0} Legs", 5) + ")"]], m.sets || 0);
  return '<div class="pl"><span class="nm"><b>' + label + '</b><br><span class="mu">' + modeTxt(k) + "</span></span>" +
    sel("bo_" + k, opts, fix2(k) ? "fix2" : m.bo) + us + sel("x_" + k, [[301, 301], [501, 501], [701, 701]], m.x) + "</div>";
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
  var head = opts.form ? "" : '<div class="mh"><span class="mu">' + esc(m.label) + planTag(id) + (m.no ? " · #" + m.no : "") + "</span>" +
    (S.wr[id] != null && !r.done ? '<span class="mu">✍ ' + t("Schreiber") + ": " + esc(nm(S.wr[id])) + "</span>" : "") + "</div>";
  if (UI.edit === id || opts.form) {
    var f = function (n, ph, cls) { return '<input class="n ' + (cls || "") + '" name="' + n + '" inputmode="decimal" placeholder="' + ph + '" value="' + (res[n] != null ? res[n] : "") + '">'; };
    return '<form class="m edit" data-id="' + id + '">' + head +
      '<div class="t"><div class="' + (wA ? "w" : "") + '">' + nA + "</div><div>" + f("la", "0") + " : " + f("lb", "0") + '</div><div class="' + (wB ? "w" : "") + '">' + nB + "</div></div>" +
      (isSets(m.st) ? '<p class="mu ctr">' + t("Ergebnis in Sätzen eintragen.") + "</p>" +
        '<div class="a">' + f("g1", "–") + "<span>" + t("Legs gesamt") + "</span>" + f("g2", "–") + "</div>" +
        (m.st === "g" ? '<p class="mu ctr">' + t("Legs gesamt eintragen (freiwillig), dann zählt bei Gleichstand die Leg-Differenz.") + "</p>" : "") : "") +
      '<div class="a">' + f("a1", "–") + "<span>" + t("Ø Average") + "</span>" + f("a2", "–") + "</div>" +
      '<details class="st"' + (res.o1 || res.o2 || res.h1 || res.h2 || res.b1 || res.b2 ? " open" : "") + '><summary class="mu">' + t("Mehr Statistik") + " (180er, " + t("Höchstes Finish") + ", " + t("Bestes Leg (Darts)") + ")</summary>" +
      [["o", t("180er")], ["h", t("Höchstes Finish")], ["b", t("Bestes Leg (Darts)")]].map(function (x) {
        return '<div class="a">' + f(x[0] + "1", "–") + "<span>" + x[1] + "</span>" + f(x[0] + "2", "–") + "</div>"; }).join("") +
      '<p class="mu">' + t("Statistik pro Spiel ist freiwillig. Ø, 180er, höchstes Finish und bestes Leg fliessen in die Auswertung ein.") + "</p></details>" +
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

function groupTable(g, tv, full) {
  var ex = {}; if (full) stats().forEach(function (x) { ex[x.id] = x; });
  var q = S.fmt === "groups" ? S.adv : S.fmt === "ladder" ? S.ltop : 0, rows = stand(g), dr = fix2("g"), gl = isSets("g") && rows.some(function (x) { return x.gf || x.ga; });
  return '<div class="sc"><table><tr><th>#</th><th class="l">' + (lang() === "en" ? "Player" : "Spieler") + "</th><th>" + t("Pkt") + "</th><th>" + t("Sp") + "</th>" + (tv ? "" : "<th>" + t("S") + "</th>" + (dr ? "<th>" + t("U") + "</th>" : "") + "<th>" + t("N") + "</th>") + "<th>" + unit("g") + "</th>" + (gl ? "<th>" + t("Legs") + "</th>" : "") + (tv ? "" : "<th>" + t("Diff") + "</th>") + "<th>" + t("Ø") + "</th>" + (full ? "<th>180</th><th>Finish</th>" : "") + "</tr>" +
    rows.map(function (x, i) {
      return '<tr class="' + (i < q ? "q" : "") + '"><td>' + (i + 1) + '</td><td class="l">' + cn(x.id) + "</td><td><b>" + x.pts + "</b></td><td>" + x.sp + "</td>" + (tv ? "" : "<td>" + x.w + "</td>" + (dr ? "<td>" + x.d + "</td>" : "") + "<td>" + x.l + "</td>") + "<td>" + x.lf + ":" + x.la + "</td>" + (gl ? "<td>" + x.gf + ":" + x.ga + "</td>" : "") + (tv ? "" : "<td>" + (x.diff > 0 ? "+" : "") + x.diff + "</td>") + "<td>" + (x.avg ? x.avg.toFixed(tv ? 1 : 2) : "–") + "</td>" + (full ? "<td>" + ((ex[x.id] || {}).t180 || "–") + "</td><td>" + ((ex[x.id] || {}).hf || "–") + "</td>" : "") + "</tr>";
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
    h += '<p class="mu"><b>' + modeTxt("g") + "</b> · " + done + "/" + gm.length + " " + t("gespielt") + ". " + t(isSets("g") ? "Rang: Punkte, Satz-Differenz, Leg-Differenz, Ø-Average." : fix2("g") ? "Punkte: Sieg 2, Unentschieden 1, Niederlage 0. Rang: Punkte, Leg-Differenz, gewonnene Legs, Ø-Average." : "Rang: Punkte, Leg-Differenz, gewonnene Legs, Ø-Average.") + (S.fmt === "groups" ? " " + t("Grün = qualifiziert für die K.O.-Runde.") : "") + "</p>";
    h += '<div class="grid g2">' + S.draw.groups.map(function (_, g) {
      return '<div class="card"><h2>' + (isLeague() ? (S.name ? esc(S.name) : "Liga") : t("Gruppe") + " " + LETTERS[g]) + "</h2>" + groupTable(g) +
        '<h3 class="sub">' + t("Spiele") + "</h3>" + gm.filter(function (m) { return m.g === g; }).map(function (m) { return matchBox(m.id); }).join("") + "</div>";
    }).join("") + "</div>";
  }
  var km = b.list.filter(function (m) { return m.st !== "g"; });
  if (km.length) {
    if (!stageDone()) h += '<p class="wa">' + t(S.fmt === "swiss" ? "Schweizer-System-Runden noch nicht fertig – die K.O.-Paarungen stehen danach fest." : S.fmt === "ladder" ? "Liga noch nicht fertig – die Play-off-Paarungen stehen danach fest." : "Gruppenphase noch nicht fertig – die K.O.-Paarungen stehen danach fest.") + "</p>";
    h += '<div class="card"><h2>' + t(S.fmt === "ladder" ? "Play-offs" : "K.O.-Runden") + ' <span class="mu">· ' + (S.fmt === "ladder" ? ladModes() : modeTxt("k") + " · " + t("Finale") + ": " + modeTxt("f")) + "</span></h2>" +
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
  else if (!groupsDone()) h += '<p class="wa">' + t(S.fmt === "ladder" ? "Liga noch nicht fertig – die Play-off-Paarungen stehen danach fest." : "Gruppenphase noch nicht fertig – die K.O.-Paarungen stehen danach fest.") + "</p>";
  var champ = podium();
  if (champ && champ[0] != null) h += '<div class="card champ">🏆 ' + t("Turniersieger") + "<b>" + esc(nm(champ[0])) + "</b></div>";
  if (S.fmt === "ladder") {
    var lc = (b.byId.lad1 ? bracketCol(["lad1"], t("Spiel 1")) + bracketCol(["lad2"], t("Spiel 2")) : bracketCol(["lad2"], t("Spiel 1"))) + bracketCol(["ladf"], t("Finale"));
    h += '<div class="card"><h2>' + t("Play-offs") + ' <span class="mu">· ' + ladModes() + '</span></h2><div class="br">' + lc + "</div>" +
      (b.byId.ladl ? '<div class="br p3">' + bracketCol(["ladl"], t("Spiel um die Rote Laterne")) + "</div>" : "") + "</div>";
    return h;
  }
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
// Freies Board ohne eigene Partie: Partien zeigen, die man trotzdem hier spielen kann
function altHtml(bi) {
  var bs = busy(bi), list = queue().filter(function (id) { var p = players(id), m = B().byId[id]; return !bs[p[0]] && !bs[p[1]] && (m.st !== "g" || !activePlan() || replan(bi, id, true)); });
  if (!list.length) return "";
  return '<p class="mu">' + t("Trotzdem hier spielen (der Plan wird angepasst):") + "</p>" + list.slice(0, 3).map(function (id) {
    var p = players(id);
    return '<div class="pl"><span class="nm"><b>' + esc(nm(p[0])) + "</b> " + t("gegen") + " <b>" + esc(nm(p[1])) + '</b> <span class="mu">' + esc(B().byId[id].label) + planTag(id) + '</span></span><button class="b sm p" data-do="assign" data-b="' + bi + '" data-id="' + id + '">' + t("Hier spielen") + "</button></div>";
  }).join("");
}
function boardCard(bi, tv) {
  var id = S.board[bi];
  if (!id) {
    var nx = nextFor(bi);
    if (tv) return '<div class="card tvb"><div class="mu">' + t("Board").toUpperCase() + " " + (bi + 1) + '</div><div class="big ac">' + t("frei") + "</div></div>";
    return '<div class="card"><h2>' + t("Board") + " " + (bi + 1) + ' <span class="ac">· ' + t("frei") + "</span></h2>" +
      (!nx ? altHtml(bi) : "") +
      (!nx && planned(bi) ? '<p class="mu">' + t("Als Nächstes") + ": <b>" + esc(nm(players(planned(bi))[0])) + "</b> " + t("gegen") + " <b>" + esc(nm(players(planned(bi))[1])) + "</b> · " + t("wartet, bis beide frei sind") + "</p>" : "") +
      (nx ? '<p>' + t("Als Nächstes") + ": <b>" + esc(nm(players(nx)[0])) + "</b> " + t("gegen") + " <b>" + esc(nm(players(nx)[1])) + '</b> <span class="mu">' + esc(B().byId[nx].label) + '</span></p><button class="b p" data-do="call" data-b="' + bi + '">📣 ' + t("Nächstes Spiel ansagen") + "</button>" : '<p class="mu">' + t("Keine Partie verfügbar.") + "</p>") + "</div>";
  }
  var m = B().byId[id], p = players(id);
  if (tv) return '<div class="card tvb"><div class="mu">' + t("Board").toUpperCase() + " " + (bi + 1) + " · " + esc(m.label) + '</div><div class="big">' + cn(p[0]) + '</div><div class="mu">' + t("gegen") + '</div><div class="big">' + cn(p[1]) + '</div><div class="mu">' + modeTxt(m.st) + (S.wr[id] != null ? " · ✍ " + esc(nm(S.wr[id])) : "") + "</div></div>";
  return '<div class="card"><h2>🎯 ' + t("Board") + " " + (bi + 1) + ' <span class="mu">· ' + esc(m.label) + " · " + modeTxt(m.st) + "</span></h2>" +
    '<div class="call">' + cn(p[0]) + ' <span class="mu">' + t("gegen") + "</span> " + cn(p[1]) + "</div>" +
    (S.wr[id] != null ? '<p class="mu ctr">✍ ' + t("Schreiber") + ": <b>" + esc(nm(S.wr[id])) + "</b></p>" : "") +
    matchBox(id, { form: true }) + '<button class="b sm" data-do="unboard" data-b="' + bi + '">' + t("Zurück in die Warteschlange") + "</button></div>";
}
function viewBoards() {
  if (!S.started) return startHint();
  var q = queue(), bs = busy(-1), h = "";
  h += '<div class="row tvrow"><button class="b" data-do="tv">📺 ' + t("TV-Ansicht") + "</button>" + etaHtml() + "</div>";
  var champ = podium();
  if (champ && champ[0] != null) h += '<div class="card champ">🏆 ' + t("Turniersieger") + "<b>" + esc(nm(champ[0])) + "</b></div>";
  h += '<div class="grid">';
  for (var b = 0; b < S.nb; b++) h += boardCard(b);
  h += "</div>" + pauseHtml();
  h += '<div class="grid"><div class="card"><h2>⏱ ' + t("Wartezeiten") + "</h2>" + waitHtml() + "</div>" +
    '<div class="card"><h2>' + t("Warteschlange") + ' <span class="mu">(' + q.length + ")</span></h2>" +
    (q.slice(0, 15).map(function (id, n) {
      var p = players(id), bz = bs[p[0]] || bs[p[1]], free = [];
      for (var b2 = 0; b2 < S.nb; b2++) if (!S.board[b2]) free.push(b2);
      return '<div class="pl"><span class="mu tn">' + (n + 1) + '.</span><span class="nm">' + esc(nm(p[0])) + " – " + esc(nm(p[1])) + ' <span class="mu">' + esc(B().byId[id].label) + planTag(id) + (bz ? " · ⏳ " + t("spielt gerade") : "") + "</span></span>" +
        (bz ? "" : free.filter(function (fb) { var pm = B().byId[id]; return pm.pb == null || !activePlan() || pm.pb === fb || replan(fb, id, true); }).slice(0, 3).map(function (fb) { var pm = B().byId[id], off = pm.pb != null && activePlan() && pm.pb !== fb;
          return '<button class="b sm' + (off ? "" : " p") + '" data-do="assign" data-b="' + fb + '" data-id="' + id + '" title="' + (off ? t("Abweichend vom Plan – der Rest wird neu verteilt") : "") + '">' + t("Board") + " " + (fb + 1) + (off ? " ⇄" : "") + "</button>"; }).join("")) + "</div>";
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
    '<div class="row"><button class="b p" data-do="share">📤 ' + t(pod ? "Endstand teilen" : "Zwischenstand teilen") + "</button></div>" +
    prizeResult() + '<div class="chips">' + chip("🎯 " + t("Bestes Ø-Average"), best("avg", false, function (v) { return v.toFixed(2); })) + chip("💯 " + t("Meiste 180er"), best("t180", false, function (v) { return v; })) +
    chip("🔥 " + t("Höchstes Finish"), best("hf", false, function (v) { return v; })) + chip("⚡ " + t("Kürzestes Leg"), best("bl", true, function (v) { return v + (lang() === "en" ? " darts" : " Darts"); })) + "</div>" +
    '<div class="card"><h2>' + t("Statistik") + (pod ? "" : ' <span class="mu">(' + t("vorläufig") + ")</span>") + '</h2><div class="sc"><table><tr><th>' + t("Platz") + '</th><th class="l">' + (lang() === "en" ? "Player" : "Spieler") + "</th><th>" + t("Sp") + "</th><th>" + t("S") + "</th><th>" + t("N") + "</th><th>" + unit("g") + "</th><th>" + t("Ø") + "</th><th>" + t("Bester Ø") + "</th><th>180</th><th>" + (lang() === "en" ? "Finish" : "Finish") + "</th><th>" + (lang() === "en" ? "Best leg" : "Bestes Leg") + "</th></tr>" +
    T.map(function (s) { var pl = place[s.id]; return "<tr><td>" + (pl ? medal[pl - 1] : "–") + '</td><td class="l">' + esc(nm(s.id)) + "</td><td>" + s.sp + "</td><td>" + s.w + "</td><td>" + s.l + "</td><td>" + s.lf + ":" + s.la + "</td><td><b>" + (s.avg != null ? s.avg.toFixed(2) : "–") + "</b></td><td>" + (s.mx ? s.mx.toFixed(2) : "–") + "</td><td>" + (s.t180 || "–") + "</td><td>" + (s.hf || "–") + "</td><td>" + (s.bl || "–") + "</td></tr>"; }).join("") +
    "</table></div></div>";
}
function startHint() { return '<div class="card"><p>' + (lang() === "en" ? "Add players on the first tab and start the draw." : "Trage im ersten Reiter die Teilnehmer ein und starte die Auslosung.") + '</p><button class="b p" data-do="tab" data-v="t">' + t("Teilnehmer") + "</button></div>"; }

function tvBets() {
  if (!S.bet || !S.bet.on || !(S.bets || []).length) return "";
  return '<div class="card"><h2>🍺 ' + t("Wetten") + "</h2>" + S.bets.slice(-6).reverse().map(function (bt) { return betLine(bt).replace(/<button[\s\S]*?<\/button>/, ""); }).join("") + "</div>";
}
function viewTv() {
  var h = '<div class="tvhead"><div class="big">🎯 ' + esc(S.name || (lang() === "en" ? "Darts tournament" : "Dartturnier")) + "</div>" + etaHtml() +
    '<div class="row"><button class="b" data-do="say">' + (UI.say ? "🔊 " + t("Ansage an") : "🔇 " + t("Ansage aus")) + '</button><button class="b" data-do="fs">⛶ ' + t("Vollbild") + '</button><button class="b" data-do="tvoff">✕ ' + t("TV-Ansicht beenden") + "</button></div></div>";
  if (!S.started) return h + startHint();
  var pod = podium();
  if (pod && pod[0] != null) h += '<div class="card champ">🏆 ' + t("Turniersieger") + "<b>" + esc(nm(pod[0])) + "</b></div>";
  var q = queue().slice(0, 6), bs = busy(-1);
  if (S.draw.groups) {
    // Links Boards, Play-offs, nächste Spiele; rechts die komplette Tabelle mit allen Stats
    var nextH = '<div class="card"><h2>' + t("Nächste Spiele") + "</h2>" + (q.map(function (id, n) { var p = players(id); return '<div class="pl"><span class="mu tn">' + (n + 1) + '.</span><span class="nm">' + esc(nm(p[0])) + " – " + esc(nm(p[1])) + ' <span class="mu">' + esc(B().byId[id].label) + planTag(id) + (bs[p[0]] || bs[p[1]] ? " · ⏳" : "") + "</span></span></div>"; }).join("") || '<p class="mu">' + t(podium() ? "Alle Spiele gespielt." : "Gerade ist kein Spiel bereit. Die nächsten Paarungen ergeben sich aus den laufenden Spielen.") + "</p>") + "</div>";
    var ko = S.fmt !== "league" && groupsDone() ? viewBracket().replace(/<div class="card champ">[\s\S]*?<\/b><\/div>/, "") : "";
    h += '<div class="tvgrid"><div class="tvl"><div class="grid tvboards">';
    for (var b2 = 0; b2 < S.nb; b2++) h += boardCard(b2, true);
    h += "</div>" + ko + '<div class="grid">' + nextH + '<div class="card"><h2>⏱ ' + t("Wartezeiten") + "</h2>" + waitHtml(6) + "</div></div></div>" +
      '<div class="tvr">' + S.draw.groups.map(function (_, g) { return '<div class="card"><h2>' + (isLeague() ? (S.name ? esc(S.name) : "Liga") : t("Gruppe") + " " + LETTERS[g]) + ' <span class="mu">· ' + modeTxt("g") + "</span></h2>" + groupTable(g, false, true) + "</div>"; }).join("") + tvBets() + "</div></div>";
    h += '<div class="tvbrand">' + (QR ? '<img src="' + QR + '" alt="QR" width="120" height="120">' : "") + '<div><div class="tvwm">LEAVE<b>26</b></div><div>' + t("Mit Leave26 geplant. Checkouts sammeln, 180er zählen, mit Freunden vergleichen.") + '</div><div class="mu">' + t("Gratis im Google Play Store – QR-Code scannen") + "</div></div></div>";
    return h;
  }
  h += '<div class="grid tvboards">'; for (var b = 0; b < S.nb; b++) h += boardCard(b, true); h += "</div>";
  var T = stats().filter(function (s) { return s.avg != null; }).sort(function (a, b) { return b.avg - a.avg; }).slice(0, 5);
  h += '<div class="grid"><div class="card"><h2>' + t("Nächste Spiele") + "</h2>" + (q.map(function (id, n) { var p = players(id); return '<div class="pl"><span class="mu tn">' + (n + 1) + '.</span><span class="nm">' + esc(nm(p[0])) + " – " + esc(nm(p[1])) + ' <span class="mu">' + esc(B().byId[id].label) + (bs[p[0]] || bs[p[1]] ? " · ⏳" : "") + "</span></span></div>"; }).join("") || '<p class="mu">' + t(podium() ? "Alle Spiele gespielt." : "Gerade ist kein Spiel bereit. Die nächsten Paarungen ergeben sich aus den laufenden Spielen.") + "</p>") + "</div>" +
    '<div class="card"><h2>' + t("Top Average") + "</h2>" + (T.map(function (s, i) { return '<div class="pl"><span class="mu tn">' + (i + 1) + '.</span><span class="nm">' + esc(nm(s.id)) + "</span><b>" + s.avg.toFixed(2) + "</b></div>"; }).join("") || '<p class="mu">' + t("Noch keine Averages.") + "</p>") + "</div>" +
    '<div class="card"><h2>⏱ ' + t("Wartezeiten") + "</h2>" + waitHtml(6) + "</div></div>";
  if (S.fmt === "swiss" && (!swissDone() || S.sko < 2)) h += '<div class="card"><h2>' + t("Tabelle") + " · " + t("Runde") + " " + swissRounds().length + "/" + S.sr + "</h2>" + swissTable(true, 12) + "</div>";
  else if (S.fmt === "swiss") h += viewBracket().replace(/<div class="card champ">[\s\S]*?<\/b><\/div>/, "");
  else if (S.draw.groups && !((S.fmt === "groups" || S.fmt === "ladder") && groupsDone())) h += '<div class="grid g2">' + S.draw.groups.map(function (_, g) { return '<div class="card"><h2>' + (isLeague() ? "Liga" : t("Gruppe") + " " + LETTERS[g]) + "</h2>" + groupTable(g, true) + "</div>"; }).join("") + "</div>";
  else if (S.fmt !== "league") h += viewBracket().replace(/<div class="card champ">[\s\S]*?<\/b><\/div>/, "");
  h += '<div class="tvbrand">' + (QR ? '<img src="' + QR + '" alt="QR" width="120" height="120">' : "") + '<div><div class="tvwm">LEAVE<b>26</b></div><div>' + t("Mit Leave26 geplant. Checkouts sammeln, 180er zählen, mit Freunden vergleichen.") + '</div><div class="mu">' + t("Gratis im Google Play Store – QR-Code scannen") + "</div></div></div>";
  return h;
}

/* ---------- Prognose Turnierende ---------- */
// Erwartete Anzahl Legs (bzw. Sätze) eines "First to n" bei gleich starken Spielern
function expLegs(n) { var e = 0; for (var k = 0; k < n; k++) e += (n + k) * 2 * binom(n - 1 + k, k) * Math.pow(0.5, n + k); return e; }
function expMatch(st) {
  if (fix2(st)) return 2;
  var md = mode(st), n = need(st);
  return md.sets ? expLegs(n) * expLegs((md.sets + 1) / 2) : expLegs(n);
}
function playedLegs(id) {
  var r = S.res[id], m = B().byId[id]; if (!r || !m) return 0;
  if (r.g1 != null && r.g2 != null) return r.g1 + r.g2;
  return isSets(m.st) ? (r.la + r.lb) * expLegs((mode(m.st).sets + 1) / 2) : r.la + r.lb;
}
function msPerLeg() {
  var ms = 0, legs = 0;
  Object.keys(S.ts || {}).forEach(function (id) { var x = S.ts[id]; if (x.e && x.e > x.s && S.res[id]) { ms += x.e - x.s; legs += playedLegs(id); } });
  return legs >= 4 ? ms / legs : 7 * 60000;            // ohne Messwerte 7 Minuten pro Leg
}
function eta() {
  if (!S.started || podium()) return null;
  var b = B(), per = msPerLeg(), now = Date.now(), end = {}, free = [], i;
  b.list.forEach(function (m) { if (resolve(m.id).done) end[m.id] = now; });
  for (i = 0; i < S.nb; i++) {
    var cur = S.board[i];
    if (cur && b.byId[cur]) { var st = (S.ts && S.ts[cur] && S.ts[cur].s) || now; var f = Math.max(now + 60000, st + expMatch(b.byId[cur].st) * per); end[cur] = f; free.push(f); }
    else free.push(now);
  }
  var open = b.list.filter(function (m) { return end[m.id] == null; }), gEnd = now;
  b.list.forEach(function (m) { if (m.st === "g" && end[m.id] != null) gEnd = Math.max(gEnd, end[m.id]); });
  var guard = 0;
  while (open.length && guard++ < 5000) {
    var gOpen = open.some(function (m) { return m.st === "g"; }), pick = null, ready = 0;
    for (i = 0; i < open.length && !pick; i++) {
      var m = open[i], ok = true, r0 = 0;
      if (m.st !== "g") {
        if (gOpen) ok = false; else r0 = gEnd;
        (m.src || []).forEach(function (x) { var d = x.w || x.l; if (!d) return; if (end[d] == null) ok = false; else r0 = Math.max(r0, end[d]); });
      }
      if (ok) { pick = m; ready = r0; }
    }
    if (!pick) break;
    free.sort(function (a, c) { return a - c; });
    var fin = Math.max(free[0], ready) + expMatch(pick.st) * per;
    free[0] = fin; end[pick.id] = fin;
    if (pick.st === "g") gEnd = Math.max(gEnd, fin);
    open.splice(open.indexOf(pick), 1);
  }
  var last = now; Object.keys(end).forEach(function (k) { last = Math.max(last, end[k]); });
  return last;
}
function etaHtml() {
  var e = eta(); if (!e) return "";
  var d = new Date(e), hm = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
  return '<span class="eta">⏳ ' + t("Voraussichtliches Ende") + ": <b>" + (lang() === "en" ? "approx. " : "ca. ") + hm + "</b></span>";
}
// Wer gerade nicht am Board steht und noch im Turnier ist
function pauseHtml() {
  if (!S.started || podium()) return "";
  var el = eliminated(), onB = {}, wb = {};
  for (var k in S.board) { var id = S.board[k]; if (!id) continue; players(id).forEach(function (p) { if (p != null) onB[p] = 1; }); if (S.wr[id] != null) wb[S.wr[id]] = +k + 1; }
  var list = S.draw.ids.filter(function (x) { return !onB[x] && !el[x]; });
  if (!list.length) return "";
  return '<p class="pause">☕ ' + t("Pause") + ": " + list.map(function (x) { return "<b>" + cn(x) + "</b>" + (wb[x] ? ' <span class="mu">(' + t("schreibt an Board {0}", wb[x]) + ")</span>" : ""); }).join(", ") + "</p>";
}

/* ---------- Stand als Bild teilen ---------- */
function shareRows() {
  var pod = podium(), place = {}, pl = places();
  if (pl) pl.forEach(function (q) { q.ids.forEach(function (id) { place[id] = q.from; }); });
  var st = {}; stats().forEach(function (x) { st[x.id] = x; });
  if (!pod && S.draw.groups && S.draw.groups.length === 1) return stand(0).map(function (r, i) { return { n: i + 1, id: r.id, pts: r.pts, leg: r.lf + ":" + r.la, avg: st[r.id] && st[r.id].avg }; });
  return stats().filter(function (x) { return x.sp > 0; })
    .sort(function (a, b) { return (place[a.id] || 99) - (place[b.id] || 99) || (b.avg || 0) - (a.avg || 0) || b.w - a.w; })
    .map(function (r, i) { return { n: place[r.id] || i + 1, id: r.id, pts: null, leg: r.lf + ":" + r.la, avg: r.avg }; });
}
function shareImage() {
  var c = document.createElement("canvas"), W = 1080, H = 1350; c.width = W; c.height = H;
  var x = c.getContext("2d"), pod = podium(), rows = shareRows().slice(0, 12), en = lang() === "en";
  var F = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
  var g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, "#161b30"); g.addColorStop(1, "#06080f"); x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.fillStyle = "#8a93a8"; x.font = "600 32px " + F; x.fillText(t(pod ? "Endstand" : "Zwischenstand"), 80, 110);
  x.fillStyle = "#fff"; x.font = "800 62px " + F; x.fillText((S.name || (en ? "Darts tournament" : "Dartturnier")).slice(0, 26), 80, 185);
  var y = 250;
  if (pod && pod[0] != null) { x.fillStyle = "#F2C14E"; x.font = "800 54px " + F; x.fillText("🏆 " + nm(pod[0]), 80, y + 30); y += 100; }
  var hasP = rows.length && rows[0].pts != null, cP = 640, cL = 780, cA = 930;
  x.font = "600 28px " + F; x.fillStyle = "#8a93a8";
  x.fillText("#", 84, y); x.fillText(en ? "Player" : "Spieler", 150, y);
  if (hasP) x.fillText(t("Pkt"), cP, y); x.fillText(unit("g"), cL, y); x.fillText(t("Ø"), cA, y);
  y += 20;
  rows.forEach(function (r, i) {
    y += 66; x.fillStyle = i % 2 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.07)"; x.fillRect(60, y - 46, W - 120, 62);
    x.font = "700 36px " + F; x.fillStyle = "#fff"; x.fillText(String(r.n), 84, y);
    x.fillStyle = pc(r.id); x.fillText(nm(r.id).slice(0, 18), 150, y);
    x.fillStyle = "#fff"; if (hasP) x.fillText(String(r.pts), cP, y);
    x.font = "500 34px " + F; x.fillText(r.leg, cL, y); x.fillText(r.avg ? r.avg.toFixed(1) : "–", cA, y);
  });
  var bal = {};
  (S.bets || []).forEach(function (bt) { var s2 = betState(bt); if (!s2) return; var q = bal[bt.by] = bal[bt.by] || { o: 0, d: 0 }; if (s2.won) q.o += s2.sips; else q.d += s2.sips; });
  var ks = Object.keys(bal).sort(function (a, b) { return bal[b].o - bal[a].o; });
  if (ks.length && y < H - 280) {
    y += 80; x.font = "700 32px " + F; x.fillStyle = "#F2C14E"; x.fillText("🍺 " + t("Schluck-Bilanz"), 80, y);
    x.font = "500 28px " + F; x.fillStyle = "#c3c8d6";
    ks.slice(0, Math.max(1, Math.floor((H - 200 - y) / 42))).forEach(function (k) { y += 42; x.fillText(nm(+k) + ": " + bal[k].o + " " + (en ? "handed out" : "verteilt") + ", " + bal[k].d + " " + (en ? "drunk" : "getrunken"), 80, y); });
  }
  x.font = "800 40px " + F; x.fillStyle = "#fff"; x.fillText("LEAVE", 80, H - 70); var w = x.measureText("LEAVE").width;
  x.fillStyle = "#F2C14E"; x.fillText("26", 80 + w, H - 70);
  x.font = "500 24px " + F; x.fillStyle = "#8a93a8"; x.fillText(en ? "Planned with the Leave26 tournament planner" : "Geplant mit dem Leave26 Turnier-Planer", 80 + w + 70, H - 76);
  UI.lastShare = c;
  c.toBlob(function (blob) {
    if (!blob) return;
    var name = (S.name || "turnier").replace(/[^\w-]+/g, "_") + ".png";
    try { var file = new File([blob], name, { type: "image/png" }); if (navigator.canShare && navigator.canShare({ files: [file] })) { navigator.share({ files: [file], title: S.name || "Dartturnier" }).catch(function () {}); return; } } catch (e) {}
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove();
  }, "image/png");
}

/* ---------- Sprachansage am TV ---------- */
function speak(txt) {
  try { var u = new SpeechSynthesisUtterance(txt); u.lang = lang() === "en" ? "en-GB" : "de-DE"; u.rate = 0.95; window.speechSynthesis.speak(u); } catch (e) {}
}
function announce() {
  if (!UI.say || !window.speechSynthesis) return;
  UI.ann = UI.ann || {};
  for (var bi = 0; bi < S.nb; bi++) {
    var id = S.board[bi] || null;
    if (id && UI.ann[bi] !== id) {
      var p = players(id), en = lang() === "en";
      speak("Board " + (bi + 1) + ". " + nm(p[0]) + (en ? " versus " : " gegen ") + nm(p[1]) + "." + (S.wr[id] != null ? (en ? " Scorer: " : " Schreiber: ") + nm(S.wr[id]) + "." : ""));
    }
    UI.ann[bi] = id;
  }
}

/* ---------- Handy-Wetten (live über ntfy.sh) ----------
   Der Turnier-Laptop schickt Spiele + Quoten an <topic>-s, die Handys schicken Wetten an <topic>-b.
   Kein Konto, kein eigener Server. Der Laptop prüft jede Wette selbst (wer darf, Max-Einsatz, Quote). */
var NTFY = "https://ntfy.sh/";
function liveId() { var c = "abcdefghjkmnpqrstuvwxyz23456789", s = ""; for (var i = 0; i < 12; i++) s += c.charAt(Math.floor(Math.random() * c.length)); return s; }
function liveUrl() { return location.origin + location.pathname + "?wette=" + S.live; }
function strip(h) { return String(h).replace(/<[^>]*>/g, ""); }
function liveOn() { return !!(S.live && S.started && S.bet && S.bet.on); }
function addBet(id, by, pick, stake, nonce) {
  if (!betOpen(id)) return "zu";
  if (bettors(id).indexOf(by) < 0) return "darf nicht";
  stake = Math.round(+stake || 0); if (!pick || stake < 1) return "Einsatz";
  stake = Math.min(stake, S.bet.max || 10);
  var o = outcomes(id), p = players(id), bt = { id: S.bid++, m: id, by: by, stake: stake };
  if (pick.charAt(0) === "w") { var side = +pick.slice(1); if (side !== 0 && side !== 1) return "Tipp"; bt.kind = "w"; bt.pick = p[side]; bt.q = quote(o.win[side]); }
  else { var ab = pick.slice(1); var hit = o.exact.filter(function (x) { return x.a + ":" + x.b === ab; })[0]; if (!hit) return "Tipp"; bt.kind = "x"; bt.pick = ab; bt.q = quote(hit.pr); }
  if (nonce) bt.n = String(nonce).slice(0, 16);
  S.bets = S.bets || []; S.bets.push(bt);
  return "";
}
function betText(bt) { var p = players(bt.m); return bt.kind === "w" ? t("Sieg") + " " + nm(bt.pick) : nm(p[0]) + " " + bt.pick + " " + nm(p[1]); }
function livePayload() {
  var open = B().list.filter(function (m) { return betOpen(m.id); }), el = eliminated();
  var o = {
    v: 1, n: S.name || "", ts: Date.now(), mx: S.bet.max || 10, all: !!S.bet.all, done: !!podium(),
    pl: S.draw.ids.map(function (id) { return [id, nm(id), pc(id), el[id] ? 1 : 0]; }),
    m: open.map(function (m) {
      var p = players(m.id), oc = outcomes(m.id), r = S.res[m.id];
      return { i: m.id, l: m.label, md: strip(modeTxt(m.st)), a: p[0], b: p[1], on: onBoard(m.id) + 1, w: [quote(oc.win[0]), quote(oc.win[1])],
        x: oc.exact.map(function (x) { return [x.a + ":" + x.b, quote(x.pr)]; }), by: bettors(m.id) };
    }),
    bt: (S.bets || []).slice(-25).reverse().map(function (bt) { var st = betState(bt); return [bt.n || "", bt.by, betText(bt), bt.stake, bt.q, st ? (st.won ? 1 : -1) : 0, st ? st.sips : 0]; }),
    rj: S.liveRej || {}
  };
  var s = JSON.stringify(o);
  while (unescape(encodeURIComponent(s)).length > 3800 && o.bt.length) { o.bt.pop(); s = JSON.stringify(o); }
  return s;
}
function livePush(force) {
  if (!liveOn()) return;
  var s = livePayload(), key = s.replace(/"ts":\d+,/, "");
  var now = Date.now();
  if (!force && key === UI.lpKey && now - (UI.lpAt || 0) < 600000) return;   // unverändert: alle 10 Min. trotzdem einmal senden
  if (now - (UI.lpAt || 0) < 1500) { clearTimeout(UI.lpT); UI.lpT = setTimeout(function () { livePush(force); }, 1600); return; }
  UI.lpKey = key; UI.lpAt = now;
  try { fetch(NTFY + "l26-" + S.live + "-s", { method: "POST", body: s }).then(function (r) { UI.lpOk = r.ok; }, function () { UI.lpOk = false; }); } catch (e) {}
}
function liveListen() {
  if (!liveOn()) { if (UI.es) { UI.es.close(); UI.es = null; } return; }
  if (UI.es && UI.esFor === S.live) return;
  if (UI.es) UI.es.close();
  var es; try { es = new EventSource(NTFY + "l26-" + S.live + "-b/sse?since=" + encodeURIComponent(S.liveSince || "all")); } catch (e) { return; }
  UI.es = es; UI.esFor = S.live;
  es.onopen = function () { if (!UI.esOk) { UI.esOk = true; if (S.tab === "w" && !UI.tv) softRender(); } };
  es.onmessage = function (ev) {
    var d; try { d = JSON.parse(ev.data); } catch (e) { return; }
    if (d.event && d.event !== "message") return;
    if (d.id) S.liveSince = d.id;
    var b; try { b = JSON.parse(d.message); } catch (e) { save(); return; }
    if (!b || b.t !== "bet" || !b.n) { save(); return; }
    S.liveSeen = S.liveSeen || {};
    if (S.liveSeen[b.n]) { save(); return; }
    S.liveSeen[b.n] = 1;
    dirty(); var err = addBet(String(b.m), +b.by, String(b.pick || ""), b.stake, b.n);
    if (err) { S.liveRej = S.liveRej || {}; S.liveRej[b.n] = err; var ks = Object.keys(S.liveRej); if (ks.length > 12) delete S.liveRej[ks[0]]; }
    dirty(); save(); softRender();
  };
  es.onerror = function () { UI.esOk = false; es.close(); if (UI.es === es) UI.es = null; setTimeout(function () { liveListen(); }, 3000); };
}
// Nicht neu zeichnen, während jemand gerade ein Ergebnis eintippt
function softRender() {
  var a = document.activeElement;
  if (a && root.contains(a) && /^(INPUT|SELECT|TEXTAREA)$/.test(a.tagName)) { UI.later = true; return; }
  render();
}
root.addEventListener("focusout", function () { setTimeout(function () { if (UI.later && !(document.activeElement && root.contains(document.activeElement) && /^(INPUT|SELECT|TEXTAREA)$/.test(document.activeElement.tagName))) { UI.later = false; render(); } }, 50); });
function liveCard() {
  if (!S.live) return '<div class="card"><h2>📱 ' + t("Wetten vom Handy") + '</h2><p class="mu">' + t("Jeder öffnet einen Link auf seinem Handy und wettet selbst. Die Wetten landen automatisch hier. Läuft über den kostenlosen Dienst ntfy.sh, solange diese Seite offen ist.") + '</p><button class="b p" data-do="liveon">📱 ' + t("Handy-Wetten starten") + "</button></div>";
  var u = liveUrl();
  return '<div class="card"><h2>📱 ' + t("Wetten vom Handy") + ' <span class="mu">· ' + (UI.esOk ? '<span class="w">● ' + t("verbunden") + "</span>" : t("verbinde …")) + "</span></h2>" +
    '<p class="mu">' + t("Link in die WhatsApp-Gruppe schicken. Wetten kommen automatisch hier an, solange diese Seite offen ist.") + "</p>" +
    '<div class="row"><input readonly value="' + esc(u) + '" style="flex:1;min-width:200px" onclick="this.select()"><button class="b p" data-do="liveshare">📤 ' + t("Link teilen") + '</button><button class="b" data-do="liveoff">' + t("Beenden") + "</button></div>" +
    (UI.liveMsg ? '<p class="w">' + esc(UI.liveMsg) + "</p>" : "") + "</div>";
}

/* ---------- Handy-Ansicht für Wettende ---------- */
function guest(id) {
  var G = { st: null, me: null, pend: {}, pick: {}, ok: false, last: "" }, GK = "l26-wette-" + id;
  try { var sv = JSON.parse(localStorage.getItem(GK) || "{}"); G.me = sv.me != null ? sv.me : null; G.pend = sv.pend || {}; } catch (e) {}
  function keep() { try { localStorage.setItem(GK, JSON.stringify({ me: G.me, pend: G.pend })); } catch (e) {} }
  var nav = document.getElementById("tp-nav"), view = document.getElementById("tp-view"), intro = document.getElementById("tp-intro"), h1 = document.getElementById("tp-h1");
  nav.innerHTML = ""; if (intro) intro.hidden = true;
  function q(v) { return fmtQ(v); }
  function name(pid) { var p = G.st && G.st.pl.filter(function (x) { return x[0] === pid; })[0]; return p ? '<span style="color:' + p[2] + '">' + esc(p[1]) + "</span>" : "?"; }
  function draw() {
    if (h1) h1.textContent = "🍺 " + (G.st && G.st.n ? G.st.n : t("Schluck-Wetten"));
    var h = "";
    if (!G.st) { view.innerHTML = '<div class="card"><p>' + (G.ok ? t("Warte auf den Turnier-Laptop … Die Seite mit dem Turnier muss dort offen sein.") : t("verbinde …")) + "</p></div>"; return; }
    var st = G.st;
    h += '<div class="card"><h2>' + t("Wer bist du?") + '</h2><div class="chips gwho">' + st.pl.map(function (p) {
      return '<button class="b' + (G.me === p[0] ? " p" : "") + '" data-g="me" data-v="' + p[0] + '"><span class="dot" style="background:' + p[2] + '"></span>' + esc(p[1]) + "</button>"; }).join("") + "</div></div>";
    if (G.me == null) { view.innerHTML = h; return; }
    if (st.done) h += '<div class="card"><p>' + t("Das Turnier ist vorbei.") + "</p></div>";
    else if (!st.m.length) h += '<div class="card"><p class="mu">' + t("Gerade ist kein Spiel offen, auf das gewettet werden kann.") + "</p></div>";
    st.m.forEach(function (m) {
      var can = m.by.indexOf(G.me) >= 0, pk = G.pick[m.i];
      h += '<div class="card"><h2>' + name(m.a) + ' <span class="mu">' + t("gegen") + "</span> " + name(m.b) + '</h2><p class="mu">' + esc(m.l) + " · " + esc(m.md) + (m.on ? " · 🎯 Board " + m.on : "") + "</p>";
      if (!can) { h += '<p class="mu">' + t(m.a === G.me || m.b === G.me ? "Du spielst selbst – keine Wette möglich." : "Wetten nur für Ausgeschiedene.") + "</p></div>"; return; }
      h += '<div class="chips">' + [0, 1].map(function (s) { var v = "w" + s; return '<button class="chip gpick' + (pk === v ? " on" : "") + '" data-g="pick" data-m="' + esc(m.i) + '" data-v="' + v + '"><div class="mu">' + t("Sieg") + " " + name(s ? m.b : m.a) + "</div><div><b>" + q(m.w[s]) + "</b></div></button>"; }).join("") + "</div>" +
        '<details class="gx"' + (pk && pk.charAt(0) === "x" ? " open" : "") + '><summary class="mu">' + t("Genaues Ergebnis") + '</summary><div class="chips">' + m.x.map(function (x) { var v = "x" + x[0]; return '<button class="chip gpick' + (pk === v ? " on" : "") + '" data-g="pick" data-m="' + esc(m.i) + '" data-v="' + esc(v) + '"><div class="mu">' + esc(x[0]) + "</div><div><b>" + q(x[1]) + "</b></div></button>"; }).join("") + "</div></details>" +
        (pk ? '<div class="stakes"><span class="mu">' + t("Schlücke") + ":</span>" + [1, 3, 5, 10].filter(function (v) { return v <= st.mx; }).concat([1, 3, 5, 10].indexOf(st.mx) < 0 ? [st.mx] : []).map(function (v) { return '<button class="b p" data-g="bet" data-m="' + esc(m.i) + '" data-v="' + v + '">🍺 ' + v + "</button>"; }).join("") + "</div>" : '<p class="mu">' + t("Tipp antippen, dann Schlücke wählen.") + "</p>") + "</div>";
    });
    var mine = st.bt.filter(function (b) { return b[1] === G.me; }), seen = {};
    st.bt.forEach(function (b) { if (b[0]) seen[b[0]] = 1; });
    Object.keys(G.pend).forEach(function (n) { if (seen[n] || (st.rj && st.rj[n])) { if (st.rj && st.rj[n]) G.last = t("Wette abgelehnt") + ": " + G.pend[n].txt; delete G.pend[n]; keep(); } });
    var pend = Object.keys(G.pend).map(function (n) { return G.pend[n]; });
    h += '<div class="card"><h2>' + t("Meine Wetten") + "</h2>" + (G.last ? '<p class="wa">' + esc(G.last) + "</p>" : "") +
      pend.map(function (p) { return '<div class="pl"><span class="nm">' + esc(p.txt) + " · " + p.stake + " " + t("Schlücke") + '</span><span class="mu">⏳ ' + t("gesendet") + "</span></div>"; }).join("") +
      (mine.map(function (b) { return '<div class="pl"><span class="nm">' + esc(b[2]) + " · " + b[3] + " " + t("Schlücke") + ' <span class="mu">(' + q(b[4]) + ")</span></span>" + (b[5] > 0 ? '<b class="w">✓ ' + t("verteilt {0}", b[6]) + "</b>" : b[5] < 0 ? '<b class="wa">✗ ' + t("trinkt {0}", b[6]) + "</b>" : '<span class="mu">' + t("offen") + "</span>") + "</div>"; }).join("") ||
        (pend.length ? "" : '<p class="mu">' + t("Noch keine Wetten.") + "</p>")) + "</div>";
    var others = st.bt.filter(function (b) { return b[1] !== G.me; }).slice(0, 8);
    if (others.length) h += '<div class="card"><h2>' + t("Wetten der anderen") + "</h2>" + others.map(function (b) { return '<div class="pl"><span class="nm"><b>' + name(b[1]) + "</b>: " + esc(b[2]) + " · " + b[3] + '</span><span class="mu">' + (b[5] > 0 ? "✓" : b[5] < 0 ? "✗" : "…") + "</span></div>"; }).join("") + "</div>";
    view.innerHTML = h;
  }
  view.addEventListener("click", function (e) {
    var el = e.target.closest("[data-g]"); if (!el) return;
    var g = el.getAttribute("data-g"), v = el.getAttribute("data-v"), m = el.getAttribute("data-m");
    if (g === "me") { G.me = +v; keep(); }
    if (g === "pick") G.pick[m] = G.pick[m] === v ? null : v;
    if (g === "bet") {
      var pk = G.pick[m], mt = G.st.m.filter(function (x) { return x.i === m; })[0]; if (!pk || !mt) return;
      var n = liveId(), txt = pk.charAt(0) === "w" ? t("Sieg") + " " + strip(name(pk === "w0" ? mt.a : mt.b)) : strip(name(mt.a)) + " " + pk.slice(1) + " " + strip(name(mt.b));
      G.pend[n] = { txt: txt, stake: +v, at: Date.now() }; G.pick[m] = null; G.last = ""; keep();
      fetch(NTFY + "l26-" + id + "-b", { method: "POST", body: JSON.stringify({ t: "bet", n: n, by: G.me, m: m, pick: pk, stake: +v }) })
        .then(function (r) { if (!r.ok) throw 0; }).catch(function () { delete G.pend[n]; G.last = t("Senden fehlgeschlagen – bitte nochmal."); keep(); draw(); });
    }
    draw();
  });
  var since = "15m";
  function listen() {
    var es; try { es = new EventSource(NTFY + "l26-" + id + "-s/sse?since=" + encodeURIComponent(since)); } catch (e) { return; }
    es.onopen = function () { G.ok = true; if (!G.st) setTimeout(draw, 2500); };
    es.onmessage = function (ev) {
      var d; try { d = JSON.parse(ev.data); } catch (e) { return; }
      if (d.event && d.event !== "message") return;
      if (d.id) since = d.id;
      try { var s = JSON.parse(d.message); if (s && s.v === 1 && (!G.st || s.ts >= G.st.ts)) { G.st = s; draw(); } } catch (e) {}
    };
    es.onerror = function () { es.close(); G.ok = false; setTimeout(listen, 3000); };
  }
  draw(); listen();
}

/* ---------- Rendern ---------- */
// TV: alles so gross zoomen, dass der Bildschirm in der Höhe ausgefüllt ist
function fitTv() {
  if (!UI.tv) { root.style.zoom = ""; return; }
  var z = 1; root.style.zoom = "1";
  for (var i = 0; i < 4; i++) {
    var h = root.getBoundingClientRect().height; if (!h) break;
    z = Math.max(1, Math.min(3, z * (window.innerHeight - 8) / h));
    root.style.zoom = String(z);
  }
  // nach dem Umbruch nie über den Rand hinaus
  for (var j = 0; j < 6 && root.getBoundingClientRect().height > window.innerHeight && z > 1; j++) { z = Math.max(1, z * 0.96); root.style.zoom = String(z); }
}
window.addEventListener("resize", function () { if (UI.tv) fitTv(); });
var TABS = [["t", "Teilnehmer"], ["g", "Spielplan"], ["p", "Boards"], ["k", "Turnierbaum"], ["w", "Wetten"], ["s", "Statistik"]];
function render() {
  dirty();
  if (S.started) { while (swissNext()) dirty(); dirty(); syncBoards(); dirty(); save(); }
  document.body.classList.toggle("tv", UI.tv);
  var intro = document.getElementById("tp-intro");
  var h1 = document.getElementById("tp-h1");
  if (h1) h1.textContent = t("Turnier-Planer");
  if (intro) { intro.textContent = t("Plane dein lokales Dartturnier kostenlos: Teilnehmer eintragen, auslosen, Spiele auf die Boards verteilen und alles live auf dem TV zeigen. Alles bleibt in deinem Browser gespeichert."); intro.hidden = !!S.started; }
  var nav = document.getElementById("tp-nav"), view = document.getElementById("tp-view");
  if (UI.tv) announce();   // Ansage nur im TV-Tab, sonst spricht es doppelt
  if (!UI.tvTab) { liveListen(); livePush(); }
  if (UI.tv) { nav.innerHTML = ""; view.innerHTML = viewTv(); fitTv(); return; }
  root.style.zoom = "";
  var tabs = TABS.filter(function (x) { return !(x[0] === "w" && !(S.bet && S.bet.on)) && !(x[0] === "k" && (S.fmt === "league" || (S.fmt === "swiss" && S.sko < 2))); });
  nav.innerHTML = tabs.map(function (x) { return '<button class="' + (S.tab === x[0] ? "on" : "") + '" data-do="tab" data-v="' + x[0] + '">' + t(x[1]) + "</button>"; }).join("");
  view.innerHTML = S.tab === "t" ? viewSetup() : S.tab === "g" ? viewSchedule() : S.tab === "p" ? viewBoards() : S.tab === "k" ? viewBracket() : S.tab === "w" ? viewBets() : viewStats();
}

/* ---------- Ereignisse ---------- */
function setOpt(k, v) {
  if (k === "fee") { S.fee = Math.max(0, num(v) || 0); return; }
  if (k === "extra") { S.extra = Math.max(0, num(v) || 0); return; }
  if (k === "house") { S.house = Math.min(100, Math.max(0, num(v) || 0)); return; }
  if (k === "cur") { S.cur = String(v).trim().slice(0, 4); return; }
  if (k === "name") { S.name = String(v).slice(0, 60); return; }
  if (k === "betmax") { S.bet.max = +v; return; }
  if (k === "ng" || k === "adv" || k === "nb" || k === "sr" || k === "sko" || k === "ltop") { S[k] = +v; return; }
  var mk = k.split("_");
  if (mk[0] === "bo") { var m = mode(mk[1]); if (v === "fix2") { m.fix2 = true; m.bo = 3; } else { m.fix2 = false; m.bo = +v; } return; }
  if (mk[0] === "u") { mode(mk[1]).sets = +v || 0; return; }
  if (mk[0] === "x") { mode(mk[1]).x = +v; }
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
    case "delbet": S.bets = (S.bets || []).filter(function (bt) { return bt.id !== +id || betState(bt); }); break;
    case "cancel": UI.edit = null; break;
    case "call": callNext(+bi); break;
    case "assign": assignTo(+bi, id); break;
    case "col": var cp = P(+id); if (cp) {   // nächste Farbe, die noch niemand hat
      var used = S.players.filter(function (o) { return o !== cp; }).map(function (o) { return pc(o.id); }), ci = PAL.indexOf(pc(cp.id));
      for (var cs = 1; cs <= PAL.length; cs++) { var nc = PAL[(ci + cs) % PAL.length]; if (used.indexOf(nc) < 0 || cs === PAL.length) { cp.col = nc; break; } }
    } break;
    case "say": UI.say = !UI.say; UI.ann = {}; for (var sb = 0; sb < S.nb; sb++) UI.ann[sb] = S.board[sb] || null;
      if (UI.say && window.speechSynthesis) speak(lang() === "en" ? "Announcements on." : "Ansagen an."); break;
    case "share": shareImage(); return;
    case "liveon": S.live = liveId(); S.liveSince = null; S.liveSeen = {}; S.liveRej = {}; UI.lpKey = null; break;
    case "liveoff": S.live = null; UI.liveMsg = ""; break;
    case "liveshare":
      var lu = liveUrl(), lt = (lang() === "en" ? "Place your bets: " : "Hier wetten: ") + lu;
      if (navigator.share) { navigator.share({ title: S.name || "Schluck-Wetten", text: lt, url: lu }).catch(function () {}); return; }
      try { navigator.clipboard.writeText(lu); UI.liveMsg = t("Link kopiert."); } catch (x) {} break;
    case "unboard": var mid = S.board[+bi]; S.board[+bi] = null; if (mid) { if (S.ts) delete S.ts[mid]; S.defer = S.defer || {}; S.defer[mid] = Date.now(); if (S.wr[mid] != null) { S.wc[S.wr[mid]]--; delete S.wr[mid]; } } break;
    case "tv":
      // TV-Ansicht in eigenem Tab, damit man daneben weiter Ergebnisse eintragen kann
      try { var tw = window.open(location.pathname + location.search + "#tv", "l26-tv"); if (tw) { tw.focus(); return; } } catch (x) {}
      UI.tv = true; try { var rq = document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); if (rq && rq.catch) rq.catch(function () {}); } catch (x) {} break;
    case "fs": try { var rf = document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); if (rf && rf.catch) rf.catch(function () {}); } catch (x) {} return;
    case "tvoff":
      if (UI.tvTab) { try { window.close(); } catch (x) {} if (window.closed) return; UI.tvTab = false; }
      UI.tv = false; try { if (document.fullscreenElement) document.exitFullscreen().catch(function () {}); if (location.hash === "#tv") history.replaceState(null, "", location.pathname + location.search); } catch (x) {} break;
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
  else if (el.matches("[data-bt]")) { S.bet = Object.assign({ on: false, all: false, max: 10 }, S.bet); S.bet[el.getAttribute("data-bt")] = el.checked; }
  else if (el.matches("[data-split]")) { S.split[+el.getAttribute("data-split")] = Math.max(0, num(el.value) || 0); }
  else if (el.matches("[data-pf]")) { var p = P(+el.getAttribute("data-id")); if (p) p[el.getAttribute("data-pf")] = el.checked; }
  else if (el.matches('[data-do="importfile"]')) { var f = el.files && el.files[0]; if (!f) return; var rd = new FileReader(); rd.onload = function () { importData(rd.result); dirty(); save(); render(); }; rd.readAsText(f); return; }
  else return;
  dirty(); save(); render();
});
root.addEventListener("submit", function (e) {
  var fb = e.target.closest("form.bet");
  if (fb) { e.preventDefault(); placeBet(fb.getAttribute("data-id"), fb, e.submitter && e.submitter.getAttribute("data-stake")); dirty(); save(); render(); return; }
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
window.addEventListener("storage", function (e) { if (GUEST) return; if (e.key === KEY && e.newValue) { try { S = Object.assign(fresh(), JSON.parse(e.newValue)); } catch (x) {} render(); } });
document.addEventListener("l26:lang", function () { if (!GUEST) render(); });
setInterval(function () { root.querySelectorAll("[data-w]").forEach(function (el) { var ts = +el.getAttribute("data-w"); if (ts) el.textContent = fmtTime(ts); }); }, 1000);

var GUEST = new URLSearchParams(location.search).get("wette");
if (GUEST && /^[a-z0-9]{6,20}$/.test(GUEST)) { document.body.classList.add("guest"); guest(GUEST); return; }
GUEST = null;
if (root.getAttribute("data-demo") === "auto" && !S.started && !S.players.length) { loadDemo(); dirty(); save(); }
render();
})();
