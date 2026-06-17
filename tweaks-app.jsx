// Tweaks for Scale26 hi-fi — accent color + section toggles

const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#c2410c",
  "showStats": true,
  "showDiagnostic": true,
  "showMethod": true,
  "showGuarantee": true,
  "showTestimonials": true,
  "showCalculator": true,
  "showFaq": true
}/*EDITMODE-END*/;

const ACCENTS = ['#c2410c', '#1e40af', '#15803d', '#9f1239', '#1f2937'];

const accentDeepFor = (hex) => {
  // simple darken via shifting toward black
  const map = {
    '#c2410c': '#9a3208',
    '#1e40af': '#1e3a8a',
    '#15803d': '#14532d',
    '#9f1239': '#7f1d1d',
    '#1f2937': '#111827',
  };
  return map[hex] || hex;
};

const accentSoftFor = (hex) => {
  const map = {
    '#c2410c': '#fbe9d9',
    '#1e40af': '#dbe6ff',
    '#15803d': '#dcfce7',
    '#9f1239': '#ffe4ec',
    '#1f2937': '#e5e7eb',
  };
  return map[hex] || '#f0ebe0';
};

const TweaksApp = () => {
  const [t, setT] = useTweaks(TWEAKS_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--accent-deep', accentDeepFor(t.accent));
    document.documentElement.style.setProperty('--accent-soft', accentSoftFor(t.accent));
  }, [t.accent]);

  const toggleSection = (name, key) => {
    React.useEffect(() => {
      const els = document.querySelectorAll(`[data-section="${name}"]`);
      els.forEach(el => el.classList.toggle('hidden-section', !t[key]));
    }, [t[key]]);
  };

  // sync section visibility
  React.useEffect(() => {
    const map = {
      stats: 'showStats',
      diagnostic: 'showDiagnostic',
      methode: 'showMethod',
      guarantee: 'showGuarantee',
      testimonials: 'showTestimonials',
      calculator: 'showCalculator',
      faq: 'showFaq',
    };
    Object.entries(map).forEach(([sec, key]) => {
      document.querySelectorAll(`[data-section="${sec}"]`).forEach(el => {
        el.classList.toggle('hidden-section', !t[key]);
      });
    });
  }, [t]);

  return (
    <TweaksPanel title="Tweaks Scale26">
      <TweakSection label="Couleur d'accent">
        <TweakColor
          label="Accent"
          value={t.accent}
          options={ACCENTS}
          onChange={v => setT('accent', v)}
        />
      </TweakSection>

      <TweakSection label="Sections (afficher / masquer)">
        <TweakToggle label="Stats bar" value={t.showStats} onChange={v => setT('showStats', v)} />
        <TweakToggle label="Diagnostic (où part le temps)" value={t.showDiagnostic} onChange={v => setT('showDiagnostic', v)} />
        <TweakToggle label="Méthode (4 étapes)" value={t.showMethod} onChange={v => setT('showMethod', v)} />
        <TweakToggle label="Bande garantie" value={t.showGuarantee} onChange={v => setT('showGuarantee', v)} />
        <TweakToggle label="Témoignages" value={t.showTestimonials} onChange={v => setT('showTestimonials', v)} />
        <TweakToggle label="Calculateur" value={t.showCalculator} onChange={v => setT('showCalculator', v)} />
        <TweakToggle label="FAQ" value={t.showFaq} onChange={v => setT('showFaq', v)} />
      </TweakSection>
    </TweaksPanel>
  );
};

const root = ReactDOM.createRoot(document.getElementById('tweaks-root'));
root.render(<TweaksApp />);
