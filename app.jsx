// app.jsx — design canvas presenting all 5 wireframe directions

const { useTweaks } = window;

const ACCENT_OPTIONS = [
  { key: 'orange',    css: 'oklch(0.65 0.16 35)' },
  { key: 'bleu',      css: 'oklch(0.60 0.16 250)' },
  { key: 'vert',      css: 'oklch(0.62 0.13 150)' },
  { key: 'framboise', css: 'oklch(0.58 0.18 5)' },
  { key: 'encre',     css: 'oklch(0.30 0.04 60)' },
];

const directions = [
  { id: 'f-synthese',    label: 'F · Synthèse (recommandée)', Component: WFSynthese, height: 4600 },
  { id: 'a-audit',       label: 'A · Audit-first',        Component: WFAudit },
  { id: 'b-counter',     label: 'B · Compteur live',      Component: WFCounter },
  { id: 'e-manifeste',   label: 'E · Manifeste éditorial', Component: WFManifeste },
  { id: 'c-bento',       label: 'C · Tableau qui bouge',  Component: WFBento },
  { id: 'd-avantapres',  label: 'D · Avant / Après',      Component: WFAvantApres },
];

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "orange",
  "showAnnotations": true
}/*EDITMODE-END*/;

const App = () => {
  const [t, setTweak] = useTweaks(DEFAULTS);

  React.useEffect(() => {
    const acc = ACCENT_OPTIONS.find(a => a.key === t.accent) || ACCENT_OPTIONS[0];
    document.documentElement.style.setProperty('--accent', acc.css);
  }, [t.accent]);

  React.useEffect(() => {
    const styleId = 'annot-toggle';
    let s = document.getElementById(styleId);
    if (!s) { s = document.createElement('style'); s.id = styleId; document.head.appendChild(s); }
    s.textContent = t.showAnnotations
      ? ''
      : '.annot, .tape { display: none !important; }';
  }, [t.showAnnotations]);

  const currentSwatch = ACCENT_OPTIONS.find(a => a.key === t.accent)?.css || ACCENT_OPTIONS[0].css;

  return (
    <>
      <DesignCanvas>
        <DCSection
          id="homepages"
          title="Scale26 — wireframes homepage"
          subtitle="5 directions distinctes. Clique sur l'icône plein-écran d'une carte pour la voir en grand. Tu peux les réorganiser (poignée en haut à gauche)."
        >
          {directions.map(d => (
            <DCArtboard
              key={d.id}
              id={d.id}
              label={d.label}
              width={1200}
              height={d.height || 1800}
            >
              <d.Component />
            </DCArtboard>
          ))}
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent">
          <TweakColor
            label="Couleur d'accent"
            value={currentSwatch}
            options={ACCENT_OPTIONS.map(a => a.css)}
            onChange={(v) => {
              const found = ACCENT_OPTIONS.find(a => a.css === v);
              setTweak('accent', found ? found.key : 'orange');
            }}
          />
        </TweakSection>

        <TweakSection label="Annotations">
          <TweakToggle
            label="Notes manuscrites"
            value={t.showAnnotations}
            onChange={v => setTweak('showAnnotations', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
