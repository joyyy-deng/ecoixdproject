const COMPONENTS = [
  {
    id: 'wood-chair', name: 'wooden chair', ecoScore: 1, size: 1, category: 'seating',
    lines: [' || ', '|  |', '|__|', ' /\\ ', '/  \\'],
    palette: [
      { re: /[\|]/,   color: '#8B6A42' },
      { re: /[_]/,    color: '#C47A45' },
      { re: /[\/\\]/, color: '#6B5030' },
      { re: /[ ]/,    color: null },
    ],
    oscillatorType: 'sine', oscillatorFreq: 220, volume: 0.06,
  },
  {
    id: 'office-chair', name: 'office chair', ecoScore: 4, size: 1, category: 'seating',
    lines: [' __ ', '|  |', '[==]', ' \\/ ', 'o  o'],
    palette: [
      { re: /[\[\]=]/,  color: '#4A8A9A' },
      { re: /[\|\_]/,   color: '#5A6A72' },
      { re: /[o\/\\]/,  color: '#5A6A72' },
      { re: /[ ]/,      color: null },
    ],
    oscillatorType: 'triangle', oscillatorFreq: 440,
  },
  {
    id: 'gaming-chair', name: 'gaming chair', ecoScore: 8, size: 1, category: 'seating',
    lines: ['|^_^|', '[===]', ' \\|/ ', ' _|_ ', 'o   o'],
    palette: [
      { re: /[\^\^\_]/, color: '#7A4A8A' },
      { re: /[\[\]=]/,  color: '#4A5A62' },
      { re: /[\|\/\\]/, color: '#7A4A8A' },
      { re: /[o\_]/,    color: '#4A5A62' },
      { re: /[ ]/,      color: null },
    ],
    oscillatorType: 'sawtooth', oscillatorFreq: 880,
  },
  {
    id: 'reclaimed-desk', name: 'reclaimed wood desk', ecoScore: 1, size: 2, category: 'table',
    lines: [
      '   /~~~~~~~~~~~~~~\\   ',
      '  / ~~ >< ~~ >< ~~ \\  ',
      '  \\ ~~ >< ~~ >< ~~ /  ',
      '   \\~~~~~~~~~~~~~~/   ',
      '      ||      ||      ',
    ],
    palette: [
      { re: /[\/\\]/,  color: '#7A6040' },
      { re: /[~><]/,   color: '#8B6A42' },
      { re: /[\|]/,    color: '#6B5030' },
      { re: /[ ]/,     color: null },
    ],
    oscillatorType: 'sine', oscillatorFreq: 260,
  },
  {
    id: 'flatpack-desk', name: 'flat-pack desk', ecoScore: 4, size: 2, category: 'table',
    lines: [
      '    /============\\    ',
      '   /              \\   ',
      '   \\              /   ',
      '    \\============/    ',
      '      []      []      ',
    ],
    palette: [
      { re: /[\/\\]/,  color: '#6A7A5A' },
      { re: /[=]/,     color: '#6A7A5A' },
      { re: /[\[\]]/,  color: '#4A5A3A' },
      { re: /[ ]/,     color: null },
    ],
    oscillatorType: 'triangle', oscillatorFreq: 520,
  },
  {
    id: 'glass-desk', name: 'glass + steel desk', ecoScore: 8, size: 2, category: 'table',
    lines: [
      '   /--------------\\   ',
      '  / \u00b7 \u00b7        \u00b7 \u00b7 \\  ',
      '  \\ \u00b7 \u00b7        \u00b7 \u00b7 /  ',
      '   \\--------------/   ',
      '     [|        |]     ',
    ],
    palette: [
      { re: /[\/\\]/,    color: '#6A8A9A' },
      { re: /[\-]/,      color: '#6A8A9A' },
      { re: /[\u00b7]/,  color: '#7AAABB' },
      { re: /[\[\]\|]/,  color: '#4A6A7A' },
      { re: /[ ]/,       color: null },
    ],
    oscillatorType: 'sawtooth', oscillatorFreq: 940,
  },
  {
    id: 'books', name: 'paperback books', ecoScore: 1, size: 1, category: 'work',
    lines: ['|I||I|', '|I||I|', '------'],
    palette: [
      { re: /[I]/,    color: '#C47A45' },
      { re: /[\|]/,   color: '#8B6A42' },
      { re: /[\-]/,   color: '#6B5030' },
      { re: /[ ]/,    color: null },
    ],
    oscillatorType: 'sine', oscillatorFreq: 330,
  },
  {
    id: 'laptop', name: 'laptop', ecoScore: 5, size: 1, category: 'work',
    lines: ['[___]', '/___/', '-----'],
    palette: [
      { re: /[\[\]_]/, color: '#7AAABB' },
      { re: /[\/]/,    color: '#5A6A72' },
      { re: /[\-]/,    color: '#4A5A62' },
      { re: /[ ]/,     color: null },
    ],
    oscillatorType: 'triangle', oscillatorFreq: 660,
  },
  {
    id: 'monitors', name: 'multi-monitor', ecoScore: 9, size: 1, category: 'work',
    lines: ['[=][=]', ' | |  ', '------'],
    palette: [
      { re: /[\[\]=]/, color: '#6AAABB' },
      { re: /[\|]/,    color: '#4A5A6A' },
      { re: /[\-]/,    color: '#4A5A6A' },
      { re: /[ ]/,     color: null },
    ],
    oscillatorType: 'sawtooth', oscillatorFreq: 1100,
  },
  {
    id: 'sunlight', name: 'sunlight / window', ecoScore: 0, size: 0, category: 'light',
    lines: ['  \\|/  ', '--{o}--', '  /|\\  '],
    palette: [
      { re: /[\\\/\|]/,  color: '#C8A840' },
      { re: /[\{\}o]/,   color: '#D4B84A' },
      { re: /[\-]/,      color: '#9A8030' },
      { re: /[ ]/,       color: null },
    ],
    lightColor: 'rgba(255,240,160,', lightRadius: 380,
    oscillatorType: null, oscillatorFreq: 0,
  },
  {
    id: 'led-lamp', name: 'LED desk lamp', ecoScore: 2, size: 0, category: 'light',
    lines: ['  (o)  ', '  /|\\  ', ' /===\\ ', '   |   ', '  _|_  '],
    palette: [
      { re: /[o\(\)]/,  color: '#9ABBD8' },
      { re: /[\/\\=]/,  color: '#8A9AA8' },
      { re: /[\|\_]/,   color: '#7A8A98' },
      { re: /[ ]/,      color: null },
    ],
    lightColor: 'rgba(200,220,255,', lightRadius: 210,
    oscillatorType: 'sine', oscillatorFreq: 280,
  },
  {
    id: 'fluorescent', name: 'fluorescent light', ecoScore: 7, size: 0, category: 'light',
    lines: ['   _|_|_   ', '    |||    ', '[=========]'],
    palette: [
      { re: /[\[\]=]/,  color: '#C8C8A0' },
      { re: /[\|]/,     color: '#A8A880' },
      { re: /[\_]/,     color: '#8A8A68' },
      { re: /[ ]/,      color: null },
    ],
    lightColor: 'rgba(220,240,200,', lightRadius: 290,
    oscillatorType: 'sawtooth', oscillatorFreq: 900,
  },
];

