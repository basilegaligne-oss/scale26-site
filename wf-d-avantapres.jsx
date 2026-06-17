// Direction D — "Avant / Après"
// Split-screen diptych — left: chaotic Monday morning, right: calm Monday morning.
// Story-driven. The whole homepage works in two columns.

const WFAvantApres = () => {
  return (
    <div className="wf" style={{width:'100%', minHeight:'100%', background:'var(--paper)'}}>
      <WFNav />

      {/* HERO */}
      <div style={{padding:'40px 56px 28px', textAlign:'center', position:'relative'}}>
        <div className="h-marker" style={{fontSize:14, color:'var(--accent)', letterSpacing:'0.1em', textTransform:'uppercase'}}>
          ▸ lundi matin · 9h12
        </div>
        <h1 className="h-hand" style={{fontSize:84, lineHeight:0.95, margin:'10px 0 14px'}}>
          La même semaine.<br/>Deux PME.
        </h1>
        <p className="h-marker" style={{fontSize:20, color:'var(--ink-soft)', maxWidth:680, margin:'0 auto', lineHeight:1.35}}>
          Faites défiler. À droite, celle qui a automatisé ses tâches répétitives. Devinez laquelle gagne du temps.
        </p>
      </div>

      {/* SPLIT — sticky-feeling diptych */}
      <div style={{padding:'8px 0', borderTop:'2px solid var(--ink)', borderBottom:'2px solid var(--ink)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', position:'relative'}}>
          {/* divider line */}
          <div style={{position:'absolute', left:'50%', top:0, bottom:0, width:0, borderLeft:'2px dashed var(--ink)'}} />

          {/* AVANT */}
          <div style={{padding:'36px 40px', background:'#f3efe6'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:18}}>
              <span className="h-hand" style={{fontSize:42}}>Sans nous.</span>
              <span className="h-marker" style={{fontSize:14, color:'var(--ink-soft)'}}>PME #1 · 14 personnes</span>
            </div>

            {/* Chaotic inbox */}
            <div className="sketch-box" style={{padding:14, marginBottom:14, transform:'rotate(-1deg)'}}>
              <div className="h-marker" style={{fontSize:12, color:'var(--ink-soft)', marginBottom:6}}>📨 boîte mail</div>
              {[
                'RE: RE: RE: devis Dupond (urgent)',
                'Relance facture #2 — Mme Renaud',
                'Notion: la base est à jour ?',
                'Tableau de bord — où sont les chiffres ?',
                'RE: confirmation rdv mardi ?',
                'Comptable: les notes de frais ?',
              ].map((m, i) => (
                <div key={i} style={{display:'flex', justifyContent:'space-between', padding:'4px 0', borderBottom:'1px dotted var(--ink-soft)'}}>
                  <span className="h-marker" style={{fontSize:13}}>{m}</span>
                  <span className="h-mono" style={{fontSize:11, color:'var(--ink-soft)'}}>!</span>
                </div>
              ))}
              <div className="h-marker" style={{fontSize:13, color:'var(--accent)', marginTop:6}}>+ 287 non-lus</div>
            </div>

            {/* Calendar — packed */}
            <div className="sketch-box" style={{padding:14, marginBottom:14, transform:'rotate(0.5deg)'}}>
              <div className="h-marker" style={{fontSize:12, color:'var(--ink-soft)', marginBottom:8}}>📅 votre lundi</div>
              <div style={{display:'grid', gridTemplateColumns:'auto 1fr', rowGap:4, columnGap:10}}>
                {[
                  ['9h', 'Relancer 12 clients à la main'],
                  ['10h', 'Refaire le tableau du reporting'],
                  ['11h', 'Saisir les leads du week-end ds Excel'],
                  ['12h', '😩'],
                  ['14h', 'Envoyer 8 devis (quasi identiques)'],
                  ['16h', 'Faire la facture #43 (3e fois ce mois)'],
                ].map(([h, t]) => (
                  <React.Fragment key={h}>
                    <span className="h-mono" style={{fontSize:12, color:'var(--ink-soft)'}}>{h}</span>
                    <span className="h-marker" style={{fontSize:13, textDecoration: t === '😩' ? 'none' : 'line-through', textDecorationColor:'var(--ink-soft)'}}>{t}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
              <div className="sketch-box tight" style={{padding:12}}>
                <div className="h-hand" style={{fontSize:30, lineHeight:1}}>2 h 40</div>
                <div className="h-marker" style={{fontSize:12, color:'var(--ink-soft)'}}>de "vraie" prod./jour</div>
              </div>
              <div className="sketch-box tight" style={{padding:12}}>
                <div className="h-hand" style={{fontSize:30, lineHeight:1}}>-3 200€</div>
                <div className="h-marker" style={{fontSize:12, color:'var(--ink-soft)'}}>"perdus" / mois</div>
              </div>
            </div>

            <div className="annot" style={{marginTop:18, color:'var(--ink-soft)', transform:'rotate(-2deg)'}}>
              "j'ai pas le temps de regarder l'IA, je suis à fond"
            </div>
          </div>

          {/* APRÈS */}
          <div style={{padding:'36px 40px', background:'var(--paper)', position:'relative'}}>
            <Sticker rotate={4} style={{top:14, right:14}}>+ 4h gagnées</Sticker>

            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:18}}>
              <span className="h-hand" style={{fontSize:42}}>Avec nous.</span>
              <span className="h-marker" style={{fontSize:14, color:'var(--ink-soft)'}}>PME #2 · 13 personnes</span>
            </div>

            {/* Clean inbox */}
            <div className="sketch-box" style={{padding:14, marginBottom:14, transform:'rotate(0.5deg)'}}>
              <div className="h-marker" style={{fontSize:12, color:'var(--ink-soft)', marginBottom:6}}>📨 boîte mail</div>
              <div style={{display:'flex', justifyContent:'space-between', padding:'4px 0', borderBottom:'1px dotted var(--ink-soft)'}}>
                <span className="h-marker" style={{fontSize:13}}>Récap : 12 relances envoyées, 4 réponses</span>
                <span className="h-mono" style={{fontSize:11, color:'var(--accent)'}}>auto</span>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', padding:'4px 0', borderBottom:'1px dotted var(--ink-soft)'}}>
                <span className="h-marker" style={{fontSize:13}}>3 prospects à rappeler (priorisés)</span>
                <span className="h-mono" style={{fontSize:11, color:'var(--accent)'}}>auto</span>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', padding:'4px 0'}}>
                <span className="h-marker" style={{fontSize:13}}>Mathilde: déjeuner mercredi ?</span>
                <span className="h-mono" style={{fontSize:11, color:'var(--ink-soft)'}}>perso</span>
              </div>
              <div className="h-marker" style={{fontSize:13, color:'var(--accent)', marginTop:6}}>3 non-lus. tranquille.</div>
            </div>

            {/* Calendar — focused */}
            <div className="sketch-box" style={{padding:14, marginBottom:14, transform:'rotate(-0.5deg)'}}>
              <div className="h-marker" style={{fontSize:12, color:'var(--ink-soft)', marginBottom:8}}>📅 votre lundi</div>
              <div style={{display:'grid', gridTemplateColumns:'auto 1fr', rowGap:4, columnGap:10}}>
                {[
                  ['9h', 'Café · lire le récap auto'],
                  ['10h', 'Appel client Renaud (préparé par l\'IA)'],
                  ['11h', '🏃 (libre)'],
                  ['14h', 'Stratégie Q2 avec l\'équipe'],
                  ['16h', 'Quitter à 17h.'],
                ].map(([h, t]) => (
                  <React.Fragment key={h}>
                    <span className="h-mono" style={{fontSize:12, color:'var(--ink-soft)'}}>{h}</span>
                    <span className="h-marker" style={{fontSize:13}}>{t}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
              <div className="sketch-box tight" style={{padding:12, background:'color-mix(in oklab, var(--accent) 18%, var(--paper))'}}>
                <div className="h-hand" style={{fontSize:30, lineHeight:1}}>6 h 10</div>
                <div className="h-marker" style={{fontSize:12, color:'var(--ink-soft)'}}>de "vraie" prod./jour</div>
              </div>
              <div className="sketch-box tight" style={{padding:12, background:'color-mix(in oklab, var(--accent) 18%, var(--paper))'}}>
                <div className="h-hand" style={{fontSize:30, lineHeight:1}}>+2 850€</div>
                <div className="h-marker" style={{fontSize:12, color:'var(--ink-soft)'}}>de marge / mois</div>
              </div>
            </div>

            <div className="annot" style={{marginTop:18, transform:'rotate(2deg)'}}>
              "j'aurais dû le faire il y a 2 ans"
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE — the bridge */}
      <div style={{padding:'52px 56px 28px', textAlign:'center'}}>
        <div className="h-hand" style={{fontSize:54, lineHeight:1}}>
          Vous êtes laquelle, là ?
        </div>
        <div className="h-marker" style={{fontSize:18, color:'var(--ink-soft)', maxWidth:560, margin:'14px auto 24px', lineHeight:1.35}}>
          30 min d'audit gratuit, on regarde votre vraie semaine — et je vous dis honnêtement combien on peut bouger.
        </div>
        <button className="btn-ink" style={{fontSize:18, padding:'14px 26px'}}>Demander mon audit →</button>
        <div className="h-marker" style={{fontSize:14, color:'var(--ink-soft)', marginTop:10}}>
          Sans engagement. Sans devis envoyé "juste au cas où". Promis.
        </div>
      </div>

      {/* CLIENT STORIES — mini cards */}
      <div style={{padding:'40px 56px', borderTop:'2px solid var(--ink)'}}>
        <SectionTitle sub="3 PME, 3 avants/après. Pas un seul site vitrine.">Quelques transformations</SectionTitle>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:18, marginTop:14}}>
          {[
            {who:'Agence comm', n:'9 pers.', delta:'-8h/sem', what:'sur la facturation + les relances'},
            {who:'Cabinet juridique', n:'14 pers.', delta:'-12h/sem', what:'sur la saisie de dossiers'},
            {who:'Société BTP', n:'22 pers.', delta:'-£14k/an', what:'sur les pertes de devis'},
          ].map((c, i) => (
            <div key={i} className="sketch-box" style={{padding:18, position:'relative'}}>
              <div className="h-mono" style={{fontSize:12, color:'var(--ink-soft)'}}>{c.who} · {c.n}</div>
              <div className="h-hand" style={{fontSize:46, lineHeight:1, margin:'8px 0 4px', color:'var(--accent)'}}>{c.delta}</div>
              <div className="h-marker" style={{fontSize:14, color:'var(--ink-soft)'}}>{c.what}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{padding:'48px 56px', borderTop:'2px solid var(--ink)', textAlign:'center'}}>
        <button className="btn-accent" style={{fontSize:18, padding:'14px 28px'}}>Audit gratuit · 30 min →</button>
      </div>
    </div>
  );
};

window.WFAvantApres = WFAvantApres;
