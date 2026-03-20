// ══════════════════════════════════════════════════════════════
// CAREER WORLD DATA — v14
// ══════════════════════════════════════════════════════════════
// Questo file contiene TUTTI i dati del gioco.
// index.html carica questo file prima del proprio <script>.
// ══════════════════════════════════════════════════════════════

const UI_TEXTS = {
  meta: {
    page_title: 'Career World · alpha 1.0.35',
    version: 'ALPHA 1.0.35',
  },
  title: {
    game_title: 'CAREER\nWORLD',
    tagline: '// navigare il mercato tech con consapevolezza',
    description: 'Un gioco per esplorare il mondo del lavoro.<br>Scopri la tua classe — poi naviga il campo.<br><strong>Nessun game over. Solo conoscenza.</strong>',
    btn_start: '[ INIZIA ]',
  },
  assess: {
    sidebar_title: 'Il tuo percorso',
    step_labels: [
      { label: 'Hard Skills',  sub: 'Cosa hai fatto' },
      { label: 'Soft Skills',  sub: 'Come lavori'    },
      { label: 'Preferenze',   sub: 'Dove stai bene' },
    ],
    sidebar_note: 'Le domande misurano <em>azioni reali</em> — riduce il bias di auto-valutazione sistematico del 20–35%.',
    btn_next: 'Avanti →',
    btn_generate: 'Genera la mia Card →',
  },
  card: {
    eyebrow: '// CLASSE ASSEGNATA',
    headline: 'La tua <em>mappa di partenza</em>',
    explanation: 'Questa card fotografa dove sei adesso. Le stat cambieranno navigando i mondi.',
    bias_note: '<strong>📌 Prima di entrare:</strong><br>Chi subisce bias di auto-svalutazione tende a sotto-stimare le proprie competenze del 20–35%. Le tue stat potrebbero essere più alte di quanto percepisci. <em>RADAR</em> — leggere il sistema — parte bassa per tutte: cresce solo con l\'esperienza.',
    btn_enter: 'Entra nel Mondo 1 →',
    swipe_hint: '→ scorri per continuare',
    player_name: 'PLAYER ONE',
    level_suffix: '· Livello 1',
  },
  game: {
    msg_default: 'Muoviti con ← → ↑ ↓ · Premi SPAZIO o Z vicino a un NPC per interagire',
    msg_default_mobile: '↕↔ muoviti · ✦ interagisci con NPC vicini',
    hint_mobile: 'Usa <kbd>✦</kbd> vicino a un NPC per interagire',
    hint_desktop: 'Premi <kbd>SPAZIO</kbd> o <kbd>Z</kbd> vicino a un NPC per interagire',
    hint_suffix: '· Trova tutti gli NPC per sbloccare le uscite',
    msg_door_unlocked: '🔓 Porta sbloccata! Avvicinati e premi SPAZIO/Z per uscire. Le altre interazioni sono opzionali.',
    msg_door_hint_after_debrief: '🔓 Porta sbloccata! Avvicinati e premi SPAZIO/Z per uscire. Le interazioni opzionali rimangono disponibili.',
  },
  touch: {
    btn_left: '◀', btn_right: '▶', btn_up: '▲', btn_down: '▼', btn_act: '✦',
  },
  world_intro: {
    col_pro_label: '✓ Pro',
    col_con_label: '✗ Contro',
    hint_prefix: '🎮 ',
    btn_enter: 'Entra nel mondo →',
  },
  map: {
    title: '🗺️ CAREER WORLD MAP',
    subtitle: 'Sei mondi, tutti accessibili. Ogni lato connette contesti affini.',
    free_note: 'Inizia da dove vuoi — le linee mostrano affinità di pattern, non sequenze obbligatorie.',
    node_status_todo: 'Clicca per entrare',
    node_status_done: '✓ Completato',
    btn_conclude: '🏁 Concludi il percorso — vedi il report completo',
    unlock_hint: 'Completa almeno 2 mondi per sbloccare il report di carriera completo',
  },
  debrief: {
    section_patterns: '📋 PATTERN RICONOSCIUTI',
    section_insight: '🧠 COSA HAI IMPARATO',
    section_takeaway: '💡 TAKEAWAY PRATICO',
    section_stats: '⚡ STAT GUADAGNATE',
    depth_complete: '🔓 Lettura completa',
    depth_medium: '🔆 Lettura approfondita',
    depth_base: '💡 Lettura base',
    no_patterns: 'Hai completato il minimo. Torna a esplorare gli NPC opzionali per scoprire altri pattern.',
    locked_levels_hint: 'livello/i di insight ancora da sbloccare — torna in questo mondo con più interazioni.',
    all_levels_unlocked: '✓ Tutti gli insight sbloccati per questo mondo.',
    world_completed_suffix: '— COMPLETATO',
    btn_map: '🗺️ Torna alla mappa',
    btn_retry: '↩ Prova un percorso diverso',
  },
  npc_debrief: {
    section_pattern: '📋 PATTERN RICONOSCIUTO',
    section_outcome: '⚡ ESITO',
    btn_continue: 'Continua →',
    radar_gain_label: 'RADAR +1',
  },
  outcome: {
    emoji: '🗺️',
    title: 'REPORT DI CARRIERA',
    section_worlds: '// MONDI VISITATI',
    no_worlds: 'Nessun mondo completato.',
    section_stats: '// STAT ACCUMULATE',
    section_patterns: '// PATTERN RICONOSCIUTI',
    no_patterns: 'Esplora più NPC in ogni mondo per riconoscere i pattern.',
    radar: {
      exceptional: 'RADAR eccezionale: hai sviluppato una lettura sistemica del mercato.',
      high: 'RADAR molto alto: riesci a leggere le dinamiche di potere con chiarezza.',
      growing: 'RADAR in crescita: stai costruendo la tua mappa del sistema.',
      base: 'RADAR base: esplora più mondi e più NPC per approfondire la lettura.',
    },
    global_suffix: '<em>Una cosa da portare fuori dal gioco:</em> il mercato non è neutro.\nHa strutture, bias e pattern ricorrenti. Conoscerli non significa accettarli —\nsignifica scegliere consapevolmente quando adattarsi, quando resistere, e quando cambiare ambiente.',
    takeaways: {
      has_piva: 'Hai esplorato sia ambienti strutturati che il lavoro autonomo. La tua lettura del mercato è tra le più complete — sai cosa offre ogni contesto e a quale prezzo.',
      has_corporate: 'Hai attraversato la progressione da piccolo a grande. Sai come cambiano le dinamiche di potere con la scala dell\'organizzazione.',
      has_startup: 'Hai visto come le startup e le PMI condividono l\'informalità ma differiscono nel ritmo e nell\'ambizione. La tua prossima frontiera è esplorare i contesti più strutturati.',
      default: 'Hai iniziato il percorso. Ogni mondo che esplorerai aggiungerà strati alla tua lettura del mercato.',
    },
    btn_other_path: '↩ Prova l\'altro percorso',
    btn_restart: '↺ Ricomincia da capo',
  },
  progress: {
    status_open: '🔓 APERTA',
    status_locked_prefix: '🔒',
  },
};

// ══════════════════════════════════════════════════════════════
// ASSESSMENT DATA
// ══════════════════════════════════════════════════════════════
const STEPS=[
  {id:'hard',tag:'FASE 1 · HARD SKILLS',title:'Cosa hai fatto con la tecnologia?',
   sub:'Non "quanto sai" — cosa hai effettivamente realizzato. Anche una volta sola conta.',
   note:'Le domande comportamentali riducono il bias di auto-rating sistematico.',
   qs:[
    {id:'python',t:'Hai scritto uno script Python/R per risolvere un problema reale, anche piccolo?',opts:['Sì, più volte','Una volta / in corso','Solo tutorial','Non è il mio focus']},
    {id:'sql',t:'Hai interrogato un database con SQL per estrarre o analizzare dati?',opts:['Sì, regolarmente','Qualche volta','Solo tutorial','No']},
    {id:'viz',t:'Hai costruito una dashboard o visualizzazione che qualcuno ha usato davvero?',opts:['Sì','In corso','Solo esercizi','No']},
    {id:'ml',t:'Hai addestrato un modello ML, anche su un dataset pubblico?',opts:['Sì, in produzione','Sì, progetto personale','Solo corso/tutorial','No']},
    {id:'llm',t:'Hai integrato un LLM o API AI in qualcosa di concreto?',opts:['Sì, in un progetto reale','Esperimenti/prototipo','Solo prompt su interfaccia','No']},
    {id:'cloud',t:'Hai deployato qualcosa su cloud (anche free tier)?',opts:['Sì','Esperimenti','No ma so i concetti','No']},
    {id:'sdev',t:'Hai lavorato su codebase condivisa con git, code review, CI/CD?',opts:['Sì, in team','Progetti personali','Solo concetti','No']},
   ]},
  {id:'soft',tag:'FASE 2 · SOFT SKILLS',title:'Come ti sei comportata in situazioni reali?',
   sub:'Pensa a esperienze concrete: lavoro, università, progetti, associazioni.',
   note:'Non esiste risposta giusta. Questi dati costruiscono la tua mappa.',
   qs:[
    {id:'comm',t:'Hai presentato un lavoro tecnico a persone non tecniche?',opts:['Sì, più volte','Una volta','Sì, con difficoltà','Non ancora']},
    {id:'conflict',t:'Quando non eri d\'accordo con una decisione di un superiore, hai...',opts:['Espresso il mio punto con dati','Fatto domande per capire','Taciuto ma ci ho rimuginato','Accettato senza problemi']},
    {id:'auto',t:'Hai gestito un progetto importante in autonomia, senza supervisione?',opts:['Sì, con successo','Sì, con difficoltà ma ce l\'ho fatta','Preferisco avere guida','Non ancora capitato']},
    {id:'chaos',t:'Quando cambiano priorità improvvisamente, come reagisci?',opts:['Mi adatto bene','Ci metto un po\' ma riesco','Preferisco stabilità','Mi stresso molto']},
    {id:'feedback',t:'Hai ricevuto feedback critico su un tuo lavoro? Come l\'hai gestito?',opts:['L\'ho usato per migliorare','Mi ha fatto male ma l\'ho integrato','L\'ho preso molto sul personale','Non ricordo situazioni']},
    {id:'network',t:'Hai mai aiutato attivamente un\'altra persona (collega, studentessa) a crescere o a farsi vedere?',opts:['Sì, più volte e consapevolmente','Qualche volta','Raramente, non ci ho pensato','No']},
   ]},
  {id:'pref',tag:'FASE 3 · ORIENTAMENTO',title:'Come ti vedi nel lavoro tech?',
   sub:'Prima la domanda più importante: non dipende da cosa sai fare ora, ma da dove vuoi andare.',
   note:'L\'orientamento è il segnale principale per la tua classe — indipendente dall\'esperienza attuale.',
   qs:[
    {id:'orient',t:'Quale di queste frasi ti descrive meglio — indipendentemente da cosa sai fare ora?',opts:[
      '📊 Voglio trasformare dati in decisioni di business comprensibili a tutti',
      '🔬 Voglio costruire modelli predittivi che anticipano il futuro',
      '⚙️ Voglio portare sistemi AI in produzione e farli scalare',
      '🤖 Voglio costruire con LLM, agenti e i tool AI più recenti',
    ]},
   ],
   sls:[
    {id:'stab',label:'Stabilità vs Rischio',lo:'Stabilità e prevedibilità',hi:'Rischio, velocità, incertezza'},
    {id:'tech',label:'Deep Tech vs Strategico',lo:'Focus tecnico profondo',hi:'Strategia, prodotto, business'},
    {id:'solo',label:'Solista vs Team',lo:'Focus profondo da sola',hi:'Energia di gruppo'},
    {id:'speed',label:'Lungo periodo vs Impatto immediato',lo:'Costruire qualcosa che dura',hi:'Vedere l\'impatto subito'},
   ]},
];

const ORIENT_OPTS=[
  '📊 Voglio trasformare dati in decisioni di business comprensibili a tutti',
  '🔬 Voglio costruire modelli predittivi che anticipano il futuro',
  '⚙️ Voglio portare sistemi AI in produzione e farli scalare',
  '🤖 Voglio costruire con LLM, agenti e i tool AI più recenti',
];

const SMAP={
  'Sì, più volte':5,'Sì, regolarmente':5,'Sì, in produzione':5,'Sì, in un progetto reale':5,'Sì, in team':5,'Sì, con successo':5,'Sì, più volte e consapevolmente':5,
  'Una volta / in corso':3,'Qualche volta':3,'Sì, progetto personale':3,'Esperimenti/prototipo':3,'Sì':4,'Sì, con difficoltà ma ce l\'ho fatta':4,
  'Una volta':3,'Sì, con difficoltà':3,'Ci metto un po\' ma riesco':3,'Esperimenti':3,'In corso':3,
  'Solo tutorial':1.5,'Solo corso/tutorial':1.5,'Solo esercizi':1.5,'Solo concetti':1,'Solo prompt su interfaccia':1,'No ma so i concetti':1,
  'Espresso il mio punto con dati':5,'Fatto domande per capire':4,'Taciuto ma ci ho rimuginato':2,'Accettato senza problemi':3,
  'Mi adatto bene':5,'Preferisco stabilità':2,'Mi stresso molto':1,
  'L\'ho usato per migliorare':5,'Mi ha fatto male ma l\'ho integrato':4,'L\'ho preso molto sul personale':2,
  'Non ancora':2,'Non è il mio focus':1,'Non ancora capitato':2,'Preferisco avere guida':2,
  'Non ricordo situazioni':2,'Raramente, non ci ho pensato':2,'No':0,
};

const CLASSES={
  analyst:{id:'analyst',name:'Data Analyst',av:'📊',color:'#4fc3f7',bg:'rgba(79,195,247,.1)',
    desc:'Trasformi numeri in decisioni. Il tuo superpotere è la chiarezza comunicativa — dove gli altri vedono dati, tu vedi storie che il business può usare.',
    traits:['SQL Master','Storyteller','BI Wizard','Business-minded'],best:['Big Consulenza','Large Corporate'],hard:['Startup early-stage']},
  scientist:{id:'scientist',name:'Data Scientist',av:'🔬',color:'#81c784',bg:'rgba(129,199,132,.1)',
    desc:'Costruisci modelli che anticipano il futuro. Hai mente ibrida: metà matematica, metà ingegneria.',
    traits:['ML Practitioner','Statista','Model Builder','Curiosa'],best:['Big Consulenza','Large Corporate'],hard:['PMI piccole']},
  ml:{id:'ml',name:'ML Engineer',av:'⚙️',color:'#ffb74d',bg:'rgba(255,183,77,.1)',
    desc:'Porti i modelli in produzione. Sei l\'ingegnera delle pipeline: il tuo codice deve reggere quando il traffico esplode.',
    traits:['MLOps','Pipeline Builder','Scale Expert','DevOps-minded'],best:['Startup growth','Large Corporate'],hard:['PMI Settore']},
  ai:{id:'ai',name:'AI Engineer',av:'🤖',color:'#ce93d8',bg:'rgba(206,147,216,.1)',
    desc:'Costruisci con LLM, RAG e agenti AI. Sei al confine tra ricerca e prodotto — il profilo più richiesto del momento.',
    traits:['LLM Builder','RAG Expert','Agent Designer','System Thinker'],best:['Startup Tech','Scale-up'],hard:['PMI Settore','PA']},
};

