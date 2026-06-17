// Direction C — "Tableau qui bouge" (bento qui se réarrange)
// Inspired by the reference's drag-around cards idea but in b&w.
// Each card = a real PME pain point that gets automated.

const WFBento = () => {
  // Wireframe: show the cards as if mid-rearrange (slight rotations, scattered).
  const cards = [
    {id:'relances', t:'Relancer les clients qui ne paient pas', g:'2x1', rot:-2,
      body:'Mail auto J+7, J+15, J+30. Vous repartez bosser, l\'argent rentre.',
      tag:'+ 6h / semaine'},
    {id:'devis', t:'Sortir un devis en 30 sec', g:'1x1', rot:3,
      body:'Le client remplit, le PDF s\'envoie tout seul, le CRM se met à jour.',
      tag:'-12 min / devis'},
    {id:'rdv', t:'Plus jamais "vous pouvez me redonner un créneau ?"', g:'1x1', rot:-3,
      body:'Lien de rdv qui regarde vraiment votre agenda. Confirme. Rappelle.',
      tag:'0 ping-pong'},
    {id:'inbox', t:'Trier l\'inbox du dirigeant', g:'1x2', rot:2,
      body:'Pubs, factures, prospects, urgent. 3 boîtes au lieu de 800 mails.',
      tag:'gagnez 1h / jour'},
    {id:'reporting', t:'Le reporting du lundi, fait pendant la nuit', g:'2x1', rot:-1,
      body:'Chiffre d\'affaires, leads, NPS. Dans votre boîte à 8h. Pas à 11h.',
      tag:'auto · chaque matin'},
    {id:'onboarding', t:'Onboarder un nouveau client sans rien oublier', g:'1x1', rot:3,
      body:'Contrat, kickoff, accès, facture #1. Une checklist qui se coche seule.',
      tag:'process clean'},
  ];

  return (
    <div className="wf" style={{width:'100%', minHeight:'100%', background:'var(--paper)'}}>
      <WFNav />

      {/* HERO */}
      <div style={{padding:'48px 56px 24px', position:'relative'}}>
        <div className="h-marker" style={{fontSize:14, color:'var(--accent)', letterSpacing:'0.1em', textTransform:'uppercase'}}>
          ▸ pour PME de 5 à 30 pers.
        </div>
        <h1 className="h-hand" style={{fontSize:78, lineHeight:0.95, margin:'14px 0 16px', maxWidth:920}}>
          On automatise <span className="underline-wavy">les trucs chiants</span> de votre boîte.<br/>
          Vous gardez le reste.
        </h1>
        <p className="h-marker" style={{fontSize:20, color:'var(--ink-soft)', maxWidth:680, lineHeight:1.35}}>
          Tirez les cartes ci-dessous. Celles qui vous ressemblent → on en parle pendant un audit gratuit.
        </p>
        <div style={{marginTop:24, display:'flex', gap:14, alignItems:'center', flexWrap:'wrap'}}>
          <button className="btn-ink" style={{fontSize:17, padding:'14px 22px'}}>Audit gratuit · 30 min →</button>
          <span className="h-marker" style={{fontSize:15, color:'var(--ink-soft)'}}>↓ ou jouez avec les cartes d'abord</span>
        </div>
      </div>

      {/* THE BENTO BOARD */}
      <div style={{padding:'24px 40px 48px', position:'relative'}}>
        <Sticker rotate={-8} style={{top:-4, left:30, zIndex:3}}>↓ glissez · réorganisez</Sticker>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(4, 1fr)',
          gridAutoRows:'170px',
          gap:14,
          padding:18,
          background:'#f3efe6',
          border:'2px solid var(--ink)',
          borderRadius:18,
          position:'relative',
        }}>
          {cards.map((c, i) => {
            const span = c.g === '2x1' ? {gridColumn:'span 2'} : c.g === '1x2' ? {gridRow:'span 2'} : {};
            return (
              <div key={c.id} className="sketch-box" style={{
                ...span,
                padding:18,
                background:'var(--paper)',
                transform:`rotate(${c.rot}deg)`,
                boxShadow: '4px 4px 0 var(--ink)',
                display:'flex', flexDirection:'column', justifyContent:'space-between',
                position:'relative',
                cursor:'grab',
              }}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                  <div style={{display:'flex', gap:4, alignItems:'center'}}>
                    <span style={{width:6, height:6, borderRadius:'50%', background:'var(--ink)'}}></span>
                    <span style={{width:6, height:6, borderRadius:'50%', background:'var(--ink)'}}></span>
                    <span style={{width:6, height:6, borderRadius:'50%', background:'var(--ink)'}}></span>
                  </div>
                  <div className="sketch-fill-accent" style={{padding:'3px 8px', borderRadius:8, border:'2px solid var(--ink)'}}>
                    <span className="h-mono" style={{fontSize:11}}>{c.tag}</span>
                  </div>
                </div>
                <div>
                  <div className="h-hand" style={{fontSize:c.g==='2x1'?32:22, lineHeight:1.05}}>{c.t}</div>
                  <div className="h-marker" style={{fontSize:14, color:'var(--ink-soft)', marginTop:6, lineHeight:1.3}}>
                    {c.body}
                  </div>
                </div>
              </div>
            );
          })}

          {/* "+ your problem" empty slot */}
          <div className="sketch-dash" style={{
            padding:18, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',
            transform:'rotate(1deg)',
          }}>
            <div className="h-hand" style={{fontSize:38, color:'var(--ink-soft)', lineHeight:1}}>+</div>
            <div className="h-marker" style={{fontSize:13, color:'var(--ink-soft)', textAlign:'center', marginTop:6}}>
              votre tâche pénible<br/>(on l'ajoute pdt l'audit)
            </div>
          </div>
        </div>

        {/* annotation */}
        <div className="annot" style={{position:'absolute', right:60, bottom:-6, transform:'rotate(-4deg)', maxWidth:200, textAlign:'right'}}>
          ← cartes éparpillées<br/>= ça respire, ça vit.
        </div>
      </div>

      {/* HOW IT WORKS — 3 cards on a "timeline" */}
      <div style={{padding:'48px 56px 24px', borderTop:'2px solid var(--ink)'}}>
        <SectionTitle sub="3 étapes. Pas une réunion par semaine.">Comment on bosse</SectionTitle>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:24, position:'relative', marginTop:14}}>
          {[
            {n:'01', t:'Audit gratuit', d:'30 min. On scanne votre semaine. Je rentre avec une liste.'},
            {n:'02', t:'Devis honnête', d:'Vous voyez ce que ça coûte, et ce que ça rapporte. En €.'},
            {n:'03', t:'On installe', d:'2–4 semaines. Vous testez. On ajuste. Vos équipes adoptent.'},
          ].map((s, i) => (
            <div key={s.n} className="sketch-box" style={{padding:22, transform:`rotate(${i%2 ? 1 : -1}deg)`}}>
              <div className="h-mono" style={{fontSize:12, color:'var(--accent)'}}>ÉTAPE {s.n}</div>
              <div className="h-hand" style={{fontSize:30, lineHeight:1, margin:'6px 0 8px'}}>{s.t}</div>
              <div className="h-marker" style={{fontSize:15, color:'var(--ink-soft)', lineHeight:1.35}}>{s.d}</div>
            </div>
          ))}
          {/* connecting scribble */}
          <svg style={{position:'absolute', inset:0, pointerEvents:'none', overflow:'visible'}}>
            <path d="M 33% 80 q 50 -30 90 0" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M 66% 80 q 50 -30 90 0" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
        </div>
      </div>

      {/* PROOF STRIP */}
      <div style={{padding:'32px 56px', borderTop:'2px solid var(--ink)', background:'#f3efe6'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:24}}>
          {[
            {n:'+12h', l:'gagnées / sem (en moyenne)'},
            {n:'~3 sem.', l:'avant le 1er gain mesurable'},
            {n:'×4', l:'retour sur invest. sur 6 mois'},
          ].map(s => (
            <div key={s.n}>
              <div className="h-hand" style={{fontSize:54, lineHeight:1}}>{s.n}</div>
              <div className="h-marker" style={{fontSize:15, color:'var(--ink-soft)'}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{padding:'48px 56px', textAlign:'center', borderTop:'2px solid var(--ink)'}}>
        <div className="h-hand" style={{fontSize:54, lineHeight:1}}>Une carte vous parle ?</div>
        <div className="h-marker" style={{fontSize:18, color:'var(--ink-soft)', margin:'12px 0 22px'}}>
          On en discute 30 min. Gratuit. Sans devis derrière par défaut.
        </div>
        <button className="btn-ink" style={{fontSize:18, padding:'14px 28px'}}>Réserver l'audit →</button>
      </div>
    </div>
  );
};

window.WFBento = WFBento;
