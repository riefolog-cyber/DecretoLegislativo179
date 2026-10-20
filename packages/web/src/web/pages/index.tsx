import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, ChevronDown, Menu, X } from "lucide-react";
import "../editorial.css";

const sources = {
  eurostat: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/edn-20260210-1",
  normattiva: "https://www.normattiva.it/eli/id/2026/10/08/26G00200/ORIGINAL",
  aeroTeachers: "https://www.edresearch.edu.au/summaries-explainers/explainers/ai-schools-considerations-school-leaders-and-teachers",
  aeroPolicy: "https://www.edresearch.edu.au/summaries-explainers/explainers/ai-schools-considerations-policymakers",
  australiaFramework: "https://www.education.gov.au/schooling/resources/australian-framework-generative-artificial-intelligence-ai-schools",
  europeGuidelines: "https://education.ec.europa.eu/focus-topics/digital-education/actions/plan/ethical-guidelines-for-educators-on-using-artificial-intelligence",
  pisaItaly: "https://www.oecd.org/en/publications/pisa-2025-results-volume-i-country-notes_2d4ff9ea-en/italy_a9ab1acb-en.html",
};

type Region = "italia" | "europa" | "australia";

const regions: Record<Region, { index: string; name: string; kicker: string; title: string; body: string; take: string; link: string; linkLabel: string }> = {
  italia: {
    index: "01 / IT", name: "Italia", kicker: "Un quadro in evoluzione", title: "Dalla sperimentazione alla responsabilità educativa.",
    body: "Il D.Lgs. 179/2026 apre alla formazione degli studenti sull’IA, ai moduli STEAM e all’aggiornamento delle indicazioni nazionali. Prevede inoltre formazione dei docenti, attenzione ai rischi e tutela dell’autonomia scolastica. Le attività che le scuole possono promuovere non equivalgono a un obbligo immediato di usare l’IA in classe.",
    take: "La priorità non è introdurre uno strumento: è definire come usarlo senza delegargli l’apprendimento.", link: sources.normattiva, linkLabel: "Leggi il decreto, artt. 36–38",
  },
  europa: {
    index: "02 / UE", name: "Media UE", kicker: "Il contesto europeo", title: "Le competenze corrono più veloci delle regole d’aula.",
    body: "Nel 2025 il 63,8% dei giovani UE tra 16 e 24 anni ha usato strumenti di IA generativa; in Italia il 47,2%. Le linee guida della Commissione europea invitano gli educatori a valutare benefici, rischi, inclusione e uso etico. Non esiste però un unico modello scolastico europeo: curricoli e valutazioni restano nazionali.",
    take: "La media UE misura l’uso dei giovani, non l’adozione dell’IA nella sola secondaria superiore.", link: sources.eurostat, linkLabel: "Apri i dati Eurostat 2025",
  },
  australia: {
    index: "03 / AU", name: "Australia", kicker: "La lezione australiana", title: "Se l’IA pensa al posto dello studente, il risultato non è apprendimento.",
    body: "L’Australia dispone di un quadro nazionale per l’uso responsabile dell’IA generativa nelle scuole. Nel 2026 AERO richiama un rischio preciso: risultati migliori con l’IA possono nascondere minore apprendimento quando lo studente lavora senza assistenza. La proposta non è un divieto generalizzato, ma uso guidato, pratica autonoma e verifiche autentiche.",
    take: "Progettare strumenti che facciano ragionare, non che forniscano direttamente la risposta.", link: sources.aeroTeachers, linkLabel: "Leggi la guida AERO 2026",
  },
};