// ══════════════════════════════════════════════════════════════
// WORLD DEFINITIONS
// ══════════════════════════════════════════════════════════════
const WORLD_DEFS={
  pmi:{
    label:'WORLD 1 · PMI SETTORE',
    palette:{floor:0x1e1608,wall:0x2e2210,accent:0x5a3a10,bg:0x0e0a04},
    exits:[
      {id:'startup',label:'STARTUP →',color:0xce93d8,x:0.85,y:0.5},
      {id:'consulenza',label:'CONSULENZA →',color:0x4fc3f7,x:0.85,y:0.72},
    ],
    npcs:[
      {id:'manager',sprite:'mgr',label:'Ufficio HR',gridX:4,gridY:5,
        dlg:{spk:'👔 Manager HR — MetalTech',color:'var(--accent)',
          txt:'Benvenuta. Sei la nuova data analyst. "Data scientist", come dici tu — qui facciamo le cose praticamente. Avrai bisogno di Excel, gestire il cliente, e ogni tanto supporto in produzione. La tua laurea? Utile, ma conta di più l\'iniziativa.',
          chs:[
            {t:'OK — posso avere una descrizione scritta del ruolo?',out:'assertive'},
            {t:'Certo, mi adatterò a quello che serve.',out:'passive'},
            {t:'"Supporto in produzione" non era nel colloquio. Posso avere chiarezza?',out:'direct'},
          ]},
        outs:{
          assertive:{msg:'Hai chiesto chiarezza in modo professionale. +VOICE +CLARITY',stat:{VOICE:1,CLARITY:1}},
          passive:  {msg:'Hai accettato senza chiedere. Il ruolo resterà vago. +ENERGY a breve termine.',stat:{ENERGY:1}},
          direct:   {msg:'Hai nominato il problema direttamente. +RADAR +VOICE',stat:{RADAR:2,VOICE:1}},
        },
        db:{pat:'Il ruolo vago come meccanismo di sfruttamento',
          ins:'Nelle PMI i ruoli tech sono spesso fluidi. Questo può significare crescita — o lavoro non pagato. Chiedere una job description scritta nella prima settimana è normale, non una provocazione.',
          data:'McKinsey 2023: le donne in ruoli tech nelle PMI riportano il 40% in più di task fuori JD rispetto ai colleghi uomini.'}},
      {id:'collega',sprite:'col',label:'Open Space',gridX:8,gridY:7,
        dlg:{spk:'👨‍💻 Collega — Marco',color:'var(--accent)',
          txt:'Ciao! Il management ha visto che sei brava a spiegare le cose. Ti chiedono di fare la "facilitatrice" nelle riunioni con i clienti, preparare i deck, coordinare il team. Non è nel tuo ruolo ufficialmente, ma sai com\'è.',
          chs:[
            {t:'Posso farlo, ma voglio che venga riconosciuto formalmente.',out:'negotiate'},
            {t:'Certo, nessun problema. Sono qui per aiutare.',out:'accept'},
            {t:'Prima voglio capire se è il percorso che voglio costruire qui.',out:'strategic'},
          ]},
        outs:{
          negotiate:{msg:'Hai legato il lavoro extra al riconoscimento. +VOICE +NETWORK',stat:{VOICE:2,NETWORK:1}},
          accept:   {msg:'Hai accettato. Probabilmente lo chiederanno ancora. +ENERGY -CLARITY',stat:{ENERGY:1,CLARITY:-1}},
          strategic:{msg:'Hai preso tempo per valutare. +CLARITY +RADAR',stat:{CLARITY:2,RADAR:1}},
        },
        db:{pat:'Il "lavoro invisibile" e l\'office housework',
          ins:'Le donne ricevono il doppio delle richieste di lavoro non riconosciuto. Non è perché siano più brave — è un pattern sistemico.',
          data:'Harvard Business Review 2022: le donne dedicano 200 ore/anno in più a lavoro non tracciato nei sistemi di performance review.'}},
      {id:'sister',sprite:'sis',label:'Mensa',gridX:6,gridY:9,
        dlg:{spk:'❤️ Giulia — Senior Dev (Alleata)',color:'#e53935',
          txt:'Hey, mi ha detto Marco che stai facendo i deck per il cliente. Lo so, è successo anche a me. Ascolta: tieni traccia di tutto quello che fai fuori JD. E quando presenti qualcosa, assicurati di inviare una mail prima con il tuo nome — così resta traccia. Ti copro io nelle riunioni se vedo che qualcuno si prende il credito.',
          chs:[
            {t:'Grazie. Come hai imparato a navigare queste situazioni?',out:'learn'},
            {t:'Apprezzo, ma non voglio creare conflitti.',out:'avoid'},
            {t:'Possiamo costruire qualcosa di più sistematico per il team?',out:'systemic'},
          ]},
        outs:{
          learn:   {msg:'Hai costruito una connessione reale. +NETWORK +RADAR',stat:{NETWORK:2,RADAR:1}},
          avoid:   {msg:'Hai evitato il conflitto. Ma hai perso un\'alleata. +ENERGY -NETWORK',stat:{ENERGY:1,NETWORK:-1}},
          systemic:{msg:'Pensi in grande: cambiare il sistema, non solo navigarlo. +NETWORK +CLARITY +RADAR',stat:{NETWORK:2,CLARITY:1,RADAR:2}},
        },
        db:{pat:'La sorellanza come strategia professionale, non solo supporto emotivo',
          ins:'Il supporto attivo tra donne sul lavoro — nominare i contributi altrui, costruire visibilità reciproca — è documentato come uno dei fattori più efficaci contro il credit gap.',
          data:'Lean In / McKinsey 2023: le donne che hanno un\'alleata donna con seniority hanno il 24% in più di probabilità di essere promosse entro 3 anni.'}},
      {id:'tech_pmi',sprite:'tech',label:'Server Room',gridX:12,gridY:8,
        dlg:{spk:'💻 Scenario Tecnico — PMI',color:'var(--warn)',
          txt:'Hai un dataset di produzione con il 35% di valori mancanti nelle colonne di temperatura. Il manager vuole il modello per domani. Cosa fai?',
          chs:[
            {t:'Imputo con la media e consegno — il manager vuole i risultati.',out:'fast'},
            {t:'Analizzo il pattern dei missing: se MCAR imputo, se MAR/MNAR discuto con il manager le implicazioni prima di procedere.',out:'rigorous'},
            {t:'Chiedo più dati storici per capire il contesto prima di scegliere la strategia.',out:'context'},
          ]},
        outs:{
          fast:    {msg:'Veloce ma rischioso. +ENERGY -SKILL',stat:{ENERGY:1,SKILL:-1}},
          rigorous:{msg:'Approccio corretto e comunicabile. +SKILL +CLARITY',stat:{SKILL:2,CLARITY:1}},
          context: {msg:'Ottima domanda di business. +SKILL +RADAR',stat:{SKILL:1,RADAR:2}},
        },
        db:{pat:'Il trade-off velocità/rigore nelle PMI',
          ins:'Nelle PMI la pressione sui tempi è reale. Ma consegnare un modello con dati mal gestiti crea problemi maggiori downstream.',
          data:'Un modello addestrato su dati con missing non analizzati può avere bias fino al 40% nelle predizioni. (Speranza et al., 2022)'}},
    ]},
  startup:{
    label:'WORLD 2A · STARTUP TECH',
    palette:{floor:0x1a0a2e,wall:0x2e1a4e,accent:0x4a2a6a,bg:0x0d0810},
    exits:[{id:'end_startup',label:'FINE →',color:0xce93d8,x:0.88,y:0.5}],
    npcs:[
      {id:'founder',sprite:'mgr',label:'CEO Corner',gridX:4,gridY:5,
        dlg:{spk:'🚀 Founder — StartupAI',color:'var(--accent)',
          txt:'Benvenuta! Qui non c\'è burocrazia, siamo una famiglia. Tutti fanno un po\' di tutto. Ti chiedo di essere "full-stack AI" — modelli, infra, prodotto, pitch ai clienti. La tua idea di ieri era ottima btw, l\'ho presentata agli investitori stamattina.',
          chs:[
            {t:'"Full-stack AI" è molto ampio. Possiamo definire le priorità del mio ruolo?',out:'scope'},
            {t:'Certo, mi piace la varietà! Sono entusiasta.',out:'enthusiast'},
            {t:'"L\'hai presentata" — ma era mia. Come funziona la visibilità delle idee qui?',out:'credit'},
          ]},
        outs:{
          scope:    {msg:'Hai definito i confini prima di imbarcarsi. +CLARITY +VOICE',stat:{CLARITY:2,VOICE:1}},
          enthusiast:{msg:'Entusiasmo reale — ma senza confini chiari ti ritroverai a fare tutto. +ENERGY -CLARITY',stat:{ENERGY:2,CLARITY:-1}},
          credit:   {msg:'Hai nominato il problema direttamente. +VOICE +RADAR',stat:{VOICE:2,RADAR:2}},
        },
        db:{pat:'La cultura "famiglia" come vettore di sfruttamento',
          ins:'Il frame della "famiglia" nelle startup normalizza confini professionali assenti, orari illimitati e lavoro non pagato.',
          data:'Sequoia Capital Survey 2023: il 67% dei dipendenti di startup segnala "scope creep" nel proprio ruolo entro i primi 6 mesi. Le donne lo segnalano il 40% più frequentemente degli uomini.'}},
      {id:'sister_startup',sprite:'sis',label:'Cucina',gridX:7,gridY:8,
        dlg:{spk:'❤️ Priya — Senior ML Eng (Alleata)',color:'#e53935',
          txt:'Ehi, ho sentito che hai sollevato la questione del credito con il founder. Brava. Io ho imparato a mandare sempre un recap scritto dopo le conversazioni con lui — "come discusso oggi, la mia proposta è X". Ti sembra paranoico? Non lo è. Facciamolo insieme se vuoi.',
          chs:[
            {t:'Sì, è una buona idea. Come hai costruito questa abitudine?',out:'learn'},
            {t:'Non voglio sembrare diffidente — ci tengo al rapporto.',out:'trust'},
            {t:'Potremmo proporre un sistema di tracking delle idee per tutto il team.',out:'systemic'},
          ]},
        outs:{
          learn:   {msg:'Hai imparato una strategia concreta. +NETWORK +SKILL',stat:{NETWORK:2,SKILL:1}},
          trust:   {msg:'La fiducia è importante — ma documentare non è sfiducia. +ENERGY -RADAR',stat:{ENERGY:1,RADAR:-1}},
          systemic:{msg:'Proponi un cambiamento strutturale. +NETWORK +RADAR +CLARITY',stat:{NETWORK:2,RADAR:2,CLARITY:1}},
        },
        db:{pat:'La documentazione come protezione, non come paranoia',
          ins:'Nelle startup la comunicazione orale è la norma, e questo crea asimmetrie di potere. Documentare per iscritto non è segnale di sfiducia — è una pratica professionale.',
          data:'McKinsey Women in the Workplace 2023: nelle startup il "credit gap" è il 35% più alto rispetto alle corporate.'}},
      {id:'collega_startup',sprite:'col',label:'Open Space',gridX:10,gridY:6,
        dlg:{spk:'👨‍💻 Collega — Luca',color:'var(--accent)',
          txt:'Senti, c\'è un colloquio interno per il ruolo di Tech Lead. Ho già detto al founder che sarei perfetto. Tu hai fatto un lavoro figo sul modello, ma non hai ancora "leadership" — sai, non hai mai gestito nessuno.',
          chs:[
            {t:'Ho gestito il progetto X end-to-end e coordinato 3 stakeholder. È leadership.',out:'redefine'},
            {t:'Hai ragione, forse non sono ancora pronta.',out:'defer'},
            {t:'Interessante. Posso sapere quali sono i criteri formali per il ruolo?',out:'criteria'},
          ]},
        outs:{
          redefine:{msg:'Hai ridefinito "leadership" con dati concreti. +VOICE +SKILL',stat:{VOICE:2,SKILL:1}},
          defer:   {msg:'Hai ceduto senza verificare se i criteri erano reali. -VOICE -CLARITY',stat:{VOICE:-1,CLARITY:-1}},
          criteria:{msg:'Hai smontato l\'argomento chiedendo i criteri. +CLARITY +RADAR',stat:{CLARITY:2,RADAR:2}},
        },
        db:{pat:'Il "non sei ancora pronta" come deterrente sistematico',
          ins:'"Non sei ancora pronta" è una delle frasi più usate per escludere le donne da posizioni di leadership.',
          data:'Harvard Business Review 2019: le donne vengono valutate per promozioni in base alle performance attuali, gli uomini sul potenziale futuro.'}},
      {id:'tech_startup',sprite:'tech',label:'Whiteboard',gridX:13,gridY:7,
        dlg:{spk:'💻 Scenario Tecnico — Startup',color:'var(--warn)',
          txt:'Il founder vuole un MVP del vostro sistema di raccomandazione per dopodomani. Hai dati sparsi, nessuna infrastruttura, e 2 giorni. Cosa proponi?',
          chs:[
            {t:'Collaborative filtering con matrix factorization — almeno offline per la demo.',out:'ml'},
            {t:'Regole euristiche basate sulle categorie più popolari — funziona, è spiegabile e deployabile in 2 ore.',out:'pragmatic'},
            {t:'Definisco prima i KPI di successo con il founder, poi scelgo l\'approccio.',out:'strategic'},
          ]},
        outs:{
          ml:       {msg:'Tecnicamente corretto ma rischioso nei tempi. +SKILL',stat:{SKILL:1}},
          pragmatic:{msg:'Scelta eccellente per un MVP. +SKILL +CLARITY',stat:{SKILL:2,CLARITY:1}},
          strategic:{msg:'Pensi come una product manager. +SKILL +RADAR +CLARITY',stat:{SKILL:1,RADAR:2,CLARITY:2}},
        },
        db:{pat:'Il MVP tecnico: la semplicità come scelta, non come limite',
          ins:'Nelle startup la pressione a dimostrare "ML avanzato" è alta — ma un sistema semplice che funziona batte sempre un sistema complesso che non è pronto.',
          data:'"Simple models with good features often outperform complex models with poor features." — Pedro Domingos, The Master Algorithm.'}},
    ]},
  consulenza:{
    label:'WORLD 2B · BIG CONSULENZA',
    palette:{floor:0x081820,wall:0x103040,accent:0x1a5060,bg:0x040c10},
    exits:[{id:'end_consulenza',label:'FINE →',color:0x4fc3f7,x:0.88,y:0.5}],
    npcs:[
      {id:'partner',sprite:'mgr',label:'Partner Office',gridX:4,gridY:5,
        dlg:{spk:'👔 Partner — McKenzie & Co',color:'var(--accent)',
          txt:'Benvenuta. Qui la carriera è chiara: analyst, senior, manager, partner. Hai 2 anni per dimostrare di avere "executive presence". È difficile da definire, lo so — ma lo riconosciamo quando lo vediamo.',
          chs:[
            {t:'Posso avere esempi concreti di cosa si intende per executive presence?',out:'concrete'},
            {t:'Capisco. Farò del mio meglio per svilupparla.',out:'passive'},
            {t:'Interessante. Chi ha raggiunto partner negli ultimi 5 anni? Posso parlare con loro?',out:'research'},
          ]},
        outs:{
          concrete:{msg:'Hai chiesto criteri concreti su un concetto vago. +CLARITY +VOICE',stat:{CLARITY:2,VOICE:1}},
          passive: {msg:'Hai accettato un criterio opaco. -CLARITY',stat:{CLARITY:-1}},
          research:{msg:'Vai alle fonti primarie. +RADAR +NETWORK',stat:{RADAR:2,NETWORK:1}},
        },
        db:{pat:'"Executive presence" come criterio implicito di esclusione',
          ins:'"Executive presence" è uno dei criteri di promozione più diffusi nelle grandi consulenze — e uno dei meno definiti.',
          data:'Center for Talent Innovation 2012: l\'81% dei senior leader cita "executive presence" come criterio chiave. Solo il 29% sa definirla in modo coerente.'}},
      {id:'sister_cons',sprite:'sis',label:'Sala Caffè',gridX:7,gridY:9,
        dlg:{spk:'❤️ Amina — Senior Manager (Alleata)',color:'#e53935',
          txt:'Hai parlato con il partner, vero? "Executive presence" — sento questa parola almeno 3 volte a settimana. Ascolta: documenta ogni presentazione che fai, chi c\'era, il feedback ricevuto. Io ho costruito un portfolio interno in 18 mesi e l\'ho usato nella mia review.',
          chs:[
            {t:'Questa idea del portfolio interno è concreta. Come l\'hai strutturato?',out:'learn'},
            {t:'Hai mai considerato di portare questo sistema a livello di policy?',out:'systemic'},
            {t:'Apprezzo — ma non voglio essere vista come quella che "fa politica".',out:'fear'},
          ]},
        outs:{
          learn:   {msg:'Hai acquisito una strategia trasferibile. +NETWORK +SKILL',stat:{NETWORK:2,SKILL:1}},
          systemic:{msg:'Pensi al cambiamento strutturale. +NETWORK +CLARITY +RADAR',stat:{NETWORK:2,CLARITY:1,RADAR:2}},
          fear:    {msg:'La paura di sembrare "politica" è reale — ma spesso è esattamente quella che ti frena. +ENERGY -VOICE',stat:{ENERGY:1,VOICE:-1}},
        },
        db:{pat:'La visibilità come lavoro collettivo',
          ins:'Nominare il lavoro delle colleghe nelle riunioni è un atto di alleanza attiva.',
          data:'"Amplification" — documentata nel team Obama alla Casa Bianca. Il numero di interruzioni ai danni delle donne scese del 60% in 6 mesi.'}},
      {id:'double_bind',sprite:'col',label:'Meeting Room',gridX:10,gridY:6,
        dlg:{spk:'👨‍💻 Collega Senior — Alessandro',color:'var(--accent)',
          txt:'Ieri in riunione con il cliente sei stata molto diretta. Il partner mi ha detto che "forse ha un po\' di carattere". Ma la settimana scorsa quando non hai detto la tua sull\'approccio statistico, ti ha definita "poco propositiva". Come fai?',
          chs:[
            {t:'Questo si chiama double bind: qualunque cosa faccia, è sbagliata. Lo nomino.',out:'name'},
            {t:'Forse devo trovare un equilibrio migliore nel tono.',out:'adapt'},
            {t:'Interessante che lo noti anche tu. Hai osservato lo stesso pattern con altri colleghi maschi?',out:'data'},
          ]},
        outs:{
          name:  {msg:'Hai nominato la struttura del problema. +RADAR +VOICE',stat:{RADAR:2,VOICE:1}},
          adapt: {msg:'L\'adattamento individuale non risolve un problema strutturale. +ENERGY -RADAR',stat:{ENERGY:1,RADAR:-1}},
          data:  {msg:'Stai raccogliendo dati comparativi. +RADAR +CLARITY',stat:{RADAR:3,CLARITY:1}},
        },
        db:{pat:'Il double bind: qualunque cosa fai, è sbagliata',
          ins:'Il double bind di genere sul lavoro è uno dei pattern più documentati nella ricerca su donne e leadership.',
          data:'Catalyst Research 2007: le donne in ruoli di leadership vengono valutate negativamente sia quando adottano stili maschili che femminili.'}},
      {id:'tech_cons',sprite:'tech',label:'Analytics Room',gridX:13,gridY:7,
        dlg:{spk:'💻 Scenario Tecnico — Consulenza',color:'var(--warn)',
          txt:'Il cliente ha un churn rate del 28% e vuole capire perché. Hai 2 settimane, accesso a dati transazionali e un\'intervista con il Customer Success team. Da dove inizi?',
          chs:[
            {t:'Costruisco subito un modello di churn prediction con XGBoost e SHAP per l\'interpretabilità.',out:'model_first'},
            {t:'Prima l\'intervista con Customer Success per capire le ipotesi del business, poi EDA, poi il modello — se serve.',out:'business_first'},
            {t:'Definisco la domanda: churn prediction o churn understanding? Sono due problemi diversi con soluzioni diverse.',out:'frame'},
          ]},
        outs:{
          model_first:   {msg:'Il modello viene prima delle domande — rischio classico. +SKILL -CLARITY',stat:{SKILL:1,CLARITY:-1}},
          business_first:{msg:'Approccio corretto. +SKILL +CLARITY',stat:{SKILL:2,CLARITY:1}},
          frame:         {msg:'Problem framing prima del solving. +SKILL +RADAR +CLARITY',stat:{SKILL:1,RADAR:2,CLARITY:2}},
        },
        db:{pat:'Problem framing: la skill più sottovalutata nella data science applicata',
          ins:'"Churn prediction" e "churn understanding" richiedono approcci radicalmente diversi.',
          data:'Gartner 2023: il 60% dei progetti di data science fallisce non per problemi tecnici ma per mismatch tra il problema definito e il problema reale del business.'}},
    ]},
};

