/* Original diagrams, drawn as inline SVG so they inherit the site's colours and fonts.
   Every diagram is a schematic: positions, lengths and proportions are illustrative. */
(function () {
  'use strict';

  /* ------------------------------------------------------------ drawing helpers */
  const svg = (w, h, title, inner) =>
    `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ah-ink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-ink"/></marker>
<marker id="ah-wine" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-wine"/></marker>
<marker id="ah-gold" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-gold"/></marker>
<marker id="ah-grey" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-grey"/></marker>
</defs>${inner}</svg>`;

  const R = (x, y, w, h, cls) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${cls || 'f-paper s-ink'}"/>`;
  const C = (x, y, r, cls) => `<circle cx="${x}" cy="${y}" r="${r}" class="${cls || 'f-paper s-ink'}"/>`;
  const T = (x, y, s, cls, anchor) => `<text x="${x}" y="${y}" class="${cls || 't'}" text-anchor="${anchor || 'middle'}">${s}</text>`;
  const ML = (x, y, lines, cls, lh, anchor) =>
    lines.map((s, i) => T(x, y + i * (lh || 16), s, cls, anchor)).join('');
  /* centred multi-line label inside a box */
  const BX = (x, y, w, h, lines, rc, tc, lh) => {
    lh = lh || 17;
    const y0 = y + h / 2 - ((lines.length - 1) * lh) / 2 + 4.5;
    return R(x, y, w, h, rc) + ML(x + w / 2, y0, lines, tc, lh);
  };
  const L = (x1, y1, x2, y2, cls, arrow) =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="l ${cls || 's-ink'}"${arrow ? ` marker-end="url(#ah-${arrow})"` : ''}/>`;
  const P = (d, cls, arrow) => `<path d="${d}" class="l ${cls || 's-ink'}"${arrow ? ` marker-end="url(#ah-${arrow})"` : ''}/>`;

  const D = {};

  /* ---------------------------------------------------------------- 1. the three -isations, stacked */
  D.izStack = () => svg(720, 410, 'Mechanisation, informatisation and intelligentisation as three stacked layers', [
    R(150, 30, 420, 100, 'f-wine s-wine'),
    T(360, 66, 'Intelligentisation', 'tb tw'), T(360, 86, '智能化', 'tz-w zh'),
    ML(360, 108, ['AI-enabled weapons, unmanned systems,', 'machine support for decisions'], 'tw12', 16),
    R(150, 150, 420, 100, 'f-wsoft s-wine'),
    T(360, 186, 'Informatisation', 'tb'), T(360, 206, '信息化', 'tz zh'),
    ML(360, 228, ['Networks, sensors and command systems', 'tie platforms and services into one system'], 't7', 16),
    R(150, 270, 420, 100, 'f-deep s-ink'),
    T(360, 306, 'Mechanisation', 'tb'), T(360, 326, '机械化', 'tz zh'),
    ML(360, 348, ['Motorised, armoured and powered platforms;', 'firepower, mobility and protection'], 't7', 16),
    L(95, 365, 95, 40, 's-wine', 'wine'),
    `<text transform="translate(78 215) rotate(-90)" class="tm" text-anchor="middle">lays the foundation for</text>`,
    L(625, 40, 625, 365, 's-gold', 'gold'),
    `<text transform="translate(655 215) rotate(90)" class="tm" text-anchor="middle">leads and pulls forward</text>`,
    T(360, 400, 'Pursued together, not in sequence: each layer is meant to multiply the others', 'tz'),
  ].join(''));

  /* ---------------------------------------------------------------- 2. three ways of connecting force */
  D.izNodes = (focus) => {
    const op = (k) => (focus && focus !== k ? ' opacity=".28"' : '');
    const node = (x, y, cls) => C(x, y, 9, cls || 'f-wine s-wine');
    const panel = (k, ox, title, zh, body, cap) =>
      `<g${op(k)} transform="translate(${ox} 0)">` +
      R(0, 0, 220, 330, 'f-paper s-rule') +
      T(110, 28, title, 'tb') + T(110, 46, zh, 'tz zh') + body +
      ML(110, 280, cap, 't7s', 15) + '</g>';
    const mech = [[50, 100], [150, 90], [95, 170], [40, 220], [160, 210]]
      .map(([x, y]) => node(x, y, 'f-deep s-ink')).join('') +
      [[50, 100], [150, 90], [95, 170], [40, 220], [160, 210]]
        .map(([x, y]) => `<rect x="${x - 22}" y="${y - 22}" width="44" height="44" class="f-none s-dash s-rule"/>`).join('');
    const hubX = 110, hubY = 150;
    const ring = [[40, 95], [180, 95], [40, 215], [180, 215], [110, 80], [110, 230]];
    const info = ring.map(([x, y]) => L(hubX, hubY, x, y, 's-wine')).join('') +
      C(hubX, hubY, 16, 'f-gold s-ink') + T(hubX, hubY + 4, 'net', 'tm9') +
      ring.map(([x, y]) => node(x, y)).join('');
    const intel = ring.map(([x, y]) => L(hubX, hubY, x, y, 's-wine')).join('') +
      L(65, 150, 155, 150, 's-gold') +
      C(hubX, hubY, 16, 'f-gold s-ink') + T(hubX, hubY + 4, 'AI', 'tm9') +
      [[40, 95], [180, 95], [110, 230]].map(([x, y]) => node(x, y)).join('') +
      [[40, 215], [180, 215], [110, 80]]
        .map(([x, y]) => `<path d="M${x} ${y - 10} L${x + 10} ${y + 8} L${x - 10} ${y + 8} Z" class="f-teal s-ink"/>`).join('') +
      R(14, 134, 20, 20, 'f-paper s-ink').replace('/>', '/>') + T(24, 148, 'H', 'tm9');
    return svg(720, 345, 'Three ways of connecting force: isolated platforms, a network, and a network with machine intelligence', [
      panel('mech', 0, 'Mechanised', '机械化', mech, ['Platforms fight their own fight;', 'strength is the sum of the parts']),
      panel('info', 250, 'Informatised', '信息化', info, ['A network binds sensors, shooters', 'and commanders into one system']),
      panel('intel', 500, 'Intelligentised', '智能化', intel, ['Machines help process and act;', 'people set the rules (H)']),
      L(222, 165, 248, 165, 's-ink', 'ink'), L(472, 165, 498, 165, 's-ink', 'ink'),
    ].join(''));
  };

  /* ---------------------------------------------------------------- 3. stages of intelligentisation */
  D.izStages = () => {
    const col = (i, ttl, quote, human, machine) => {
      const x = 15 + i * 235;
      return R(x, 20, 220, 290, 'f-paper s-rule') +
        T(x + 14, 46, 'Stage ' + (i + 1), 'tm', 'start') +
        ML(x + 14, 74, ttl, 'tb', 18, 'start') +
        ML(x + 14, 126, quote, 't7s', 15, 'start') +
        T(x + 14, 190, 'Human role', 'tm', 'start') + R(x + 14, 198, 190, 12, 'f-deep s-none') + R(x + 14, 198, 190 * human, 12, 'f-ink s-none') +
        T(x + 14, 236, 'Machine role', 'tm', 'start') + R(x + 14, 244, 190, 12, 'f-deep s-none') + R(x + 14, 244, 190 * machine, 12, 'f-wine s-none') +
        T(x + 14, 288, ['Operator at the centre', 'Machine at the centre', 'Humans set rules and bounds'][i], 'tz', 'start');
    };
    return svg(720, 350, 'Three stages of intelligentisation and how the human and machine roles shift', [
      col(0, ['Human-led,', 'with unmanned support'], ['People decide and act;', 'unmanned systems extend', 'reach and sensing'], 0.85, 0.25),
      col(1, ['Unmanned-led,', 'with human support'], ['Machines take the lead', 'in action; people assist', 'and supervise'], 0.5, 0.7),
      col(2, ['Rules set by humans,', 'action by machines'], ['People frame the rules;', 'machines carry out', 'the actions'], 0.2, 0.92),
      L(237, 165, 249, 165, 's-ink', 'ink'), L(472, 165, 484, 165, 's-ink', 'ink'),
      T(360, 338, 'Bars are illustrative of the shift in emphasis, not a measurement', 'tz'),
    ].join(''));
  };

  /* ---------------------------------------------------------------- 4. system of systems: the operational system */
  D.sos = () => {
    const cx = 360, cy = 205;
    const sats = [
      [360, 55, ['Command system'], '指挥'],
      [590, 140, ['Firepower strike', 'system'], '火力'],
      [535, 330, ['Information', 'confrontation system'], '信息对抗'],
      [185, 330, ['Reconnaissance and', 'intelligence system'], '侦察情报'],
      [130, 140, ['Support system'], '保障'],
    ];
    return svg(720, 400, 'The operational system and its five component systems', [
      C(cx, cy, 175, 'f-none s-dash s-rule'),
      T(cx, 395, 'All five systems are linked by networks; the whole is what meets the enemy', 'tz'),
      sats.map(([x, y]) => L(cx, cy, x, y, 's-wine')).join(''),
      C(cx, cy, 64, 'f-wine s-wine'),
      T(cx, cy - 8, 'Operational', 'tb tw'), T(cx, cy + 10, 'system', 'tb tw'), T(cx, cy + 28, '作战体系', 'tz-w zh'),
      sats.map(([x, y, ls, zh]) => R(x - 80, y - 30, 160, 60, 'f-paper s-wine') + ML(x, y - (ls.length - 1) * 8 + 4, ls, 'tb13', 16) + T(x, y + (ls.length > 1 ? 26 : 22), zh, 'tz zh')).join(''),
      T(360, 12, 'The joint force: army, navy, air force, rocket force and the arms', 'tm'),
    ].join(''));
  };

  /* ---------------------------------------------------------------- 5. system destruction warfare */
  D.sdw = () => {
    const own = [[60, 120], [120, 190], [60, 260], [150, 110], [160, 260]];
    const enemyPeriph = [[360, 80], [350, 200], [365, 320], [665, 80], [670, 200], [650, 320], [520, 345]];
    const hubs = [[500, 120, 'Leadership'], [575, 210, 'Command and control'], [490, 290, 'Information hub']];
    return svg(720, 400, 'System destruction warfare: striking the hubs of an enemy operational system', [
      T(110, 28, 'Own system, protected', 'tm'), T(520, 28, 'Enemy operational system', 'tm'),
      own.map(([x, y]) => own.map(([a, b]) => (x < a ? L(x, y, a, b, 's-wine') : '')).join('')).join(''),
      own.map(([x, y]) => C(x, y, 10, 'f-wine s-wine')).join(''),
      enemyPeriph.map(([x, y]) => hubs.map(([hx, hy]) => L(x, y, hx, hy, 's-grey s-dash')).join('')).join(''),
      hubs.map(([x, y], i) => hubs.slice(i + 1).map(([a, b]) => L(x, y, a, b, 's-grey s-dash')).join('')).join(''),
      enemyPeriph.map(([x, y]) => C(x, y, 11, 'f-deep s-grey')).join(''),
      hubs.map(([x, y, lab]) => C(x, y, 26, 'f-gold s-ink') +
        `<path d="M${x - 11} ${y - 11}L${x + 11} ${y + 11}M${x + 11} ${y - 11}L${x - 11} ${y + 11}" class="l s-ink"/>` +
        T(x, y + 46, lab, 't12 halo')).join(''),
      L(180, 190, 440, 150, 's-wine', 'wine'), L(180, 200, 440, 280, 's-wine', 'wine'),
      T(300, 163, 'kinetic and', 't7s halo'), T(300, 177, 'non-kinetic strikes', 't7s halo'),
      T(360, 392, 'The aim is to cut the connections and leave the surviving parts unable to act as a whole', 'tz'),
    ].join(''));
  };

  /* ---------------------------------------------------------------- 6. the kill chain loop */
  D.killchain = () => {
    const cx = 225, cy = 205;
    const nodes = [
      [cx, 70, 'Reconnaissance', '侦 zhēn'],
      [cx + 120, cy, 'Control', '控 kòng'],
      [cx, 340, 'Attack', '打 dǎ'],
      [cx - 120, cy, 'Evaluation', '评 píng'],
    ];
    const box = (x, y, a, b) => R(x - 66, y - 26, 132, 52, 'f-paper s-wine') + T(x, y - 3, a, 'tb13') + T(x, y + 15, b, 'tz zh');
    const seg = (x, y, ws, cls) => { let cur = x; return ws.map((w, i) => { const s = R(cur, y, w, 26, cls + (i % 2 ? ' alt' : '')); cur += w; return s; }).join(''); };
    const names = ['detect', 'report', 'decide', 'assign', 'strike', 'assess'];
    const long = [50, 42, 56, 44, 34, 44], short = [22, 6, 16, 6, 24, 14];
    const lab = (x, y, ws) => { let cur = x; return ws.map((w, i) => { const t = T(cur + w / 2, y, names[i], 'tm8'); cur += w; return t; }).join(''); };
    return svg(720, 430, 'The reconnaissance, control, attack and evaluation cycle and how networking shortens it', [
      T(cx, 20, 'The PLA formulation', 'tm'),
      P(`M${cx + 40} 70 Q${cx + 120} 70 ${cx + 120} ${cy - 30}`, 's-wine', 'wine'),
      P(`M${cx + 120} ${cy + 30} Q${cx + 120} 340 ${cx + 40} 340`, 's-wine', 'wine'),
      P(`M${cx - 40} 340 Q${cx - 120} 340 ${cx - 120} ${cy + 30}`, 's-wine', 'wine'),
      P(`M${cx - 120} ${cy - 30} Q${cx - 120} 70 ${cx - 40} 70`, 's-wine', 'wine'),
      nodes.map((n) => box(n[0], n[1], n[2], n[3])).join(''),
      T(cx, cy - 4, 'one', 'tb tz-c'), T(cx, cy + 14, 'cycle', 'tb tz-c'),
      T(cx, 400, '侦控打评 · reconnaissance, control, attack, evaluation', 'tz'),
      T(540, 20, 'Compressing the cycle (illustrative)', 'tm'),
      T(430, 80, 'Hand-offs between services', 'tb13', 'start'),
      seg(430, 92, long, 'f-wsoft s-wine'), lab(430, 143, long),
      T(430, 206, 'A shared, networked picture', 'tb13', 'start'),
      seg(430, 222, short, 'f-wine s-wine'),
      L(430, 262, 612, 262, 's-ink'),
      ML(430, 296, ['Sensor-to-launcher time is the interval', 'the PLA aims to shorten. Much Western', 'writing calls the same loop a kill chain,', 'and each side tries to break the other’s.'], 't7s', 17, 'start'),
    ].join(''));
  };

  /* ---------------------------------------------------------------- 7. one command, six centres */
  D.sixCentres = () => {
    const xs = [15, 133, 251, 369, 487, 605];
    const names = [['Operational', 'command and', 'control'], ['Intelligence', 'information'], ['Network', 'communications'], ['Action', 'coordination'], ['Political', 'work'], ['Integrated', 'support']];
    const acts = ['Firepower strikes', 'Air defence', 'Ground operations', 'Information operations', 'Special operations'];
    return svg(720, 480, 'The one command, six centres model for joint operations command', [
      T(360, 18, 'Mission-based three-level command', 'tm'),
      BX(15, 30, 200, 46, ['Supreme command', 'strategic'], 'f-deep s-ink', 't13'),
      BX(260, 30, 200, 46, ['Joint operational command', 'operational'], 'f-deep s-ink', 't13'),
      BX(505, 30, 200, 46, ['Mission units', 'tactical'], 'f-deep s-ink', 't13'),
      L(217, 53, 258, 53, 's-ink', 'ink'), L(462, 53, 503, 53, 's-ink', 'ink'),
      BX(240, 110, 240, 50, ['Joint operations command'], 'f-wine s-wine', 'tb tw'),
      xs.map((x) => P(`M360 160 L360 180 L${x + 55} 180 L${x + 55} 200`, 's-wine')).join(''),
      xs.map((x, i) => BX(x, 200, 110, 62, names[i], i === 3 ? 'f-gsoft s-gold' : 'f-wsoft s-wine', 't13')).join(''),
      P('M424 262 L424 300', 's-gold'),
      L(30, 300, 690, 300, 's-gold'),
      acts.map((a, i) => { const x = 15 + i * 139; return L(x + 65, 300, x + 65, 320, 's-gold') + BX(x, 320, 130, 54, a.split(' ').length > 1 ? [a.split(' ')[0], a.split(' ').slice(1).join(' ')] : [a], 'f-paper s-gold', 't13'); }).join(''),
      T(360, 400, 'Each centre draws staff from every service taking part in the operation.', 'tz'),
      T(360, 418, 'Action coordination has its own sub-centres for the five kinds of action shown.', 'tz'),
    ].join(''));
  };

  /* ---------------------------------------------------------------- 8. target-centric warfare */
  D.tcw = () => {
    const xs = [15, 195, 375, 555];
    const cols = [
      ['2', ['Early warning and', 'reconnaissance']],
      ['3', ['Real-time command', 'and control']],
      ['4', ['Integrated offensive', 'and defensive force']],
      ['5', ['Integrated support', 'operational, rear', 'and social']],
    ];
    return svg(720, 390, 'The five subsystems of the target-centric warfare operational system', [
      BX(15, 18, 690, 50, ['Target-centric warfare operational system: tailored force packages for each phase'], 'f-deep s-ink', 'tb13'),
      xs.map((x, i) => L(x + 75, 68, x + 75, 108, 's-ink', 'ink') +
        R(x, 108, 150, 130, 'f-wsoft s-wine') + T(x + 14, 134, cols[i][0], 'num') +
        ML(x + 14, 162, cols[i][1], 'tb13', 18, 'start')).join(''),
      xs.map((x) => L(x + 75, 296, x + 75, 240, 's-wine', 'wine')).join(''),
      R(15, 296, 690, 62, 'f-wine s-wine'),
      T(30, 322, '1', 'num-w', 'start'),
      T(66, 322, 'Information support subsystem', 'tb tw', 'start'),
      T(66, 342, 'Secure communications, battlefield awareness, C2 information architecture, processing and dissemination', 'tw12', 'start'),
      T(360, 380, 'Subsystem 1 is the foundation: the others cannot share a picture without it', 'tz'),
    ].join(''));
  };

  /* ---------------------------------------------------------------- 9. strategic guidelines timeline */
  D.guidelines = () => {
    const items = [
      ['1956–64', 'People’s War', ['Imminent war, major war,', 'nuclear war'], 'Active defence: lure in deep'],
      ['1977', 'People’s War under modern conditions', ['Win early battles nearer', 'the borders'], 'Active defence: anti-invasion'],
      ['1985', 'Local wars under modern conditions', ['Speed, mobility and', 'lethality over attrition'], 'Active defence: new era'],
      ['1993', 'Local wars under high-tech conditions', ['Three attacks,', 'three defences'], 'Active defence: new era'],
      ['2004', 'Local wars under informatised conditions', ['System-of-systems', 'operations'], 'Active defence: new era'],
      ['2015', 'Informatised local wars', ['Information dominance;', 'target-centric warfare'], 'Active defence: new situation'],
    ];
    const card = (i, [yr, ttl, kc, ad]) => {
      const col = i % 3, row = Math.floor(i / 3);
      const x = 12 + col * 236, y = 20 + row * 168;
      const wrap = (s) => { const w = s.split(' '); const out = []; let cur = ''; w.forEach((t) => { if ((cur + ' ' + t).trim().length > 26) { out.push(cur); cur = t; } else { cur = (cur + ' ' + t).trim(); } }); out.push(cur); return out; };
      return R(x, y, 224, 150, i === 5 ? 'f-wsoft s-wine' : 'f-paper s-rule') +
        T(x + 14, y + 26, yr, 'num13', 'start') +
        ML(x + 14, y + 50, wrap(ttl), 'tb13', 16, 'start') +
        ML(x + 14, y + 100, kc, 't12', 15, 'start') +
        T(x + 14, y + 138, ad, 'tm8', 'start') +
        (col < 2 ? L(x + 224, y + 75, x + 236, y + 75, 's-ink', 'ink') : '');
    };
    return svg(720, 372, 'How the Party’s strategic guidelines for the PLA have changed from 1956 to 2015', [
      items.map((it, i) => card(i, it)).join(''),
            T(360, 364, 'Read left to right, then down: from mass war toward information-based war', 'tz'),
    ].join(''));
  };

  /* ---------------------------------------------------------------- 10. combat space and war space */
  D.spaces = () => {
    const cx = 360, cy = 190;
    const doms = ['Land', 'Sea', 'Air', 'Space', 'Cyber', 'Electromagnetic', 'Cognitive'];
    const chips = doms.map((d, i) => {
      const a = (-90 + i * (360 / doms.length)) * Math.PI / 180;
      const x = cx + Math.cos(a) * 140, y = cy + Math.sin(a) * 140;
      const w = d === 'Electromagnetic' ? 118 : 80;
      return R(x - w / 2, y - 14, w, 28, 'f-paper s-wine') + T(x, y + 4.5, d, 't12');
    }).join('');
    return svg(720, 390, 'Combat space shrinking inside an expanding war space', [
      C(cx, cy, 175, 'f-gsoft s-gold'),
      C(cx, cy, 64, 'f-wine s-wine'),
      T(cx, cy - 6, 'Combat', 'tb tw'), T(cx, cy + 12, 'space', 'tb tw'),
      chips,
      L(cx - 100, cy + 4, cx - 72, cy + 4, 's-ink', 'ink'),
      L(cx + 100, cy + 4, cx + 72, cy + 4, 's-ink', 'ink'),
      T(25, 110, 'War space', 'tb', 'start'),
      ML(25, 130, ['Physical and non-physical:', 'political, economic,', 'diplomatic, informational'], 't7s', 15, 'start'),
      T(695, 110, 'Combat space', 'tb', 'end'),
      ML(695, 130, ['Where physical fighting', 'happens, now narrower and', 'more precisely targeted'], 't7s', 15, 'end'),
      T(360, 382, 'The fighting zone contracts while the contest around it widens', 'tz'),
    ].join(''));
  };

  /* ---------------------------------------------------------------- 11. active defence by level of war */
  D.activeDefence = () => [
    svg(720, 390, 'Active defence is defensive at the strategic level and often offensive at the operational and tactical levels', [
      T(20, 24, 'Level of war', 'tm', 'start'), T(700, 24, 'Posture', 'tm', 'end'),
      R(20, 40, 520, 70, 'f-deep s-ink'), T(36, 70, 'Strategic', 'tb', 'start'), T(36, 90, 'Why and whether to fight', 't7s', 'start'),
      R(540, 40, 160, 70, 'f-paper s-ink'), T(620, 80, 'Defensive', 'tb'),
      R(20, 118, 520, 70, 'f-wsoft s-wine'), T(36, 148, 'Operational', 'tb', 'start'), T(36, 168, 'How campaigns are fought', 't7s', 'start'),
      R(540, 118, 160, 70, 'f-wine s-wine'), T(620, 158, 'Often offensive', 'tb tw'),
      R(20, 196, 520, 70, 'f-wsoft s-wine'), T(36, 226, 'Tactical', 'tb', 'start'), T(36, 246, 'How battles are fought', 't7s', 'start'),
      R(540, 196, 160, 70, 'f-wine s-wine'), T(620, 236, 'Often offensive', 'tb tw'),
      T(20, 296, 'How the idea has widened', 'tm', 'start'),
      BX(20, 308, 220, 56, ['Mao: trade space for time,', 'lure the enemy in deep'], 'f-paper s-rule', 't12'),
      BX(250, 308, 220, 56, ['Deng: push the perimeter', 'out to the offshore seas'], 'f-paper s-rule', 't12'),
      BX(480, 308, 220, 56, ['Jiang to Xi: further afield,', 'and into space and cyber'], 'f-paper s-rule', 't12'),
      L(240, 336, 248, 336, 's-ink', 'ink'), L(470, 336, 478, 336, 's-ink', 'ink'),
    ].join('')),
  ][0];

  /* ---------------------------------------------------------------- 12. hierarchy of military thought */
  D.thought = () => svg(720, 380, 'The hierarchy from Party theory to strategy to operational concepts and doctrine', [
    T(20, 22, 'Layer', 'tm', 'start'), T(700, 22, 'Set by', 'tm', 'end'),
    BX(20, 36, 440, 90, ['CCP military guiding theory', 'Marx, Mao, Deng, Jiang, Hu and Xi'], 'f-wine s-wine', 'tb tw', 20),
    BX(20, 150, 440, 90, ['Strategic guidelines and military strategy', 'Active defence; from People’s War to informatised local wars'], 'f-wsoft s-wine', 'tb13', 20),
    BX(20, 264, 440, 90, ['Operational concepts and doctrine', 'System-of-systems operations; target-centric warfare;', 'three attacks, three defences'], 'f-paper s-wine', 'tb13', 19),
    L(240, 126, 240, 148, 's-ink', 'ink'), L(240, 240, 240, 262, 's-ink', 'ink'),
    BX(500, 36, 200, 90, ['CCP leadership'], 'f-deep s-ink', 't13'),
    BX(500, 150, 200, 90, ['Central Military', 'Commission'], 'f-deep s-ink', 't13'),
    BX(500, 264, 200, 90, ['CMC and the Academy', 'of Military Science'], 'f-deep s-ink', 't13'),
    L(460, 81, 498, 81, 's-grey s-dash'), L(460, 195, 498, 195, 's-grey s-dash'), L(460, 309, 498, 309, 's-grey s-dash'),
  ].join(''));

  /* ---------------------------------------------------------------- 13. three superiorities */
  D.superiorities = () => svg(720, 310, 'The three superiorities, with information first', [
    BX(20, 20, 290, 190, ['Information', 'superiority', ''], 'f-wine s-wine', 'tb tw', 24).replace('</text></text>', '</text>'),
    T(165, 150, '制信息权', 'tz-w zh'),
    ML(165, 176, ['First and foremost: it defends the force', 'and makes the other two possible'], 'tw12', 15),
    BX(340, 20, 170, 190, ['Air', 'superiority'], 'f-wsoft s-wine', 'tb', 24),
    BX(530, 20, 170, 190, ['Maritime', 'superiority'], 'f-wsoft s-wine', 'tb', 24),
    T(425, 168, '制空权', 'tz zh'), T(615, 168, '制海权', 'tz zh'),
    R(20, 234, 680, 56, 'f-deep s-ink'),
    ML(360, 258, ['Realistic aim: episodic dominance in the critical phases of a campaign.', 'The lynchpin is timely, high-fidelity information.'], 't12', 17),
  ].join(''));

  /* ---------------------------------------------------------------- 14. the three warfares */
  D.threeWars = () => svg(720, 360, 'The three warfares overlapping in the cognitive space', [
    `<circle cx="285" cy="150" r="100" class="f-wsoft s-wine" opacity=".8"/>`,
    `<circle cx="435" cy="150" r="100" class="f-gsoft s-gold" opacity=".8"/>`,
    `<circle cx="360" cy="245" r="100" class="f-deep s-ink" opacity=".8"/>`,
    T(240, 130, 'Public opinion', 'tb13'), T(240, 148, 'warfare', 'tb13'), T(240, 166, '舆论战', 'tz zh'),
    T(480, 130, 'Psychological', 'tb13'), T(480, 148, 'warfare', 'tb13'), T(480, 166, '心理战', 'tz zh'),
    T(360, 292, 'Legal warfare', 'tb13'), T(360, 310, '法律战', 'tz zh'),
    T(360, 188, 'Cognitive', 'tb'), T(360, 205, 'space', 'tb'),
    T(360, 352, 'Prepared in peacetime and synchronised with the campaign', 'tz'),
  ].join(''));

  /* ---------------------------------------------------------------- 15. moving the enemy */
  D.moving = () => svg(720, 390, 'Moving the enemy: a threat to what the enemy values pulls forces away from the main effort', [
    T(20, 22, 'Schematic, after the Huai Hai campaign of autumn 1948. Not to scale.', 'tm', 'start'),
    C(130, 200, 40, 'f-wsoft s-wine'), C(130, 200, 58, 'f-none s-dash s-wine'),
    T(130, 204, 'A', 'tb'),
    ML(130, 285, ['A: PLA force', 'surrounding an enemy army'], 't7s', 15),
    C(340, 110, 32, 'f-deep s-ink'), T(340, 114, 'B', 'tb'),
    ML(340, 62, ['B: enemy relief force'], 't7s', 15),
    C(340, 330, 30, 'f-wine s-wine'), T(340, 334, 'C', 'tb tw'),
    ML(340, 376, ['C: PLA deep thrust'], 't7s', 15),
    R(530, 205, 140, 84, 'f-gsoft s-gold'), T(600, 238, 'D', 'tb'), ML(600, 258, ['something the', 'enemy values'], 't7s', 14),
    L(310, 120, 182, 175, 's-grey s-dash', 'grey'),
    T(222, 128, '1  intended', 't7s'), T(222, 144, 'to relieve A', 't7s'),
    L(366, 318, 528, 272, 's-wine', 'wine'),
    T(480, 322, '2  C threatens D', 't12 w'),
    P('M366 124 Q480 150 560 203', 's-gold', 'gold'),
    T(520, 140, '3  B is compelled', 't12 w'), T(520, 156, 'to redeploy toward D', 't12 w'),
    T(130, 322, 'Result: A is left', 't12'), T(130, 340, 'to be destroyed', 't12'),
  ].join(''));

  /* ---------------------------------------------------------------- 16. coordination versus integration */
  D.joint = () => svg(720, 360, 'Coordinated joint operations compared with integrated joint operations', [
    R(10, 10, 340, 340, 'f-paper s-rule'), R(370, 10, 340, 340, 'f-paper s-rule'),
    T(180, 38, 'Coordination', 'tb'), T(180, 56, 'services act side by side', 't7s'),
    BX(30, 90, 90, 56, ['Army'], 'f-deep s-ink', 't13'), BX(135, 90, 90, 56, ['Navy'], 'f-deep s-ink', 't13'), BX(240, 90, 90, 56, ['Air force'], 'f-deep s-ink', 't13'),
    P('M120 118 L135 118', 's-grey s-dash'), P('M225 118 L240 118', 's-grey s-dash'),
    P('M75 146 Q75 190 180 190 Q285 190 285 146', 's-grey s-dash'),
    ML(180, 232, ['Plans and liaison link separate', 'chains of command; hand-offs', 'between services take time'], 't7s', 16),
    T(540, 38, 'Integration', 'tb'), T(540, 56, 'forces fused under one command', 't7s'),
    R(390, 80, 300, 100, 'f-wsoft s-wine'),
    R(396, 86, 96, 88, 'f-paper s-wine'), R(498, 86, 96, 88, 'f-paper s-wine'), R(600, 86, 84, 88, 'f-paper s-wine'),
    T(444, 134, 'Army', 't13'), T(546, 134, 'Navy', 't13'), T(642, 134, 'Air force', 't13'),
    L(540, 180, 540, 214, 's-wine'), L(444, 174, 444, 214, 's-wine'), L(642, 174, 642, 214, 's-wine'),
    R(390, 214, 300, 34, 'f-wine s-wine'), T(540, 236, 'Networked military information system', 'tw12'),
    ML(540, 282, ['One shared picture of the battlefield;', 'complementary strengths and', 'blurred service boundaries'], 't7s', 16),
  ].join(''));

  /* ---------------------------------------------------------------- 17. three attacks, three defences */
  D.threeThree = () => svg(720, 290, 'Three attacks and three defences', [
    T(180, 24, 'Three attacks', 'tm'), T(540, 24, 'Three defences', 'tm'),
    ['Stealth aircraft', 'Cruise missiles', 'Armed helicopters'].map((s, i) => BX(20, 40 + i * 72, 320, 58, [s], 'f-wine s-wine', 'tb13 tw')).join(''),
    ['Precision strike', 'Electronic jamming', 'Reconnaissance and surveillance'].map((s, i) => BX(380, 40 + i * 72, 320, 58, [s], 'f-wsoft s-wine', 'tb13')).join(''),
    ['打击隐身飞机', '打击巡航导弹', '打击武装直升机'].map((s, i) => T(180, 40 + i * 72 + 50, s, 'tw-z zh')).join(''),
    ['防精确打击', '防电子干扰', '防侦察监视'].map((s, i) => T(540, 40 + i * 72 + 50, s, 'tz zh')).join(''),
  ].join(''));

  window.Diagrams = D;
})();