window.COMP_MAP = Object.fromEntries(COMPONENTS.map(c => [c.id, c]));

const GRID_SIZE = 8;
const TILE_W    = 78;
const TILE_H    = 39;

const grid      = {};
const blockedBy = {};
const tableOf   = {};
const workOn    = {};
const lightGrid = {};

function tileKey(c, r)  { return `${c},${r}`; }
function parseKey(k)    { return k.split(',').map(Number); }

function occupyTiles(col, row, size, anchor, isTable) {
  for (let dr = 0; dr < size; dr++)
    for (let dc = 0; dc < size; dc++) {
      const k     = tileKey(col + dc, row + dr);
      blockedBy[k] = anchor;
      if (isTable) tableOf[k] = anchor;
    }
}

function freeTiles(col, row, size) {
  for (let dr = 0; dr < size; dr++)
    for (let dc = 0; dc < size; dc++) {
      const k = tileKey(col + dc, row + dr);
      delete blockedBy[k];
      delete tableOf[k];
    }
}

function canPlace(col, row, size) {
  if (col + size > GRID_SIZE || row + size > GRID_SIZE) return false;
  for (let dr = 0; dr < size; dr++)
    for (let dc = 0; dc < size; dc++)
      if (blockedBy[tileKey(col + dc, row + dr)]) return false;
  return true;
}