// ══════════════════════════════════════════════════════════════
// INNER CRITICS
// ══════════════════════════════════════════════════════════════
const INNER_CRITICS = {
  pmi: {id:'critic',sprite:'crit',
    dlg:{spk:'👻 Inner Critic',color:'var(--danger)',
      txt:'Ehi. Hai sentito cosa ha detto il manager? "Pratico". Forse non sei abbastanza tecnica per questo posto. Giulia è molto più esperta di te. Forse avresti dovuto studiare di più prima di iniziare.',
      chs:[
        {t:'Cosa mi dice concretamente di non sapere fare?',out:'question'},
        {t:'Hai ragione. Devo studiare di più prima di dire la mia.',out:'believe'},
        {t:'Questo è il bias di impostore. Che prove concrete ho delle mie competenze?',out:'reframe'},
      ]},
    outs:{
      question:{msg:'Hai chiesto prove. L\'Inner Critic non ne ha. +CLARITY +RADAR',stat:{CLARITY:2,RADAR:1}},
      believe: {msg:'Hai creduto alla voce senza verificare. -VOICE -CLARITY',stat:{VOICE:-1,CLARITY:-1}},
      reframe: {msg:'Hai riconosciuto il pattern e cercato prove reali. +RADAR +VOICE',stat:{RADAR:3,VOICE:1}},
    },
    db:{pat:'La sindrome dell\'impostore come risposta al sistema, non come difetto personale',
      ins:'La sindrome dell\'impostore colpisce di più le persone in ambienti dove non sono rappresentate. Non è una debolezza — è una risposta adattiva.',
      data:'Clance & Imes (1978, replicato più volte): la sindrome dell\'impostore è più frequente nei gruppi sottorappresentati in quel contesto professionale.'}},
  startup: {id:'critic',sprite:'crit',
    dlg:{spk:'👻 Inner Critic',color:'var(--danger)',
      txt:'Tutte le startup falliscono. Sei l\'unica donna nel team tech. Se qualcosa va storto, tu sarai quella che "non ha funzionato". Forse dovresti stare più bassa — non fare domande difficili.',
      chs:[
        {t:'Stare bassa non mi ha mai protetta. Cosa mi dice questa voce?',out:'analyze'},
        {t:'Forse ha ragione. Meglio non rischiare.',out:'believe'},
        {t:'Se qualcosa va storto sarà per ragioni sistemiche, non perché ho fatto domande.',out:'reframe'},
      ]},
    outs:{
      analyze: {msg:'Hai usato l\'Inner Critic come fonte di informazione, non come verità. +RADAR +CLARITY',stat:{RADAR:2,CLARITY:1}},
      believe: {msg:'Hai internalizzato il messaggio. -VOICE -RADAR',stat:{VOICE:-2,RADAR:-1}},
      reframe: {msg:'Hai separato la tua agency dalla struttura sistemica. +RADAR +VOICE',stat:{RADAR:3,VOICE:1}},
    },
    db:{pat:'Il "last hired, first fired" e la minaccia dello stereotipo',
      ins:'Essere l\'unica donna in un team crea un doppio vincolo: ogni errore viene attribuito al genere, ogni successo alla squadra.',
      data:'MIT Sloan 2020: nei team con una sola donna, i suoi errori hanno il doppio delle probabilità di essere menzionati nelle valutazioni.'}},
  consulenza: {id:'critic',sprite:'crit',
    dlg:{spk:'👻 Inner Critic',color:'var(--danger)',
      txt:'Tutti qui hanno il doppio delle tue referenze. Il partner non ti ha sorriso dopo la presentazione. Probabilmente stai deludendo le aspettative. Forse questo ambiente non fa per te.',
      chs:[
        {t:'Il partner non sorrideva a nessuno — verifico il pattern, non un singolo evento.',out:'evidence'},
        {t:'Forse ha ragione. Non sono tagliata per questo ambiente.',out:'believe'},
        {t:'"Questo ambiente non fa per me" potrebbe essere vero — ma per ragioni diverse da quelle che dice l\'Inner Critic.',out:'nuance'},
      ]},
    outs:{
      evidence:{msg:'Stai usando il pensiero critico contro l\'Inner Critic. +RADAR +CLARITY',stat:{RADAR:2,CLARITY:1}},
      believe: {msg:'Hai generalizzato da un singolo evento. -VOICE -CLARITY',stat:{VOICE:-1,CLARITY:-1}},
      nuance:  {msg:'Hai fatto una distinzione importante. +RADAR +CLARITY',stat:{RADAR:2,CLARITY:2}},
    },
    db:{pat:'La lettura dei segnali sociali e il confirmation bias',
      ins:'La sindrome dell\'impostore porta a leggere selettivamente i segnali negativi e ignorare quelli positivi.',
      data:'Sakulku & Alexander (2011): le persone con alta sindrome dell\'impostore ricordano il 68% dei feedback negativi e il 23% di quelli positivi.'}},
};

// ══════════════════════════════════════════════════════════════
// WORLD INTROS
// ══════════════════════════════════════════════════════════════
const WORLD_INTROS = {
  pmi:{title:'PMI DI SETTORE',emoji:'🏭',
    what:'Piccola o media impresa manifatturiera, food, energy. Meno di 250 dipendenti, spesso a conduzione familiare o semi-familiare.',
    role:'Come data/AI professional in una PMI sei spesso l\'unica persona con il tuo profilo. Lavori su problemi reali — qualità produzione, anomalie, forecast — ma con poca infrastruttura e zero mentorship tecnica.',
    pros:['Esposizione diretta al business reale','Autonomia e visibilità rapida','Impatto misurabile fin da subito'],
    cons:['Poco o nessun mentorship tecnico','Ruoli spesso mal definiti o sovrapposti','Sottoinvestimento in tool e dati'],
    color:'#ffb74d'},
  startup:{title:'STARTUP TECH',emoji:'🚀',
    what:'Early o growth stage. Da 5 a ~100 persone, prodotto digitale o AI, finanziamento VC o bootstrapped.',
    role:'Come data/AI professional in una startup sei al centro del prodotto. Velocità alta, stack moderno, responsabilità anticipate. Ma anche: scope creep, confini assenti, instabilità strutturale.',
    pros:['Tecnologie recenti, ritmo alto','Titoli ambiziosi e ownership reale','Prossimità al prodotto e alle decisioni'],
    cons:['Alta instabilità — molte chiudono entro 3 anni','Credit gap elevato per informalità dei processi','Confine labile tra "autonomia" e mancanza di struttura'],
    color:'#ce93d8'},
  consulenza:{title:'BIG CONSULENZA',emoji:'🏢',
    what:'Grandi società di consulenza (McKinsey, Deloitte, Accenture e simili). Struttura gerarchica, clienti diversificati, carriera definita.',
    role:'Come data/AI professional in consulenza lavori su progetti di 3-18 mesi per clienti diversi. Struttura e brand solidi, esposizione a molti settori — ma rischio di generalismo e criteri di valutazione opachi.',
    pros:['Brand sul CV che apre porte','Struttura di carriera chiara','Rete professionale ampia e multi-settore'],
    cons:['Rischio generalismo: tutto in superficie','Criteri di promozione spesso impliciti','Cultura orientata alle ore fatturabili'],
    color:'#4fc3f7'},
};

// ══════════════════════════════════════════════════════════════
// WORLD 3 — LARGE CORPORATE
// ══════════════════════════════════════════════════════════════
const W3_NPCS = [
  {id:'hr_corp',sprite:'mgr',label:'HR & Performance',gridX:4,gridY:5,
    dlg:{spk:'👔 HR Director — GruppoTech SpA',color:'#4fc3f7',
      txt:'La tua valutazione annuale è domani. Qui usiamo un sistema a 9 box: performance vs potenziale. Il tuo manager ti ha messo in "high performance / medium potential". La ragione? "Non ti vedo ancora pronta per la leadership." Ho il feedback scritto qui, ma è... generico.',
      chs:[
        {t:'Posso vedere il feedback completo e i criteri usati per valutare il "potenziale"?',out:'ask_criteria'},
        {t:'Capisco. Cosa dovrei fare concretamente per migliorare la valutazione del potenziale?',out:'ask_actions'},
        {t:'Interessante. Come sono stati valutati i colleghi con performance simili alla mia?',out:'compare'},
      ]},
    outs:{
      ask_criteria:{msg:'Hai chiesto i criteri. Il sistema di valutazione diventa visibile quando viene interrogato. +VOICE +CLARITY +RADAR',stat:{VOICE:2,CLARITY:1,RADAR:2}},
      ask_actions: {msg:'Approccio pratico — ma accetti criteri opachi. +SKILL',stat:{SKILL:1}},
      compare:     {msg:'Richiedi dati comparativi. +RADAR +VOICE',stat:{RADAR:3,VOICE:1}},
    },
    db:{pat:'Il sistema 9-box e i criteri opachi di "potenziale"',
      ins:'Il framework 9-box è diffuso nelle corporate ma i criteri di "potenziale" sono raramente definiti in modo oggettivo.',
      data:'McKinsey Women in the Workplace 2022: le donne vengono promosse in base alle performance dimostrate, gli uomini in base al potenziale percepito.'}},
  {id:'network_corp',sprite:'col',label:'Networking Informale',gridX:8,gridY:4,
    dlg:{spk:'👨‍💼 Collega Senior — Davide',color:'#4fc3f7',
      txt:'Sai come funziona qui, vero? Le promozioni si decidono al campo da golf e nelle cene post-board. Io sono invitato perché conosco il VP da 10 anni. Non è il sistema migliore, lo so — ma è il sistema. Puoi entrare solo se qualcuno ti porta dentro.',
      chs:[
        {t:'Mi interessa capire come funziona questa rete. Come posso costruire connessioni reali qui?',out:'learn'},
        {t:'Questo sistema mi sembra escludente per definizione. Come lo cambiamo?',out:'challenge'},
        {t:'Capito. Posso chiederti di presentarmi al VP nel contesto giusto?',out:'direct_ask'},
      ]},
    outs:{
      learn:      {msg:'Stai mappando il sistema. +RADAR +NETWORK',stat:{RADAR:2,NETWORK:2}},
      challenge:  {msg:'Nomini il problema strutturale. +VOICE +RADAR',stat:{VOICE:2,RADAR:2}},
      direct_ask: {msg:'Chiedi direttamente. +NETWORK +VOICE',stat:{NETWORK:3,VOICE:1}},
    },
    db:{pat:'La rete informale maschile e il "golf club problem"',
      ins:'Le reti professionali informali nelle large corporate tendono a essere omogenee per genere e background.',
      data:'Catalyst 2021: le donne manager hanno reti professionali il 25% più piccole degli uomini a parità di livello.'}},
  {id:'sister_corp',sprite:'sis',label:'Sala Riunioni B',gridX:6,gridY:8,
    dlg:{spk:'❤️ Francesca — Senior Director (Alleata)',color:'#e53935',
      txt:'Ho lavorato 12 anni qui prima di capire come funziona davvero. Ascolta: il mentore ti consiglia. Lo sponsor spende capitale politico per te — ti nomina nelle stanze dove non sei presente. Io posso essere la tua sponsor. Ma ho bisogno che tu sia visibile.',
      chs:[
        {t:'Questo ha senso. Come strutturiamo questo accordo in modo professionale?',out:'structure'},
        {t:'Grazie. Posso fare lo stesso per te e per altre colleghe?',out:'reciprocal'},
        {t:'Apprezzo molto. Ma voglio capire: cosa guadagni tu da questo?',out:'honest'},
      ]},
    outs:{
      structure:  {msg:'Stai costruendo una relazione professionale solida. +NETWORK +CLARITY',stat:{NETWORK:2,CLARITY:1}},
      reciprocal: {msg:'Pensi in modo sistemico. +NETWORK +RADAR',stat:{NETWORK:3,RADAR:2}},
      honest:     {msg:'Domanda legittima che rafforza la relazione. +NETWORK +VOICE',stat:{NETWORK:2,VOICE:1}},
    },
    db:{pat:'Mentore vs Sponsor: una distinzione che cambia le carriere',
      ins:'Il mentore consiglia, il coach guida, lo sponsor agisce. Le donne hanno più mentori e meno sponsor degli uomini.',
      data:'Hewlett et al., HBR 2010: le donne con sponsor hanno il 22% in più di probabilità di essere promosse.'}},
  {id:'maternity',sprite:'col',label:'Meeting Strategico',gridX:10,gridY:7,
    dlg:{spk:'👩‍💼 Manager — Revisione Team',color:'#4fc3f7',
      txt:'Dobbiamo discutere i piani per il prossimo anno. Sento che sei in un momento... personale. Vogliamo assicurarci che tu possa dedicarti al progetto importante in arrivo. Ho pensato di assegnarlo a Marco, almeno per ora. È solo per supportarti.',
      chs:[
        {t:'Sono pienamente disponibile per il progetto. Possiamo discutere su quale base stai prendendo questa decisione?',out:'push_back'},
        {t:'Apprezzo il pensiero, ma preferisco essere io a dirmi quando ho bisogno di supporto.',out:'agency'},
        {t:'Questa decisione sembra basata su assunzioni sulla mia disponibilità. Possiamo parlarne apertamente?',out:'name_it'},
      ]},
    outs:{
      push_back:{msg:'Hai richiesto trasparenza sui criteri. +VOICE +CLARITY',stat:{VOICE:2,CLARITY:1}},
      agency:   {msg:'Hai rivendicato il diritto di definire i tuoi limiti da sola. +VOICE +RADAR',stat:{VOICE:2,RADAR:1}},
      name_it:  {msg:'Hai nominato il meccanismo — la "protezione" non richiesta. +RADAR +VOICE',stat:{RADAR:3,VOICE:2}},
    },
    db:{pat:'La maternità penalty e la "protezione" non richiesta',
      ins:'La maternità penalty si manifesta spesso come decisioni "protettive" non richieste.',
      data:'Correll, Benard & Paik (AJS, 2007): le madri vengono valutate il 10% meno competenti a CV identico.'}},
  {id:'tech_corp',sprite:'tech',label:'Data Platform Team',gridX:12,gridY:5,
    dlg:{spk:'💻 Scenario Tecnico — Corporate',color:'#f7c46a',
      txt:'Hai 5 stakeholder che vogliono usare lo stesso modello di forecast per scopi diversi: Finance vuole conservatorismo, Sales vuole ottimismo, Operations vuole precisione, CEO vuole un numero solo. Come gestisci?',
      chs:[
        {t:'Costruisco un modello con intervalli di confidenza e creo view diverse per ogni stakeholder — stesso modello, output adattati.',out:'intervals'},
        {t:'Facilito un workshop con tutti gli stakeholder per allineare prima le metriche di successo, poi costruisco.',out:'align_first'},
        {t:'Documento per iscritto le assunzioni richieste da ciascuno e le implicazioni tecniche. La decisione finale è del business, non mia.',out:'document'},
      ]},
    outs:{
      intervals:   {msg:'Soluzione tecnica elegante. +SKILL +CLARITY',stat:{SKILL:2,CLARITY:1}},
      align_first: {msg:'Problem framing prima del solving. +SKILL +NETWORK +RADAR',stat:{SKILL:1,NETWORK:1,RADAR:2}},
      document:    {msg:'Separare responsabilità tecnica da decisione di business è professionalità avanzata. +SKILL +CLARITY +VOICE',stat:{SKILL:1,CLARITY:2,VOICE:1}},
    },
    db:{pat:'Il data scientist come arbitro politico — e come non esserlo',
      ins:'Nelle large corporate il data scientist viene spesso usato per "oggettivare" decisioni già prese.',
      data:'Gartner 2023: il 67% dei data scientist nelle corporate riporta di aver ricevuto pressioni per modificare risultati o assunzioni.'}},
];

