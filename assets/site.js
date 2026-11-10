// Sprachumschaltung DE/EN für alle Seiten.
(function(){
  var KEY = "l26-lang";
  var root = document.documentElement;

  function apply(l){
    root.lang = l;
    document.querySelectorAll("[data-de][data-en]").forEach(function(el){
      el.textContent = el.getAttribute("data-" + l);
    });
    document.querySelectorAll(".lang button").forEach(function(b){
      b.setAttribute("aria-pressed", String(b.dataset.lang === l));
    });
    var title = root.getAttribute("data-title-" + l);
    if (title) document.title = title;
    try { localStorage.setItem(KEY, l); } catch(e){}
    document.dispatchEvent(new CustomEvent("l26:lang", { detail: l }));
  }

  document.querySelectorAll(".lang button").forEach(function(b){
    b.addEventListener("click", function(){ apply(b.dataset.lang); });
  });

  apply(root.lang === "en" ? "en" : "de");
})();