function External({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" /></a>;
}

function Index() {
  const [region, setRegion] = useState<Region>("italia");
  const [menuOpen, setMenuOpen] = useState(false);
  const current = regions[region];
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="inizio">
      <header className="topbar">
        <div className="nav-inner container">
          <a href="#inizio" className="wordmark" onClick={closeMenu} aria-label="Atlante, torna all’inizio"><span className="wordmark-mark">a<span>.</span></span><span>atlante<span className="wordmark-slash"> / </span><small>EDUCAZIONE & IA</small></span></a>
          <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navigazione principale">
            <a onClick={closeMenu} href="#il-quadro">Il quadro</a><a onClick={closeMenu} href="#confronto">Il confronto</a><a onClick={closeMenu} href="#decreto">Il decreto</a><a onClick={closeMenu} href="#fonti">Le fonti</a>
          </nav>
          <a className="nav-cta" href="#confronto">Esplora la ricerca <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
      </header>

      <main>
        <section className="hero container" aria-labelledby="hero-heading">
          <div className="hero-topline"><span><span className="status-dot" /> OSSERVATORIO / SCUOLA SECONDARIA DI II GRADO</span><span>EDIZIONE 2026 — AGGIORNATO AL 20 OTTOBRE</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="line-tick" /> UNA QUESTIONE EDUCATIVA, NON SOLO TECNOLOGICA</div>
              <h1 id="hero-heading">L’IA a scuola.<br /><em>Chi sta imparando</em><br />davvero?</h1>
              <p className="hero-lead">Italia, media europea, Australia. Tre prospettive per capire come l’intelligenza artificiale sta cambiando la scuola superiore — e dove deve fermarsi per lasciare spazio al pensiero.</p>
              <div className="hero-actions"><a className="button-dark" href="#confronto">Esplora il confronto <ArrowRight size={18} /></a><a className="text-link" href="#decreto">Cosa cambia in Italia <ArrowDown size={16} /></a></div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-grid" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" />
              <span className="art-label art-label-one">ITALIA <i>01</i></span><span className="art-label art-label-two">EUROPA <i>02</i></span><span className="art-label art-label-three">AUSTRALIA <i>03</i></span>
              <div className="art-center"><span>LA DOMANDA</span><strong>Chi fa<br />il lavoro<br />mentale?</strong><span className="art-arrow">↗</span></div>
              <div className="art-caption">EDUCAZIONE / TECNOLOGIA / APPRENDIMENTO</div>
            </div>
          </div>
          <div className="hero-bottom"><span>01 — 04 &nbsp; / &nbsp; UN’ANALISI COMPARATA</span><a href="#il-quadro">SCORRI PER LEGGERE <ArrowDown size={15} /></a></div>
        </section>

        <section className="premise" id="il-quadro"><div className="container premise-grid"><div className="section-aside"><span className="section-number">01 / IL PUNTO DI PARTENZA</span><span className="aside-rule" /></div><div><p className="statement">La domanda non è <em>se</em> usare l’IA a scuola. È <em>quando</em> aiuta a imparare — e quando invece rende invisibile ciò che uno studente non ha ancora capito.</p><div className="premise-bottom"><p>La ricerca australiana segnala il rischio di confondere una prestazione assistita con una competenza acquisita. Il confronto europeo mostra quanto rapidamente questi strumenti entrino nella vita dei giovani.</p><External href={sources.aeroTeachers} className="inline-source">AERO, ottobre 2026</External></div></div></div></section>

        <section className="data-section container" aria-labelledby="data-heading"><div className="section-heading"><div><span className="overline">I NUMERI, CON IL LORO CONTESTO</span><h2 id="data-heading">Un fenomeno. <em>Misure diverse.</em></h2></div><p>I dati descrivono popolazioni e comportamenti differenti: non vanno letti come una classifica tra sistemi scolastici.</p></div>
          <div className="stat-grid"><article className="stat-card"><span className="stat-top">01 / UNIONE EUROPEA</span><div className="stat-value">63,8<span>%</span></div><h3>Giovani 16–24 anni che hanno usato l’IA generativa nel 2025.</h3><External href={sources.eurostat} className="stat-link">Eurostat, rilevazione 2025</External></article><article className="stat-card emphasis"><span className="stat-top">02 / ITALIA</span><div className="stat-value">47,2<span>%</span></div><h3>Stesso indicatore e stessa fascia d’età: 16,6 punti sotto la media UE.</h3><External href={sources.eurostat} className="stat-link">Eurostat, rilevazione 2025</External></article><article className="stat-card"><span className="stat-top">03 / AUSTRALIA</span><div className="stat-value">60<span>%</span><span className="stat-approx">OLTRE</span></div><h3>Studenti di Year 10 che dichiarano di generare testi con l’IA per i compiti almeno una volta al mese.</h3><External href={sources.aeroPolicy} className="stat-link">AERO / ACARA, dato 2025</External></article></div>
          <div className="data-note"><span>NOTA METODOLOGICA</span><p>UE e Italia: uso di IA generativa per qualsiasi scopo tra i 16–24enni. Australia: produzione di testi scolastici almeno mensile tra gli studenti di Year 10. <strong>Il 60% australiano non è direttamente confrontabile con le percentuali Eurostat</strong> e nessuno dei tre valori misura soltanto gli iscritti alla secondaria di II grado.</p></div>
          <div className="pisa-note"><span>PISA 2025 / UN ALTRO INDICATORE</span><p>Tra i quindicenni, l’Italia registra nel problem solving computazionale un risultato inferiore alla media <strong>OCSE</strong>. È un dato sulle competenze, non sull’effetto dell’IA né sulla media UE. <External href={sources.pisaItaly}>Scheda OCSE Italia</External></p></div>
        </section>

        <section className="compare-section" id="confronto"><div className="container"><div className="compare-heading"><span className="overline light">02 / TRE PROSPETTIVE</span><h2>Stessa tecnologia.<br /><em>Scelte differenti.</em></h2><p>Seleziona un contesto per leggere la differenza tra uso, orientamento educativo e norma.</p></div><div className="compare-layout"><div className="region-tabs" role="tablist" aria-label="Seleziona il contesto geografico">{(Object.keys(regions) as Region[]).map((key) => <button key={key} role="tab" aria-selected={region === key} id={`tab-${key}`} aria-controls="region-panel" className={region === key ? "region-tab active" : "region-tab"} type="button" onClick={() => setRegion(key)}><span>{regions[key].index}</span><strong>{regions[key].name}</strong><ArrowUpRight size={19} /></button>)}</div><article className="region-panel" id="region-panel" role="tabpanel" aria-labelledby={`tab-${region}`} key={region}><div className="panel-top"><span>{current.kicker}</span><span>{current.index} &nbsp; ↗</span></div><h3>{current.title}</h3><p>{current.body}</p><div className="panel-bottom"><div><span>DA PORTARE IN CLASSE</span><strong>{current.take}</strong></div><External href={current.link} className="panel-link">{current.linkLabel}</External></div></article></div><div className="compare-footnote">Tre quadri, tre livelli distinti: <span>dati di utilizzo</span> · <span>indirizzi pedagogici</span> · <span>disposizioni normative</span></div></div></section>

        <section className="australia-section container"><div className="section-aside"><span className="section-number">03 / IL CASO AUSTRALIANO</span><span className="aside-rule" /></div><div className="australia-content"><span className="overline">OLTRE IL TITOLARE “L’AUSTRALIA FRENA”</span><h2>Non un passo indietro.<br /><em>Un criterio in più.</em></h2><p className="section-intro">AERO non propone di vietare l’IA nelle scuole. Invita a chiedersi se lo strumento sostenga i processi cognitivi — recuperare, esercitare e applicare conoscenze — oppure li sostituisca.</p><div className="two-paths"><div><span className="path-symbol positive">+</span><h3>Quando aiuta</h3><p>Fa domande, offre feedback verificato dal docente, suggerisce esercizi e porta lo studente a spiegare il proprio ragionamento.</p></div><div><span className="path-symbol negative">−</span><h3>Quando ostacola</h3><p>Scrive il testo al posto dello studente, fornisce la soluzione finale e riduce le occasioni di pratica autonoma.</p></div></div><div className="callout"><span>IL PARADOSSO DELLA PRESTAZIONE</span><p>Un compito migliore <em>con</em> l’IA non dimostra necessariamente una competenza migliore <em>senza</em> l’IA.</p><External href={sources.aeroPolicy}>La lettura completa di AERO</External></div></div></section>

        <section className="decree-section" id="decreto"><div className="container"><div className="decree-header"><div><span className="overline">04 / IL QUADRO ITALIANO</span><h2>Il decreto,<br /><em>senza equivoci.</em></h2></div><div className="date-stamp"><span>7 OTT 2026</span><strong>n. 179</strong><span>DECRETO LEGISLATIVO</span></div></div><div className="legal-alert"><span className="alert-icon">!</span><p><strong>Alla data di questa pagina, 20 ottobre 2026, il decreto non è ancora in vigore.</strong> È pubblicato nella G.U. dell’8 ottobre e la sua entrata in vigore è fissata al <strong>23 ottobre 2026</strong>. Le misure che richiedono decreti o aggiornamenti ministeriali non sono già operative per il solo fatto della pubblicazione.</p></div><div className="decree-list"><article><div className="article-no">ART. <strong>36</strong></div><div><h3>Formazione degli studenti</h3><p>Le scuole <strong>possono</strong> promuovere attività sull’IA nell’educazione civica e moduli STEAM, anche nella formazione scuola-lavoro. Sono previsti aggiornamenti delle linee guida STEM, delle indicazioni nazionali e dell’orientamento. Non impone un’ora obbligatoria di IA né l’adozione di una piattaforma.</p></div><span className="article-tag">AUTONOMIA SCOLASTICA</span></article><article><div className="article-no">ART. <strong>37</strong></div><div><h3>Benessere digitale e social</h3><p>Il Ministero deve avviare entro 90 giorni dall’entrata in vigore un piano di formazione docenti; previsti interventi educativi per studenti e famiglie. Finanziamento <strong>nel limite di 100 milioni di euro</strong> sul programma PN Scuola e Competenze 2021–2027, soggetto ai relativi criteri e vincoli.</p></div><span className="article-tag">ENTRO 90 GIORNI</span></article><article><div className="article-no">ART. <strong>38</strong></div><div><h3>Docenti, valutazione e tutela</h3><p>Un successivo decreto ministeriale, da adottare entro 90 giorni dall’entrata in vigore, stabilirà criteri e modalità della formazione sull’IA. Previste alfabetizzazione critica degli studenti, attenzione a privacy ed equità e possibile supporto di comitati tecnico-etici territoriali; fino ad allora restano applicabili le linee guida MIM richiamate al comma 4.</p></div><span className="article-tag">DECRETO ATTUATIVO</span></article></div><External href={sources.normattiva} className="decree-link">Consulta il testo integrale su Normattiva</External></div></section>

        <section className="practice-section container"><div className="practice-head"><span className="overline">DAL CONFRONTO ALLA CLASSE</span><h2>Tre domande prima<br />di aprire <em>un chatbot.</em></h2></div><div className="practice-grid"><article><span>01</span><h3>Che cosa deve imparare lo studente?</h3><p>Definire la competenza da esercitare prima di decidere se l’IA è un supporto utile o una scorciatoia.</p></article><article><span>02</span><h3>Come dimostrerà ciò che sa fare da solo?</h3><p>Affiancare alle attività assistite momenti di pratica, spiegazione e valutazione senza IA.</p></article><article><span>03</span><h3>Chi controlla risposte e dati?</h3><p>Verificare le fonti, governare privacy e accessibilità e mantenere il docente responsabile del giudizio.</p></article></div><p className="practice-note">Indicazioni operative proposte dall’analisi, non nuovi obblighi previsti dal D.Lgs. 179/2026.</p></section>

        <section className="sources-section" id="fonti"><div className="container sources-layout"><div><span className="overline">TRASPARENZA</span><h2>Le fonti,<br /><em>in chiaro.</em></h2><p>Documenti istituzionali e ricerche originali. La pagina è aggiornata al 20 ottobre 2026; il quadro normativo va ricontrollato dopo l’entrata in vigore del decreto.</p><BookOpen size={31} strokeWidth={1.2} className="sources-icon" /></div><div className="source-list"><External href={sources.normattiva}><span>01</span><span><strong>Normattiva</strong><small>D.Lgs. 7 ottobre 2026, n. 179, artt. 36–38</small></span></External><External href={sources.eurostat}><span>02</span><span><strong>Eurostat</strong><small>Utilizzo dell’IA generativa tra i 16–24enni, 2025</small></span></External><External href={sources.aeroTeachers}><span>03</span><span><strong>AERO · per docenti e dirigenti</strong><small>AI in schools, ottobre 2026</small></span></External><External href={sources.aeroPolicy}><span>04</span><span><strong>AERO · per decisori pubblici</strong><small>AI in schools, ottobre 2026; dati ACARA</small></span></External><External href={sources.australiaFramework}><span>05</span><span><strong>Australian Department of Education</strong><small>Framework for Generative AI in Schools</small></span></External><External href={sources.europeGuidelines}><span>06</span><span><strong>Commissione europea</strong><small>Linee guida per l’uso etico dell’IA nell’istruzione</small></span></External><External href={sources.pisaItaly}><span>07</span><span><strong>OCSE · PISA 2025, Italia</strong><small>Contesto degli apprendimenti dei quindicenni; non misura l’uso dell’IA</small></span></External></div></div><div className="container methodology"><details><summary>Nota metodologica e limiti del confronto <ChevronDown size={19} /></summary><p>“Media europea” indica la media UE-27 Eurostat per i giovani 16–24 anni, non la media OCSE e non la sola scuola secondaria di II grado. Il dato italiano usa la stessa fonte, anno e fascia d’età. Il dato australiano AERO/ACARA si riferisce agli studenti Year 10 e a un comportamento diverso: generare testi per compiti almeno mensilmente; non è numericamente confrontabile con Eurostat. Le indicazioni AERO sono orientamenti basati su evidenze ancora emergenti, non un divieto nazionale. La sintesi del decreto fornita tra gli allegati è stata verificata sul testo ufficiale Normattiva; il decreto entra in vigore il 23 ottobre 2026.</p></details></div></section>
      </main>
      <footer className="footer"><div className="container footer-main"><div><div className="footer-logo">a<span>.</span> <small>atlante</small></div><p>Più chiarezza nel dibattito.<br />Più spazio per imparare.</p></div><a href="#inizio">TORNA SU <ArrowUpRight size={18} /></a></div><div className="container footer-bottom"><span>RICERCA EDITORIALE · 20 OTTOBRE 2026</span><span>ITALIA / EUROPA / AUSTRALIA</span><span>FONTI VERIFICABILI. CONFRONTI ONESTI.</span></div></footer>
    </div>
  );
}

export default Index;