// ══════════════════════════════════════════════════════════════
// WORLD 4 — P.IVA / FOUNDER
// ══════════════════════════════════════════════════════════════
const W4_NPCS = [
  {id:'primo_cliente',sprite:'mgr',label:'Prima call cliente',gridX:4,gridY:5,
    dlg:{spk:'🤝 Potenziale Cliente — Primo Contatto',color:'#6af7c8',
      txt:'Il tuo profilo è interessante. Abbiamo bisogno di qualcuno per un progetto AI per 3 mesi. Quanto costa lavorare con te? Ovviamente siamo una startup, non abbiamo budget enterprise. Pensavamo a qualcosa di flessibile — magari con una quota di successo.',
      chs:[
        {t:'La mia tariffa giornaliera è X€. Per 3 mesi full-time è Y. Possiamo discutere la struttura, non il valore del lavoro.',out:'hold_price'},
        {t:'Dipende dal progetto. Possiamo fare una call di discovery gratuita per capire lo scope?',out:'discovery'},
        {t:'Capisco il contesto startup. Cosa intendi per "quota di successo"? Ho bisogno di capire i rischi che mi chiedi di condividere.',out:'ask_terms'},
      ]},
    outs:{
      hold_price:{msg:'Hai ancorato il prezzo senza scusarti. +VOICE +NETWORK',stat:{VOICE:2,NETWORK:1}},
      discovery: {msg:'Proteggi il tuo tempo con una struttura. +CLARITY',stat:{CLARITY:1}},
      ask_terms: {msg:'Hai chiesto chiarezza sui rischi prima di accettare. +RADAR +CLARITY +VOICE',stat:{RADAR:2,CLARITY:1,VOICE:1}},
    },
    db:{pat:'Il pricing del proprio lavoro e il bias di svalutazione',
      ins:'Le freelance donna quotano in media il 18-26% in meno degli uomini per servizi equivalenti.',
      data:'Fiverr & Payoneer Global Freelancer Survey 2023: le freelance donna guadagnano in media il 22% in meno degli uomini a parità di categoria e rating.'}},
  {id:'scope_creep',sprite:'col',label:'Progetto in corso',gridX:8,gridY:4,
    dlg:{spk:'📱 Cliente — WhatsApp alle 22:30',color:'#6af7c8',
      txt:'Ciao! Scusa l\'orario. Domani abbiamo una demo con gli investitori. Avremmo bisogno di aggiungere anche un\'analisi predittiva al dashboard — è solo una cosa veloce. Puoi farlo stanotte? Sei sempre così disponibile, sei fantastica!',
      chs:[
        {t:'Non lavoro fuori dall\'orario concordato. Possiamo pianificare questa aggiunta come una nuova richiesta con tempo e compenso adeguati.',out:'boundary'},
        {t:'Posso valutare cosa è fattibile domani mattina presto, ma è fuori dallo scope originale — ci sarà un extra.',out:'partial'},
        {t:'Ok, ci provo. Ma dobbiamo poi parlare di come gestiamo le richieste urgenti.',out:'accept'},
      ]},
    outs:{
      boundary:{msg:'Hai tenuto il confine in modo professionale. +VOICE +ENERGY',stat:{VOICE:2,ENERGY:2}},
      partial: {msg:'Compromesso ragionevole. +ENERGY -CLARITY',stat:{ENERGY:1,CLARITY:-1}},
      accept:  {msg:'Hai ceduto. Il cliente ha imparato che funziona. -ENERGY -VOICE',stat:{ENERGY:-2,VOICE:-1}},
    },
    db:{pat:'Lo scope creep e i confini professionali nel lavoro autonomo',
      ins:'Lo scope creep è uno dei pattern più costosi per chi lavora in autonomia.',
      data:'Freelancers Union Annual Survey 2023: il 77% dei freelance riporta scope creep regolare.'}},
  {id:'sister_piva',sprite:'sis',label:'Community Online',gridX:6,gridY:8,
    dlg:{spk:'❤️ Sara — Freelance Senior AI (Alleata)',color:'#e53935',
      txt:'Ho costruito una rete di 12 freelance donna in AI con cui condivido clienti, referenze, e pricing. Quando un cliente mi paga poco o si comporta male, lo segnalo alle altre. Quando ho troppo lavoro, passo i contatti. È sopravvivenza collettiva. Vuoi entrare?',
      chs:[
        {t:'Sì, assolutamente. Come posso contribuire attivamente alla rete?',out:'join_active'},
        {t:'Mi interessa molto. Come gestite la condivisione delle informazioni sui clienti — c\'è una policy?',out:'ask_structure'},
        {t:'Sono un po\' in difficoltà ad aprirmi — ho paura della concorrenza tra di noi.',out:'fear'},
      ]},
    outs:{
      join_active:   {msg:'Entri nella rete con intenzione di dare, non solo ricevere. +NETWORK +ENERGY',stat:{NETWORK:3,ENERGY:1}},
      ask_structure: {msg:'Vuoi capire le regole prima di impegnarti. +NETWORK +CLARITY',stat:{NETWORK:2,CLARITY:1}},
      fear:          {msg:'La paura della concorrenza è reale — ma le freelance che collaborano guadagnano di più. +RADAR',stat:{RADAR:2}},
    },
    db:{pat:'La rete come infrastruttura di sopravvivenza per il lavoro autonomo',
      ins:'Per chi lavora in autonomia, la rete professionale non è un optional — è infrastruttura.',
      data:'Leatherbee & Eesley (2014): le imprenditrici con reti professionali dense hanno probabilità di sopravvivenza dell\'impresa il 34% più alta nei primi 3 anni.'}},
  {id:'investitori',sprite:'mgr',label:'Pitch Meeting',gridX:10,gridY:6,
    dlg:{spk:'💼 Investitore — VC Fund',color:'#6af7c8',
      txt:'Interessante progetto. Ma ho qualche preoccupazione: sei sola, senza co-founder tecnico. Come scali? E scusa — hai esperienza di vendita? Perché per crescere serve qualcuno che sappia vendere.',
      chs:[
        {t:'Sono co-founder tecnica e business. Ho già X clienti paganti. Le domande che mi stai facendo le faresti a un fondatore uomo con il mio profilo?',out:'challenge'},
        {t:'Ho un advisor tecnico senior. La trazione parla: X€ ARR in Y mesi, zero churn. Possiamo parlare dei numeri?',out:'metrics'},
        {t:'Capisco la preoccupazione sul team. Sto attivamente costruendo il team — posso mostrarti i profili che sto valutando.',out:'team'},
      ]},
    outs:{
      challenge:{msg:'Hai nominato il doppio standard direttamente. +VOICE +RADAR',stat:{VOICE:2,RADAR:2}},
      metrics:  {msg:'Hai spostato la conversazione sui dati. +CLARITY +SKILL',stat:{CLARITY:2,SKILL:1}},
      team:     {msg:'Risposta solida — ma hai accettato il framing del problema. +CLARITY',stat:{CLARITY:1}},
    },
    db:{pat:'Il gender gap nel funding e i criteri di valutazione asimmetrici',
      ins:'Le founder donna ricevono domande diverse nei pitch rispetto agli uomini: più domande "preventive" vs domande "promozionali".',
      data:'Pitchbook 2023: solo il 2.1% del VC europeo è andato a team tutti-femminili, il 15.6% a team misti.'}},
  {id:'tech_piva',sprite:'tech',label:'Proposta Tecnica',gridX:13,gridY:8,
    dlg:{spk:'💻 Scenario Tecnico — P.IVA',color:'#f7c46a',
      txt:'Un cliente ti chiede una proposta per "implementare AI nel loro processo di selezione CV". Budget: 15k€. Timeline: 6 settimane. Non hanno dati storici strutturati. Cosa proponi?',
      chs:[
        {t:'Con questi vincoli, propongo un sistema rule-based + NLP leggero per un primo filtro, con revisione umana obbligatoria.',out:'pragmatic'},
        {t:'Prima di proporre qualsiasi soluzione tecnica, devo capire cosa intendono per "migliorare la selezione".',out:'frame_first'},
        {t:'Devo essere diretta: l\'AI nella selezione CV senza dati storici e senza audit di bias è un rischio legale e reputazionale per loro.',out:'honest_risk'},
      ]},
    outs:{
      pragmatic:   {msg:'Soluzione onesta e fattibile nei vincoli. +SKILL +CLARITY',stat:{SKILL:2,CLARITY:1}},
      frame_first: {msg:'Stai proteggendo il cliente da una soluzione al problema sbagliato. +SKILL +RADAR +CLARITY',stat:{SKILL:1,RADAR:2,CLARITY:2}},
      honest_risk: {msg:'Massima onestà professionale. +VOICE +RADAR +NETWORK',stat:{VOICE:2,RADAR:2,NETWORK:1}},
    },
    db:{pat:'Il bias algoritmico nelle HR tech e la responsabilità del consulente',
      ins:'I sistemi di screening CV addestrati su dati storici tendono a replicare i bias di chi ha assunto in passato.',
      data:'Amazon ha ritirato il suo sistema di screening CV nel 2018 dopo aver scoperto che penalizzava sistematicamente le candidate donne.'}},
];

const WORLD_DEFS_NEW = {
  corporate:{
    label:'WORLD 3 · LARGE CORPORATE',
    palette:{floor:0x0a1810,wall:0x142a18,accent:0x1e4a28,bg:0x050e08},
    exits:[{id:'piva',label:'P.IVA / FOUNDER →',color:0x6af7c8,x:0.88,y:0.55}],
    npcs:W3_NPCS,
  },
  piva:{
    label:'WORLD 4 · P.IVA & FOUNDER',
    palette:{floor:0x081e18,wall:0x103028,accent:0x185040,bg:0x040f0c},
    exits:[{id:'end_piva',label:'FINE →',color:0x6af7c8,x:0.88,y:0.55}],
    npcs:W4_NPCS,
  },
};

const WORLD_INTROS_NEW = {
  corporate:{title:'LARGE CORPORATE',emoji:'🏗️',
    what:'Grandi aziende con più di 1000 dipendenti — manifatturiero, finance, telco, energy. Struttura gerarchica complessa, budget importanti, processi consolidati.',
    role:'Come data/AI professional in una large corporate hai accesso a dati reali su larga scala e risorse che le PMI non hanno. Ma le decisioni sono lente, la politica interna è reale, e le opportunità dipendono spesso da chi ti conosce.',
    pros:['Dati e infrastruttura reale','Stabilità e benefit','Possibilità di specializzazione profonda'],
    cons:['Burocrazia e lentezza decisionale','Avanzamento spesso per anzianità o rete','Criteri di "potenziale" spesso opachi e distorti'],
    color:'#4fc3f7'},
  piva:{title:'P.IVA & FOUNDER',emoji:'💡',
    what:'Lavoro autonomo come consulente, freelance specializzata, o founder di una micro-impresa AI. Massima autonomia, massima responsabilità.',
    role:'Sei tu il prodotto, il team di vendita, e l\'HR. Le tue competenze tech diventano un business. NETWORK è la tua risorsa più preziosa — più del codice che sai scrivere.',
    pros:['Autonomia totale su progetti e clienti','Tariffa potenzialmente più alta','Costruisci qualcosa di tuo'],
    cons:['Instabilità del reddito','Isolamento — nessun team, nessuna struttura','Ogni confine professionale lo devi proteggere tu'],
    color:'#6af7c8'},
};

const INNER_CRITICS_NEW = {
  corporate:{id:'critic',sprite:'crit',
    dlg:{spk:'👻 Inner Critic',color:'#f76a6a',
      txt:'Hai sentito? Ti hanno messo "medium potential". Dopo tutto quello che hai fatto. Forse non sei il tipo di persona che "brilla" nei contesti strutturati. Forse non hai il carattere giusto per arrivare in alto qui.',
      chs:[
        {t:'"Medium potential" secondo criteri che non mi sono stati spiegati. Questo non è un dato — è un\'opinione.',out:'reframe'},
        {t:'Forse hanno ragione. Non mi vedo come una "leader".',out:'believe'},
        {t:'Cosa succederebbe se chiedessi esattamente su cosa sono stata valutata?',out:'action'},
      ]},
    outs:{
      reframe:{msg:'Hai distinto tra valutazione e verità. +RADAR +CLARITY',stat:{RADAR:2,CLARITY:1}},
      believe:{msg:'Hai internalizzato un\'opinione come fatto. -VOICE -CLARITY',stat:{VOICE:-1,CLARITY:-1}},
      action: {msg:'Trasformi l\'ansia in azione concreta. +VOICE +CLARITY',stat:{VOICE:1,CLARITY:2}},
    },
    db:{pat:'Il "medium potential" e il bias nelle valutazioni di leadership',
      ins:'"Non la vedo come una leader" è uno dei feedback più comuni e meno utili nelle corporate.',
      data:'Cecchi-Dimeglio et al., Harvard Law School 2017: le donne ricevono il 2.5x più feedback sulla personalità rispetto agli uomini.'}},
  piva:{id:'critic',sprite:'crit',
    dlg:{spk:'👻 Inner Critic',color:'#f76a6a',
      txt:'Chi ti credi di essere per farti pagare X€ al giorno? Ci sono persone con 10 anni di esperienza che chiedono meno. Forse stai sopravvalutando quello che vali.',
      chs:[
        {t:'La mia tariffa riflette il valore che creo, non quello che gli altri si fanno pagare.',out:'reframe'},
        {t:'Forse dovrei abbassare un po\'... per essere più competitiva.',out:'believe'},
        {t:'Chi sono i "altri" con cui mi confronto? Come so che la loro tariffa è il benchmark giusto?',out:'question'},
      ]},
    outs:{
      reframe: {msg:'Hai ancorato il valore all\'output, non al mercato. +VOICE +CLARITY',stat:{VOICE:2,CLARITY:1}},
      believe: {msg:'Hai ceduto al confronto verso il basso. -VOICE -NETWORK',stat:{VOICE:-2,NETWORK:-1}},
      question:{msg:'Hai messo in discussione il benchmark stesso. +RADAR +CLARITY',stat:{RADAR:2,CLARITY:1}},
    },
    db:{pat:'Il benchmark di pricing e il confronto verso il basso',
      ins:'Il confronto con chi si fa pagare meno è la trappola più comune per i nuovi freelance.',
      data:'Fiverr Professional Survey 2023: i freelance che aumentano la tariffa del 30% perdono in media il 10% dei clienti ma aumentano il revenue del 17%.'}},
};

Object.assign(WORLD_DEFS, WORLD_DEFS_NEW);
Object.assign(WORLD_INTROS, WORLD_INTROS_NEW);
Object.assign(INNER_CRITICS, INNER_CRITICS_NEW);
WORLD_DEFS.startup.exits   = [{id:'corporate',label:'CORPORATE →',color:0x4fc3f7,x:0.88,y:0.55}];
WORLD_DEFS.consulenza.exits = [{id:'corporate',label:'CONSULENZA → CORPORATE',color:0x4fc3f7,x:0.88,y:0.55}];

