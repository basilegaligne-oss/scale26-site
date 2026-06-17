// Direction B — "Compteur temps-argent en direct"
// Confrontational, ROI-first. Live ticker showing how much the visitor is "burning"
// while doing repetitive work. Below: calculator + audit CTA.

const WFCounter = () => {
  const [secs, setSecs] = React.useState(0);
  React.useEffect(() => {
    const i = setInterval(() => setSecs(s => s + 1), 1000);
    return () => clearInterval(i);
  }, []);
  // ~ 38€ / hour wasted on repetitive tasks for an SMB employee
  const euros = (secs * 38 / 3600).toFixed(2);
  const mins = Math.floor(secs / 60);

  return (
    <div className="wf" style={{width:'100%', minHeight:'100%', background:'var(--paper)'}}>
      <WFNav />

      {/* HERO with live ticker */}
      <div style={{padding:'56px 56px 40px', position:'relative', overflow:'hidden'}}>
        <div className="h-marker" style={{fontSize:14, color:'var(--accent)', letterSpacing:'0.1em', textTransform:'uppercase'}}>
          ▸ depuis que vous êtes sur cette page
        </div>

        <div style={{margin:'18px 0 10px', display:'flex', alignItems:'baseline', gap:18, flexWrap:'wrap'}}>
          <div className="h-hand" style={{fontSize:120, lineHeight:0.85, fontVariantNumeric:'tabular-nums'}}>
            {euros}€
          </div>
          <div className="h-marker" style={{fontSize:22, color:'var(--ink-soft)', lineHeight:1.1}}>
            partent en tâches répétitives<br/>
            quelque part dans votre PME.
          </div>
        </div>

        <div className="h-mono" style={{fontSize:13, color:'var(--ink-faint)', marginTop:6}}>
          ↑ basé sur ~38€/h chargé · {mins} min sur cette page · estimation pour 1 PME de 15 pers.
        </div>

        <div style={{marginTop:32, display:'flex', alignItems:'center', gap:18, flexWrap:'wrap'}}>
          <button className="btn-ink" style={{fontSize:17, padding:'14px 22px'}}>
            Audit gratuit · arrêter l'hémorragie →
          </button>
          <span className="h-marker" style={{fontSize:15, color:'var(--ink-soft)'}}>30 min · pas un argumentaire de vente</span>
        </div>

        {/* annotation */}
        <div className="annot" style={{position:'absolute', top:30, right:60, transform:'rotate(6deg)', textAlign:'right'}}>
          ↗ chiffre qui<br/>monte en live.<br/>chiffre = douleur.
        </div>
      </div>

      {/* "WHERE THE MONEY GOES" — sketchy bar chart */}
      <div style={{padding:'24px 56px 48px', borderTop:'2px solid var(--ink)'}}>
        <SectionTitle sub="Vos collaborateurs passent leur journée à faire des choses qu'une machine ferait gratuitement.">
          Où part le temps de vos équipes
        </SectionTitle>

        <div style={{display:'grid', gridTemplateColumns:'1fr', gap:14, marginTop:24}}>
          {[
            {label:'Relances clients & factures', pct:32, eur:'~1 200€/mois'},
            {label:'Ressaisie de mails → CRM / Excel', pct:24, eur:'~900€/mois'},
            {label:'Devis & docs commerciaux répétés', pct:18, eur:'~680€/mois'},
            {label:'Reporting fait à la main', pct:14, eur:'~520€/mois'},
            {label:'Autres petits trucs qui mangent la journée', pct:12, eur:'~450€/mois'},
          ].map((row, i) => (
            <div key={row.label} style={{display:'grid', gridTemplateColumns:'1.2fr 3fr auto', gap:14, alignItems:'center'}}>
              <div className="h-marker" style={{fontSize:15}}>{row.label}</div>
              <div style={{position:'relative', height:34, border:'2px solid var(--ink)', borderRadius:18, background:'var(--paper)', overflow:'hidden'}}>
                <div style={{
                  width:`${row.pct * 2.4}%`, height:'100%',
                  background: i === 0 ? 'var(--accent)' : 'color-mix(in oklab, var(--accent) ' + (60 - i*8) + '%, var(--paper))',
                  borderRight:'2px solid var(--ink)',
                }}></div>
                <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', paddingLeft:14}}>
                  <span className="h-hand" style={{fontSize:18}}>{row.pct}%</span>
                </div>
              </div>
              <div className="h-mono" style={{fontSize:13, color:'var(--ink-soft)', minWidth:100, textAlign:'right'}}>{row.eur}</div>
            </div>
          ))}
        </div>

        <div className="annot" style={{marginTop:18, transform:'rotate(-2deg)', display:'inline-block'}}>
          → ~3 750€/mois pour 15 pers. on en automatise la moitié facile.
        </div>
      </div>

      {/* CALCULATOR — b&w version of the reference */}
      <div style={{padding:'48px 56px', borderTop:'2px solid var(--ink)', background:'#f3efe6'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:36, alignItems:'start'}}>
          <div>
            <SectionTitle sub="Bougez les curseurs. Pas besoin d'être DAF.">
              Combien vous gagnez,<br/>en vrai.
            </SectionTitle>

            <div style={{display:'flex', gap:8, flexWrap:'wrap', marginBottom:24}}>
              {['5 pers.', '15 pers.', '30 pers.', '50 pers.'].map((p, i) => (
                <div key={p} className="sketch-box tight" style={{
                  padding:'8px 14px',
                  background: i===1 ? 'var(--ink)' : 'transparent',
                  color: i===1 ? 'var(--paper)' : 'var(--ink)',
                }}>
                  <span className="h-marker" style={{fontSize:14}}>{p}</span>
                </div>
              ))}
            </div>

            {[
              {l:'Heures gaspillées / pers / sem.', v:7, max:20, unit:'h'},
              {l:'Taux horaire chargé moyen', v:38, max:80, unit:'€'},
              {l:'Combien de tâches récurrentes', v:5, max:15, unit:''},
            ].map(r => (
              <div key={r.l} style={{marginBottom:18}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:6}}>
                  <span className="h-marker" style={{fontSize:15}}>{r.l}</span>
                  <span className="h-hand" style={{fontSize:24}}>{r.v}{r.unit}</span>
                </div>
                <div style={{position:'relative', height:14, border:'2px solid var(--ink)', borderRadius:10}}>
                  <div style={{width:`${(r.v/r.max)*100}%`, height:'100%', background:'var(--ink)', borderRadius:'8px 0 0 8px'}}></div>
                  <div style={{
                    position:'absolute', left:`${(r.v/r.max)*100}%`, top:'50%',
                    transform:'translate(-50%,-50%)',
                    width:22, height:22, borderRadius:'50%', background:'var(--accent)', border:'2px solid var(--ink)',
                  }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Result panel */}
          <div className="sketch-box" style={{padding:32, background:'var(--paper)', position:'relative'}}>
            <Sticker rotate={4} style={{top:-18, right:18}}>économie / an</Sticker>
            <div className="h-mono" style={{fontSize:12, letterSpacing:'0.1em', color:'var(--ink-soft)', textTransform:'uppercase'}}>
              VOTRE PME GAGNERAIT
            </div>
            <div className="h-hand" style={{fontSize:88, lineHeight:1, margin:'8px 0 6px'}}>
              ~ 41 600€
            </div>
            <div className="h-marker" style={{fontSize:18, color:'var(--ink-soft)'}}>
              par an · soit <b style={{color:'var(--ink)'}}>3 470€/mois</b>
            </div>

            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginTop:22}}>
              <div className="sketch-box tight" style={{padding:14}}>
                <div className="h-hand" style={{fontSize:34, lineHeight:1}}>1 095h</div>
                <div className="h-marker" style={{fontSize:12, color:'var(--ink-soft)'}}>gagnées / an</div>
              </div>
              <div className="sketch-box tight" style={{padding:14}}>
                <div className="h-hand" style={{fontSize:34, lineHeight:1}}>~ 4 sem.</div>
                <div className="h-marker" style={{fontSize:12, color:'var(--ink-soft)'}}>de retour sur invest.</div>
              </div>
            </div>

            <button className="btn-ink" style={{marginTop:22, width:'100%', justifyContent:'center', fontSize:17}}>
              Vérifier ce chiffre avec moi (gratuit) →
            </button>
          </div>
        </div>
      </div>

      {/* FAQ + CTA */}
      <div style={{padding:'48px 56px', borderTop:'2px solid var(--ink)'}}>
        <SectionTitle sub="Vraies questions de PME, vraies réponses.">Tout ce qu'on me demande</SectionTitle>
        {[
          'C\'est quoi, concrètement, automatiser ?',
          'Je n\'ai pas de DSI. Vous bossez quand même avec moi ?',
          'Combien ça coûte une fois sorti de l\'audit ?',
          'Et si ce que je fais ne se prête pas à l\'automatisation ?',
        ].map((q, i) => (
          <div key={i} className="sketch-box tight" style={{padding:'14px 18px', marginBottom:10, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <span className="h-marker" style={{fontSize:16}}>{q}</span>
            <span className="h-hand" style={{fontSize:24, color:'var(--accent)'}}>+</span>
          </div>
        ))}

        <div style={{marginTop:28, textAlign:'center'}}>
          <button className="btn-accent" style={{fontSize:18, padding:'14px 26px'}}>Demander mon audit gratuit →</button>
        </div>
      </div>
    </div>
  );
};

window.WFCounter = WFCounter;