function canPlaceWork(col, row) {
  const k = tileKey(col, row);
  return !!tableOf[k] && !workOn[k];
}

let originX = 0;
let originY = 0;

function iso(col, row) {
  return {
    x: originX + (col - row) * (TILE_W / 2),
    y: originY + (col + row) * (TILE_H / 2),
  };
}

function screenToIso(sx, sy) {
  const rx = sx - originX;
  const ry = sy - originY;
  return {
    col: Math.round((rx / (TILE_W / 2) + ry / (TILE_H / 2)) / 2),
    row: Math.round((ry / (TILE_H / 2) - rx / (TILE_W / 2)) / 2),
  };
}

function validTile(c, r) {
  return c >= 0 && c < GRID_SIZE && r >= 0 && r < GRID_SIZE;
}

const canvas  = document.getElementById('game-canvas');
const lcanvas = document.getElementById('light-canvas');
const ctx2d   = canvas.getContext('2d');
const lctx    = lcanvas.getContext('2d');

function resizeCanvases() {
  const wrap = document.getElementById('canvas-wrap');
  const W    = wrap.clientWidth;
  const H    = wrap.clientHeight;
  const dpr  = window.devicePixelRatio || 1;

  canvas.width  = lcanvas.width  = Math.round(W * dpr);
  canvas.height = lcanvas.height = Math.round(H * dpr);
  canvas.style.width  = lcanvas.style.width  = W + 'px';
  canvas.style.height = lcanvas.style.height = H + 'px';

  ctx2d.scale(dpr, dpr);
  lctx.scale(dpr, dpr);

  originX = W / 2;
  originY = H / 2 - (GRID_SIZE * TILE_H / 2);
  render();
}

function colorForChar(ch, palette) {
  if (ch === ' ') return null;
  for (const rule of palette) {
    if (rule.re.test(ch)) return rule.color;
  }
  return '#2C2C2A';
}

function drawSprite(comp, cx, by) {
  const isTable = comp.size === 2;
  const FSIZE   = isTable ? 10 : 9;
  const LH      = isTable ? 12 : 11;

  ctx2d.font         = `${FSIZE}px 'Courier New', Courier, monospace`;
  ctx2d.textAlign    = 'left';
  ctx2d.textBaseline = 'top';

  const CW     = ctx2d.measureText('M').width;
  const lines  = comp.lines;
  const maxLen = Math.max(...lines.map(l => l.length));
  const totalH = lines.length * LH;
  const totalW = maxLen * CW;

  const startX = Math.round(cx - totalW / 2);
  const startY = Math.round(by - totalH);

  for (let li = 0; li < lines.length; li++) {
    const line = lines[li];
    for (let ci = 0; ci < line.length; ci++) {
      const ch    = line[ci];
      const color = colorForChar(ch, comp.palette);
      if (!color) continue;
      ctx2d.fillStyle = color;
      ctx2d.fillText(ch, startX + ci * CW, startY + li * LH);
    }
  }
}

function renderLights() {
  lctx.clearRect(0, 0, lcanvas.width, lcanvas.height);
  for (const [id, pos] of Object.entries(lightGrid)) {
    const comp   = window.COMP_MAP[id];
    if (!comp) continue;
    const center = iso(pos.col + 0.5, pos.row + 0.5);
    const r      = comp.lightRadius;
    const g      = lctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, r);
    g.addColorStop(0,   comp.lightColor + '0.30)');
    g.addColorStop(0.4, comp.lightColor + '0.12)');
    g.addColorStop(1,   comp.lightColor + '0)');
    lctx.fillStyle = g;
    lctx.fillRect(0, 0, lcanvas.width, lcanvas.height);
  }
}

let hoverTile = null;