// ══════════════════════════════════════════════════════════════
// PMI ADDITIONS
// ══════════════════════════════════════════════════════════════
const PMI_ADDITIONS = [
  {id:'pmi_ceo',sprite:'mgr',label:'Direzione',type:'npc',required:false,gridX:3,gridY:8,
    dlg:{spk:'👔 CEO — PMI MetalTech',color:'#ffb74d',
      txt:'Brava ragazza. Sai che mia figlia studia anche lei informatica? Sei un ottimo esempio per lei. Comunque — sei brava ma sei anche giovane. Forse tra qualche anno quando hai più esperienza possiamo valutare un ruolo più senior.',
      chs:[
        {t:'"Giovane" e "esperienza" sono criteri diversi. Posso chiederti quali risultati specifici mancano alla mia valutazione?',out:'ask'},
        {t:'Capisco, grazie per la considerazione.',out:'accept'},
        {t:'Questo tipo di commento mi aiuterebbe di più se fosse ancorato a KPI concreti, non all\'età.',out:'direct'},
      ]},
    outs:{
      ask:   {msg:'Hai spostato la conversazione su criteri oggettivi. +CLARITY +VOICE',stat:{CLARITY:2,VOICE:1}},
      accept:{msg:'Hai accettato un veto non motivato. -VOICE',stat:{VOICE:-1}},
      direct:{msg:'Hai nominato il problema con precisione. +VOICE +RADAR',stat:{VOICE:2,RADAR:2}},
    },
    db:{pat:'L\'ageismo come proxy del sessismo nei ruoli tech',
      ins:'"Sei giovane" è spesso codice per "sei donna" in contesti dove uomini della stessa età vengono promossi.',
      data:'Bain & Company 2021: le donne raggiungono i ruoli manageriali in media 2.3 anni dopo i colleghi uomini con gli stessi anni di esperienza.'}},
  {id:'pmi_cliente',sprite:'col',label:'Call con Cliente',type:'npc',required:false,gridX:11,gridY:4,
    dlg:{spk:'📞 Cliente Esterno — Ing. Rossi',color:'#ffb74d',
      txt:'Bene, bene. Ma senta — posso parlare con il suo responsabile? Non ho niente contro di lei, ma per questo tipo di decisione tecnica preferisco confrontarmi con qualcuno di più... esperto. Sa com\'è.',
      chs:[
        {t:'Sono io la responsabile di questo progetto. Le competenze che cerca sono le mie.',out:'hold'},
        {t:'Certamente, le passo il mio manager.',out:'step_back'},
        {t:'Posso chiederle cosa intende per "più esperto"? Voglio capire se c\'è una lacuna specifica.',out:'probe'},
      ]},
    outs:{
      hold:     {msg:'Hai tenuto la posizione con chiarezza. +VOICE +SKILL',stat:{VOICE:2,SKILL:1}},
      step_back:{msg:'Hai ceduto. -VOICE -CLARITY',stat:{VOICE:-2,CLARITY:-1}},
      probe:    {msg:'Hai reso visibile il bias chiedendo criteri. +RADAR +VOICE',stat:{RADAR:2,VOICE:1}},
    },
    db:{pat:'Il "parlare con il responsabile" come svalutazione dell\'expertise femminile',
      ins:'Richiedere di parlare con un superiore quando l\'interlocutrice è donna è un pattern documentato in contesti B2B.',
      data:'Journal of Applied Psychology 2019: le professioniste vengono reindirizzate a superiori maschili il 34% più spesso dei colleghi uomini.'}},
  {id:'pmi_sis2',sprite:'sis',label:'Pausa Caffè',type:'sis',required:false,gridX:9,gridY:9,
    dlg:{spk:'❤️ Marta — Responsabile Qualità (Alleata)',color:'#e53935',
      txt:'Ho sentito cosa ti ha detto il CEO. Succede sempre così — io sono qui da 8 anni e ogni anno mi dicono "aspetta ancora". Ho imparato a costruire la mia visibilità diversamente: ogni risultato lo metto per iscritto, ogni meeting importante ho qualcuno che mi cita.',
      chs:[
        {t:'Sì, assolutamente. Cosa ha funzionato meglio per te?',out:'learn'},
        {t:'Grazie. Ma non mi piace dover "giocare" questo tipo di gioco.',out:'resist'},
        {t:'Costruiamo qualcosa insieme — documentiamo i risultati del team in modo sistematico.',out:'systemic'},
      ]},
    outs:{
      learn:   {msg:'Hai acquisito tattiche concrete da chi ha esperienza diretta. +NETWORK +SKILL',stat:{NETWORK:2,SKILL:1}},
      resist:  {msg:'La resistenza è legittima — ma il gioco si gioca comunque. +RADAR -ENERGY',stat:{RADAR:1,ENERGY:-1}},
      systemic:{msg:'Proponi un sistema che aiuta tutto il team. +NETWORK +CLARITY +RADAR',stat:{NETWORK:2,CLARITY:1,RADAR:1}},
    },
    db:{pat:'La visibilità come lavoro strategico nelle PMI',
      ins:'Nelle PMI la visibilità non arriva automaticamente — si costruisce.',
      data:'Catalyst 2020: le donne che hanno almeno una alleata attiva hanno il 31% in più di probabilità di essere valutate positivamente nelle review annuali.'}},
  {id:'pmi_tech2',sprite:'tech',label:'Impianto',type:'tech',required:false,gridX:5,gridY:9,
    dlg:{spk:'💻 Sfida Tecnica — PMI 2',color:'#f7c46a',
      txt:'Il responsabile di produzione vuole un sistema di predictive maintenance per ridurre i fermi macchina. Hai dati di vibrazione degli ultimi 6 mesi, campionati ogni 5 minuti. Budget: 8k€. Non c\'è MLOps, non c\'è cloud. Proponi.',
      chs:[
        {t:'Implemento un modello di anomaly detection (Isolation Forest o LSTM) su edge device locale.',out:'edge'},
        {t:'Prima definisco con il responsabile quali fermi vogliamo prevenire e con che anticipo — poi scelgo il modello.',out:'frame'},
        {t:'Con 6 mesi di dati e budget limitato, propongo regole statistiche (z-score rolling) — interpretabili e manutenibili.',out:'simple'},
      ]},
    outs:{
      edge:  {msg:'Soluzione tecnica corretta ma complessa per il contesto. +SKILL',stat:{SKILL:1}},
      frame: {msg:'Business first. +SKILL +CLARITY +RADAR',stat:{SKILL:1,CLARITY:2,RADAR:1}},
      simple:{msg:'La soluzione semplice e manutenibile batte il modello ML in contesti senza infrastruttura. +SKILL +CLARITY',stat:{SKILL:2,CLARITY:1}},
    },
    db:{pat:'Predictive maintenance nelle PMI: il divario tra teoria e pratica',
      ins:'I progetti di predictive maintenance nelle PMI falliscono spesso per complessità tecnica eccessiva.',
      data:'McKinsey Manufacturing Analytics 2022: il 60% dei progetti ML in ambito manifatturiero nelle PMI non raggiunge la produzione.'}},
];

// ══════════════════════════════════════════════════════════════
// STARTUP ADDITIONS
// ══════════════════════════════════════════════════════════════
const STARTUP_ADDITIONS = [
  {id:'startup_investitore',sprite:'mgr',label:'Pitch room',type:'npc',required:false,gridX:3,gridY:8,
    dlg:{spk:'💼 Angel Investor',color:'#ce93d8',
      txt:'Il vostro prodotto è interessante. Ma dimmi — chi è il tecnico vero del team? Ho bisogno di capire chi scrive il codice. Il CEO mi ha detto che sei tu, ma... avete pensato a prendere un CTO più senior?',
      chs:[
        {t:'Sono io l\'architetta tecnica. Posso mostrarti l\'architettura e il codice se vuoi validare la scelta.',out:'show'},
        {t:'Stiamo valutando di espandere il team tecnico — possiamo parlarne dopo la due diligence?',out:'deflect'},
        {t:'Interessante domanda. Hai mai chiesto la stessa cosa a un founder maschio con il mio profilo?',out:'challenge'},
      ]},
    outs:{
      show:     {msg:'Lasci parlare il lavoro. +SKILL +VOICE',stat:{SKILL:2,VOICE:1}},
      deflect:  {msg:'Hai evitato il confronto. +ENERGY -RADAR',stat:{ENERGY:1,RADAR:-1}},
      challenge:{msg:'Hai nominato il doppio standard. +VOICE +RADAR',stat:{VOICE:2,RADAR:2}},
    },
    db:{pat:'Il "chi è il tecnico vero" nei pitch con founder donna',
      ins:'Le founder donna vengono interrogate sulla propria competenza tecnica sistematicamente più degli uomini con background equivalente.',
      data:'First Round Capital 2015: le startup con almeno una founder donna hanno performato il 63% meglio di quelle con soli fondatori uomini.'}},
  {id:'startup_burnout',sprite:'col',label:'Stand-up mattutino',type:'npc',required:false,gridX:11,gridY:8,
    dlg:{spk:'😮‍💨 Collega — Luca (esausto)',color:'#ce93d8',
      txt:'Hai visto che il founder ha detto che lavoriamo il weekend prossimo? "Siamo in un momento critico". È il terzo weekend di fila. Io non riesco a dire no — sento che se non lo faccio sembro meno committed. Tu come gestisci?',
      chs:[
        {t:'"Committed" e "disponibile 24/7" non sono la stessa cosa. Ho imparato a distinguere urgenza reale da urgenza culturale.',out:'reframe'},
        {t:'Anche io faccio fatica. Penso che dobbiamo parlarne come team col founder.',out:'collective'},
        {t:'Io lavoro il weekend se il progetto lo richiede davvero, ma ho imparato a chiedere sempre: urgente per cosa, entro quando.',out:'criteria'},
      ]},
    outs:{
      reframe:   {msg:'Hai distinto urgenza reale da cultura del sempre-disponibile. +CLARITY +ENERGY',stat:{CLARITY:2,ENERGY:1}},
      collective:{msg:'Proponi una soluzione collettiva. +NETWORK +VOICE',stat:{NETWORK:1,VOICE:2}},
      criteria:  {msg:'Strumento pratico: rendere visibili i criteri dell\'urgenza. +CLARITY +RADAR +SKILL',stat:{CLARITY:1,RADAR:2,SKILL:1}},
    },
    db:{pat:'La cultura del crunch nelle startup e il suo costo asimmetrico',
      ins:'La cultura del "always on" colpisce in modo asimmetrico: le donne con responsabilità di cura la subiscono di più.',
      data:'Blind Survey Tech Workers 2023: il 58% dei dipendenti di startup riporta burnout. Le donne lo riportano il 18% più frequentemente degli uomini.'}},
  {id:'startup_sis2',sprite:'sis',label:'Terrazza',type:'sis',required:false,gridX:5,gridY:9,
    dlg:{spk:'❤️ Chiara — Product Manager (Alleata)',color:'#e53935',
      txt:'Ho notato che nelle riunioni del team le tue proposte spesso vengono ignorate, e poi le ripropone qualcun altro e tutti le adorano. Ho iniziato a tenere un log di queste situazioni. Vuoi che lo facciamo insieme sistematicamente?',
      chs:[
        {t:'Sì — documentare è il primo passo per rendere visibile quello che succede. Come lo strutturi?',out:'yes'},
        {t:'Non voglio sembrare paranoica o in cerca di conflitti.',out:'fear'},
        {t:'Potremmo usare questo log anche per proporre al founder un sistema di attribuzione delle idee più esplicito.',out:'systemic'},
      ]},
    outs:{
      yes:     {msg:'Hai scelto di documentare. +NETWORK +CLARITY',stat:{NETWORK:2,CLARITY:1}},
      fear:    {msg:'La paura di sembrare "difficile" è esattamente quello che rende il pattern invisibile. +RADAR -VOICE',stat:{RADAR:1,VOICE:-1}},
      systemic:{msg:'Dal log individuale a una policy di team. +NETWORK +RADAR +CLARITY',stat:{NETWORK:2,RADAR:2,CLARITY:1}},
    },
    db:{pat:'Il "manterrupting" e l\'appropriazione delle idee nelle startup',
      ins:'Il manterrupting e l\'appropriazione delle idee sono tra i comportamenti più frequentemente riportati nelle startup tech.',
      data:'LeanIn.org 2022: il 64% delle donne in startup tech riporta di aver avuto idee attribuite a colleghi uomini almeno una volta nell\'ultimo anno.'}},
  {id:'startup_tech2',sprite:'tech',label:'Board meeting',type:'tech',required:false,gridX:14,gridY:5,
    dlg:{spk:'💻 Sfida Tecnica — Startup 2',color:'#f7c46a',
      txt:'Il board vuole vedere le metriche di "engagement" dell\'app AI. Il problema: le metriche attuali (DAU, session length) non catturano se il prodotto sta effettivamente aiutando gli utenti. Come riprogetti il sistema di misurazione?',
      chs:[
        {t:'Propongo outcome metrics: per ogni use case, misuro se l\'utente ha raggiunto l\'obiettivo dichiarato.',out:'outcome'},
        {t:'Introduco una North Star Metric legata al valore business e la decompongo in leading indicators misurabili.',out:'north_star'},
        {t:'Faccio prima user research qualitativa per capire cosa "aiutare" significa per gli utenti reali.',out:'research'},
      ]},
    outs:{
      outcome:   {msg:'Task completion > session length. +SKILL +CLARITY',stat:{SKILL:2,CLARITY:1}},
      north_star:{msg:'Framework classico ma solido. +SKILL +RADAR',stat:{SKILL:2,RADAR:1}},
      research:  {msg:'Research before metrics. +SKILL +CLARITY +RADAR',stat:{SKILL:1,CLARITY:2,RADAR:2}},
    },
    db:{pat:'Vanity metrics vs outcome metrics nei prodotti AI',
      ins:'Le metriche di engagement misurano l\'uso, non il valore.',
      data:'"Goodhart\'s Law: when a measure becomes a target, it ceases to be a good measure." — Charles Goodhart (1975).'}},
];

