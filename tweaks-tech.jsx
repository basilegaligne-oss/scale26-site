// Tweaks for Scale26 tech version — palette + section toggles

const TWEAKS_TECH = /*EDITMODE-BEGIN*/{
  "palette": "indigo",
  "showLogos": true,
  "showStats": true,
  "showMethod": true,
  "showCases": true,
  "showGuarantee": true,
  "showAbout": true,
  "showCalculator": true,
  "showFaq": true
}/*EDITMODE-END*/;

// Palettes — accent / accent-2 / accent-3 / glow
const PALETTES = {
  indigo: {
    accent: '#6366f1', accent2: '#8b5cf6', accent3: '#06b6d4',
    glow: 'rgba(99,102,241,0.4)',
  },
  violet: {
    accent: '#a855f7', accent2: '#ec4899', accent3: '#f43f5e',
    glow: 'rgba(168,85,247,0.4)',
  },
  cyber: {
    accent: '#06b6d4', accent2: '#0ea5e9', accent3: '#10b981',
    glow: 'rgba(6,182,212,0.45)',
  },
  emerald: {
    accent: '#10b981', accent2: '#059669', accent3: '#84cc16',
    glow: 'rgba(16,185,129,0.4)',
  },
  amber: {
    accent: '#f59e0b', accent2: '#ef4444', accent3: '#ec4899',
    glow: 'rgba(245,158,11,0.4)',
  },
  noir: {
    accent: '#525b75', accent2: '#737a93', accent3: '#94a0bd',
    glow: 'rgba(82,91,117,0.4)',
  },
};

const TweaksApp = () => {
  const [t, setT] = useTweaks(TWEAKS_TECH);

  React.useEffect(() => {
    const p = PALETTES[t.palette] || PALETTES.indigo;
    const r = document.documentElement.style;
    r.setProperty('--accent', p.accent);
    r.setProperty('--accent-2', p.accent2);
    r.setProperty('--accent-3', p.accent3);
    r.setProperty('--accent-glow', p.glow);
  }, [t.palette]);

  React.useEffect(() => {
    const map = {
      logos: 'showLogos',
      stats: 'showStats',
      methode: 'showMethod',
      testimonials: 'showCases',
      guarantee: 'showGuarantee',
      about: 'showAbout',
      calculator: 'showCalculator',
      faq: 'showFaq',
    };
    Object.entries(map).forEach(([sec, key]) => {
      document.querySelectorAll(`[data-section="${sec}"]`).forEach(el => {
        el.classList.toggle('hidden-section', !t[key]);
      });
    });
  }, [t]);

  // Render swatch grid for each palette
  const paletteOptions = Object.keys(PALETTES);

  return (
    <TweaksPanel title="Tweaks · DA tech">
      <TweakSection label="Palette de couleur">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, padding:'4px 0'}}>
          {paletteOptions.map(key => {
            const p = PALETTES[key];
            const active = t.palette === key;
            return (
              <button
                key={key}
                onClick={() => setT('palette', key)}
                style={{
                  padding:'10px 12px',
                  background: active ? '#18181b' : '#fff',
                  border: `1px solid ${active ? '#18181b' : '#e4e4e7'}`,
                  borderRadius: 10,
                  cursor:'pointer',
                  display:'flex', alignItems:'center', gap:10,
                  fontSize:13, fontWeight:500,
                  color: active ? '#fff' : '#18181b',
                  textTransform:'capitalize',
                }}>
                <span style={{
                  display:'flex', gap:2,
                  borderRadius:6, overflow:'hidden',
                  border:'1px solid rgba(0,0,0,0.06)',
                }}>
                  <span style={{width:10, height:18, background:p.accent}} />
                  <span style={{width:10, height:18, background:p.accent2}} />
                  <span style={{width:10, height:18, background:p.accent3}} />
                </span>
                {key}
              </button>
            );
          })}
        </div>
      </TweakSection>

      <TweakSection label="Sections (afficher / masquer)">
        <TweakToggle label="Logos clients" value={t.showLogos} onChange={v => setT('showLogos', v)} />
        <TweakToggle label="Stats" value={t.showStats} onChange={v => setT('showStats', v)} />
        <TweakToggle label="Méthode" value={t.showMethod} onChange={v => setT('showMethod', v)} />
        <TweakToggle label="Cas clients" value={t.showCases} onChange={v => setT('showCases', v)} />
        <TweakToggle label="Engagement" value={t.showGuarantee} onChange={v => setT('showGuarantee', v)} />
        <TweakToggle label="À propos" value={t.showAbout} onChange={v => setT('showAbout', v)} />
        <TweakToggle label="Calculateur" value={t.showCalculator} onChange={v => setT('showCalculator', v)} />
        <TweakToggle label="FAQ" value={t.showFaq} onChange={v => setT('showFaq', v)} />
      </TweakSection>
    </TweaksPanel>
  );
};

const root = ReactDOM.createRoot(document.getElementById('tweaks-root'));
root.render(<TweaksApp />);