function computeHover(col, row, draggingId) {
  if (!validTile(col, row)) { hoverTile = null; return; }
  if (!draggingId) { hoverTile = { col, row, mode: 'grid', size: 1, ok: false }; return; }
  const comp = window.COMP_MAP[draggingId];
  if (comp.category === 'work') {
    hoverTile = { col, row, mode: 'work', size: 1, ok: canPlaceWork(col, row) };
  } else if (comp.category === 'light') {
    hoverTile = { col, row, mode: 'light', size: 1, ok: true };
  } else {
    hoverTile = { col, row, mode: 'grid', size: comp.size, ok: canPlace(col, row, comp.size) };
  }
}

function render() {
  ctx2d.clearRect(0, 0, canvas.width, canvas.height);

  ctx2d.fillStyle = 'rgba(136,136,136,0.25)';
  for (let r = 0; r <= GRID_SIZE; r++)
    for (let c = 0; c <= GRID_SIZE; c++) {
      const p = iso(c, r);
      ctx2d.beginPath();
      ctx2d.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
      ctx2d.fill();
    }

  if (hoverTile) {
    const { col, row, size, ok, mode } = hoverTile;
    const s = size || 1;
    ctx2d.save();
    ctx2d.strokeStyle = mode === 'light'
      ? 'rgba(200,168,64,0.6)'
      : ok ? 'rgba(107,123,90,0.6)' : 'rgba(139,58,58,0.5)';
    ctx2d.lineWidth = 0.5;
    ctx2d.setLineDash([3, 3]);
    const cs = [iso(col, row), iso(col + s, row), iso(col + s, row + s), iso(col, row + s)];
    ctx2d.beginPath();
    ctx2d.moveTo(cs[0].x, cs[0].y);
    cs.slice(1).forEach(p => ctx2d.lineTo(p.x, p.y));
    ctx2d.closePath();
    ctx2d.stroke();
    ctx2d.restore();
  }

  const floorEntries = Object.entries(grid).sort(([ka], [kb]) => {
    const [ca, ra] = parseKey(ka);
    const [cb, rb] = parseKey(kb);
    return (ra + ca) - (rb + cb);
  });

  for (const [key, compId] of floorEntries) {
    const [col, row] = parseKey(key);
    const comp = window.COMP_MAP[compId];
    const s    = comp.size;

    ctx2d.save();
    ctx2d.globalAlpha = 0.08;
    ctx2d.fillStyle   = comp.category === 'table' ? '#7A6040' : '#5A6A72';
    const cs = [iso(col, row), iso(col + s, row), iso(col + s, row + s), iso(col, row + s)];
    ctx2d.beginPath();
    ctx2d.moveTo(cs[0].x, cs[0].y);
    cs.slice(1).forEach(p => ctx2d.lineTo(p.x, p.y));
    ctx2d.closePath();
    ctx2d.fill();
    ctx2d.restore();

    const centerP = iso(col + s / 2, row + s / 2);
    const groundP = iso(col + s / 2, row + s);
    drawSprite(comp, centerP.x, groundP.y);
  }

  const workEntries = Object.entries(workOn).sort(([ka], [kb]) => {
    const [ca, ra] = parseKey(ka);
    const [cb, rb] = parseKey(kb);
    return (ra + ca) - (rb + cb);
  });
  for (const [key, compId] of workEntries) {
    const [col, row] = parseKey(key);
    const comp = window.COMP_MAP[compId];
    const p    = iso(col + 0.5, row + 0.5);
    drawSprite(comp, p.x, p.y - 4);
  }

  for (const [id, pos] of Object.entries(lightGrid)) {
    const comp = window.COMP_MAP[id];
    const p    = iso(pos.col + 0.5, pos.row + 0.5);
    drawSprite(comp, p.x, p.y - 8);
  }

  renderLights();
}

function totalScore() {
  const gs  = Object.values(grid).reduce((s, id) => s + (window.COMP_MAP[id]?.ecoScore || 0), 0);
  const ws  = Object.values(workOn).reduce((s, id) => s + (window.COMP_MAP[id]?.ecoScore || 0), 0);
  const ls  = Object.keys(lightGrid).reduce((s, id) => s + (window.COMP_MAP[id]?.ecoScore || 0), 0);
  return gs + ws + ls;
}

