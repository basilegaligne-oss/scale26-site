// Direction A — "Audit-first / Calendrier"
// The booking is the hero. No selling the service first — just propose a slot.
// Below: 3 short proofs (temps, argent, retour client) and a "ce qu'on regardera ensemble".

const WFAudit = () => {
  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'];
  const dates = [16, 17, 18, 19, 20];
  const slots = ['09:30', '10:30', '14:00', '15:30', '17:00'];
  return (
    <div className="wf" style={{width:'100%', minHeight:'100%', padding:'0', position:'relative'}}>
      <WFNav />

      {/* HERO — booking widget IS the hero */}
      <div style={{padding:'48px 56px 32px', position:'relative'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:48, alignItems:'start'}}>
          <div>
            <div className="h-marker" style={{fontSize:14, color:'var(--accent)', letterSpacing:'0.1em', textTransform:'uppercase'}}>
              ▸ 30 min · gratuit · sans engagement
            </div>
            <h1 className="h-hand" style={{fontSize:72, lineHeight:0.95, margin:'14px 0 18px', maxWidth:560}}>
              On regarde ensemble<br/>
              <span className="underline-wavy">où vous perdez du temps.</span>
            </h1>
            <p className="h-marker" style={{fontSize:20, color:'var(--ink-soft)', maxWidth:480, lineHeight:1.35}}>
              Posez-moi vos 3 tâches les plus pénibles. Je vous dis lesquelles peuvent disparaître — et ce que ça vous fait gagner chaque mois.
            </p>

            <div style={{marginTop:28, display:'flex', alignItems:'center', gap:14}}>
              <div className="placeholder" style={{width:44, height:44, borderRadius:'50%'}}>photo</div>
              <div className="h-marker" style={{fontSize:14, lineHeight:1.2, color:'var(--ink-soft)'}}>
                avec <b style={{color:'var(--ink)'}}>[ton prénom]</b><br/>
                <span style={{fontSize:12}}>fondateur · répond en moins de 4h</span>
              </div>
            </div>
          </div>

          {/* Right: fake calendar widget */}
          <div className="sketch-box" style={{padding:22, position:'relative'}}>
            <Sticker rotate={6} style={{top:-22, right:-12}}>gratuit !</Sticker>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:14}}>
              <div className="h-hand" style={{fontSize:24}}>Choisissez un créneau</div>
              <div className="h-mono" style={{fontSize:12, color:'var(--ink-soft)'}}>‹ semaine du 16 nov ›</div>
            </div>

            {/* Day strip */}
            <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:8, marginBottom:14}}>
              {days.map((d, i) => (
                <div key={d} className={i===2 ? 'sketch-box tight' : 'sketch-dash'} style={{
                  textAlign:'center', padding:'8px 0', background: i===2 ? 'var(--ink)' : 'transparent',
                  color: i===2 ? 'var(--paper)' : 'var(--ink)',
                }}>
                  <div className="h-marker" style={{fontSize:12, opacity:0.7}}>{d}</div>
                  <div className="h-hand" style={{fontSize:22}}>{dates[i]}</div>
                </div>
              ))}
            </div>

            {/* Slots */}
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
              {slots.map((s, i) => (
                <div key={s} className="sketch-box tight" style={{
                  padding:'10px 12px', display:'flex', justifyContent:'space-between', alignItems:'center',
                  background: i===1 ? 'color-mix(in oklab, var(--accent) 18%, var(--paper))' : 'var(--paper)',
                  borderColor: i===1 ? 'var(--accent)' : 'var(--ink)',
                }}>
                  <span className="h-marker" style={{fontSize:16}}>{s}</span>
                  <span className="h-marker" style={{fontSize:12, color:'var(--ink-soft)'}}>{i===1 ? '→ choisi' : 'libre'}</span>
                </div>
              ))}
              <div className="sketch-dash" style={{padding:'10px 12px', textAlign:'center', gridColumn:'1 / -1'}}>
                <span className="h-marker" style={{fontSize:13, color:'var(--ink-soft)'}}>+ 4 autres créneaux</span>
              </div>
            </div>

            <button className="btn-ink" style={{marginTop:18, width:'100%', justifyContent:'center', fontSize:17}}>
              Réserver mer. 18 nov · 10:30 →
            </button>
          </div>
        </div>

        {/* Annotation */}
        <div className="annot" style={{position:'absolute', right:90, top:-8, transform:'rotate(-8deg)'}}>
          le booking, dès<br/>le scroll = 0 ↘
        </div>
      </div>

      {/* TRUST STRIP — 3 chiffres */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:0, borderTop:'2px solid var(--ink)', borderBottom:'2px solid var(--ink)', background:'#f3efe6'}}>
        {[
          {n:'+12h', l:'gagnées / semaine\nen moyenne'},
          {n:'2 850€', l:'économisés / mois\npour une PME de 15'},
          {n:'<3 sem.', l:'avant le 1er flux\nautomatisé en place'},
        ].map((s, i) => (
          <div key={i} style={{padding:'28px 32px', borderLeft: i ? '2px solid var(--ink)' : 'none', position:'relative'}}>
            <div className="h-hand" style={{fontSize:54, lineHeight:1}}>{s.n}</div>
            <div className="h-marker" style={{fontSize:15, color:'var(--ink-soft)', marginTop:6, whiteSpace:'pre-line'}}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* WHAT WE LOOK AT */}
      <div style={{padding:'56px 56px 32px'}}>
        <SectionTitle sub="30 minutes. On regarde votre semaine type, ensemble.">
          Ce qu'on fait pendant l'audit
        </SectionTitle>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:18, marginTop:8}}>
          {[
            {n:'01', t:'Vos 3 tâches les plus chiantes', d:'Devis, relances, ressaisie de mails… tout ce que vous faites en double.'},
            {n:'02', t:'Combien ça vous coûte', d:'En euros, par mois. Pas du blabla — un vrai chiffre, sur votre cas.'},
            {n:'03', t:'Ce qui vaut la peine d\'automatiser', d:'Honnête : si rien n\'est rentable je vous le dis. Pas d\'upsell.'},
          ].map((c, i) => (
            <div key={c.n} className="sketch-box" style={{padding:22, position:'relative'}}>
              <div className="h-mono" style={{fontSize:12, color:'var(--accent)'}}>{c.n}</div>
              <div className="h-hand" style={{fontSize:24, lineHeight:1.1, margin:'6px 0 10px'}}>{c.t}</div>
              <div className="h-marker" style={{fontSize:15, color:'var(--ink-soft)', lineHeight:1.35}}>{c.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIAL POSTCARDS */}
      <div style={{padding:'24px 56px 56px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:24, alignItems:'start'}}>
          <div className="sketch-box" style={{padding:'26px 28px', position:'relative', background:'#fffaf0'}}>
            <div className="tape" style={{top:-10, left:30}}></div>
            <div className="h-hand" style={{fontSize:30, lineHeight:1.15}}>
              « En 2 semaines, mes relances clients tournent toutes seules. Je récupère ~6h par semaine — soit un mi-temps en moins à embaucher. »
            </div>
            <div className="h-marker" style={{fontSize:15, marginTop:14, color:'var(--ink-soft)'}}>
              — Mathilde · gérante, agence de 11 pers.
            </div>
          </div>

          <div style={{display:'flex', flexDirection:'column', gap:14}}>
            <div className="sketch-box" style={{padding:18}}>
              <div className="h-marker" style={{fontSize:15, lineHeight:1.3}}>« On a arrêté de relancer à la main. ROI en 6 semaines. »</div>
              <div className="h-marker" style={{fontSize:13, marginTop:8, color:'var(--ink-soft)'}}>— Karim · BTP, 22 pers.</div>
            </div>
            <div className="sketch-box" style={{padding:18}}>
              <div className="h-marker" style={{fontSize:15, lineHeight:1.3}}>« L'audit était vraiment gratuit. J'ai pris parce qu'on s'est compris. »</div>
              <div className="h-marker" style={{fontSize:13, marginTop:8, color:'var(--ink-soft)'}}>— Claire · cabinet conseil, 8 pers.</div>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div style={{padding:'40px 56px 64px', borderTop:'2px solid var(--ink)', textAlign:'center'}}>
        <div className="h-hand" style={{fontSize:48, lineHeight:1}}>Toujours là ?</div>
        <div className="h-marker" style={{fontSize:18, color:'var(--ink-soft)', margin:'10px 0 22px'}}>
          30 min. Vous repartez avec 2-3 idées concrètes même si on ne bosse pas ensemble.
        </div>
        <button className="btn-ink" style={{fontSize:18, padding:'14px 28px'}}>Choisir mon créneau →</button>
      </div>
    </div>
  );
};

window.WFAudit = WFAudit;
