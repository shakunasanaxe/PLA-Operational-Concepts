/* Shell and pages for the operational concepts glossary. No dependencies. */
(function () {
  'use strict';
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const byId = {};
  CONCEPTS.forEach((c, i) => { c.n = i + 1; byId[c.id] = c; });
  const theme = (id) => THEMES.find((t) => t.id === id);
  const practices = (c) => (c.practice ? (Array.isArray(c.practice) ? c.practice : [c.practice]) : []);
  const code = (c) => 'C.' + String(c.n).padStart(2, '0');

  /* ------------------------------------------------------------ diagrams */
  function diagramSvg(spec) {
    if (!spec) return '';
    const name = Array.isArray(spec) ? spec[0] : spec;
    const arg = Array.isArray(spec) ? spec[1] : undefined;
    return Diagrams[name] ? Diagrams[name](arg) : '';
  }
  const key = (spec) => (Array.isArray(spec) ? spec.join(':') : spec);

  const GALLERY = [
    { dia: 'izStack', title: 'Three modernisations, one structure', cap: 'How mechanisation, informatisation and intelligentisation are meant to support and pull one another.', c: 'three-izations' },
    { dia: ['izNodes', 'mech'], title: 'From isolated platforms to a network', cap: 'The same force drawn three ways. The highlighted panel changes from entry to entry.', c: 'informatisation' },
    { dia: 'izStages', title: 'Three stages of intelligentisation', cap: 'Shifting human and machine roles, following the three-stage description in Chinese commentary.', c: 'intelligentisation' },
    { dia: 'sos', title: 'The operational system', cap: 'The five component systems that make up the whole the PLA wants to fight with.', c: 'operational-system' },
    { dia: 'sdw', title: 'System destruction warfare', cap: 'Striking the hubs of an enemy system so that the surviving parts cannot act as a whole.', c: 'system-destruction' },
    { dia: 'killchain', title: 'The kill chain, PLA style', cap: 'The four-part loop and the shortening of the sensor-to-launcher interval.', c: 'kill-chain' },
    { dia: 'tcw', title: 'Target-centric warfare', cap: 'Five subsystems resting on an information support foundation.', c: 'tcw' },
    { dia: 'sixCentres', title: 'One command, six centres', cap: 'A joint operations command and the functional centres that serve it.', c: 'six-centres' },
    { dia: 'joint', title: 'Coordination against integration', cap: 'The difference the PLA draws between working side by side and being fused.', c: 'integrated-joint-operations' },
    { dia: 'superiorities', title: 'The three superiorities', cap: 'Information first, then air and maritime.', c: 'three-superiorities' },
    { dia: 'spaces', title: 'Combat space and war space', cap: 'A shrinking arena of fighting inside a widening contest.', c: 'combat-war-space' },
    { dia: 'threeWars', title: 'The three warfares', cap: 'Public opinion, psychological and legal warfare in the cognitive space.', c: 'cognitive-warfares' },
    { dia: 'activeDefence', title: 'Active defence by level of war', cap: 'Defensive at the strategic level, often offensive below it.', c: 'active-defence' },
    { dia: 'guidelines', title: 'Strategic guidelines, 1956 to 2015', cap: 'Six generations of guidance and the kind of war each prepared for.', c: 'strategic-guidelines' },
    { dia: 'thought', title: 'The hierarchy of military thought', cap: 'Party theory, strategic guidelines, then operational concepts and doctrine.', c: 'military-thought' },
    { dia: 'moving', title: 'Moving the enemy', cap: 'A schematic of the shaping logic Bjorge describes at Huai Hai.', c: 'moving-the-enemy' },
    { dia: 'threeThree', title: 'Three attacks, three defences', cap: 'The 1990s principle that followed the Gulf War.', c: 'three-three' },
  ];

  /* ------------------------------------------------------------ shell */
  const NAV = [
    ['Glossary', [['index.html', 'A to Z'], ['map.html', 'Concept Map'], ['gallery.html', 'Diagram Gallery'], ['wtc.html', 'In the Western Theatre'], ['campaigns.html', 'Campaign Definitions']]],
    ['Themes', THEMES.map((t) => ['index.html#theme=' + t.id, t.name])],
    ['Reference', [['sources.html', 'Sources']]],
  ];
  function shell() {
    const page = location.pathname.split('/').pop() || 'index.html';
    let links = '';
    NAV.forEach(([g, items]) => {
      links += `<div class="grp">${esc(g)}</div>`;
      items.forEach(([h, t]) => {
        const base = h.split('#')[0];
        const cur = g !== 'Themes' && base === page ? ' aria-current="page"' : '';
        links += `<a href="${h}" data-h="${esc(h)}"${cur}>${esc(t)}</a>`;
      });
    });
    const side = document.createElement('aside');
    side.className = 'side';
    side.innerHTML = `<a class="brand" href="index.html"><span class="mono meta">Takshashila Institution</span><strong>PLA Operational Concepts</strong><button class="menu-btn" type="button" aria-expanded="false">Menu</button></a>
      <nav class="nav">${links}</nav>
      <div class="side-foot">A glossary of operational concepts in the People's Liberation Army, with original diagrams.</div>`;
    document.body.prepend(side);
    const btn = $('.menu-btn', side);
    btn.addEventListener('click', (e) => { e.preventDefault(); btn.setAttribute('aria-expanded', side.classList.toggle('open')); });
    const foot = document.createElement('footer');
    foot.className = 'page-foot';
    foot.innerHTML = '<span>Takshashila Institution · PLA Operational Concepts</span>';
    $('main').appendChild(foot);
    const mark = () => {
      const h = location.hash;
      $$('.nav a[data-h*="theme="]').forEach((a) => {
        const on = page === 'index.html' && h && a.dataset.h.endsWith(h);
        if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
      });
      if (page === 'index.html') { const all = $('.nav a[data-h="index.html"]'); if (all) { if (h.indexOf('theme=') > -1) all.removeAttribute('aria-current'); else all.setAttribute('aria-current', 'page'); } }
    };
    window.addEventListener('hashchange', mark); mark();
  }

  /* ------------------------------------------------------------ lightbox for diagrams */
  function lightbox() {
    const dlg = document.createElement('dialog');
    dlg.className = 'lb';
    dlg.innerHTML = '<div class="diagram" style="padding:24px;background:#fff;min-width:min(90vw,900px)"></div><div class="cap"><span></span><button class="btn sm ghost" type="button">Close</button></div>';
    document.body.appendChild(dlg);
    $('button', dlg).addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    document.addEventListener('click', (e) => {
      const f = e.target.closest('[data-zoom]');
      if (!f || e.target.closest('a')) return;
      $('.diagram', dlg).innerHTML = f.querySelector('.diagram').innerHTML;
      $('.cap span', dlg).textContent = f.dataset.zoom;
      dlg.showModal();
    });
  }

  const figure = (spec, caption, extra) =>
    `<figure class="fig" data-zoom="${esc(caption)}"><div class="diagram">${diagramSvg(spec)}</div><figcaption><span>${esc(caption)}</span><span>${extra || 'Original schematic · select to enlarge'}</span></figcaption></figure>`;

  /* ------------------------------------------------------------ index page */
  function indexPage() {
    const list = $('#list'), q = $('#q'), pills = $('#pills'), count = $('#count'), blurb = $('#blurb');
    let th = 'all';
    pills.innerHTML = [{ id: 'all', name: 'All concepts' }].concat(THEMES).map((t) => `<button class="btn sm ghost" type="button" data-t="${t.id}" aria-pressed="false">${esc(t.name)}</button>`).join('');
    function draw() {
      const v = q.value.trim().toLowerCase();
      const rows = CONCEPTS.filter((c) => (th === 'all' || c.theme === th) &&
        (!v || (c.term + ' ' + c.zh + ' ' + c.py + ' ' + c.short + ' ' + c.def.join(' ')).toLowerCase().includes(v)));
      list.innerHTML = rows.map((c) => `<a class="term-row" href="concept.html#${c.id}"><span class="code">${code(c)}</span><span class="nm">${esc(c.term)}${c.zh ? `<span class="zh">${esc(c.zh)}</span>` : ''}</span><span class="sh">${esc(c.short)}</span><span class="tg"><span class="tag">${esc(theme(c.theme).name)}</span>${c.dia ? '<span class="tag dia">diagram</span>' : ''}</span></a>`).join('') || '<p class="meta" style="padding:22px 0">No matching concepts. Try a shorter term.</p>';
      count.textContent = rows.length + ' of ' + CONCEPTS.length + ' concepts';
      $$('button', pills).forEach((b) => b.setAttribute('aria-pressed', b.dataset.t === th));
      blurb.textContent = th === 'all' ? 'Every entry gives a definition, the Chinese term with pinyin, the sources it rests on and, for the larger ideas, an original diagram.' : theme(th).blurb;
    }
    pills.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; th = b.dataset.t; history.replaceState(null, '', th === 'all' ? 'index.html' : '#theme=' + th); draw(); });
    q.addEventListener('input', draw);
    const fromHash = () => { const m = /theme=(\w+)/.exec(location.hash); th = m && theme(m[1]) ? m[1] : 'all'; draw(); };
    window.addEventListener('hashchange', fromHash); fromHash();

    /* featured diagrams */
    const feat = ['killchain', 'sos', 'izStack', 'izStages', 'sdw', 'tcw'].map((k) => GALLERY.find((g) => key(g.dia) === k));
    const host = $('#feat');
    let i = 0;
    host.innerHTML = `<div class="feat-head"><span class="meta" id="fn"></span><a class="link-cta" id="fl" href="#">Open the entry →</a></div>
      <div class="feat-body"><div class="diagram" id="fd"></div></div>
      <div class="feat-ctl"><div class="dots">${feat.map(() => '<button type="button"></button>').join('')}</div><div class="arrows"><button type="button" data-d="-1" aria-label="Previous diagram">←</button><button type="button" data-d="1" aria-label="Next diagram">→</button></div></div>`;
    function go(n) {
      i = (n + feat.length) % feat.length;
      const g = feat[i];
      $('#fd').innerHTML = diagramSvg(g.dia);
      $('#fn').textContent = (i + 1) + ' of ' + feat.length + ' · ' + g.title;
      $('#fl').href = 'concept.html#' + g.c;
      $$('.dots button', host).forEach((b, k) => b.setAttribute('aria-current', k === i));
    }
    $$('.dots button', host).forEach((b, k) => b.addEventListener('click', () => go(k)));
    $$('.arrows button', host).forEach((b) => b.addEventListener('click', () => go(i + Number(b.dataset.d))));
    go(0);
  }

  /* ------------------------------------------------------------ concept page */
  function conceptPage() {
    const root = $('#concept');
    function render() {
      const id = location.hash.slice(1);
      const c = byId[id] || CONCEPTS[0];
      const t = theme(c.theme);
      const sameTheme = CONCEPTS.filter((x) => x.theme === c.theme);
      const k = sameTheme.indexOf(c);
      const prev = sameTheme[(k - 1 + sameTheme.length) % sameTheme.length], next = sameTheme[(k + 1) % sameTheme.length];
      document.title = c.term + ' · PLA Operational Concepts';
      root.innerHTML = `
      <header class="band"><div class="wrap">
        <div class="eyebrow">${esc(t.name)} · ${code(c)}</div>
        <h1 class="h-sec" style="max-width:22ch">${esc(c.term)}</h1>
        ${c.zh ? `<div class="def-zh zh">${esc(c.zh)}</div>` : ''}${c.py ? `<div class="def-py">${esc(c.py)}</div>` : ''}
        <p class="lede" style="margin-top:24px">${esc(c.short)}</p>
      </div></header>
      <section class="band"><div class="wrap"><div class="def-split">
        <div>
          <div class="eyebrow">Definition</div>
          <div class="prose">${c.def.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
          ${c.why ? `<div class="aside" style="margin-top:8px"><strong>Why it matters.</strong> ${esc(c.why)}</div>` : ''}
          ${practices(c).map((x) => `<div class="practice"><span class="meta">In practice · ${esc(SOURCES[x.s].short)}</span>${esc(x.t)}</div>`).join('')}
          ${c.id === 'joint-campaigns' ? '<p style="margin-top:24px"><a class="btn sm" href="campaigns.html">See the fourteen campaign types</a></p>' : ''}
          <div class="eyebrow" style="margin-top:28px">Sources</div>
          <div class="srcs-line">${c.src.map((s) => `<a class="tag" href="sources.html#${s}" title="${esc(SOURCES[s].title)}">${esc(SOURCES[s].short)}</a>`).join('')}</div>
        </div>
        <div>${c.dia ? figure(c.dia, 'Diagram: ' + c.term) : `<div class="stripe" style="min-height:240px" data-cap="No diagram for this entry"></div>`}</div>
      </div></div></section>
      <section class="band deep"><div class="wrap">
        <div class="sec-head"><h2 class="h-sec" style="font-size:32px">Related concepts</h2></div>
        <div class="cards">${c.related.map((r) => byId[r]).filter(Boolean).map((r) => `<a class="card" href="#${r.id}"><span class="meta">${esc(theme(r.theme).name)} · ${code(r)}</span><h3 class="h-card">${esc(r.term)}</h3>${r.zh ? `<div class="zh" style="color:var(--ink-50);font-size:13px;margin-top:2px">${esc(r.zh)}</div>` : ''}<p>${esc(r.short)}</p></a>`).join('')}</div>
      </div></section>
      <section class="band"><div class="wrap"><div class="nav-pair">
        <a href="#${prev.id}"><span class="meta">← Previous in ${esc(t.name)}</span><span class="t">${esc(prev.term)}</span></a>
        <a href="#${next.id}"><span class="meta">Next in ${esc(t.name)} →</span><span class="t">${esc(next.term)}</span></a>
      </div></div></section>`;
      window.scrollTo(0, 0);
    }
    window.addEventListener('hashchange', render); render();
  }

  /* ------------------------------------------------------------ gallery page */
  function galleryPage() {
    $('#gal').innerHTML = GALLERY.map((g) => `<div>${figure(g.dia, g.title, `<a href="concept.html#${g.c}">Open the entry →</a>`)}<p style="margin:12px 0 0;color:var(--ink-70);font-size:14px;max-width:60ch">${esc(g.cap)}</p></div>`).join('');
  }

  /* ------------------------------------------------------------ Western Theatre examples */
  function wtcPage() {
    const items = [];
    CONCEPTS.forEach((c) => practices(c).forEach((x) => { if (x.s === 'wtc') items.push({ h: c.term, t: x.t, c: [c.id], zh: c.zh }); }));
    WTC_EXTRA.forEach((x) => items.push(x));
    $('#wtc').innerHTML = items.map((x, i) => `<div class="card" style="display:block"><span class="meta">${String(i + 1).padStart(2, '0')} · ${esc(x.zh ? 'Concept' : 'Theme')}</span><h3 class="h-card">${esc(x.h)}</h3><p>${esc(x.t)}</p><div class="foot" style="flex-wrap:wrap;justify-content:flex-start">${x.c.map((id) => `<a class="tag" href="concept.html#${id}">${esc(byId[id].term)}</a>`).join('')}</div></div>`).join('');
    $('#wtc-n').textContent = items.length;
  }

  /* ------------------------------------------------------------ concept map */
  const LAYERS = [
    ['Guidance', ['peoples-war', 'active-defence', 'strategic-guidelines', 'local-war', 'informatised-local-wars', 'strategic-deterrence', 'war-control']],
    ['Modernisation', ['mechanisation', 'informatisation', 'intelligentisation', 'three-izations']],
    ['Doctrine', ['military-thought', 'operations-regulations', 'joint-guidelines', 'basic-form', 'joint-campaigns', 'integrated-joint-operations', 'mdijo']],
    ['Systems and information', ['information-dominance', 'three-superiorities', 'network-warfare', 'system-of-systems', 'operational-system', 'system-confrontation']],
    ['Methods', ['system-destruction', 'key-point-strikes', 'tcw', 'kill-chain', 'noncontact', 'three-three', 'six-centres', 'combat-power']],
    ['Wider contest and heritage', ['combat-war-space', 'cognitive-warfares', 'moving-the-enemy', 'annihilation', 'concentrate-force', 'lure-in-deep']],
  ];
  const LABEL = {
    'informatised-local-wars': ['Informatised', 'local wars'], 'strategic-guidelines': ['Strategic', 'guidelines'], 'strategic-deterrence': ['Strategic', 'deterrence'],
    'three-izations': ['Three -isations', 'together'], 'military-thought': ['Hierarchy of', 'military thought'], 'operations-regulations': ['Regulations', 'and gangyao'],
    'joint-guidelines': ['Joint operations', 'Guidelines'], 'basic-form': ['Basic form of', 'operations'], 'joint-campaigns': ['Joint and service', 'campaigns'],
    'integrated-joint-operations': ['Integrated joint', 'operations'], 'mdijo': ['Multi-domain', 'joint operations'], 'information-dominance': ['Information', 'dominance'],
    'three-superiorities': ['Three', 'superiorities'], 'network-warfare': ['Network', 'warfare'], 'system-of-systems': ['System-of-systems', 'operations'],
    'operational-system': ['Operational', 'system'], 'system-confrontation': ['System', 'confrontation'], 'system-destruction': ['System', 'destruction warfare'],
    'key-point-strikes': ['Key-point', 'strikes'], 'tcw': ['Target-centric', 'warfare'], 'kill-chain': ['Kill chain', '(侦控打评)'], 'noncontact': ['Non-contact', 'warfare'],
    'three-three': ['Three attacks,', 'three defences'], 'six-centres': ['One command,', 'six centres'], 'combat-power': ['Combat power', 'generation'],
    'combat-war-space': ['Combat and', 'war space'], 'cognitive-warfares': ['Three Warfares,', 'cognitive space'], 'moving-the-enemy': ['Moving', 'the enemy'],
    'annihilation': ['Battle of', 'annihilation'], 'concentrate-force': ['Concentrating', 'superior force'], 'lure-in-deep': ['Luring the', 'enemy in deep'],
    'peoples-war': ['People’s', 'War'], 'active-defence': ['Active', 'defence'], 'local-war': ['Local', 'war'], 'war-control': ['War', 'control'],
    'mechanisation': ['Mechanisation', ''], 'informatisation': ['Informatisation', ''], 'intelligentisation': ['Intelligentisation', ''],
  };
  function mapPage() {
    const W = 1000, rowH = 118, top = 56, nodeH = 46;
    const pos = {};
    let body = '';
    LAYERS.forEach(([name, ids], r) => {
      const y = top + r * rowH;
      body += `<rect x="0" y="${y - 30}" width="${W}" height="${rowH}" class="band${r % 2 ? ' alt' : ''}"/><text x="14" y="${y - 12}" class="layer">${esc(name)}</text>`;
      const gap = 10, pad = 24, w = (W - 2 * pad - gap * (ids.length - 1)) / ids.length;
      ids.forEach((id, i) => { pos[id] = { x: pad + i * (w + gap), y: y, w, layer: r }; });
    });
    const edges = [], seen = new Set();
    CONCEPTS.forEach((c) => c.related.forEach((r) => {
      if (!pos[c.id] || !pos[r]) return;
      const k = [c.id, r].sort().join('|'); if (seen.has(k)) return; seen.add(k);
      if (pos[c.id].layer === pos[r].layer) return;
      edges.push([c.id, r]);
    }));
    let eh = '';
    edges.forEach(([a, b]) => {
      let A = pos[a], B = pos[b]; if (A.layer > B.layer) { const t = A; A = B; B = t; }
      const x1 = A.x + A.w / 2, y1 = A.y + nodeH, x2 = B.x + B.w / 2, y2 = B.y;
      const my = (y1 + y2) / 2;
      eh += `<path class="edge" data-a="${a}" data-b="${b}" d="M${x1} ${y1} C${x1} ${my} ${x2} ${my} ${x2} ${y2}"/>`;
    });
    let nodes = '';
    Object.keys(pos).forEach((id) => {
      const p = pos[id], lab = LABEL[id] || [byId[id].term, ''];
      nodes += `<g class="node" tabindex="0" role="button" data-id="${id}" aria-label="${esc(byId[id].term)}"><rect x="${p.x}" y="${p.y}" width="${p.w}" height="${nodeH}"/><text x="${p.x + p.w / 2}" y="${p.y + (lab[1] ? 19 : 28)}" text-anchor="middle">${esc(lab[0])}</text>${lab[1] ? `<text x="${p.x + p.w / 2}" y="${p.y + 34}" text-anchor="middle">${esc(lab[1])}</text>` : ''}</g>`;
    });
    const H = top + LAYERS.length * rowH - 20;
    $('#cmap').innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="group" aria-label="Concept map">${body}${eh}${nodes}</svg>`;
    const panel = $('#cpanel');
    const rel = (id) => new Set(byId[id].related.concat(CONCEPTS.filter((c) => c.related.includes(id)).map((c) => c.id)));
    function select(id) {
      const R = rel(id);
      $$('#cmap .node').forEach((n) => { const nid = n.dataset.id; n.classList.toggle('sel', nid === id); n.classList.toggle('rel', R.has(nid)); n.classList.toggle('dim', nid !== id && !R.has(nid)); });
      $$('#cmap .edge').forEach((e) => { const on = e.dataset.a === id || e.dataset.b === id; e.classList.toggle('on', on); e.classList.toggle('dim', !on); });
      const c = byId[id];
      panel.innerHTML = `<span class="meta">${esc(theme(c.theme).name)} · ${code(c)}</span><h3 class="h-feat" style="margin:8px 0 4px">${esc(c.term)}</h3>${c.zh ? `<div class="zh" style="color:var(--ink-50);margin-bottom:12px">${esc(c.zh)}</div>` : ''}<p style="color:var(--ink-70);max-width:62ch">${esc(c.short)}</p>
        <p style="margin-top:14px;display:flex;gap:14px;flex-wrap:wrap;align-items:center"><a class="btn sm" href="concept.html#${id}">Open the entry</a><span class="meta">Linked to: ${[...R].filter((x) => byId[x]).map((x) => esc(byId[x].term)).join(' · ') || 'no other entries'}</span></p>`;
    }
    $('#cmap').addEventListener('click', (e) => { const n = e.target.closest('.node'); if (n) select(n.dataset.id); });
    $('#cmap').addEventListener('keydown', (e) => { const n = e.target.closest('.node'); if (n && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); select(n.dataset.id); } });
    select('system-destruction');
  }

  window.App = { shell, lightbox, indexPage, conceptPage, galleryPage, mapPage };
  document.addEventListener('DOMContentLoaded', () => {
    shell(); lightbox();
    const p = document.body.dataset.page;
    if (p === 'index') indexPage();
    if (p === 'concept') conceptPage();
    if (p === 'gallery') galleryPage();
    if (p === 'map') mapPage();
    if (p === 'wtc') wtcPage();
  });
})();
