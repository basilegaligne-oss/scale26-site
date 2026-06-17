// Direction F — "Synthèse" v2
// Restructure : ordre revu, manifeste supprimé, méthode refaite,
// bande "satisfait ou remboursé" répétée.

const WFSynthese = () => {
  const [teamSize, setTeamSize] = React.useState(15);
  const [hoursPerWeek, setHoursPerWeek] = React.useState(7);
  const [hourlyCost, setHourlyCost] = React.useState(38);

  const annual = Math.round(teamSize * hoursPerWeek * hourlyCost * 47 / 100) * 100;
  const monthly = Math.round(annual / 12 / 10) * 10;
  const hours = teamSize * hoursPerWeek * 47;

  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'];
  const dates = [16, 17, 18, 19, 20];

  // Reusable guarantee tag (inline, small)
  const GuaranteeChip = ({ light }) => (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:8,
      padding:'5px 10px', border:`1px solid ${light ? 'rgba(251,250,246,0.3)' : 'var(--ink)'}`,
      borderRadius:999,
      fontFamily:"'DM Mono', monospace", fontSize:10,
      letterSpacing:'0.12em', textTransform:'uppercase',
      color: light ? 'rgba(251,250,246,0.85)' : 'var(--ink)',
    }}>
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2 6.5 L5 9 L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Satisfait ou remboursé
    </span>
  );

  return (
    <div className="wf" style={{width:'100%', minHeight:'100%', background:'var(--paper)'}}>
      {/* ─── MASTHEAD ─────────────────────────────── */}
      <div style={{borderBottom:'1px solid var(--ink)', padding:'14px 56px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className="h-mono" style={{fontSize:11, letterSpacing:'0.2em', color:'var(--ink-soft)'}}>SCALE26 · AUTOMATISATIONS · POUR PME DE 5 À 30 PERS.</div>
        <div className="h-mono" style={{fontSize:11, letterSpacing:'0.2em', color:'var(--ink-soft)'}}>NOV. 2026</div>
      </div>
      <div style={{padding:'18px 56px', borderBottom:'3px double var(--ink)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className="h-serif" style={{fontSize:32, letterSpacing:'-0.025em'}}>Scale26.</div>
        <div style={{display:'flex', gap:28, alignItems:'center'}}>
          <span className="h-mono" style={{fontSize:13, letterSpacing:'0.05em'}}>L'audit</span>
          <span className="h-mono" style={{fontSize:13, letterSpacing:'0.05em'}}>Cas clients</span>
          <span className="h-mono" style={{fontSize:13, letterSpacing:'0.05em'}}>Contact</span>
          <button style={{
            background:'var(--ink)', color:'var(--paper)', border:'none',
            padding:'10px 18px', fontFamily:"'DM Mono', monospace", fontSize:13,
            letterSpacing:'0.05em', cursor:'pointer',
          }}>Réserver mon audit →</button>
        </div>
      </div>

      {/* ─── HERO ──────────────────────────────────── */}
      <div style={{padding:'64px 56px 56px', borderBottom:'1px solid var(--ink)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.15fr 1fr', gap:56, alignItems:'start'}}>
          <div>
            <div className="h-mono" style={{fontSize:11, color:'var(--accent)', letterSpacing:'0.22em'}}>
              CHAPITRE 01 — L'AUDIT GRATUIT
            </div>
            <h1 className="h-serif" style={{fontSize:68, lineHeight:0.98, letterSpacing:'-0.025em', margin:'14px 0 22px'}}>
              On regarde ensemble<br/>
              <span style={{fontStyle:'italic'}}>où vous perdez</span> du temps.
            </h1>
            <p style={{fontFamily:"'DM Mono', monospace", fontSize:15, lineHeight:1.6, color:'var(--ink-soft)', maxWidth:480, margin:'0 0 26px'}}>
              30 minutes, en visio. Vous me racontez votre semaine. Je vous dis combien d'euros vous laissez sur la table chaque mois — et ce qui vaut vraiment la peine d'être automatisé chez vous.
            </p>

            <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:22}}>
              <div className="placeholder" style={{width:48, height:48, borderRadius:'50%'}}>photo</div>
              <div style={{fontFamily:"'DM Mono', monospace", fontSize:13, color:'var(--ink-soft)', lineHeight:1.4}}>
                avec <b style={{color:'var(--ink)'}}>[ton prénom]</b><br/>
                <span style={{fontSize:11}}>fondateur · répond en moins de 4 h</span>
              </div>
            </div>

            <div style={{borderTop:'1px solid var(--ink-soft)', paddingTop:18, display:'flex', gap:24, flexWrap:'wrap', alignItems:'center'}}>
              {[
                ['30 min', 'durée'],
                ['Gratuit', 'vraiment'],
                ['Sans engagement', 'aucun'],
              ].map(([n, l]) => (
                <div key={n}>
                  <div className="h-serif" style={{fontSize:22, lineHeight:1, letterSpacing:'-0.01em'}}>{n}</div>
                  <div className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', letterSpacing:'0.1em', textTransform:'uppercase', marginTop:2}}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div style={{border:'1px solid var(--ink)', padding:24, background:'var(--paper)'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:16, paddingBottom:12, borderBottom:'1px solid var(--ink-soft)'}}>
              <div className="h-serif" style={{fontSize:22, letterSpacing:'-0.01em'}}>Choisissez un créneau.</div>
              <div className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', letterSpacing:'0.08em'}}>‹ SEM. DU 16 NOV ›</div>
            </div>

            <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:6, marginBottom:14}}>
              {days.map((d, i) => (
                <div key={d} style={{
                  textAlign:'center', padding:'10px 0',
                  background: i===2 ? 'var(--ink)' : 'var(--paper)',
                  color: i===2 ? 'var(--paper)' : 'var(--ink)',
                  border:'1px solid var(--ink)',
                }}>
                  <div className="h-mono" style={{fontSize:10, letterSpacing:'0.1em', opacity:0.7}}>{d.toUpperCase()}</div>
                  <div className="h-serif" style={{fontSize:22, lineHeight:1, marginTop:2}}>{dates[i]}</div>
                </div>
              ))}
            </div>

            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:6, marginBottom:14}}>
              {['09:30', '10:30', '14:00', '15:30', '17:00', '18:00'].map((s, i) => (
                <div key={s} style={{
                  padding:'12px 14px', display:'flex', justifyContent:'space-between', alignItems:'center',
                  border: `1px solid ${i===1 ? 'var(--accent)' : 'var(--ink)'}`,
                  background: i===1 ? 'color-mix(in oklab, var(--accent) 12%, var(--paper))' : 'var(--paper)',
                }}>
                  <span className="h-serif" style={{fontSize:17}}>{s}</span>
                  <span className="h-mono" style={{fontSize:10, color: i===1 ? 'var(--accent)' : 'var(--ink-soft)', letterSpacing:'0.08em'}}>
                    {i===1 ? '→ CHOISI' : 'LIBRE'}
                  </span>
                </div>
              ))}
            </div>

            <button style={{
              width:'100%', background:'var(--ink)', color:'var(--paper)', border:'none',
              padding:'16px', fontFamily:"'DM Mono', monospace", fontSize:14, letterSpacing:'0.08em',
              cursor:'pointer',
            }}>
              RÉSERVER MER. 18 NOV · 10:30 →
            </button>
            <div className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', textAlign:'center', marginTop:10, letterSpacing:'0.05em'}}>
              ou laissez-moi votre email — je vous propose des créneaux ↓
            </div>
          </div>
        </div>
      </div>

      {/* ─── STATS BAR ───────────────────────────── */}
      <div style={{padding:'40px 0', borderBottom:'1px solid var(--ink)', display:'grid', gridTemplateColumns:'repeat(4,1fr)'}}>
        {[
          {n:'+12 h', l:'gagnées / sem.', s:'en moyenne par PME'},
          {n:'~3 470€', l:'récupérés / mois', s:'pour 15 collaborateurs'},
          {n:'< 4 sem.', l:'avant gain mesurable', s:'sur 8/10 audits'},
          {n:'×4', l:'retour sur invest.', s:'à 6 mois'},
        ].map((s, i) => (
          <div key={i} style={{padding:'0 40px', borderLeft: i ? '1px solid var(--ink-soft)' : 'none'}}>
            <div className="h-serif" style={{fontSize:52, lineHeight:1, letterSpacing:'-0.02em'}}>{s.n}</div>
            <div className="h-mono" style={{fontSize:11, color:'var(--ink)', textTransform:'uppercase', letterSpacing:'0.1em', marginTop:10}}>{s.l}</div>
            <div className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', marginTop:4}}>{s.s}</div>
          </div>
        ))}
      </div>

      {/* ─── CHAP 02 — DIAGNOSTIC : où part le temps ─── */}
      <div style={{padding:'64px 56px 48px', borderBottom:'1px solid var(--ink)', background:'#f3efe6'}}>
        <div className="h-mono" style={{fontSize:11, color:'var(--accent)', letterSpacing:'0.22em'}}>
          CHAPITRE 02 — LE DIAGNOSTIC
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:48, alignItems:'start', marginTop:12}}>
          <h2 className="h-serif" style={{fontSize:48, lineHeight:0.98, letterSpacing:'-0.025em', margin:0}}>
            Où part le temps<br/>de vos équipes.
          </h2>
          <p style={{fontFamily:"'DM Mono', monospace", fontSize:14, lineHeight:1.6, color:'var(--ink-soft)', margin:'8px 0 0'}}>
            5 tâches mangent en moyenne <b style={{color:'var(--ink)'}}>60 % du temps "administratif"</b> dans une PME de 15. Ce sont aussi celles qui s'automatisent le plus facilement.
          </p>
        </div>

        <div style={{marginTop:36, display:'grid', gridTemplateColumns:'1fr', gap:14}}>
          {[
            {label:'Relances clients & factures', pct:32, eur:'≈ 1 200€/mois', rank:'01'},
            {label:'Ressaisie de mails vers CRM/Excel', pct:24, eur:'≈ 900€/mois', rank:'02'},
            {label:'Devis & docs commerciaux répétés', pct:18, eur:'≈ 680€/mois', rank:'03'},
            {label:'Reporting fait à la main', pct:14, eur:'≈ 520€/mois', rank:'04'},
            {label:'Petites tâches diverses (RH, archivage…)', pct:12, eur:'≈ 450€/mois', rank:'05'},
          ].map((row, i) => (
            <div key={row.label} style={{display:'grid', gridTemplateColumns:'40px 1.8fr 3fr auto', gap:20, alignItems:'center', paddingBottom:14, borderBottom:'1px solid var(--ink-soft)'}}>
              <div className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', letterSpacing:'0.1em'}}>{row.rank}</div>
              <div className="h-serif" style={{fontSize:18, letterSpacing:'-0.01em'}}>{row.label}</div>
              <div style={{position:'relative', height:24, background:'var(--paper)', border:'1px solid var(--ink)'}}>
                <div style={{
                  width:`${row.pct * 2.6}%`, height:'100%',
                  background: i === 0 ? 'var(--accent)' : 'color-mix(in oklab, var(--accent) ' + (60 - i*10) + '%, var(--paper))',
                  borderRight:'1px solid var(--ink)',
                }}></div>
                <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', paddingLeft:10}}>
                  <span className="h-serif" style={{fontSize:14}}>{row.pct}%</span>
                </div>
              </div>
              <div className="h-mono" style={{fontSize:12, color:'var(--ink-soft)', minWidth:110, textAlign:'right', letterSpacing:'0.04em'}}>{row.eur}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CHAP 03 — LA MÉTHODE (refait) ────────── */}
      <div style={{padding:'72px 56px 56px', borderBottom:'1px solid var(--ink)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:56, alignItems:'start', marginBottom:48}}>
          <div>
            <div className="h-mono" style={{fontSize:11, color:'var(--accent)', letterSpacing:'0.22em'}}>
              CHAPITRE 03 — LA MÉTHODE
            </div>
            <h2 className="h-serif" style={{fontSize:54, lineHeight:0.98, letterSpacing:'-0.025em', margin:'12px 0 0'}}>
              Quatre étapes.<br/>
              <span style={{fontStyle:'italic'}}>Aucune obligation</span><br/>au-delà de la première.
            </h2>
          </div>
          <div style={{paddingTop:28}}>
            <p style={{fontFamily:"'DM Mono', monospace", fontSize:15, lineHeight:1.65, color:'var(--ink-soft)', margin:0}}>
              On commence par <b style={{color:'var(--ink)'}}>30 minutes de discussion gratuites</b>. Vous décidez ensuite si on continue. Et si on continue, vous savez exactement ce qu'on fait, quand, et combien ça coûte.
            </p>
          </div>
        </div>

        {/* Steps — staggered timeline */}
        <div style={{position:'relative'}}>
          {/* vertical rule */}
          <div style={{position:'absolute', left:60, top:14, bottom:14, width:1, background:'var(--ink-soft)'}}></div>

          {[
            {
              n:'01', kicker:'L\'AUDIT', dur:'30 min · gratuit',
              t:'On parle de votre secteur et de ce qui vous mange la journée.',
              d:'Je vous pose des questions concrètes : quelles sont vos tâches récurrentes ? Qui les fait ? Combien de temps ça prend ? Lesquelles peuvent être automatisées, lesquelles ne le peuvent pas (et c\'est OK).',
            },
            {
              n:'02', kicker:'LA PROPOSITION', dur:'sous 5 jours',
              t:'Je reviens vers vous avec un plan chiffré — ou je vous dis qu\'il n\'y a rien à faire.',
              d:'On ne vous vend pas "de l\'IA". Si je trouve 2-3 automatisations rentables, je vous fais une proposition claire : ce qui sera installé, en combien de temps, pour combien d\'euros. Si rien ne mérite d\'être automatisé chez vous, je vous le dis honnêtement. Pas de devis envoyé "au cas où".',
            },
            {
              n:'03', kicker:'L\'INSTALLATION', dur:'2 à 4 sem.',
              t:'On installe chez vous. Vos équipes sont formées. Vous testez en vrai.',
              d:'On déploie sur vos outils existants (CRM, mails, Notion, Excel…). On forme la personne qui sera référente en interne. Vous validez chaque flux avant qu\'il passe en production.',
            },
            {
              n:'04', kicker:'L\'AUTONOMIE', dur:'la suite',
              t:'C\'est à vous. Les flux tournent seuls. Je reste joignable au besoin.',
              d:'Pas de dépendance, pas d\'abonnement obligatoire. Vous avez la documentation, les accès, le contrôle. Si quelque chose casse ou si vous voulez itérer, je suis là — mais vous n\'êtes pas obligé.',
            },
          ].map((s, i) => (
            <div key={s.n} style={{display:'grid', gridTemplateColumns:'120px 1fr', gap:32, padding:'24px 0', borderBottom: i === 3 ? 'none' : '1px solid var(--ink-soft)'}}>
              <div style={{position:'relative', zIndex:1}}>
                <div style={{
                  width:38, height:38, borderRadius:'50%',
                  background: i === 0 ? 'var(--accent)' : 'var(--paper)',
                  color: i === 0 ? 'var(--paper)' : 'var(--ink)',
                  border:'1px solid var(--ink)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontFamily:"'DM Serif Display', serif", fontSize:18, letterSpacing:'-0.02em',
                  marginLeft:43,
                }}>{s.n}</div>
              </div>
              <div>
                <div className="h-mono" style={{fontSize:11, color:'var(--accent)', letterSpacing:'0.22em'}}>
                  {s.kicker} <span style={{color:'var(--ink-soft)', marginLeft:12}}>· {s.dur}</span>
                </div>
                <div className="h-serif" style={{fontSize:30, lineHeight:1.1, letterSpacing:'-0.02em', marginTop:10, maxWidth:780}}>
                  {s.t}
                </div>
                <div style={{fontFamily:"'DM Mono', monospace", fontSize:13.5, color:'var(--ink-soft)', marginTop:12, lineHeight:1.65, maxWidth:780}}>
                  {s.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── GARANTIE BAND (full bleed, accent) ─── */}
      <div style={{padding:'48px 56px', background:'var(--ink)', color:'var(--paper)', borderBottom:'1px solid var(--ink)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:56, alignItems:'center'}}>
          <div>
            <div className="h-mono" style={{fontSize:11, color:'var(--accent)', letterSpacing:'0.22em', marginBottom:14}}>
              NOTRE ENGAGEMENT
            </div>
            <div className="h-serif" style={{fontSize:42, lineHeight:1.05, letterSpacing:'-0.02em', fontStyle:'italic'}}>
              « On ne vous vend pas <span style={{fontStyle:'normal'}}>"de l'IA"</span>. On vous rend des heures et de l'argent. Et si on n'y arrive pas, on vous rembourse. »
            </div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr', gap:14}}>
            <div style={{padding:'18px 22px', border:'1px solid rgba(251,250,246,0.25)'}}>
              <div className="h-mono" style={{fontSize:11, color:'var(--accent)', letterSpacing:'0.15em'}}>GARANTIE 01</div>
              <div className="h-serif" style={{fontSize:22, lineHeight:1.15, marginTop:6}}>Satisfait ou remboursé.</div>
              <div style={{fontFamily:"'DM Mono', monospace", fontSize:12.5, color:'rgba(251,250,246,0.7)', marginTop:8, lineHeight:1.55}}>
                Si on ne tient pas les chiffres annoncés en audit, on vous rembourse intégralement.
              </div>
            </div>
            <div style={{padding:'18px 22px', border:'1px solid rgba(251,250,246,0.25)'}}>
              <div className="h-mono" style={{fontSize:11, color:'var(--accent)', letterSpacing:'0.15em'}}>GARANTIE 02</div>
              <div className="h-serif" style={{fontSize:22, lineHeight:1.15, marginTop:6}}>Audit gratuit, vraiment.</div>
              <div style={{fontFamily:"'DM Mono', monospace", fontSize:12.5, color:'rgba(251,250,246,0.7)', marginTop:8, lineHeight:1.55}}>
                Pas de "premier mois à 49€". Pas de relances. Vous repartez avec mes notes — point.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CHAP 04 — TÉMOIGNAGES ──────────────── */}
      <div style={{padding:'64px 56px 48px', borderBottom:'1px solid var(--ink)'}}>
        <div className="h-mono" style={{fontSize:11, color:'var(--accent)', letterSpacing:'0.22em'}}>
          CHAPITRE 04 — ILS L'ONT FAIT
        </div>
        <h2 className="h-serif" style={{fontSize:54, lineHeight:0.98, letterSpacing:'-0.025em', margin:'12px 0 0', maxWidth:780}}>
          Ce qu'en disent ceux<br/>avec qui on a travaillé.
        </h2>

        <div style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:36, marginTop:40, alignItems:'stretch'}}>
          <div className="placeholder" style={{height:380, position:'relative'}}>
            <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:14}}>
              <div style={{width:64, height:64, border:'2px solid var(--ink)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', background:'var(--paper)'}}>
                <div style={{width:0, height:0, borderLeft:'18px solid var(--ink)', borderTop:'12px solid transparent', borderBottom:'12px solid transparent', marginLeft:5}}></div>
              </div>
              <div className="h-mono" style={{fontSize:12, color:'var(--ink-soft)', letterSpacing:'0.1em', textAlign:'center'}}>
                VIDÉO TÉMOIGNAGE · 1 min 40<br/>
                <span style={{fontSize:10}}>(à tourner avec un client volontaire)</span>
              </div>
            </div>
          </div>

          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'8px 0'}}>
            <div>
              <div className="h-mono" style={{fontSize:11, letterSpacing:'0.15em', color:'var(--accent)'}}>TÉMOIGNAGE PRINCIPAL</div>
              <div className="h-serif" style={{fontSize:34, lineHeight:1.15, letterSpacing:'-0.015em', marginTop:14, fontStyle:'italic'}}>
                « On a libéré 8 heures par semaine sur les relances et la facturation. C'est l'équivalent d'un mi-temps qu'on n'a pas eu à recruter. »
              </div>
            </div>
            <div style={{marginTop:24, paddingTop:18, borderTop:'1px solid var(--ink-soft)'}}>
              <div className="h-serif" style={{fontSize:20, letterSpacing:'-0.01em'}}>Mathilde Lacombe</div>
              <div className="h-mono" style={{fontSize:12, color:'var(--ink-soft)', marginTop:4, letterSpacing:'0.05em'}}>GÉRANTE · AGENCE DE COMM · 11 PERS.</div>
              <div className="h-mono" style={{fontSize:12, color:'var(--ink-soft)', marginTop:14}}>
                Économie mesurée : <b style={{color:'var(--ink)'}}>~ 2 600€ / mois</b>
              </div>
            </div>
          </div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:0, marginTop:48}}>
          {[
            {q:'« L\'audit était vraiment gratuit. J\'ai pris parce qu\'on s\'est compris, pas parce qu\'on m\'a pressuré. »', who:'Claire Voisin', role:'Cabinet conseil · 8 pers.', kpi:'+ 6h / sem.'},
            {q:'« ROI rapide. En 6 semaines on était à l\'équilibre, et au bout de 6 mois on avait remboursé 4 fois la mise. »', who:'Karim Bensaïd', role:'BTP · 22 pers.', kpi:'×4 ROI à 6 mois'},
            {q:'« On a arrêté de retaper les mêmes dossiers 30 fois. Mes juristes font enfin du droit, pas du copier-coller. »', who:'Anne Dubois', role:'Cabinet juridique · 14 pers.', kpi:'+ 12h / sem.'},
          ].map((t, i) => (
            <div key={i} style={{padding:'28px 28px', borderLeft: i ? '1px solid var(--ink-soft)' : '1px solid var(--ink)', borderRight: i === 2 ? '1px solid var(--ink)' : 'none'}}>
              <div className="h-serif" style={{fontSize:22, lineHeight:1.25, letterSpacing:'-0.01em', fontStyle:'italic'}}>{t.q}</div>
              <div style={{marginTop:20, paddingTop:14, borderTop:'1px solid var(--ink-soft)'}}>
                <div className="h-serif" style={{fontSize:17, letterSpacing:'-0.01em'}}>{t.who}</div>
                <div className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', marginTop:3, letterSpacing:'0.05em'}}>{t.role.toUpperCase()}</div>
                <div className="h-mono" style={{fontSize:11, color:'var(--accent)', marginTop:10, letterSpacing:'0.08em'}}>↗ {t.kpi}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CHAP 05 — VOTRE CAS : calculator ───── */}
      <div style={{padding:'64px 56px 56px', borderBottom:'1px solid var(--ink)', background:'#f3efe6'}}>
        <div className="h-mono" style={{fontSize:11, color:'var(--accent)', letterSpacing:'0.22em'}}>
          CHAPITRE 05 — VOTRE CAS
        </div>
        <h2 className="h-serif" style={{fontSize:56, lineHeight:0.98, letterSpacing:'-0.025em', margin:'12px 0 0', maxWidth:800}}>
          Combien vous gagnez,<br/><span style={{fontStyle:'italic'}}>en vrai.</span>
        </h2>
        <p style={{fontFamily:"'DM Mono', monospace", fontSize:14, lineHeight:1.6, color:'var(--ink-soft)', maxWidth:520, marginTop:18}}>
          Ajustez les trois variables qui comptent. On calcule en direct le retour annuel sur votre cas.
        </p>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, marginTop:36, alignItems:'start'}}>
          <div>
            <div className="h-mono" style={{fontSize:11, letterSpacing:'0.1em', color:'var(--ink-soft)', marginBottom:10, textTransform:'uppercase'}}>Raccourci · taille équipe</div>
            <div style={{display:'flex', gap:8, flexWrap:'wrap', marginBottom:32}}>
              {[5, 15, 30, 50].map(p => (
                <button key={p} onClick={() => setTeamSize(p)} style={{
                  padding:'10px 18px',
                  background: teamSize === p ? 'var(--ink)' : 'transparent',
                  color: teamSize === p ? 'var(--paper)' : 'var(--ink)',
                  border:'1px solid var(--ink)', cursor:'pointer',
                  fontFamily:"'DM Mono', monospace", fontSize:12, letterSpacing:'0.08em',
                }}>{p} PERS.</button>
              ))}
            </div>

            {[
              {label:'Taille de l\'équipe', value:teamSize, set:setTeamSize, min:5, max:50, unit:' pers.'},
              {label:'Heures perdues / pers / sem.', value:hoursPerWeek, set:setHoursPerWeek, min:1, max:20, unit:' h'},
              {label:'Coût horaire chargé moyen', value:hourlyCost, set:setHourlyCost, min:20, max:80, unit:' €'},
            ].map(r => (
              <div key={r.label} style={{marginBottom:28, borderBottom:'1px solid var(--ink-soft)', paddingBottom:18}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10}}>
                  <span className="h-serif" style={{fontSize:18, letterSpacing:'-0.01em'}}>{r.label}</span>
                  <span className="h-serif" style={{fontSize:30, lineHeight:1, letterSpacing:'-0.02em'}}>{r.value}{r.unit}</span>
                </div>
                <input
                  type="range" min={r.min} max={r.max} value={r.value}
                  onChange={e => r.set(+e.target.value)}
                  style={{width:'100%', accentColor:'var(--accent)'}}
                />
              </div>
            ))}
          </div>

          <div style={{border:'1px solid var(--ink)', padding:36, background:'var(--paper)', position:'sticky', top:16}}>
            <div className="h-mono" style={{fontSize:11, letterSpacing:'0.15em', color:'var(--ink-soft)', textTransform:'uppercase'}}>
              VOTRE ÉCONOMIE ANNUELLE ESTIMÉE
            </div>
            <div className="h-serif" style={{fontSize:90, lineHeight:1, letterSpacing:'-0.03em', margin:'14px 0 6px'}}>
              {annual.toLocaleString('fr-FR')} €
            </div>
            <div className="h-mono" style={{fontSize:14, color:'var(--ink-soft)'}}>
              soit <b style={{color:'var(--ink)'}}>≈ {monthly.toLocaleString('fr-FR')} €</b> par mois
            </div>

            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginTop:32, paddingTop:24, borderTop:'1px solid var(--ink-soft)'}}>
              <div>
                <div className="h-serif" style={{fontSize:38, lineHeight:1, letterSpacing:'-0.02em'}}>{hours.toLocaleString('fr-FR')} h</div>
                <div className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', letterSpacing:'0.1em', marginTop:6}}>GAGNÉES / AN</div>
              </div>
              <div>
                <div className="h-serif" style={{fontSize:38, lineHeight:1, letterSpacing:'-0.02em'}}>≈ {Math.max(1, Math.round(hours / (teamSize * 7))).toFixed(0)} sem.</div>
                <div className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', letterSpacing:'0.1em', marginTop:6}}>D'ÉQUIPE LIBÉRÉES</div>
              </div>
            </div>

            <button style={{
              width:'100%', background:'var(--ink)', color:'var(--paper)', border:'none',
              padding:'18px', fontFamily:"'DM Mono', monospace", fontSize:14, letterSpacing:'0.08em',
              cursor:'pointer', marginTop:28,
            }}>
              VÉRIFIER CE CHIFFRE EN AUDIT GRATUIT →
            </button>

            <div style={{textAlign:'center', marginTop:14}}>
              <GuaranteeChip />
            </div>
          </div>
        </div>
      </div>

      {/* ─── CHAP 06 — FAQ ──────────────────────── */}
      <div style={{padding:'64px 56px 48px', borderBottom:'1px solid var(--ink)'}}>
        <div className="h-mono" style={{fontSize:11, color:'var(--accent)', letterSpacing:'0.22em'}}>
          CHAPITRE 06 — VOS QUESTIONS
        </div>
        <h2 className="h-serif" style={{fontSize:54, lineHeight:0.98, letterSpacing:'-0.025em', margin:'12px 0 0'}}>
          Tout ce qu'on me demande.
        </h2>

        <div style={{marginTop:36, borderTop:'1px solid var(--ink)'}}>
          {[
            {q:'C\'est quoi, concrètement, "automatiser" ?', a:'Quand une tâche que vous faites à la main est répétée plusieurs fois par semaine, on peut la déléguer à un système qui s\'en occupe tout seul, 24/7.'},
            {q:'Je n\'ai pas de DSI ni d\'équipe tech. Vous travaillez quand même avec moi ?', a:'Oui — c\'est même 100 % de nos clients. On installe les outils, on forme votre équipe, on reste joignable.'},
            {q:'Combien ça coûte une fois sorti de l\'audit ?', a:'Selon votre cas, entre 2 500 et 12 000€ pour un premier projet, avec un ROI moyen de 4 fois la mise sur 6 mois. On vous chiffre tout avant que vous décidiez.'},
            {q:'Et si finalement rien n\'est rentable à automatiser chez moi ?', a:'Je vous le dis. C\'est arrivé. Vous repartez avec mes notes et on en reste là — sans facture.'},
            {q:'Combien de temps avant le premier gain mesurable ?', a:'En moyenne 3 à 4 semaines après le démarrage. Le premier flux automatisé tourne souvent dès la 2e semaine.'},
            {q:'Comment fonctionne la garantie "satisfait ou remboursé" ?', a:'Si les chiffres annoncés en audit (heures gagnées, économies) ne sont pas atteints 3 mois après la mise en production, on vous rembourse intégralement la prestation.'},
            {q:'Mes données sont-elles en sécurité ?', a:'On utilise vos outils existants (Google, Microsoft, votre CRM). Aucune donnée ne sort de votre périmètre sans que vous l\'ayez validé.'},
          ].map((f, i) => (
            <div key={i} style={{padding:'22px 0', borderBottom:'1px solid var(--ink-soft)', display:'grid', gridTemplateColumns:'40px 1fr 30px', gap:18, alignItems:'start', cursor:'pointer'}}>
              <div className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', letterSpacing:'0.1em', paddingTop:5}}>0{i+1}</div>
              <div>
                <div className="h-serif" style={{fontSize:22, letterSpacing:'-0.015em', lineHeight:1.2}}>{f.q}</div>
                {i === 0 && (
                  <div style={{fontFamily:"'DM Mono', monospace", fontSize:13, color:'var(--ink-soft)', lineHeight:1.6, marginTop:10}}>
                    {f.a}
                  </div>
                )}
              </div>
              <div className="h-serif" style={{fontSize:32, lineHeight:0.8, color:'var(--ink-soft)', textAlign:'right'}}>{i === 0 ? '−' : '+'}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── FINAL CTA ─────────────────────── */}
      <div style={{padding:'88px 56px 80px', textAlign:'center', background:'var(--ink)', color:'var(--paper)'}}>
        <div className="h-mono" style={{fontSize:11, color:'var(--accent)', letterSpacing:'0.22em'}}>
          DERNIER MOT
        </div>
        <h2 className="h-serif" style={{fontSize:72, lineHeight:0.98, letterSpacing:'-0.03em', margin:'18px auto 22px', maxWidth:900}}>
          30 minutes pour savoir<br/>
          <span style={{fontStyle:'italic'}}>combien vous laissez sur la table.</span>
        </h2>
        <p style={{fontFamily:"'DM Mono', monospace", fontSize:15, lineHeight:1.6, color:'rgba(251,250,246,0.7)', maxWidth:560, margin:'0 auto 36px'}}>
          Gratuit. Sans engagement. Vous repartez avec un plan d'action — même si on ne travaille pas ensemble.
        </p>

        <div style={{display:'flex', justifyContent:'center', gap:14, flexWrap:'wrap', alignItems:'center'}}>
          <button style={{
            background:'var(--accent)', color:'var(--paper)', border:'none',
            padding:'22px 36px', fontFamily:"'DM Mono', monospace", fontSize:16, letterSpacing:'0.1em',
            cursor:'pointer', fontWeight:600,
          }}>
            RÉSERVER MON AUDIT GRATUIT →
          </button>
          <span className="h-mono" style={{fontSize:13, color:'rgba(251,250,246,0.6)', letterSpacing:'0.06em'}}>
            ou <span style={{textDecoration:'underline', textUnderlineOffset:3}}>écrivez-moi à hello@scale26.fr</span>
          </span>
        </div>

        <div style={{marginTop:32}}>
          <GuaranteeChip light />
        </div>
      </div>

      {/* Footer */}
      <div style={{padding:'24px 56px', display:'flex', justifyContent:'space-between', background:'var(--paper)'}}>
        <span className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', letterSpacing:'0.1em'}}>SCALE26 · AUTOMATISATIONS POUR PME · 2026</span>
        <span className="h-mono" style={{fontSize:11, color:'var(--ink-soft)', letterSpacing:'0.1em'}}>MENTIONS · CONFIDENTIALITÉ · CONTACT</span>
      </div>
    </div>
  );
};

window.WFSynthese = WFSynthese;