function updateMeter() {
  const score = totalScore();
  const lbl   = document.getElementById('impact-label');
  document.getElementById('impact-score').textContent = `— score: ${score}`;
  if (score <= 14)      { lbl.className = 'low';  lbl.textContent = 'low impact'; }
  else if (score <= 24) { lbl.className = 'mid';  lbl.textContent = 'mid impact'; }
  else                  { lbl.className = 'high'; lbl.textContent = 'high impact'; }
  soundscape.updateFilter(score);
}

function buildDots(score) {
  const cls    = score <= 3 ? 'fg' : score <= 6 ? 'fa' : 'fr';
  const filled = score === 0 ? 0 : score <= 3 ? 1 : score <= 6 ? 2 : 3;
  return Array.from({ length: 3 }, (_, i) =>
    `<span class="dot ${i < filled ? cls : 'emp'}"></span>`
  ).join('');
}

function buildPreviewHTML(comp) {
  return comp.lines.map(line =>
    line.split('').map(ch => {
      const color = colorForChar(ch, comp.palette);
      if (!color) return `<span style="opacity:0">${ch === ' ' ? '&nbsp;' : ch}</span>`;
      const safe  = ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : ch === '&' ? '&amp;' : ch;
      return `<span style="color:${color}">${safe}</span>`;
    }).join('')
  ).join('\n');
}

function buildSidebar() {
  const aside = document.getElementById('sidebar');

  [
    { label: 'seating', ids: ['wood-chair', 'office-chair', 'gaming-chair'] },
    { label: 'tables',  ids: ['reclaimed-desk', 'flatpack-desk', 'glass-desk'] },
    { label: 'work',    ids: ['books', 'laptop', 'monitors'] },
  ].forEach(cat => {
    const hdr = document.createElement('div');
    hdr.className   = 'cat-label';
    hdr.textContent = cat.label;
    aside.appendChild(hdr);

    cat.ids.forEach(id => {
      const comp = window.COMP_MAP[id];
      const el   = document.createElement('div');
      el.className  = 'palette-item';
      el.draggable  = true;
      el.dataset.id = id;
      el.innerHTML  = `<pre class="sprite-preview">${buildPreviewHTML(comp)}</pre>
        <div class="item-meta">
          <span class="item-name">${comp.name}</span>
          <div class="eco-dots">${buildDots(comp.ecoScore)}</div>
        </div>`;
      aside.appendChild(el);
    });
  });

  const lhdr = document.createElement('div');
  lhdr.className   = 'cat-label';
  lhdr.textContent = 'lighting';
  aside.appendChild(lhdr);

  const note = document.createElement('div');
  note.className   = 'light-note';
  note.textContent = 'drag to place above grid';
  aside.appendChild(note);

  ['sunlight', 'led-lamp', 'fluorescent'].forEach(id => {
    const comp = window.COMP_MAP[id];
    const el   = document.createElement('div');
    el.className  = 'light-item';
    el.draggable  = true;
    el.dataset.id = id;
    el.id         = `light-btn-${id}`;
    el.innerHTML  = `<pre class="sprite-preview">${buildPreviewHTML(comp)}</pre>
      <div class="item-meta">
        <span class="item-name">${comp.name}</span>
        <div class="eco-dots">${buildDots(comp.ecoScore)}</div>
      </div>`;
    aside.appendChild(el);
  });
}

let draggingId = null;
const ghost    = document.getElementById('drag-ghost');

document.addEventListener('dragstart', e => {
  const item = e.target.closest('.palette-item, .light-item');
  if (!item) return;
  draggingId      = item.dataset.id;
  ghost.innerHTML = buildPreviewHTML(window.COMP_MAP[draggingId]);
  const blank     = document.createElement('canvas');
  blank.width = blank.height = 1;
  e.dataTransfer.setDragImage(blank, 0, 0);
  e.dataTransfer.effectAllowed = 'copy';
});

document.addEventListener('drag', e => {
  if (!e.clientX && !e.clientY) return;
  ghost.style.left    = e.clientX + 'px';
  ghost.style.top     = e.clientY + 'px';
  ghost.style.opacity = '1';
});

document.addEventListener('dragend', () => {
  draggingId          = null;
  hoverTile           = null;
  ghost.style.opacity = '0';
  render();
});

