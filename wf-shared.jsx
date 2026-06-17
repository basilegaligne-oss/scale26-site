// wf-shared.jsx — shared sketchy primitives for all wireframe directions

// Hand-drawn arrow that points roughly from p1 to p2 (path coords)
const Scribble = ({ d, color, w = 2 }) => (
  <svg style={{position:'absolute', inset:0, pointerEvents:'none', overflow:'visible'}} className="arrow-svg">
    <path d={d} fill="none" stroke={color || 'currentColor'} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Crooked navbar reused by every direction
const WFNav = ({ logoLabel = 'scale26', accent }) => (
  <div style={{
    display:'flex', alignItems:'center', justifyContent:'space-between',
    padding:'18px 28px', borderBottom:'2px solid var(--ink)',
  }}>
    <div style={{display:'flex', alignItems:'center', gap:8}}>
      <div style={{width:22, height:22, background:'var(--ink)', borderRadius:6, transform:'rotate(-6deg)'}} />
      <div style={{width:22, height:22, borderRadius:'50%', border:'2px solid var(--ink)'}} />
      <div style={{width:0, height:0, borderLeft:'12px solid transparent', borderRight:'12px solid transparent', borderBottom:'18px solid var(--ink)', transform:'rotate(4deg) translateY(-2px)'}} />
      <span className="h-marker" style={{marginLeft:8, fontSize:16}}>{logoLabel}</span>
    </div>
    <div style={{display:'flex', gap:22, alignItems:'center'}} className="h-marker">
      <span style={{fontSize:15}}>Accueil</span>
      <span style={{fontSize:15}}>Comment ça marche</span>
      <span style={{fontSize:15}}>Contact</span>
      <button className="btn-ink" style={{fontSize:14, padding:'8px 14px'}}>
        <span style={{width:8, height:8, borderRadius:'50%', background:accent || 'oklch(0.65 0.16 35)'}}></span>
        Audit gratuit →
      </button>
    </div>
  </div>
);

// "Sticker" callout in the corner of a section
const Sticker = ({ children, color, rotate = -6, style = {} }) => (
  <div style={{
    position:'absolute',
    transform:`rotate(${rotate}deg)`,
    background: color || 'color-mix(in oklab, var(--accent) 35%, #fff8c8)',
    border:'2px solid var(--ink)',
    borderRadius: '8px 10px 8px 12px',
    padding:'6px 10px',
    fontFamily:'Caveat, cursive', fontWeight:700, fontSize:18,
    boxShadow:'2px 2px 0 var(--ink)',
    ...style,
  }}>{children}</div>
);

// Mini placeholder boxes labelled with their content type
const Ph = ({ children, height = 80, style = {} }) => (
  <div className="placeholder" style={{ height, ...style }}>
    {children}
  </div>
);

// Section heading w/ underline scribble
const SectionTitle = ({ children, sub, accent }) => (
  <div style={{marginBottom:18}}>
    <div className="h-hand" style={{fontSize:38, lineHeight:1.05, color:'var(--ink)'}}>{children}</div>
    {sub ? <div className="h-marker" style={{fontSize:17, color:'var(--ink-soft)', marginTop:6}}>{sub}</div> : null}
  </div>
);

// Faux input
const FakeInput = ({ placeholder, w = '100%' }) => (
  <div style={{
    width: w, height:42, border:'2px solid var(--ink)', borderRadius:10,
    display:'flex', alignItems:'center', padding:'0 14px',
    fontFamily:'Patrick Hand, sans-serif', color:'var(--ink-faint)', fontSize:15,
    background:'var(--paper)',
  }}>{placeholder}</div>
);

Object.assign(window, { Scribble, WFNav, Sticker, Ph, SectionTitle, FakeInput });
