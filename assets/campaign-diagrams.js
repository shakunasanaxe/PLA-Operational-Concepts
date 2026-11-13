/* Original schematic diagrams for the campaign definitions page.
   They show the logic of each campaign type; positions and proportions are illustrative. */
(function () {
  'use strict';
  const svg = (h, title, inner) =>
    `<svg viewBox="0 0 720 ${h}" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="c-ink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-ink"/></marker>
<marker id="c-wine" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-wine"/></marker>
<marker id="c-gold" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-gold"/></marker>
<marker id="c-grey" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-grey"/></marker>
</defs>${inner}</svg>`;
  const R = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${c || 'f-paper s-ink'}"/>`;
  const C = (x, y, r, c) => `<circle cx="${x}" cy="${y}" r="${r}" class="${c || 'f-paper s-ink'}"/>`;
  const T = (x, y, s, c, a) => `<text x="${x}" y="${y}" class="${c || 't'}" text-anchor="${a || 'middle'}">${s}</text>`;
  const ML = (x, y, ls, c, lh, a) => ls.map((s, i) => T(x, y + i * (lh || 15), s, c, a)).join('');
  const BX = (x, y, w, h, ls, rc, tc, lh) => { lh = lh || 16; const y0 = y + h / 2 - ((ls.length - 1) * lh) / 2 + 4.5; return R(x, y, w, h, rc) + ML(x + w / 2, y0, ls, tc || 't12', lh); };
  const L = (x1, y1, x2, y2, c, a) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="l ${c || 's-ink'}"${a ? ` marker-end="url(#c-${a})"` : ''}/>`;
  const P = (d, c, a) => `<path d="${d}" class="l ${c || 's-ink'}"${a ? ` marker-end="url(#c-${a})"` : ''}/>`;
  const ship = (x, y, c) => `<path d="M${x - 11} ${y - 4} L${x + 11} ${y - 4} L${x + 7} ${y + 4} L${x - 7} ${y + 4} Z" class="${c || 'f-wine s-wine'}"/>`;
  const plane = (x, y, c) => `<path d="M${x} ${y - 9} L${x + 8} ${y + 7} L${x} ${y + 3} L${x - 8} ${y + 7} Z" class="${c || 'f-wine s-wine'}"/>`;
  const num = (x, y, n) => C(x, y, 10, 'f-wine s-wine') + T(x, y + 4, n, 'tw12');
  const step = (x, y, n, ls, a) => num(x, y, n) + ML(x + 16, y - 2, ls, 't12', 14, a || 'start');

  const D = {};

  /* 1 ----------------------------------------------------- joint blockade */
  D['joint-blockade'] = () => {
    const cx = 215, cy = 165;
    const ring = (r, n, fn) => Array.from({ length: n }, (_, i) => { const a = (i / n) * Math.PI * 2 + 0.3; return fn(cx + Math.cos(a) * r, cy + Math.sin(a) * r, a); }).join('');
    return svg(330, 'A three-dimensional joint blockade around a blockaded area', [
      C(cx, cy, 150, 'f-none s-grey s-dash'),
      C(cx, cy, 116, 'f-none s-wine'),
      C(cx, cy, 80, 'f-gsoft s-gold'),
      C(cx, cy, 40, 'f-deep s-ink'),
      T(cx, cy + 4, 'Blockaded', 't12'), T(cx, cy + 18, 'area', 't12'),
      ring(150, 8, (x, y) => plane(x, y)),
      ring(116, 8, (x, y) => ship(x, y)),
      ring(80, 10, (x, y) => `<path d="M${x - 4} ${y - 4}L${x + 4} ${y + 4}M${x + 4} ${y - 4}L${x - 4} ${y + 4}" class="l s-ink"/>`),
      T(420, 50, 'Layers of the blockade', 'tm', 'start'),
      plane(430, 82), T(448, 86, 'Air cover and surveillance', 't12', 'start'),
      ship(430, 116), T(448, 120, 'Naval cordon (force blockade)', 't12', 'start'),
      `<path d="M426 146L434 154M434 146L426 154" class="l s-ink"/>`, T(448, 154, 'Mines and obstacles', 't12', 'start'),
      R(424, 174, 12, 12, 'f-gsoft s-gold'), T(448, 184, 'Fire blockade (missiles, aircraft)', 't12', 'start'),
      ML(420, 232, ['Aim: cut the opponent’s links with the', 'outside world and weaken its war', 'potential, without necessarily invading.'], 't7s', 15, 'start'),
    ].join(''));
  };

  /* 2 ----------------------------------------------------- amphibious landing */
  D['amphibious-landing'] = () => svg(320, 'Stages of a joint amphibious landing campaign', [
    R(0, 80, 530, 130, 'f-wsoft s-none'),
    `<path d="M530 80 Q570 70 610 80 T720 76 L720 210 L530 210 Z" class="f-deep s-ink"/>`,
    T(625, 196, 'Enemy-held island', 'tz'),
    T(20, 26, 'Control of the sea and air first', 'tb13', 'start'), T(20, 44, 'then the ships close in', 't7s', 'start'),
    plane(250, 50), plane(290, 42), plane(330, 50),
    BX(20, 100, 96, 46, ['Ports and', 'staging area'], 'f-paper s-ink', 't12'),
    ship(190, 124), ship(235, 124), ship(280, 124), ship(325, 124),
    T(258, 150, 'Amphibious ships and landing craft', 't12'),
    P('M120 123 L168 124', 's-ink', 'ink'), P('M350 124 L526 124', 's-wine', 'wine'),
    P('M330 112 Q440 62 540 92', 's-gold s-dash', 'gold'), T(440, 66, 'Air assault', 't12 halo'),
    BX(448, 150, 64, 36, ['Beach-', 'head'], 'f-gsoft s-gold', 't12', 14),
    step(20, 244, 1, ['Fire preparation on the defences', 'by missiles and aircraft']),
    step(270, 244, 2, ['Assault in waves, then build up', 'follow-on forces']),
    step(520, 244, 3, ['Consolidate, then', 'push inland']),
    T(700, 300, 'Large-island and coral-island landings are treated separately', 'tz', 'end'),
  ].join(''));

  /* 3 ----------------------------------------------------- anti-air raid */
  D['anti-air-raid'] = () => svg(330, 'Layered defence against an air raid combined with counterstrikes on enemy bases', [
    C(190, 272, 240, 'f-none s-grey s-dash'), C(190, 272, 170, 'f-none s-wine'), C(190, 272, 100, 'f-wsoft s-wine'), C(190, 272, 46, 'f-wine s-wine'),
    T(190, 276, 'Protected', 'tw12'), T(190, 290, 'target', 'tw12'),
    T(190, 190, 'Near: short-range defence', 't12 halo'), T(190, 120, 'Middle: medium-range missiles', 't12 halo'), T(190, 56, 'Far: fighters, long-range missiles', 't12 halo'),
    plane(450, 40, 'f-grey s-grey'), plane(490, 66, 'f-grey s-grey'), plane(420, 84, 'f-grey s-grey'),
    P('M440 56 L300 130', 's-grey s-dash', 'grey'), P('M480 82 L320 190', 's-grey s-dash', 'grey'),
    T(520, 34, 'Enemy air raid', 'tm', 'start'),
    R(560, 160, 140, 70, 'f-deep s-ink'), T(630, 190, 'Enemy air base', 't12'), T(630, 206, 'and launch sites', 't12'),
    P('M236 262 Q420 240 556 218', 's-gold', 'gold'), T(420, 248, 'Counterstrike on bases', 't12 halo'),
    ML(440, 286, ['Counterattack, counterstrike, protection', 'and recovery work as one system.'], 't7s', 15, 'start'),
  ].join(''));

  /* 4 ----------------------------------------------------- mobile warfare */
  D['mobile-warfare'] = () => svg(320, 'Mobile warfare: fix the enemy and strike from the flank', [
    T(20, 26, 'Manoeuvre to find the enemy’s weak side, not a fight for a fixed line', 'tb13', 'start'),
    [0, 1, 2, 3].map((i) => R(470 + i * 58, 130, 44, 34, 'f-deep s-grey')).join(''),
    T(584, 118, 'Enemy defensive line', 'tz'),
    [0, 1].map((i) => R(470 + i * 58, 210, 44, 34, 'f-deep s-grey')).join(''), T(530, 262, 'Enemy reserve', 'tz'),
    BX(60, 120, 100, 54, ['Fixing force', 'pins the front'], 'f-wsoft s-wine', 't12'),
    P('M164 147 L466 147', 's-wine', 'wine'),
    BX(60, 220, 100, 54, ['Manoeuvre force', 'moves unseen'], 'f-wine s-wine', 'tw12'),
    P('M164 247 Q330 300 540 296 Q690 290 690 210 L690 168', 's-gold', 'gold'),
    T(330, 292, 'Envelop the flank and rear', 't12 halo'),
    T(300, 134, 'Fix', 'tb13'),
    ML(20, 66, ['Aim: destroy enemy forces in motion,', 'then keep moving before they can recover.'], 't7s', 15, 'start'),
  ].join(''));

  /* 5 ----------------------------------------------------- mountain offensive */
  D['mountain-offensive'] = () => svg(330, 'A mountain offensive using valley axes, heliborne seizure of heights and engineer support', [
    `<path d="M0 300 L0 230 L90 170 L150 210 L240 110 L300 160 L380 80 L450 150 L520 110 L600 180 L720 140 L720 300 Z" class="f-deep s-ink"/>`,
    ML(20, 30, ['Seize the heights first,', 'then fight down into the valleys.'], 't7s', 15, 'start'),
    P('M40 292 L170 266 L240 236 L310 214', 's-wine', 'wine'), T(120, 290, 'Main axis along the valley', 't12 halo', 'start'),
    P('M360 296 L430 250 L475 190', 's-wine', 'wine'),
    `<path d="M380 80 l-9 12 h18 z" class="f-gold s-ink"/>`, T(380, 66, 'Commanding heights', 't12 halo'),
    `<path d="M240 110 l-9 12 h18 z" class="f-gold s-ink"/>`,
    `<path d="M292 60 L316 60 M304 52 L304 62 M298 66 L310 66" class="l s-wine"/>`, T(304, 44, 'Heliborne seizure', 't12 halo'),
    P('M316 72 Q350 90 372 84', 's-gold s-dash', 'gold'),
    BX(540, 236, 160, 48, ['Rear: fire support;', 'engineers open the routes'], 'f-paper s-ink', 't12', 15),
  ].join(''));

  /* 6 ----------------------------------------------------- positional offensive and defence */
  D['positional'] = () => svg(320, 'Positional defence in depth and a positional offensive that breaches a prepared defence', [
    R(10, 10, 345, 300, 'f-paper s-rule'), R(365, 10, 345, 300, 'f-paper s-rule'),
    T(182, 36, 'Positional defence', 'tb'), T(182, 54, 'hold prepared positions in depth', 't7s'),
    R(40, 80, 280, 36, 'f-wsoft s-wine'), T(180, 102, 'Forward position', 't12'),
    R(60, 130, 240, 36, 'f-wsoft s-wine'), T(180, 152, 'Main defensive belt', 't12'),
    R(80, 180, 200, 36, 'f-wsoft s-wine'), T(180, 202, 'Depth and reserves', 't12'),
    P('M180 220 Q330 250 330 120', 's-gold', 'gold'), T(180, 262, 'Counterattack when the attack is blunted', 't12 halo'),
    T(540, 36, 'Positional offensive', 'tb'), T(540, 54, 'break into a prepared defence', 't7s'),
    R(390, 80, 296, 40, 'f-deep s-grey'), T(430, 104, 'Enemy defensive belt', 'tz', 'start'),
    ML(400, 168, ['1 Artillery and air', '   preparation'], 't12', 14, 'start'),
    `<path d="M440 160 L440 126" class="l s-gold" marker-end="url(#c-gold)"/>`,
    P('M600 230 L600 126', 's-wine', 'wine'), T(600, 250, '2 Breach at the weak point', 't12 halo'),
    P('M600 124 L570 70 M600 124 L640 70', 's-wine s-dash', 'wine'), T(540, 284, '3 Widen the gap and exploit in depth', 't12 halo'),
  ].join(''));

  /* 7 ----------------------------------------------------- air offensive */
  D['air-offensive'] = () => svg(330, 'Waves of an air offensive: suppress air defences, strike key targets, assess', [
    BX(16, 130, 100, 70, ['Home bases', 'and tankers'], 'f-paper s-ink', 't12'),
    BX(180, 50, 150, 48, ['1 Seize air superiority', 'fighters, jamming, missiles'], 'f-wsoft s-wine', 't12'),
    BX(180, 140, 150, 48, ['2 Strike key targets', 'bombers and missiles'], 'f-wine s-wine', 'tw12'),
    BX(180, 230, 150, 48, ['3 Assess, re-strike', 'continuous pressure'], 'f-wsoft s-wine', 't12'),
    P('M116 150 L176 80', 's-ink', 'ink'), P('M116 165 L176 164', 's-ink', 'ink'), P('M116 180 L176 252', 's-ink', 'ink'),
    ['Air defences', 'Command and control', 'Airfields', 'Logistics and nodes'].map((l, i) => BX(480, 36 + i * 64, 170, 46, [l], 'f-deep s-grey', 't12')).join(''),
    P('M334 74 L476 56', 's-wine s-dash', 'wine'), P('M334 164 L476 120', 's-wine', 'wine'), P('M334 164 L476 184', 's-wine', 'wine'), P('M334 164 L476 246', 's-wine', 'wine'),
    ML(20, 300, ['Hard kill (precision destruction) and soft kill (information attack) are meant to work together.'], 't7s', 15, 'start'),
  ].join(''));

  /* 8 ----------------------------------------------------- conventional missile attack */
  D['conventional-missile'] = () => svg(330, 'A conventional missile attack with sensor feed and strike assessment', [
    ML(20, 36, ['Mass and timing matter: a sudden,', 'concentrated assault on important', 'military targets.'], 't7s', 15, 'start'),
    BX(300, 24, 170, 40, ['Satellites, drones, radars'], 'f-paper s-ink', 't12'),
    BX(20, 220, 130, 60, ['Missile brigades', 'dispersed launchers'], 'f-wine s-wine', 'tw12'),
    P('M340 66 L120 216', 's-grey s-dash', 'grey'), T(300, 160, 'Target data', 't12 halo'), T(300, 176, 'to launchers', 't12 halo'),
    P('M154 236 Q330 80 520 118', 's-wine', 'wine'), P('M154 244 Q340 130 530 184', 's-wine', 'wine'), P('M154 252 Q360 170 540 248', 's-wine', 'wine'),
    ['Radars and air defence', 'Ports and airfields', 'Command nodes'].map((l, i) => BX(540, 96 + i * 66, 160, 44, [l], 'f-deep s-grey', 't12')).join(''),
    `<path d="M520 112L532 124M532 112L520 124" class="l s-gold"/>`,
    P('M620 296 Q420 322 220 296', 's-gold s-dash', 'gold'), T(420, 318, 'Strike assessment, then second salvo', 't12 halo'),
  ].join(''));

  /* 9 ----------------------------------------------------- anti-terrorism and stability maintenance */
  D['anti-terror-stability'] = () => svg(320, 'Three strands of internal security operations and their coordination with civil authorities', [
    BX(20, 20, 680, 40, ['Military acts with other state departments and local governments'], 'f-deep s-ink', 'tb13'),
    BX(20, 84, 215, 200, [''], 'f-paper s-wine'), BX(252, 84, 215, 200, [''], 'f-paper s-wine'), BX(485, 84, 215, 200, [''], 'f-paper s-wine'),
    T(127, 112, 'Preventive action', 'tb13'), ML(127, 138, ['Gather intelligence', 'Protect key targets', 'Plan for rescue', 'Train and exercise'], 't12', 20),
    T(360, 112, 'Strike action', 'tb13'), ML(360, 138, ['Pursue and suppress', 'Attack terrorist camps', 'Seize key targets', 'Rescue hostages'], 't12', 20),
    T(592, 112, 'Stability maintenance', 'tb13'), ML(592, 138, ['Isolate and disperse', 'Close sites, control traffic', 'Curfew, inspection', 'Rescue trapped people'], 't12', 20),
    T(127, 248, 'Counter-terrorism', 'tm'), T(360, 248, 'Counter-terrorism', 'tm'), T(592, 248, 'Mass incidents and unrest', 'tm'),
  ].join(''));

  /* 10 ---------------------------------------------------- maritime group to destroy the enemy */
  D['maritime-group'] = () => svg(330, 'A maritime group destroying an enemy sea formation with surface, air and submarine forces', [
    [0, 1, 2, 3].map((i) => ship(540 + (i % 2) * 40, 130 + i * 28, 'f-deep s-grey')).join(''),
    C(570, 170, 78, 'f-none s-grey s-dash'), T(570, 270, 'Enemy sea formation', 'tz'),
    [0, 1, 2].map((i) => ship(90 + i * 36, 120 + i * 30)).join(''), T(120, 232, 'Surface group', 't12'),
    P('M180 160 L488 160', 's-wine', 'wine'),
    [0, 1].map((i) => plane(300 + i * 40, 60 + i * 12)).join(''), P('M340 72 L500 130', 's-wine', 'wine'), T(300, 40, 'Air-launched anti-ship strike', 't12'),
    `<path d="M310 260 q-26 -8 -34 6 l50 8 q10 -10 -16 -14z" class="f-ink"/>`, P('M334 262 L500 200', 's-wine', 'wine'), T(300, 296, 'Submarines', 't12'),
    ML(20, 300, ['Sudden attack, decisive manoeuvre, then control of the area.'], 't7s', 15, 'start').replace('y="300"', 'y="318"'),
  ].join(''));

  /* 11 ---------------------------------------------------- maritime interdiction */
  D['maritime-interdiction'] = () => svg(320, 'Interdicting maritime traffic at a chokepoint with submarines, aircraft and mines', [
    BX(20, 120, 90, 60, ['Port A'], 'f-deep s-grey', 't12'), BX(610, 120, 90, 60, ['Port B'], 'f-deep s-grey', 't12'),
    P('M110 150 Q250 110 330 150 Q420 190 610 150', 's-grey s-dash'),
    ship(170, 132, 'f-deep s-grey'), ship(230, 122, 'f-deep s-grey'), ship(470, 168, 'f-deep s-grey'), ship(540, 160, 'f-deep s-grey'),
    R(300, 96, 60, 108, 'f-none s-gold s-dash'), T(330, 24, 'Chokepoint', 'tb13'),
    plane(300, 54), plane(360, 50), P('M308 68 L322 120', 's-wine', 'wine'), P('M356 64 L342 120', 's-wine', 'wine'),
    `<path d="M320 244 q-26 -8 -34 6 l50 8 q10 -10 -16 -14z" class="f-ink"/>`, P('M322 236 L326 176', 's-wine', 'wine'),
    `<path d="M308 146L316 154M316 146L308 154M344 146L352 154M352 146L344 154" class="l s-ink"/>`,
    ML(20, 280, ['Cut the opponent’s sea lines of communication where traffic is', 'concentrated, to starve its forces and economy of supplies.'], 't7s', 15, 'start'),
  ].join(''));

  /* 12 ---------------------------------------------------- offensive against coral reefs */
  D['coral-reefs'] = () => svg(330, 'Stages of an offensive against a coral reef position', [
    T(20, 28, 'Coral-island landings are treated as a distinct type from large-island landings,', 'tb13', 'start'),
    T(20, 46, 'because a reef offers little room, shelter or local support.', 't7s', 'start'),
    `<ellipse cx="520" cy="160" rx="120" ry="76" class="f-gsoft s-gold"/>`,
    `<ellipse cx="520" cy="160" rx="82" ry="44" class="f-wsoft s-none"/>`,
    T(520, 168, 'Lagoon', 'tz'), BX(466, 124, 108, 22, ['Defenders on the reef'], 'f-deep s-grey', 't12'),
    ship(110, 120), ship(150, 150), ship(110, 180), T(130, 210, 'Amphibious and escort groups', 't12'),
    plane(260, 82), plane(300, 74), P('M282 96 L440 138', 's-wine s-dash', 'wine'),
    P('M180 150 L396 158', 's-wine', 'wine'),
    step(20, 270, 1, ['Isolate: blockade, win', 'sea and air control']), step(190, 270, 2, ['Fire strikes', 'on the defences']), step(360, 270, 3, ['Assault by landing', 'craft and helicopters']), step(540, 270, 4, ['Consolidate and', 'resupply']),
  ].join(''));

  /* 13 ---------------------------------------------------- sea-lane protection */
  D['sea-lane-protection'] = () => svg(300, 'Escorting merchant shipping on a sea lane with layered cover', [
    P('M20 170 L700 170', 's-grey s-dash'),
    [0, 1, 2].map((i) => ship(300 + i * 40, 170, 'f-deep s-ink')).join(''),
    C(340, 170, 70, 'f-none s-wine s-dash'), T(340, 266, 'Convoy and close escort', 't12'),
    ship(250, 130), ship(430, 210), ship(250, 214),
    plane(330, 90), plane(370, 80), T(350, 62, 'Air cover', 't12'),
    BX(570, 40, 130, 56, ['Shore command', 'and surveillance'], 'f-paper s-ink', 't12'),
    P('M570 78 L402 150', 's-grey s-dash', 'grey'),
    plane(80, 60, 'f-grey s-grey'), `<path d="M96 240 q-26 -8 -34 6 l50 8 q10 -10 -16 -14z" class="f-grey"/>`, T(90, 280, 'Pirates, submarines,', 't12'), T(90, 294, 'hostile aircraft', 't12'),
    P('M110 236 L270 188', 's-grey s-dash', 'grey'),
    ML(480, 250, ['Escort, security, air defence and', 'mine clearance, increasingly with', 'foreign forces against shared threats.'], 't7s', 15, 'start'),
  ].join(''));

  /* 14 ---------------------------------------------------- naval base defence */
  D['naval-base-defence'] = () => {
    const cx = 200, cy = 165;
    return svg(330, 'Layers of naval base defence from the open sea to the harbour', [
      C(cx, cy, 150, 'f-none s-grey s-dash'), C(cx, cy, 105, 'f-none s-wine s-dash'), C(cx, cy, 62, 'f-wsoft s-wine'),
      BX(cx - 40, cy - 22, 80, 44, ['Naval base', 'harbour'], 'f-paper s-ink', 't12', 15),
      ship(cx - 20, cy + 40), ship(cx + 20, cy + 40),
      L(cx + 150, cy - 40, 412, 66, 's-grey'), T(416, 70, 'Outer: patrols, surveillance,', 't12', 'start'), T(416, 86, 'anti-submarine barrier', 't12', 'start'),
      L(cx + 105, cy, 412, 160, 's-grey'), T(416, 154, 'Middle: coastal missiles,', 't12', 'start'), T(416, 170, 'ship-borne air defence', 't12', 'start'),
      L(cx + 62, cy + 30, 412, 248, 's-grey'), T(416, 242, 'Inner: harbour and air defence,', 't12', 'start'), T(416, 258, 'mine clearance, dispersal', 't12', 'start'),
      plane(110, 30, 'f-grey s-grey'), P('M118 44 L170 110', 's-grey s-dash', 'grey'),
      `<path d="M330 290 q-26 -8 -34 6 l50 8 q10 -10 -16 -14z" class="f-grey"/>`, P('M300 280 L250 210', 's-grey s-dash', 'grey'),
      T(110, 18, 'Air, missile and submarine threats', 'tz', 'start'),
    ].join(''));
  };

  window.CampaignDiagrams = D;
})();