// ══════════════════════════════════════════════════════════════
// CONSULENZA ADDITIONS
// ══════════════════════════════════════════════════════════════
const CONSULENZA_ADDITIONS = [
  {id:'cons_junior',sprite:'col',label:'Team room',type:'npc',required:false,gridX:3,gridY:8,
    dlg:{spk:'👨‍💼 Junior Analyst — Matteo',color:'#4fc3f7',
      txt:'Ho bisogno di aiuto con questa analisi. Sai come funziona qui — i senior non hanno tempo. Posso venire da te? Sei sempre così disponibile e brava a spiegare.',
      chs:[
        {t:'Posso aiutarti questa volta, ma parliamo anche di come il team distribuisce il mentoring — non dovrebbe essere solo mio.',out:'boundary_system'},
        {t:'Certo, vieni pure. Di cosa hai bisogno?',out:'yes'},
        {t:'Posso dedicarti 30 minuti mercoledì — prenota nel mio calendario.',out:'structure'},
      ]},
    outs:{
      boundary_system:{msg:'Aiuti e nomini il problema strutturale insieme. +VOICE +NETWORK +CLARITY',stat:{VOICE:1,NETWORK:1,CLARITY:1}},
      yes:            {msg:'Aiuti senza confini. +ENERGY -CLARITY',stat:{ENERGY:1,CLARITY:-1}},
      structure:      {msg:'Confine professionale con disponibilità reale. +VOICE +ENERGY',stat:{VOICE:1,ENERGY:1}},
    },
    db:{pat:'Il mentoring non pagato come aspettativa implicita verso le donne',
      ins:'Nelle consulenze, il mentoring informale dei junior tende a ricadere in modo sproporzionato sulle donne senior.',
      data:'HBR 2018: nelle grandi consulenze, le donne partner dedicano in media 200 ore/anno in più dei colleghi maschi ad attività di mentoring informale non riconosciute.'}},
  {id:'cons_salary',sprite:'mgr',label:'HR meeting',type:'npc',required:false,gridX:12,gridY:8,
    dlg:{spk:'👔 HR Senior — Compensation review',color:'#4fc3f7',
      txt:'Abbiamo fatto la nostra analisi. La tua compensation è in linea con il peer group. Ah — giusto per trasparenza: "peer group" include tutti gli analyst dello stesso livello. Non possiamo condividere i singoli dati.',
      chs:[
        {t:'Posso vedere la distribuzione del peer group — media, mediana, range? Senza nomi, solo statistiche.',out:'data'},
        {t:'Capisco. Posso chiederti allora quali sono i criteri per passare al livello successivo?',out:'redirect'},
        {t:'Ho fatto la mia ricerca di mercato — i dati di Glassdoor e Levels.fyi mostrano un range diverso. Possiamo parlarne?',out:'external'},
      ]},
    outs:{
      data:    {msg:'Chiedi dati aggregati. +VOICE +CLARITY',stat:{VOICE:2,CLARITY:1}},
      redirect:{msg:'Sposti il focus sulla progressione. +CLARITY +RADAR',stat:{CLARITY:1,RADAR:1}},
      external:{msg:'Usi dati di mercato come leverage. +VOICE +SKILL',stat:{VOICE:2,SKILL:1}},
    },
    db:{pat:'Il gender pay gap nelle consulenze e come negoziare con dati',
      ins:'La mancanza di trasparenza salariale è il meccanismo principale attraverso cui il gender pay gap si mantiene nelle consulenze.',
      data:'Deloitte Global 2022: il gender pay gap medio nelle big 4 della consulenza è dell\'8-12% al livello analyst/senior analyst.'}},
  {id:'cons_sis2',sprite:'sis',label:'Sala break',type:'sis',required:false,gridX:8,gridY:9,
    dlg:{spk:'❤️ Valeria — Manager (Alleata)',color:'#e53935',
      txt:'Stai facendo un ottimo lavoro sul progetto. Ho una proposta: ti nomino nella review del Q3 davanti al partner — ma ho bisogno che tu mi aiuti a fare lo stesso con Laila, che sta lavorando benissimo ma è invisibile. Creiamo un circolo di mutuo riconoscimento.',
      chs:[
        {t:'Sì — e proponiamo al partner di formalizzare questo tipo di peer recognition nel processo di review.',out:'systemic'},
        {t:'Certo, con piacere. Come funziona concretamente?',out:'learn'},
        {t:'Sono dentro. Aggiungiamo anche una collega junior che merita visibilità.',out:'expand'},
      ]},
    outs:{
      systemic:{msg:'Proponi di istituzionalizzare il circolo. +NETWORK +RADAR +CLARITY',stat:{NETWORK:2,RADAR:2,CLARITY:1}},
      learn:   {msg:'Entri nel sistema con intenzione di contribuire. +NETWORK +ENERGY',stat:{NETWORK:2,ENERGY:1}},
      expand:  {msg:'Estendi il cerchio verso chi è più indietro. +NETWORK +RADAR',stat:{NETWORK:3,RADAR:1}},
    },
    db:{pat:'Il circolo di mutuo riconoscimento come antidoto al credit gap',
      ins:'Il mutuo riconoscimento è una delle strategie più documentate contro il credit gap nelle consulenze.',
      data:'Amplification strategy documentata nel team femminile di Obama alla Casa Bianca (Washington Post, 2016).'}},
  {id:'cons_tech2',sprite:'tech',label:'Client workshop',type:'tech',required:false,gridX:14,gridY:4,
    dlg:{spk:'💻 Sfida Tecnica — Consulenza 2',color:'#f7c46a',
      txt:'Il cliente retail vuole un sistema di "AI personalizzazione" per aumentare le vendite. Ha 3 anni di dati transazionali e un team IT di 2 persone. Il budget è 200k€. Il partner ha già promesso "un sistema simile ad Amazon". Come gestisci le aspettative?',
      chs:[
        {t:'Costruisco un sistema di collaborative filtering solido — e documento esplicitamente cosa non è "come Amazon".',out:'build_honest'},
        {t:'Prima di toccare il codice, facilito una sessione con il partner e il cliente per riallineare le aspettative su cosa è fattibile.',out:'realign'},
        {t:'Propongo un proof of concept in 6 settimane su un segmento prodotto — risultati reali prima di promesse più grandi.',out:'poc'},
      ]},
    outs:{
      build_honest:{msg:'Costruisci e documenti onestamente. +SKILL +CLARITY',stat:{SKILL:2,CLARITY:1}},
      realign:     {msg:'Gestisci le aspettative prima ancora di iniziare. +CLARITY +RADAR +VOICE',stat:{CLARITY:2,RADAR:1,VOICE:1}},
      poc:         {msg:'PoC prima delle grandi promesse. +SKILL +CLARITY',stat:{SKILL:1,CLARITY:2}},
    },
    db:{pat:'Il "gap tra promessa e delivery" nei progetti AI in consulenza',
      ins:'La vendita di progetti AI con promesse eccessive è uno dei pattern più critici nelle consulenze.',
      data:'Gartner Hype Cycle for AI 2023: l\'85% delle aziende che iniziano progetti di "AI personalizzazione" di ampia scala senza un PoC preliminare riporta mancato raggiungimento degli obiettivi dichiarati.'}},
];

// ══════════════════════════════════════════════════════════════
// CORPORATE ADDITIONS
// ══════════════════════════════════════════════════════════════
const CORPORATE_ADDITIONS = [
  {id:'corp_riunione',sprite:'col',label:'Board prep',type:'npc',required:false,gridX:3,gridY:8,
    dlg:{spk:'👨‍💼 Collega — Riccardo',color:'#81c784',
      txt:'Ho visto che domani presenti al board. Sai che in questa azienda il modo in cui presenti conta quanto i contenuti? I board member vogliono brevità, sicurezza, e "headline first".',
      chs:[
        {t:'Grazie del feedback. Puoi mostrarmi una presentazione che ha funzionato bene con questo board?',out:'learn'},
        {t:'Apprezzo il consiglio. Hai notato se ci sono differenze in come i board member reagiscono a uomini e donne?',out:'probe'},
        {t:'Ho preparato una struttura pyramid principle — conclusione prima, poi evidenza. Posso condividertela per un feedback?',out:'share'},
      ]},
    outs:{
      learn:{msg:'Impari dal contesto specifico. +SKILL +NETWORK',stat:{SKILL:1,NETWORK:1}},
      probe:{msg:'Cerchi dati sul doppio standard. +RADAR +CLARITY',stat:{RADAR:2,CLARITY:1}},
      share:{msg:'Usi la struttura giusta e cerchi feedback proattivamente. +SKILL +CLARITY',stat:{SKILL:2,CLARITY:1}},
    },
    db:{pat:'La "executive presence" nei board meeting e il doppio standard di presentazione',
      ins:'Le aspettative su come presentare al board sono spesso definite implicitamente su modelli maschili.',
      data:'Stanford VMware Women\'s Leadership Innovation Lab 2019: nelle presentazioni al board, le donne vengono interrotte il 2.1x più frequentemente degli uomini.'}},
  {id:'corp_trasferimento',sprite:'mgr',label:'Offerta HR',type:'npc',required:false,gridX:12,gridY:8,
    dlg:{spk:'👔 HR — Global Mobility',color:'#81c784',
      txt:'Abbiamo un\'opportunità straordinaria per te: un ruolo in Londra, 18 mesi. L\'unica cosa — devi confermare entro venerdì. Ah, e ovviamente la famiglia... sei sposata? Hai figli?',
      chs:[
        {t:'Domanda personale a parte — posso avere i dettagli scritti del ruolo, la compensation, e i tempi precisi?',out:'redirect'},
        {t:'La mia situazione personale la valuto io. Posso chiederti se questa domanda la fate anche ai candidati uomini?',out:'challenge'},
        {t:'Ho bisogno di più di venerdì per valutare. E le domande sulla famiglia non sono rilevanti per la mia decisione professionale.',out:'boundary'},
      ]},
    outs:{
      redirect: {msg:'Reindirizza su dati professionali. +CLARITY +VOICE',stat:{CLARITY:2,VOICE:1}},
      challenge:{msg:'Nomini il doppio standard con precisione. +VOICE +RADAR',stat:{VOICE:2,RADAR:2}},
      boundary: {msg:'Doppio confine: tempo e privacy. +VOICE +ENERGY +CLARITY',stat:{VOICE:2,ENERGY:1,CLARITY:1}},
    },
    db:{pat:'Le domande illegali nei processi di mobilità interna e il "family penalty"',
      ins:'Chiedere dello stato civile e dei figli in un processo di selezione è illegale in molti paesi europei.',
      data:'McKinsey Global Institute 2020: le donne con figli sono il 30% meno propense a essere considerate per ruoli internazionali.'}},
  {id:'corp_sis2',sprite:'sis',label:'Coffee chat',type:'sis',required:false,gridX:8,gridY:9,
    dlg:{spk:'❤️ Beatrice — VP Analytics (Alleata)',color:'#e53935',
      txt:'Sei brava e stai lavorando bene. Ma c\'è una cosa che ho imparato — in questa azienda devi decidere cosa vuoi diventare e dirlo ad alta voce. Non aspettare che lo riconoscano. Io ho aspettato 4 anni. Poi ho detto al mio director "voglio diventare VP entro 2 anni — cosa devo fare?" È cambiato tutto.',
      chs:[
        {t:'Ha senso. Come si dice in modo che suoni ambizioso ma non "troppo"?',out:'ask_how'},
        {t:'Non mi è mai piaciuta l\'idea di dover "vendere" me stessa così esplicitamente.',out:'resist'},
        {t:'Possiamo fare una sessione pratica in cui simulo quella conversazione con il mio director?',out:'practice'},
      ]},
    outs:{
      ask_how: {msg:'Cerchi il modo concreto per comunicare ambizione senza penalizzazioni. +CLARITY +SKILL',stat:{CLARITY:2,SKILL:1}},
      resist:  {msg:'La resistenza è comprensibile — il problema è che gli altri lo fanno. +RADAR -VOICE',stat:{RADAR:1,VOICE:-1}},
      practice:{msg:'Role-playing pratico: il modo più efficace per prepararsi. +SKILL +CLARITY +ENERGY',stat:{SKILL:1,CLARITY:1,ENERGY:1}},
    },
    db:{pat:'Dichiarare l\'ambizione nelle corporate: il rischio del backlash e come navigarlo',
      ins:'Le donne che dichiarano apertamente ambizioni di carriera vengono valutate negativamente più spesso degli uomini.',
      data:'Bowles, Babcock & Lai (OBHDP, 2007): le donne che negoziano in modo assertivo per sé stesse vengono valutate negativamente il 30% delle volte.'}},
  {id:'corp_tech2',sprite:'tech',label:'Data governance',type:'tech',required:false,gridX:14,gridY:7,
    dlg:{spk:'💻 Sfida Tecnica — Corporate 2',color:'#f7c46a',
      txt:'Il team legale ha appena scoperto che il vostro data lake contiene dati personali di clienti europei che non avrebbero dovuto essere conservati secondo GDPR. Hai 48 ore per capire la portata del problema. Da dove inizi?',
      chs:[
        {t:'Mappo immediatamente i dataset coinvolti: chi li ha creati, quando, per quale scopo.',out:'map'},
        {t:'Notifica immediata al DPO (Data Protection Officer) e al team legale.',out:'escalate'},
        {t:'Costruisco un inventario dei dati con classificazione di rischio.',out:'inventory'},
      ]},
    outs:{
      map:      {msg:'Data lineage come primo passo. +SKILL +CLARITY',stat:{SKILL:2,CLARITY:1}},
      escalate: {msg:'Il DPO deve saperlo subito. +VOICE +RADAR +CLARITY',stat:{VOICE:1,RADAR:1,CLARITY:2}},
      inventory:{msg:'Risk-based prioritization. +SKILL +RADAR',stat:{SKILL:2,RADAR:1}},
    },
    db:{pat:'GDPR e data governance nelle corporate: il ruolo del data scientist',
      ins:'I data scientist nelle corporate sono spesso i primi a scoprire violazioni GDPR — e hanno responsabilità professionali di segnalazione.',
      data:'ENISA 2023: il 34% delle violazioni GDPR nelle corporate europee coinvolge dati personali conservati oltre il periodo necessario.'}},
];

// ══════════════════════════════════════════════════════════════
// PIVA ADDITIONS
// ══════════════════════════════════════════════════════════════
const PIVA_ADDITIONS = [
  {id:'piva_contratto',sprite:'col',label:'Negoziazione',type:'npc',required:false,gridX:3,gridY:8,
    dlg:{spk:'👩‍💼 Cliente — Responsabile Acquisti',color:'#6af7c8',
      txt:'Abbiamo rivisto il contratto. Invece di 60 giorni di pagamento, le nostre policy prevedono 90. E abbiamo aggiunto una clausola di esclusiva — non può lavorare con nostri competitor per 12 mesi.',
      chs:[
        {t:'90 giorni di pagamento e 12 mesi di esclusiva cambiano significativamente il valore del contratto. Ho bisogno di rivedere la tariffa di conseguenza.',out:'reprice'},
        {t:'La clausola di esclusiva non è accettabile — limita la mia libertà professionale in modo sproporzionato.',out:'reject_exclusive'},
        {t:'Possiamo negoziare: 60 giorni o compenso per il ritardo? E l\'esclusiva la posso accettare ridotta a 3 mesi.',out:'negotiate'},
      ]},
    outs:{
      reprice:         {msg:'Colleghi le condizioni contrattuali al prezzo. +VOICE +CLARITY',stat:{VOICE:2,CLARITY:1}},
      reject_exclusive:{msg:'Linea chiara su ciò che non è negoziabile. +VOICE +ENERGY',stat:{VOICE:2,ENERGY:1}},
      negotiate:       {msg:'Proponi alternative concrete. +VOICE +SKILL +CLARITY',stat:{VOICE:1,SKILL:1,CLARITY:2}},
    },
    db:{pat:'Le clausole contrattuali abusive e la negoziazione per freelance',
      ins:'Le clausole di esclusiva e i termini di pagamento a 90+ giorni sono tra le condizioni contrattuali più problematiche per i freelance.',
      data:'Osservatorio Freelance Italia 2023: il 54% dei freelance italiani subisce ritardi di pagamento sistematici.'}},
  {id:'piva_fiscale',sprite:'mgr',label:'Studio commercialista',type:'npc',required:false,gridX:12,gridY:4,
    dlg:{spk:'📊 Commercialista — Prima consulenza',color:'#6af7c8',
      txt:'Per una professionista come lei il regime forfettario ha senso fino a 85k€ di fatturato. Sopra, conviene aprire una SRL. Ma tenga presente: con la SRL ci sono costi fissi di gestione, obbligo di assemblea, bilancio... Forse per ora meglio mantenere la P.IVA semplice.',
      chs:[
        {t:'Capisco la complessità. Può farmi un confronto numerico dei due scenari a 100k€ e 150k€ di fatturato?',out:'compare'},
        {t:'Quali sono i costi fissi esatti della SRL e il break-even rispetto al forfettario?',out:'details'},
        {t:'"Forse per ora" — su cosa basa questa valutazione? Ha altri parametri oltre al fatturato attuale?',out:'probe'},
      ]},
    outs:{
      compare:{msg:'Chiedi proiezioni numeriche concrete, non opinioni. +CLARITY +SKILL',stat:{CLARITY:2,SKILL:1}},
      details:{msg:'Vuoi i numeri precisi per decidere autonomamente. +CLARITY +RADAR',stat:{CLARITY:2,RADAR:1}},
      probe:  {msg:'Questioniy il consiglio generico chiedendo i criteri. +RADAR +VOICE',stat:{RADAR:2,VOICE:1}},
    },
    db:{pat:'La pianificazione fiscale come competenza strategica per il lavoro autonomo',
      ins:'La scelta tra regime forfettario, ordinario, e SRL è una delle decisioni più impattanti per un freelance in crescita.',
      data:'CGIA Mestre 2023: il carico fiscale medio per un professionista in regime ordinario è del 48-52% del reddito lordo.'}},
  {id:'piva_sis2',sprite:'sis',label:'Evento community',type:'sis',required:false,gridX:5,gridY:9,
    dlg:{spk:'❤️ Giulia — Community organizer (Alleata)',color:'#e53935',
      txt:'Sto costruendo una community di professioniste AI in Italia — meetup mensili, canale privato per condividere opportunità e pricing, sessioni di skill sharing. Vuoi far parte del nucleo fondatore?',
      chs:[
        {t:'Sì — cosa serve concretamente per i prossimi 3 mesi per far partire la community?',out:'builder'},
        {t:'Mi interessa molto. Posso contribuire con sessioni su AI engineering — cosa ti manca di più?',out:'contribute'},
        {t:'Sono dentro. E conosco altre due professioniste che dovrebbero assolutamente essere nel nucleo fondatore.',out:'expand'},
      ]},
    outs:{
      builder:   {msg:'Entri come builder, non solo come partecipante. +NETWORK +CLARITY +SKILL',stat:{NETWORK:2,CLARITY:1,SKILL:1}},
      contribute:{msg:'Porti valore specifico. +NETWORK +SKILL',stat:{NETWORK:2,SKILL:1}},
      expand:    {msg:'Espandi subito il nucleo. +NETWORK +RADAR',stat:{NETWORK:3,RADAR:1}},
    },
    db:{pat:'Le community professionali come infrastruttura di carriera per il lavoro autonomo',
      ins:'Le community professionali femminili nel tech hanno dimostrato effetti misurabili su tariffe, pipeline di clienti, e resilienza professionale.',
      data:'Women Who Code Annual Survey 2023: le professioniste che partecipano attivamente a community di pari hanno tariffe mediamente il 19% più alte.'}},
  {id:'piva_tech2',sprite:'tech',label:'Proposta complessa',type:'tech',required:false,gridX:14,gridY:6,
    dlg:{spk:'💻 Sfida Tecnica — P.IVA 2',color:'#f7c46a',
      txt:'Un cliente vuole implementare un chatbot AI per il customer service. Ha 5000 ticket storici. Ti chiede di scegliere tra: (A) fine-tuning di un LLM open source, (B) RAG su un modello base, (C) prompt engineering su GPT-4. Budget: 25k€. Timeline: 8 settimane.',
      chs:[
        {t:'RAG è quasi sempre la scelta giusta con 5000 ticket: aggiornabile senza retraining, interpretabile, nei costi.',out:'rag'},
        {t:'Dipende dal tipo di domande. Se sono domande su policy e prodotti, RAG. Se richiedono ragionamento complesso, prompt engineering prima.',out:'depends'},
        {t:'Prima faccio un\'analisi dei 5000 ticket per capire la distribuzione delle domande — poi scelgo l\'architettura.',out:'data_first'},
      ]},
    outs:{
      rag:       {msg:'Scelta corretta e ben motivata. +SKILL +CLARITY',stat:{SKILL:2,CLARITY:1}},
      depends:   {msg:'Risposta sfumata che mostra comprensione profonda. +SKILL +RADAR',stat:{SKILL:2,RADAR:1}},
      data_first:{msg:'Dati prima dell\'architettura. +SKILL +CLARITY +RADAR',stat:{SKILL:1,CLARITY:2,RADAR:1}},
    },
    db:{pat:'RAG vs fine-tuning vs prompt engineering: quando usare cosa',
      ins:'Fine-tuning ha senso solo con dati di training di alta qualità (10k+ esempi supervisionati). RAG è più flessibile, aggiornabile, e interpretabile.',
      data:'"You should fine-tune only when you have tried prompting and RAG and they are not sufficient." — Andrej Karpathy, 2023.'}},
];

