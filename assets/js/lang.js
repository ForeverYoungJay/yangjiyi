// Chinese/English switch: content is written twice as .en / .zh blocks; this hides one set.
(function () {
  var root = document.documentElement;
  var style = document.createElement("style");
  style.textContent = "html[data-lang=en] .zh, html[data-lang=zh] .en { display: none !important; } #lang-toggle { background: none; border: 0; color: inherit; font-weight: 600; cursor: pointer; padding: 0 0.5rem; }";
  document.head.appendChild(style);

  // Labels generated from page front matter (nav links, page titles).
  var dict = { about: "关于", publications: "论文", projects: "项目", cv: "简历", news: "动态", "selected publications": "代表论文" };
  // Translate the first text node only, so children like <span class="sr-only"> survive.
  var labelled = [];
  document.querySelectorAll(".navbar-nav a, h1.post-title, h2, h2 a").forEach(function (el) {
    var node = Array.prototype.find.call(el.childNodes, function (n) { return n.nodeType === 3 && n.nodeValue.trim(); });
    var key = node && node.nodeValue.trim().toLowerCase();
    if (dict[key]) labelled.push({ node: node, en: node.nodeValue, zh: dict[key] });
  });

  function getSaved() {
    try { return localStorage.getItem("lang"); } catch (e) { return null; }
  }
  function apply(lang) {
    root.dataset.lang = lang;
    root.lang = lang === "zh" ? "zh-CN" : "en";
    labelled.forEach(function (l) { l.node.nodeValue = l[lang]; });
    if (btn) btn.textContent = lang === "zh" ? "EN" : "中文";
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var btn = document.createElement("button");
  btn.id = "lang-toggle";
  btn.type = "button";
  btn.title = "中文 / English";
  btn.setAttribute("aria-label", "Switch language / 切换语言");
  btn.onclick = function () { apply(root.dataset.lang === "zh" ? "en" : "zh"); };
  var li = document.createElement("li");
  li.className = "nav-item";
  li.appendChild(btn);
  var nav = document.querySelector(".navbar-nav");
  if (nav) nav.insertBefore(li, nav.querySelector(".toggle-container"));

  apply(getSaved() || (/^zh/i.test(navigator.language) ? "zh" : "en"));
})();