canvas.addEventListener('dragover', e => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
  const rect         = canvas.getBoundingClientRect();
  const { col, row } = screenToIso(e.clientX - rect.left, e.clientY - rect.top);
  computeHover(col, row, draggingId);
  render();
});

canvas.addEventListener('dragleave', () => { hoverTile = null; render(); });

canvas.addEventListener('drop', e => {
  e.preventDefault();
  soundscape.init();
  document.getElementById('audio-status').textContent = '[ audio active ]';
  hoverTile = null;
  if (!draggingId) return;

  const comp         = window.COMP_MAP[draggingId];
  const rect         = canvas.getBoundingClientRect();
  const { col, row } = screenToIso(e.clientX - rect.left, e.clientY - rect.top);
  if (!validTile(col, row)) return;

  if (comp.category === 'work') {
    if (!canPlaceWork(col, row)) return;
    workOn[tileKey(col, row)] = draggingId;
    soundscape.add(draggingId);

  } else if (comp.category === 'light') {
    if (lightGrid[draggingId]) {
      soundscape.remove(draggingId);
      delete lightGrid[draggingId];
      document.getElementById(`light-btn-${draggingId}`)?.classList.remove('active');
    }
    lightGrid[draggingId] = { col, row };
    soundscape.add(draggingId);
    document.getElementById(`light-btn-${draggingId}`)?.classList.add('active');

  } else {
    if (!canPlace(col, row, comp.size)) return;
    const key = tileKey(col, row);
    grid[key] = draggingId;
    occupyTiles(col, row, comp.size, key, comp.category === 'table');
    soundscape.add(draggingId);
  }

  updateMeter();
  render();
});

function removeAt(e) {
  e.preventDefault();
  const rect         = canvas.getBoundingClientRect();
  const { col, row } = screenToIso(e.clientX - rect.left, e.clientY - rect.top);
  if (!validTile(col, row)) return;
  const k = tileKey(col, row);

  if (workOn[k]) {
    soundscape.remove(workOn[k]);
    delete workOn[k];
    updateMeter(); render(); return;
  }

  for (const [id, pos] of Object.entries(lightGrid)) {
    if (pos.col === col && pos.row === row) {
      soundscape.remove(id);
      delete lightGrid[id];
      document.getElementById(`light-btn-${id}`)?.classList.remove('active');
      updateMeter(); render(); return;
    }
  }

  const anchor = blockedBy[k];
  if (!anchor) return;
  const compId = grid[anchor];
  const comp   = window.COMP_MAP[compId];
  const [ac, ar] = parseKey(anchor);

  if (comp.category === 'table') {
    for (let dr = 0; dr < comp.size; dr++)
      for (let dc = 0; dc < comp.size; dc++) {
        const wk = tileKey(ac + dc, ar + dr);
        if (workOn[wk]) { soundscape.remove(workOn[wk]); delete workOn[wk]; }
      }
  }

  freeTiles(ac, ar, comp.size);
  delete grid[anchor];
  soundscape.remove(compId);
  updateMeter(); render();
}

canvas.addEventListener('contextmenu', removeAt);
canvas.addEventListener('dblclick',    removeAt);

canvas.addEventListener('mousemove', e => {
  if (draggingId) return;
  const rect         = canvas.getBoundingClientRect();
  const { col, row } = screenToIso(e.clientX - rect.left, e.clientY - rect.top);
  if (!validTile(col, row)) { hoverTile = null; render(); return; }
  const k = tileKey(col, row);
  if (workOn[k]) {
    hoverTile = { col, row, mode: 'work', size: 1, ok: false };
  } else if (blockedBy[k]) {
    const anchor   = blockedBy[k];
    const comp     = window.COMP_MAP[grid[anchor]];
    const [ac, ar] = parseKey(anchor);
    hoverTile = { col: ac, row: ar, mode: 'grid', size: comp?.size || 1, ok: false };
  } else {
    hoverTile = { col, row, mode: 'grid', size: 1, ok: false };
  }
  render();
});

canvas.addEventListener('mouseleave', () => { hoverTile = null; render(); });

buildSidebar();
window.addEventListener('resize', resizeCanvases);
resizeCanvases();
