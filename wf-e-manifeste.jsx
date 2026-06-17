// Direction E — "Manifeste éditorial"
// Magazine layout. Big serif headlines. Numbered chapters. Upmarket, opinionated.
// For PMEs who'd find a calculator gauche but love a strong POV.

const WFManifeste = () => {
  return (
    <div className="wf" style={{width:'100%', minHeight:'100%', background:'var(--paper)', fontFamily:"'Patrick Hand', sans-serif"}}>
      {/* Top masthead — newspaper style */}
      <div style={{borderBottom:'2px solid var(--ink)', padding:'14px 56px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className="h-mono" style={{fontSize:12, letterSpacing:'0.2em'}}>SCALE26 · ÉD. №01 · POUR DIRIGEANTS DE PME</div>
        <div className="h-mono" style={{fontSize:12}}>nov. 2026</div>
      </div>
      <div style={{padding:'10px 56px', borderBottom:'4px double var(--ink)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className="h-serif" style={{fontSize:40, letterSpacing:'-0.02em'}}>Scale26.</div>
        <div style={{display:'flex', gap:24, alignItems:'center'}} className="h-marker">
          <span style={{fontSize:14}}>Manifeste</span>
          <span style={{fontSize:14}}>Audit gratuit</span>
          <span style={{fontSize:14}}>Contact</span>
          <button className="btn-ink" style={{fontSize:13, padding:'6px 12px'}}>Réserver →</button>
        </div>
      </div>

      {/* HERO — editorial headline */}
      <div style={{padding:'56px 56px 36px'}}>
        <div className="h-mono" style={{fontSize:12, color:'var(--accent)', letterSpacing:'0.2em'}}>
          CHAPITRE 01 — LE PROBLÈME
        </div>
        <h1 className="h-serif" style={{fontSize:120, lineHeight:0.9, letterSpacing:'-0.025em', margin:'12px 0 0', maxWidth:1100}}>
          Le temps est<br/>
          <span style={{fontStyle:'italic'}}>la seule chose</span><br/>
          que votre PME<br/>
          ne récupèrera <span className="underline-wavy">jamais</span>.
        </h1>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:36, marginTop:36, alignItems:'start'}}>
          <p style={{fontFamily:"'DM Mono', monospace", fontSize:15, lineHeight:1.55, color:'var(--ink-soft)', margin:0}}>
            Une PME de 15 personnes perd en moyenne <b style={{color:'var(--ink)'}}>1 095 heures par an</b> en tâches récurrentes — relances, devis copiés-collés, reporting fait à la main, ressaisie. Soit l'équivalent d'<b style={{color:'var(--ink)'}}>un salarié à mi-temps qui ne ferait rien d'utile</b>.
          </p>
          <div>
            <p style={{fontFamily:"'DM Mono', monospace", fontSize:15, lineHeight:1.55, color:'var(--ink-soft)', margin:'0 0 16px'}}>
              Vous le savez. Vous n'avez juste pas le temps d'y regarder. Justement.
            </p>
            <button className="btn-ink" style={{fontSize:16}}>Audit gratuit · 30 min →</button>
          </div>
        </div>
      </div>

      {/* BIG STAT BAR */}
      <div style={{padding:'40px 56px', borderTop:'2px solid var(--ink)', borderBottom:'2px solid var(--ink)', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0}}>
        {[
          {n:'1 095h', l:'gaspillées / an'},
          {n:'~38€', l:'le coût horaire chargé'},
          {n:'41 600€', l:'récupérables / an'},
          {n:'< 4 sem.', l:'pour rentabiliser'},
        ].map((s, i) => (
          <div key={i} style={{padding:'0 28px', borderLeft: i ? '1px solid var(--ink)' : 'none'}}>
            <div className="h-serif" style={{fontSize:60, lineHeight:1, letterSpacing:'-0.02em'}}>{s.n}</div>
            <div className="h-mono" style={{fontSize:12, color:'var(--ink-soft)', textTransform:'uppercase', letterSpacing:'0.1em', marginTop:8}}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* CHAPITRE 02 — pull quote */}
      <div style={{padding:'64px 56px', display:'grid', gridTemplateColumns:'1fr 2fr', gap:48, alignItems:'start'}}>
        <div>
          <div className="h-mono" style={{fontSize:12, color:'var(--accent)', letterSpacing:'0.2em'}}>CHAPITRE 02</div>
          <div className="h-serif" style={{fontSize:42, lineHeight:1, letterSpacing:'-0.02em', marginTop:8}}>Notre prise de position.</div>
          <div className="placeholder" style={{height:240, marginTop:24}}>
            portrait fondateur<br/>
            photo n&b · 4:5
          </div>
        </div>
        <div>
          <div className="h-serif" style={{fontSize:42, lineHeight:1.15, letterSpacing:'-0.015em'}}>
            « On ne vend pas <span style={{fontStyle:'italic'}}>"de l'IA"</span>.<br/>
            On vous rend des heures.<br/>
            Et de l'argent que vous voyez<br/>
            arriver sur le compte. »
          </div>
          <div className="h-mono" style={{fontSize:13, marginTop:24, color:'var(--ink-soft)', letterSpacing:'0.08em'}}>
            — [TON PRÉNOM], FONDATEUR
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:18, marginTop:42, borderTop:'1px solid var(--ink-soft)', paddingTop:18}}>
            <div>
              <div className="h-mono" style={{fontSize:11, letterSpacing:'0.1em', color:'var(--ink-soft)'}}>NOTRE PROMESSE 01</div>
              <div className="h-serif" style={{fontSize:22, lineHeight:1.1, marginTop:6}}>Gratuit, vraiment.</div>
              <div style={{fontFamily:"'DM Mono', monospace", fontSize:13, color:'var(--ink-soft)', marginTop:6, lineHeight:1.5}}>L'audit est offert. Pas de "premier mois à 49€".</div>
            </div>
            <div>
              <div className="h-mono" style={{fontSize:11, letterSpacing:'0.1em', color:'var(--ink-soft)'}}>NOTRE PROMESSE 02</div>
              <div className="h-serif" style={{fontSize:22, lineHeight:1.1, marginTop:6}}>Honnête.</div>
              <div style={{fontFamily:"'DM Mono', monospace", fontSize:13, color:'var(--ink-soft)', marginTop:6, lineHeight:1.5}}>Si l'auto. n'est pas rentable, on vous le dit.</div>
            </div>
            <div>
              <div className="h-mono" style={{fontSize:11, letterSpacing:'0.1em', color:'var(--ink-soft)'}}>NOTRE PROMESSE 03</div>
              <div className="h-serif" style={{fontSize:22, lineHeight:1.1, marginTop:6}}>En euros, pas en pixels.</div>
              <div style={{fontFamily:"'DM Mono', monospace", fontSize:13, color:'var(--ink-soft)', marginTop:6, lineHeight:1.5}}>Chaque promesse vient avec un chiffre.</div>
            </div>
          </div>
        </div>
      </div>

      {/* CHAPITRE 03 — case studies as feature articles */}
      <div style={{padding:'56px 56px 40px', borderTop:'2px solid var(--ink)'}}>
        <div className="h-mono" style={{fontSize:12, color:'var(--accent)', letterSpacing:'0.2em'}}>CHAPITRE 03 — LES CAS</div>
        <div className="h-serif" style={{fontSize:54, lineHeight:0.95, letterSpacing:'-0.02em', marginTop:10, maxWidth:700}}>
          Trois PME qui ont arrêté de perdre du temps.
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:28, marginTop:36}}>
          {[
            {who:'Agence comm', size:'9 pers.', n:'+8h/sem', t:'« On a libéré une journée entière. »', body:'Relances, factures, onboarding clients. Tout en automatique.', tag:'Cas 01'},
            {who:'Cabinet d\'avocats', size:'14 pers.', n:'+12h/sem', t:'« Plus jamais on retape un dossier. »', body:'Lecture auto. des actes, pré-remplissage des modèles, archivage.', tag:'Cas 02'},
            {who:'Société BTP', size:'22 pers.', n:'+14 000€/an', t:'« Aucun devis ne passe à la trappe. »', body:'Le devis part dans l\'heure. La relance se fait toute seule. Le ROI a suivi.', tag:'Cas 03'},
          ].map((c, i) => (
            <div key={i} style={{borderTop:'2px solid var(--ink)', paddingTop:18}}>
              <div className="h-mono" style={{fontSize:11, letterSpacing:'0.1em', color:'var(--ink-soft)'}}>{c.tag} · {c.who} · {c.size}</div>
              <div className="h-serif" style={{fontSize:46, lineHeight:0.95, letterSpacing:'-0.02em', marginTop:8}}>{c.n}</div>
              <div className="h-serif" style={{fontSize:22, lineHeight:1.15, marginTop:10, fontStyle:'italic'}}>{c.t}</div>
              <div style={{fontFamily:"'DM Mono', monospace", fontSize:13, color:'var(--ink-soft)', marginTop:10, lineHeight:1.5}}>{c.body}</div>
              <div className="h-marker" style={{fontSize:14, marginTop:14, textDecoration:'underline', textUnderlineOffset:4, color:'var(--accent)'}}>Lire l'étude →</div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAPITRE 04 — l'audit */}
      <div style={{padding:'64px 56px', borderTop:'2px solid var(--ink)', background:'#f3efe6'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:48}}>
          <div>
            <div className="h-mono" style={{fontSize:12, color:'var(--accent)', letterSpacing:'0.2em'}}>CHAPITRE 04 — L'AUDIT</div>
            <div className="h-serif" style={{fontSize:80, lineHeight:0.92, letterSpacing:'-0.025em', marginTop:8}}>
              30 minutes.<br/>
              <span style={{fontStyle:'italic'}}>Zéro</span> facture.
            </div>
          </div>
          <div>
            <div style={{fontFamily:"'DM Mono', monospace", fontSize:15, lineHeight:1.6, color:'var(--ink-soft)'}}>
              On regarde ensemble votre semaine type. Vous me donnez vos 3 tâches les plus pénibles. Je reviens avec :
            </div>
            <ol style={{fontFamily:"'DM Mono', monospace", fontSize:15, lineHeight:1.6, paddingLeft:0, listStyle:'none', marginTop:18}}>
              <li style={{borderTop:'1px solid var(--ink-soft)', padding:'10px 0'}}><b style={{color:'var(--ink)'}}>01.</b> &nbsp; Une estimation chiffrée du temps perdu / mois.</li>
              <li style={{borderTop:'1px solid var(--ink-soft)', padding:'10px 0'}}><b style={{color:'var(--ink)'}}>02.</b> &nbsp; 2 à 3 idées d'automatisation rentables sur votre cas.</li>
              <li style={{borderTop:'1px solid var(--ink-soft)', padding:'10px 0'}}><b style={{color:'var(--ink)'}}>03.</b> &nbsp; Ce qu'on ferait ensemble (et ce qu'on ne ferait pas).</li>
              <li style={{borderTop:'1px solid var(--ink-soft)', borderBottom:'1px solid var(--ink-soft)', padding:'10px 0'}}><b style={{color:'var(--ink)'}}>04.</b> &nbsp; Vous partez avec, gratuitement. Même si on ne bosse pas ensemble.</li>
            </ol>

            <div style={{display:'flex', gap:14, alignItems:'center', marginTop:24, flexWrap:'wrap'}}>
              <FakeInput placeholder="votre@email.fr" w={260} />
              <button className="btn-ink" style={{fontSize:16}}>Réserver →</button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER — masthead style */}
      <div style={{padding:'24px 56px', borderTop:'2px solid var(--ink)', display:'flex', justifyContent:'space-between'}}>
        <span className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', letterSpacing:'0.1em'}}>SCALE26 · AUTOMATISATIONS POUR PME · 2026</span>
        <span className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', letterSpacing:'0.1em'}}>MENTIONS · CONFIDENTIALITÉ · CONTACT</span>
      </div>
    </div>
  );
};

window.WFManifeste = WFManifeste;
