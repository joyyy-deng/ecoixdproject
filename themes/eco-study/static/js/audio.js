const AUDIO_BASE = '/theme/audio/';

window.soundscape = (() => {
  const COMP_IDS = [
    'wood-chair', 'office-chair', 'gaming-chair',
    'reclaimed-desk', 'flatpack-desk', 'glass-desk',
    'books', 'laptop', 'monitors',
    'sunlight', 'led-lamp', 'fluorescent',
  ];

  let ctx          = null;
  let masterGain   = null;
  let masterFilter = null;
  let masterReady  = false;
  let filterActive = false;

  const nodes   = {};
  const buffers = {};

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  }

  async function loadOne(id) {
    try {
      const res = await fetch(AUDIO_BASE + id + '.ogg');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arr = await res.arrayBuffer();
      buffers[id] = await getCtx().decodeAudioData(arr);
    } catch (e) {
      console.warn(`[soundscape] ${id}.ogg – ${e.message}`);
      buffers[id] = null;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const indicator = document.getElementById('audio-loading');
    Promise.all(COMP_IDS.map(loadOne)).then(() => {
      if (indicator) indicator.hidden = true;
    });
  });

  function createOscSource(comp) {
    if (!comp?.oscillatorType) return null;
    const osc       = getCtx().createOscillator();
    osc.type        = comp.oscillatorType;
    osc.frequency.value = comp.oscillatorFreq;

    if (comp.oscillatorType === 'sawtooth') {
      const shaper = getCtx().createWaveShaper();
      const n      = 256;
      const curve  = new Float32Array(n);
      for (let i = 0; i < n; i++) {
        const x  = (i * 2) / n - 1;
        curve[i] = (Math.PI + 60) * x / (Math.PI + 60 * Math.abs(x));
      }
      shaper.curve      = curve;
      shaper.oversample = '2x';
      osc.connect(shaper);
      return { source: osc, out: shaper };
    }
    return { source: osc, out: osc };
  }

  function createSource(id) {
    const buf = buffers[id];
    if (buf instanceof AudioBuffer) {
      const node  = getCtx().createBufferSource();
      node.buffer = buf;
      node.loop   = true;
      return { source: node, out: node };
    }
    return createOscSource(window.COMP_MAP?.[id]);
  }

  function setupMasterBus() {
    if (masterReady) return;
    const c = getCtx();

    masterGain = c.createGain();
    masterGain.gain.value = 1.0;

    masterFilter = c.createBiquadFilter();
    masterFilter.type = 'highpass';
    masterFilter.frequency.value = 80;

    masterGain.connect(masterFilter);
    masterFilter.connect(c.destination);

    const wind     = c.createOscillator();
    wind.type      = 'sine';
    wind.frequency.value = 58;
    const windGain = c.createGain();
    windGain.gain.value = 0.030;
    wind.connect(windGain);
    windGain.connect(masterGain);
    wind.start();

    masterReady = true;
  }

  function boot() {
    const c = getCtx();
    if (c.state === 'suspended') c.resume();
    setupMasterBus();
  }

  return {
    init: boot,

    add(id) {
      boot();
      if (nodes[id]) return;

      const result = createSource(id);
      if (!result) return;

      const { source, out } = result;
      const comp     = window.COMP_MAP?.[id];
      const gainNode = getCtx().createGain();
      gainNode.gain.value = 0;
      out.connect(gainNode);
      gainNode.connect(masterGain);
      source.start();

      const targetGain = comp?.volume ?? (0.25 + (comp?.ecoScore ?? 5) / 10 * 0.5);
      gainNode.gain.setTargetAtTime(targetGain, getCtx().currentTime, 0.3);
      nodes[id] = { source, gainNode };
    },

    remove(id) {
      if (!nodes[id]) return;
      const { source, gainNode } = nodes[id];
      gainNode.gain.setTargetAtTime(0, getCtx().currentTime, 0.4);
      setTimeout(() => {
        try { source.stop(); } catch (e) {}
        gainNode.disconnect();
      }, 2000);
      delete nodes[id];
    },

    updateFilter(totalScore) {
      if (!masterReady) return;

      const gainTarget = totalScore < 25
        ? 1.0
        : Math.min(1.0 + (totalScore - 25) * 0.05, 2.5);
      masterGain.gain.setTargetAtTime(gainTarget, getCtx().currentTime, 0.8);

      const want = totalScore >= 15;
      if (want !== filterActive) {
        filterActive = want;
        masterFilter.frequency.setTargetAtTime(
          want ? 800 : 80,
          getCtx().currentTime,
          0.8
        );
      }
    },
  };
})();