// ══════════════════════════════════════════════════════════════
// WORLD 5 — PA / RICERCA / ACCADEMIA
// ══════════════════════════════════════════════════════════════
const W5_NPCS = [
  {id:'pa_concorso',sprite:'mgr',label:'Commissione Concorso',type:'npc',required:true,gridX:4,gridY:5,
    dlg:{spk:'👔 Presidente di Commissione — Concorso PA',color:'#f48fb1',
      txt:'Il suo profilo è ottimo. Peccato per la carriera discontinua — vedo un anno di gap nel 2021. In un concorso pubblico la continuità conta. Comunque ha superato la prova scritta, questa è l\'orale. Ci dica: perché vuole lavorare nel pubblico invece che nel privato? Non è un passo indietro?',
      chs:[
        {t:'Il gap del 2021 è un periodo di formazione che posso documentare. E "passo indietro" dipende da dove si vuole arrivare — io voglio costruire AI per il bene pubblico.',out:'direct'},
        {t:'Il settore pubblico offre stabilità e impatto su scala che il privato non può dare. Questa è la mia scelta consapevole.',out:'positive'},
        {t:'Posso chiederle cosa intende per "continuità"? Se il criterio riguarda l\'esperienza rilevante, posso mostrare che il 2021 è stato formativo.',out:'probe'},
      ]},
    outs:{
      direct:  {msg:'Risposta diretta che affronta entrambe le domande. +VOICE +CLARITY',stat:{VOICE:2,CLARITY:1}},
      positive:{msg:'Framing positivo senza difendersi. +CLARITY +ENERGY',stat:{CLARITY:2,ENERGY:1}},
      probe:   {msg:'Chiedi di specificare il criterio. +RADAR +VOICE',stat:{RADAR:2,VOICE:1}},
    },
    db:{pat:'Il "career gap" e il bias nei concorsi pubblici',
      ins:'I gap di carriera nelle donne sono spesso periodi di cura, maternità, o formazione — non inattività.',
      data:'ISTAT 2023: le donne rappresentano il 51% dei dipendenti pubblici italiani ma solo il 22% dei dirigenti di prima fascia.'}},
  {id:'pa_burocrazia',sprite:'col',label:'Ufficio IT',type:'npc',required:true,gridX:8,gridY:4,
    dlg:{spk:'🖥️ Responsabile IT — Ente Pubblico',color:'#f48fb1',
      txt:'Benvenuta. Il tuo progetto AI per l\'analisi dei dati catastali è ottimo in teoria. In pratica: i dati sono su tre sistemi legacy degli anni \'90, non c\'è API, e per accedere ai database serve una delibera della giunta. I tempi medi sono 8-14 mesi.',
      chs:[
        {t:'Parto da un dataset campione che posso ottenere manualmente — così costruisco il proof of concept mentre aspetto la delibera.',out:'poc'},
        {t:'Esiste un modo per accelerare la delibera? Posso coinvolgere un referente politico per aumentare la priorità?',out:'stakeholder'},
        {t:'Mappo i tre sistemi e identifico i dati che posso usare senza delibera.',out:'map'},
      ]},
    outs:{
      poc:        {msg:'Proof of concept in parallelo alla burocrazia. +SKILL +CLARITY',stat:{SKILL:2,CLARITY:1}},
      stakeholder:{msg:'Usi i canali politici come acceleratore. +NETWORK +RADAR',stat:{NETWORK:2,RADAR:1}},
      map:        {msg:'Cerchi prima cosa è già accessibile. +SKILL +RADAR +CLARITY',stat:{SKILL:1,RADAR:1,CLARITY:2}},
    },
    db:{pat:'L\'innovazione nella PA tra burocrazia e legacy system',
      ins:'La PA italiana è caratterizzata da sistemi informativi frammentati, normative di accesso ai dati complesse, e processi decisionali lenti.',
      data:'AgID 2023: il 67% degli enti pubblici italiani ha sistemi informativi con più di 15 anni di vita.'}},
  {id:'pa_sister',sprite:'sis',label:'Mensa universitaria',type:'sis',required:true,gridX:6,gridY:8,
    dlg:{spk:'❤️ Prof.ssa Martina Conti — Ricercatrice (Alleata)',color:'#e53935',
      txt:'Ho visto la tua proposta di ricerca. È ottima. Ascolta — nell\'accademia italiana il networking conta quanto le pubblicazioni, forse di più. Ho costruito un gruppo informale di ricercatrici che si supportano vicendevolmente nei bandi, nelle peer review, e nella visibilità. Vuoi entrare?',
      chs:[
        {t:'Sì, con piacere. Come funziona il supporto reciproco nelle peer review?',out:'learn'},
        {t:'Sono interessata. Posso portare una competenza AI applicata che forse manca al gruppo?',out:'contribute'},
        {t:'Entra. E conosco una dottoranda bravissima che dovrebbe assolutamente essere nel gruppo.',out:'expand'},
      ]},
    outs:{
      learn:    {msg:'Capisci il meccanismo prima di entrare. +NETWORK +CLARITY',stat:{NETWORK:2,CLARITY:1}},
      contribute:{msg:'Porti valore specifico. +NETWORK +SKILL',stat:{NETWORK:2,SKILL:1}},
      expand:   {msg:'Includi chi è più all\'inizio. +NETWORK +RADAR',stat:{NETWORK:3,RADAR:1}},
    },
    db:{pat:'Le reti di ricercatrici come antidoto alla struttura informale accademica',
      ins:'L\'accademia italiana è caratterizzata da reti di "barone" che controllano accesso a posizioni, bandi, e pubblicazioni.',
      data:'Interuniversity Consortium for Political and Social Research 2022: le donne rappresentano il 37% dei ricercatori universitari italiani ma solo il 23% dei professori associati.'}},
  {id:'pa_precariato',sprite:'col',label:'Corridoio università',type:'npc',required:true,gridX:10,gridY:6,
    dlg:{spk:'🎓 Collega — Ricercatore a contratto',color:'#f48fb1',
      txt:'Sei al quarto anno di post-doc? Anch\'io. Guarda, la realtà è questa: in Italia ci sono 28 posti da professore associato all\'anno in informatica. Siamo in 1400 post-doc. Il sistema è costruito per tenerti precaria il più a lungo possibile. Io sto guardando fuori dall\'accademia. Tu?',
      chs:[
        {t:'Ci penso seriamente. Hai già esplorato dove i profili accademici sono più valorizzati — ricerca industriale, policy, think tank?',out:'explore'},
        {t:'Non voglio ancora rinunciare all\'accademia. Ma ho iniziato a costruire visibilità esterna per avere opzioni.',out:'hedge'},
        {t:'Il problema è strutturale. Sto partecipando a un gruppo che lavora per riformare il sistema di reclutamento accademico.',out:'systemic'},
      ]},
    outs:{
      explore: {msg:'Esplori le alternative con pragmatismo. +CLARITY +RADAR',stat:{CLARITY:2,RADAR:1}},
      hedge:   {msg:'Costruisci opzioni esterne mantenendo la strada accademica. +NETWORK +CLARITY',stat:{NETWORK:1,CLARITY:2}},
      systemic:{msg:'Lavori sul cambiamento strutturale. +VOICE +RADAR +NETWORK',stat:{VOICE:1,RADAR:2,NETWORK:1}},
    },
    db:{pat:'Il precariato accademico strutturale e la trappola del post-doc',
      ins:'L\'Italia ha il sistema di reclutamento accademico più lento e precario d\'Europa.',
      data:'MUR 2023: il tasso di conversione da dottorato a posizione permanente in informatica è dell\'8.2% in Italia vs 34% in Germania.'}},
  {id:'pa_tech',sprite:'tech',label:'Lab ricerca',type:'tech',required:true,gridX:12,gridY:8,
    dlg:{spk:'💻 Sfida Tecnica — PA/Ricerca',color:'#f7c46a',
      txt:'Stai sviluppando un sistema AI per supportare i medici di base nella diagnosi precoce del diabete tipo 2, usando dati del SSN. Come gestisci la pipeline dal punto di vista etico, tecnico, e normativo?',
      chs:[
        {t:'Inizio dal framework normativo: GDPR articolo 22 (decisioni automatizzate in ambito medico), AI Act categoria ad alto rischio, e consenso informato paziente.',out:'regulatory'},
        {t:'Il sistema deve essere progettato come "decision support" con supervisione medica obbligatoria — mai come sistema autonomo.',out:'design'},
        {t:'Coinvolgo medici di base nel design del sistema fin dall\'inizio — i falsi negativi qui sono più pericolosi dei falsi positivi.',out:'clinical'},
      ]},
    outs:{
      regulatory:{msg:'Framework normativo come punto di partenza. +SKILL +RADAR +CLARITY',stat:{SKILL:1,RADAR:2,CLARITY:1}},
      design:    {msg:'"Decision support" con supervisione umana. +SKILL +CLARITY +VOICE',stat:{SKILL:2,CLARITY:1,VOICE:1}},
      clinical:  {msg:'I medici definiscono la soglia clinica — tu costruisci il sistema. +SKILL +NETWORK +RADAR',stat:{SKILL:1,NETWORK:1,RADAR:2}},
    },
    db:{pat:'L\'AI in ambito medico: responsabilità, normativa, e supervisione umana',
      ins:'I sistemi AI in ambito medico sono classificati come "alto rischio" nell\'EU AI Act.',
      data:'Lancet Digital Health 2023: i modelli AI per la diagnosi del diabete tipo 2 mostrano AUC 0.82-0.91 su dataset di validazione.'}},
];

const PA_ADDITIONS = [
  {id:'pa_pubblicazioni',sprite:'mgr',label:'Meeting gruppo ricerca',type:'npc',required:false,gridX:3,gridY:8,
    dlg:{spk:'👨‍🏫 Professore Ordinario — Dipartimento',color:'#f48fb1',
      txt:'Ho letto il tuo paper. È buono. Sai, se lo pubblicassimo su una rivista più "popolare" avremmo più impatto — ma meno h-index. Oppure puntiamo a Nature Machine Intelligence, ma con i tempi di revisione ci vorranno 18 mesi.',
      chs:[
        {t:'Per il mio percorso accademico l\'h-index conta — ma voglio capire se i revisori di Nature MI sono un percorso realistico per questo paper.',out:'strategic'},
        {t:'Preferirei una preprint su arXiv adesso + sottomissione a una rivista aperta.',out:'open'},
        {t:'Dipende da dove sono nel percorso. Adesso ho bisogno di pubblicazioni che contino per la valutazione ANVUR.',out:'pragmatic'},
      ]},
    outs:{
      strategic:{msg:'Valuti il percorso realistico invece di inseguire il massimo astratto. +CLARITY +RADAR',stat:{CLARITY:2,RADAR:1}},
      open:     {msg:'Open science: accessibilità immediata e citazioni più rapide. +SKILL +NETWORK',stat:{SKILL:1,NETWORK:1}},
      pragmatic:{msg:'Pragmatismo ANVUR: conosci le regole del gioco. +CLARITY +RADAR',stat:{CLARITY:1,RADAR:2}},
    },
    db:{pat:'Publish or perish e le metriche bibliometriche nell\'accademia italiana',
      ins:'"Publish or perish" descrive la pressione accademica a pubblicare costantemente su riviste ad alto impact factor.',
      data:'Ioannidis et al., PLOS Biology 2020: il 94% dell\'impatto scientifico è concentrato nel top 2% dei ricercatori.'}},
  {id:'pa_trasferimento',sprite:'col',label:'Spin-off meeting',type:'npc',required:false,gridX:12,gridY:4,
    dlg:{spk:'🏢 Technology Transfer Officer',color:'#f48fb1',
      txt:'Il tuo algoritmo ha potenziale commerciale. Potremmo creare uno spin-off universitario. Ma attenzione: la IP appartiene all\'università, tu avresti una quota minoritaria. I tempi per approvare lo spin-off sono 12-18 mesi.',
      chs:[
        {t:'Prima di procedere ho bisogno di capire: quali diritti mantengo sull\'algoritmo? Posso continuare a fare ricerca su di esso?',out:'ip'},
        {t:'"Preferisce non mettere i ricercatori alla guida" — posso chiederle perché? E se trovassi io un co-founder CEO, cambierebbe qualcosa?',out:'challenge'},
        {t:'Capisco la struttura. Posso avere un esempio di spin-off universitario simile che ha funzionato?',out:'learn'},
      ]},
    outs:{
      ip:       {msg:'La IP è il punto critico — capisci prima cosa cedi. +CLARITY +RADAR',stat:{CLARITY:2,RADAR:1}},
      challenge:{msg:'Questioniy l\'assunzione che i ricercatori non possano guidare. +VOICE +RADAR',stat:{VOICE:2,RADAR:1}},
      learn:    {msg:'Casi reali prima di firmare niente. +CLARITY +SKILL',stat:{CLARITY:2,SKILL:1}},
    },
    db:{pat:'Il trasferimento tecnologico e i diritti IP nell\'accademia',
      ins:'Negli spin-off universitari italiani, la proprietà intellettuale appartiene normalmente all\'università.',
      data:'Netval 2023: le università italiane hanno generato 1.247 spin-off attivi. Solo il 19% ha una donna tra i fondatori.'}},
  {id:'pa_sis2',sprite:'sis',label:'Conferenza internazionale',type:'sis',required:false,gridX:5,gridY:9,
    dlg:{spk:'❤️ Dr.ssa Amara Diallo — Ricercatrice internazionale (Alleata)',color:'#e53935',
      txt:'Ho letto il tuo paper — è ottimo. Hai mai considerato di presentarlo a NeurIPS o ICML? La visibilità internazionale cambia tutto. Posso introdurti al mio advisor a Stanford.',
      chs:[
        {t:'Sarei molto interessata. Come funziona la co-autorialità in questo contesto — chi fa cosa?',out:'structure'},
        {t:'Sì, assolutamente. Una presentazione a NeurIPS cambierebbe molto per la mia carriera.',out:'yes'},
        {t:'Prima di coinvolgere il tuo advisor, posso vedere il tuo profilo di ricerca? Voglio capire il fit.',out:'due_diligence'},
      ]},
    outs:{
      structure:     {msg:'Definisci i ruoli prima di iniziare. +CLARITY +NETWORK',stat:{CLARITY:2,NETWORK:1}},
      yes:           {msg:'Cogli l\'opportunità con entusiasmo. +NETWORK +ENERGY',stat:{NETWORK:2,ENERGY:1}},
      due_diligence: {msg:'Verifichi il fit prima di impegnarti. +CLARITY +RADAR',stat:{CLARITY:1,RADAR:2}},
    },
    db:{pat:'Il networking internazionale come acceleratore di carriera accademica',
      ins:'La visibilità internazionale è diventata il principale acceleratore di carriera nell\'accademia tech.',
      data:'Nature Human Behaviour 2022: i ricercatori con collaborazioni internazionali ricevono il 2.3x più citazioni.'}},
  {id:'pa_tech2',sprite:'tech',label:'Grant writing',type:'tech',required:false,gridX:14,gridY:5,
    dlg:{spk:'💻 Sfida Tecnica — PA/Ricerca 2',color:'#f7c46a',
      txt:'Stai scrivendo una proposta per un bando EU Horizon Europe (budget: 500k€) su "AI per la transizione ecologica". Il bando richiede: impatto societal misurabile, collaborazione con almeno 3 paesi EU, e work package dettagliati. Hai 3 settimane. Da dove inizi?',
      chs:[
        {t:'Inizio dall\'impact section — definire il cambiamento reale che voglio produrre prima di pensare alle attività tecniche.',out:'impact_first'},
        {t:'Identifico i partner giusti nei 3 paesi e capisco cosa ognuno porta.',out:'consortium'},
        {t:'Leggo i progetti finanziati negli ultimi 2 anni su questo topic — capisco il linguaggio e le priorità della commissione.',out:'research_funded'},
      ]},
    outs:{
      impact_first:   {msg:'Impact before activities. +CLARITY +SKILL',stat:{CLARITY:2,SKILL:1}},
      consortium:     {msg:'Il consorzio giusto è la metà del lavoro in un bando EU. +NETWORK +SKILL',stat:{NETWORK:2,SKILL:1}},
      research_funded:{msg:'Studia i vincitori prima di scrivere. +SKILL +RADAR',stat:{SKILL:2,RADAR:1}},
    },
    db:{pat:'I bandi EU come opportunità e labirinto burocratico',
      ins:'I bandi Horizon Europe hanno un tasso di successo medio del 12-15%.',
      data:'European Research Council 2023: il tasso di successo medio per i grant ERC è 8-12%.'}},
];

const PA_INNER_CRITICS = [
  {id:'critic',sprite:'crit',
    dlg:{spk:'👻 Inner Critic — voce 1',color:'#f76a6a',
      txt:'Sei sicura di essere abbastanza brava per fare ricerca di livello? Guarda gli altri nel tuo gruppo — pubblicano molto di più. Forse non sei tagliata per l\'accademia.',
      chs:[
        {t:'Quante pubblicazioni ho rispetto alla media del mio anno di dottorato? Devo guardare i dati reali, non la percezione.',out:'data'},
        {t:'Forse hai ragione. Non mi sento mai abbastanza brava.',out:'believe'},
        {t:'"Tagliata per l\'accademia" — chi ha stabilito questo criterio e su che basi?',out:'question'},
      ]},
    outs:{
      data:    {msg:'Vai ai dati reali invece di affidarti alla percezione. +CLARITY +RADAR',stat:{CLARITY:2,RADAR:1}},
      believe: {msg:'Hai creduto alla voce senza evidenza. -VOICE -CLARITY',stat:{VOICE:-1,CLARITY:-1}},
      question:{msg:'Questioniy il criterio stesso. +RADAR +VOICE',stat:{RADAR:2,VOICE:1}},
    },
    db:{pat:'La sindrome dell\'impostore nell\'accademia e il confronto con i "superstar"',
      ins:'Il confronto con i colleghi più prolifici è sistematicamente distorto.',
      data:'Psychotherapy Research 2020: il 70% dei ricercatori universitari riporta episodi di sindrome dell\'impostore.'}},
  {id:'critic2',sprite:'crit',
    dlg:{spk:'👻 Inner Critic — voce 2',color:'#f76a6a',
      txt:'Hai scelto di restare in Italia invece di andare all\'estero. Tutti i bravi ricercatori vanno all\'estero. Sei rimasta per paura, non per scelta.',
      chs:[
        {t:'"Tutti i bravi" è falso — ci sono ricercatori eccellenti che costruiscono carriere significative in Italia.',out:'counter'},
        {t:'Forse. Ma ho anche ragioni concrete per restare — e quelle ragioni sono legittime.',out:'own'},
        {t:'L\'internazionalizzazione è importante, ma non richiede necessariamente trasferirsi.',out:'reframe'},
      ]},
    outs:{
      counter: {msg:'Contraddici con esempi concreti. +CLARITY +RADAR',stat:{CLARITY:2,RADAR:1}},
      own:     {msg:'Rivendichi le tue ragioni senza doverle giustificare. +VOICE +CLARITY',stat:{VOICE:2,CLARITY:1}},
      reframe: {msg:'Ridefinisci l\'internazionalizzazione in modo che si adatti al tuo contesto. +CLARITY +SKILL',stat:{CLARITY:1,SKILL:1}},
    },
    db:{pat:'Il "brain drain" e la legittimità di costruire una carriera in Italia',
      ins:'La narrativa "i bravi vanno all\'estero" è parzialmente vera ma anche una distorsione che scoraggia chi sceglie di restare.',
      data:'ISTAT 2023: il programma "Rientro dei Cervelli" (2020-2023) ha portato 3.200 ricercatori — di cui il 41% donne.'}},
];

// ══════════════════════════════════════════════════════════════
// WORLD DEBRIEF
// ══════════════════════════════════════════════════════════════
const WORLD_DEBRIEF = {
  pmi:{theme:'Il lavoro invisibile e il ruolo vago',levels:[
    {min:5,insight:'Nelle PMI il ruolo tech è spesso indefinito per design, non per caso. Il "fai un po\' di tutto" è una struttura che consuma risorse senza riconoscerle. Hai iniziato a vedere questo meccanismo.',takeaway:'Documentare il proprio lavoro non è burocrazia — è il modo per rendere visibile ciò che altrimenti rimane invisibile nelle valutazioni.',badge:'👁️ Occhi aperti'},
    {min:7,insight:'Il credito gap e il lavoro invisibile si sommano: fai più di quello che è scritto nel tuo ruolo, e quello che fai non viene attribuito correttamente. Nelle PMI questo schema si ripete sistematicamente — non è sfortuna, è struttura.',takeaway:'La strategia più efficace nella PMI è duplice: chiedere chiarezza scritta sul ruolo all\'inizio, e costruire alleanze con chi può nominare il tuo lavoro quando tu non sei nella stanza.',badge:'🗺️ Mappa del territorio'},
    {min:9,insight:'Hai esplorato quasi ogni angolo di questo contesto. La PMI offre esposizione reale e impatto immediato — ma il prezzo è spesso la mancanza di struttura, mentorship e riconoscimento formale.',takeaway:'Il valore della PMI è nell\'esperienza concreta che costruisci. Portala fuori documentata: non "ho lavorato in una PMI", ma "ho costruito X che ha prodotto Y risultato misurabile".',badge:'🏭 Esperta di contesto PMI'},
  ]},
  startup:{theme:'Il credit gap e i confini professionali',levels:[
    {min:5,insight:'Le startup vendono autonomia e impatto — e spesso le mantengono. Ma "cultura famiglia" e "siamo tutti fondatori" sono frame che possono normalizzare confini assenti e lavoro non riconosciuto.',takeaway:'In una startup, documentare per iscritto dopo ogni conversazione importante non è paranoia — è professionalità.',badge:'📝 Prima documentazione'},
    {min:7,insight:'Il credit gap nelle startup è il 35% più alto che nelle corporate, principalmente per l\'informalità dei processi. Hai visto come si manifesta e come le alleate possono aiutare a renderlo visibile sistematicamente.',takeaway:'Costruire una rete di mutuo riconoscimento con 2-3 colleghe è la strategia più efficace contro il credit gap.',badge:'🤝 Rete di supporto'},
    {min:9,insight:'Hai esplorato l\'intera ecologia della startup: il founder visionario, il collega competitivo, la cultura del crunch, il pitch agli investitori. La startup è l\'ambiente con il rapporto rischio/opportunità più alto.',takeaway:'Nella startup la tua traiettoria dipende molto dalla qualità delle relazioni che costruisci. Scegli le tue battaglie con cura.',badge:'🚀 Navigatrice di startup'},
  ]},
  consulenza:{theme:'Visibilità, criteri opachi e double bind',levels:[
    {min:5,insight:'In consulenza il lavoro tecnico è necessario ma non sufficiente. I criteri di avanzamento sono spesso impliciti e costruiti su modelli di "executive presence" che riflettono norme maschili.',takeaway:'Chiedere esplicitamente i criteri di promozione non è aggressivo — è professionale.',badge:'🔍 Prima mappatura'},
    {min:7,insight:'Il double bind — troppo assertiva se parla, poco propositiva se tace — è documentato e sistematico nelle consulenze.',takeaway:'Il mutuo riconoscimento attivo non è solo gentilezza — è strategia.',badge:'📣 Amplification in pratica'},
    {min:9,insight:'Hai attraversato l\'intera esperienza consulenza: il partner con aspettative impossibili, il pay gap, il mentoring non riconosciuto, le sfide tecniche con stakeholder multipli.',takeaway:'Il brand che costruisci in consulenza è il tuo asset più prezioso. Gestiscilo attivamente.',badge:'🏢 Esperta di consulenza'},
  ]},
  corporate:{theme:'Reti informali, sponsor e criteri di potenziale',levels:[
    {min:5,insight:'La large corporate ha risorse e stabilità — ma le opportunità circolano attraverso reti informali che tendono a riprodurre l\'omofilia.',takeaway:'La distinzione mentore/sponsor è concreta e importante. Conta quante persone nella tua organizzazione spenderebbero capitale politico per te.',badge:'🌐 Mappa del potere'},
    {min:7,insight:'Il sistema 9-box, i criteri opachi di "potenziale", la maternità penalty nella versione "protettiva" — hai visto come le corporate producono discriminazione strutturale attraverso meccanismi che sembrano neutri.',takeaway:'Dichiarare l\'ambizione esplicitamente — ancorandola agli obiettivi dell\'organizzazione — riduce il backlash.',badge:'📊 Criteri visibili'},
    {min:9,insight:'Hai esplorato l\'intera ecologia corporate: dalla valutazione opaca al networking informale, dalla mobilità internazionale con domande illegali alla governance dei dati.',takeaway:'Nelle corporate il cambiamento strutturale è lento, ma il tuo percorso individuale può essere rapido se costruito correttamente.',badge:'🏗️ Esperta di corporate'},
  ]},
  piva:{theme:'Pricing, confini e autonomia sostenibile',levels:[
    {min:5,insight:'Il lavoro autonomo massimizza la libertà — e massimizza anche la responsabilità di proteggere quella libertà. Il pricing svalutato e lo scope creep sono i due pattern che consumano di più l\'autonomia reale.',takeaway:'La tariffa giornaliera non è un\'opinione — è il risultato di un calcolo.',badge:'💰 Valore del lavoro'},
    {min:7,insight:'Il bias di svalutazione del proprio lavoro è documentato e sistematico nelle freelance donna. La rete professionale è la risposta strutturale più efficace.',takeaway:'Trovare 3-5 freelance con cui condividere pricing, segnalare clienti scorretti e passare lavoro in eccesso vale più di qualsiasi ottimizzazione individuale.',badge:'🤝 Community come strategia'},
    {min:9,insight:'Hai attraversato l\'esperienza completa del lavoro autonomo: il primo cliente che svaluta, lo scope creep notturno, la rete come infrastruttura, il pitch agli investitori, le scelte fiscali.',takeaway:'Autonomia sostenibile richiede tre cose: tariffe che riflettono il valore reale, confini professionali comunicati in anticipo, e una rete che ti supporta.',badge:'💡 Fondatrice consapevole'},
  ]},
  pa:{theme:'Struttura pubblica, precariato e impatto sistemico',levels:[
    {min:5,insight:'La PA e l\'accademia offrono qualcosa che il privato non ha: la possibilità di un impatto sistemico reale, su scala pubblica. Il prezzo è la lentezza strutturale e, nell\'accademia, un precariato documentato tra i più lunghi d\'Europa.',takeaway:'Nella PA il "quick win" è la strategia più efficace per costruire credibilità.',badge:'🏛️ Prima navigazione PA'},
    {min:7,insight:'Il precariato accademico italiano ha una struttura che premia la pazienza e la rete più che il merito puro. Le reti di supporto reciproco tra ricercatrici sono documentatamente efficaci.',takeaway:'Costruire visibilità internazionale — anche senza spostarsi fisicamente — attraverso conferenze, preprint, collaborazioni remote cambia le prospettive in modo non lineare.',badge:'🌍 Rete internazionale'},
    {min:9,insight:'Hai attraversato l\'esperienza completa della PA/ricerca: il concorso con bias impliciti, la burocrazia dei sistemi legacy, il precariato strutturale, il trasferimento tecnologico, il grant writing europeo.',takeaway:'Il profilo ibrido — ricercatrice con competenze di comunicazione pubblica e policy — è il più raro e il più necessario nell\'ecosistema italiano dell\'AI.',badge:'🎓 Ricercatrice-ponte'},
  ]},
};

// ══════════════════════════════════════════════════════════════
// TYPE HELPER
// ══════════════════════════════════════════════════════════════
function typeOf(n){
  if(n.type) return n.type;
  if(n.sprite==='sis'||n.id.includes('sister')||n.id.includes('_sis')) return 'sis';
  if(n.sprite==='tech'||n.id.startsWith('tech_')||n.id.includes('_tech')) return 'tech';
  return 'npc';
}

// ══════════════════════════════════════════════════════════════
// PATCH FUNCTION
// ══════════════════════════════════════════════════════════════
function patchWorldsV12(){
  ['pmi','startup','consulenza'].forEach(wid=>{
    if(!WORLD_DEFS[wid]) return;
    WORLD_DEFS[wid].npcs.forEach(n=>{ n.type=typeOf(n); });
  });

  const pmiReq=['manager','collega','sister','tech_pmi'];
  WORLD_DEFS.pmi.npcs.forEach(n=>{if(!n.hasOwnProperty('required'))n.required=pmiReq.includes(n.id);});
  WORLD_DEFS.pmi.npcs.push(...PMI_ADDITIONS);

  const startupReq=['founder','collega_startup','sister_startup','tech_startup'];
  WORLD_DEFS.startup.npcs.forEach(n=>{if(!n.hasOwnProperty('required'))n.required=startupReq.includes(n.id);});
  WORLD_DEFS.startup.npcs.push(...STARTUP_ADDITIONS);

  const consReq=['partner','double_bind','sister_cons','tech_cons'];
  WORLD_DEFS.consulenza.npcs.forEach(n=>{if(!n.hasOwnProperty('required'))n.required=consReq.includes(n.id);});
  WORLD_DEFS.consulenza.npcs.push(...CONSULENZA_ADDITIONS);

  const corpReq=['hr_corp','sister_corp','maternity','tech_corp'];
  WORLD_DEFS.corporate.npcs.forEach(n=>{
    n.type=typeOf(n);
    if(!n.hasOwnProperty('required'))n.required=corpReq.includes(n.id);
  });
  WORLD_DEFS.corporate.npcs.push(...CORPORATE_ADDITIONS);

  const pivaReq=['primo_cliente','sister_piva','scope_creep','tech_piva'];
  WORLD_DEFS.piva.npcs.forEach(n=>{
    n.type=typeOf(n);
    if(!n.hasOwnProperty('required'))n.required=pivaReq.includes(n.id);
  });
  WORLD_DEFS.piva.npcs.push(...PIVA_ADDITIONS);

  WORLD_DEFS.pa={
    label:'WORLD 5 · PA / RICERCA / ACCADEMIA',
    palette:{floor:0x1a0f2e,wall:0x2e1a4a,accent:0x4a2a6a,bg:0x0d0810},
    exits:[{id:'end_pa',label:'FINE →',color:0xf48fb1,x:0.88,y:0.55}],
    npcs:[...W5_NPCS,...PA_ADDITIONS],
  };
  WORLD_INTROS.pa={
    title:'PA / RICERCA / ACCADEMIA',emoji:'🎓',
    what:'Università, enti di ricerca, pubblica amministrazione, think tank. Stabilità relativa, impatto pubblico, burocrazia strutturale.',
    role:'Come data/AI professional nella PA o nell\'accademia lavori su problemi ad alto impatto sociale con vincoli di risorse, normativa e tempi molto diversi dal privato.',
    pros:['Impatto su scala pubblica','Stabilità (nel pubblico)','Libertà di ricerca (nell\'accademia)'],
    cons:['Burocrazia e lentezza decisionale','Precariato strutturale nell\'accademia','Retribuzioni spesso inferiori al privato'],
    color:'#f48fb1',
  };
  INNER_CRITICS.pa=PA_INNER_CRITICS[0];
  INNER_CRITICS.pa2=PA_INNER_CRITICS[1];
}

patchWorldsV12();
