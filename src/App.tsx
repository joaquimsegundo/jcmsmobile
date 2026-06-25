import { useEffect, useMemo, useState, type ReactNode } from "react";
import portrait from "./assets/joaquim-segundo.png";
import {
  about,
  contact,
  home,
  labels,
  navLabels,
  publications,
  sectionHeaders,
  shared,
  type Language,
  type ViewKey,
  viewOrder,
} from "./data/siteContent";

function App() {
  const [activeView, setActiveView] = useState<ViewKey>("home");
  const [language, setLanguage] = useState<Language>("pt");

  const t = labels[language];
  const pageTitle = useMemo(
    () => `${shared.name} | ${navLabels[language][activeView]}`,
    [activeView, language],
  );

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title = pageTitle;
  }, [language, pageTitle]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeView]);

  function navigate(view: ViewKey) {
    setActiveView(view);
  }

  return (
    <div className="app">
      <div className="site-shell">
        <div className="top-rule" />
        <Header
          activeView={activeView}
          language={language}
          onLanguageChange={setLanguage}
          onNavigate={navigate}
        />
        <main className="content-frame">
          {activeView === "home" && <HomeView language={language} onNavigate={navigate} />}
          {activeView === "about" && <AboutView language={language} />}
          {activeView === "publications" && <PublicationsView language={language} />}
          {activeView === "contact" && <ContactView language={language} />}
        </main>
        <Footer language={language} />
      </div>
    </div>
  );
}

type HeaderProps = {
  activeView: ViewKey;
  language: Language;
  onLanguageChange: (language: Language) => void;
  onNavigate: (view: ViewKey) => void;
};

function Header({ activeView, language, onLanguageChange, onNavigate }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="brand-row">
        <button className="brand-button" type="button" onClick={() => onNavigate("home")}>
          <span className="brand serif">
            J<span>.</span>Segundo
          </span>
        </button>
        <div className="header-tools">
          <span className="masthead mono">{labels[language].masthead}</span>
          <div className="language-toggle" aria-label="Language">
            <button
              type="button"
              className={language === "pt" ? "is-active" : ""}
              onClick={() => onLanguageChange("pt")}
            >
              PT
            </button>
            <button
              type="button"
              className={language === "en" ? "is-active" : ""}
              onClick={() => onLanguageChange("en")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
      <nav className="tabs mono" aria-label="Principal">
        {viewOrder.map((view) => (
          <button
            key={view}
            type="button"
            className={activeView === view ? "is-active" : ""}
            aria-current={activeView === view ? "page" : undefined}
            onClick={() => onNavigate(view)}
          >
            {navLabels[language][view]}
          </button>
        ))}
      </nav>
    </header>
  );
}

function HomeView({ language, onNavigate }: { language: Language; onNavigate: (view: ViewKey) => void }) {
  const copy = home[language];
  const recent = publications[language].papers;
  const t = labels[language];

  return (
    <section className="home-view">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow mono">{t.issue}</p>
          <h1 className="hero-title serif">
            Joaquim
            <br />
            Cavalcanti
            <br />
            <span>de Morais Segundo</span>
          </h1>
          <p className="role-line mono">{t.role}</p>
          <p className="drop-copy serif">
            <span>J</span>
            {copy.heroParagraph.slice(1)}
          </p>
          <div className="cta-row mono">
            <button type="button" className="primary-action" onClick={() => onNavigate("about")}>
              {t.readCv}
            </button>
            <button type="button" className="secondary-action" onClick={() => onNavigate("publications")}>
              {t.publicationCta}
            </button>
          </div>
        </div>
        <figure className="portrait-panel">
          <img src={portrait} alt={shared.name} />
          <figcaption className="mono">
            <span>{t.photoCaption}</span>
            <span>Fig. 01</span>
          </figcaption>
        </figure>
      </div>

      <SectionBlock eyebrow={t.researchInterests}>
        <div className="interest-grid">
          {copy.interests.map((interest, index) => (
            <article className="lined-card" key={interest.title}>
              <div className="item-index mono">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="serif">{interest.title}</h3>
              <p className="serif">{interest.description}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow={t.recent}>
        <div className="publication-list compact">
          {recent.map((paper) => (
            <PublicationItem key={paper.title} item={paper} tag={t.accepted} />
          ))}
        </div>
        <button type="button" className="text-link mono" onClick={() => onNavigate("publications")}>
          {t.allPublications}
        </button>
      </SectionBlock>
    </section>
  );
}

function AboutView({ language }: { language: Language }) {
  const copy = about[language];

  return (
    <section>
      <PageHeader header={sectionHeaders[language].about} />
      <div className="two-column-section">
        <aside className="summary-panel">
          <p className="section-eyebrow mono">{language === "pt" ? "Resumo" : "At a glance"}</p>
          {copy.facts.map((fact) => (
            <div className="fact-row" key={fact.label}>
              <span className="mono">{fact.label}</span>
              <strong className="serif">{fact.value}</strong>
              <small className="serif">{fact.note}</small>
            </div>
          ))}
        </aside>
        <div className="prose-panel">
          <p className="section-eyebrow mono">Bio</p>
          {copy.bio.map((paragraph) => (
            <p className="serif" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <SectionBlock eyebrow={language === "pt" ? "Formacao" : "Education"}>
        <div className="timeline-grid">
          {copy.education.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.degree}`}>
              <span className="mono period">{item.period}</span>
              <h3 className="serif">{item.degree}</h3>
              <p className="serif muted">{item.institution}</p>
              {item.thesis && <Callout label={language === "pt" ? "Dissertacao" : "Thesis"} text={item.thesis} />}
              {item.mentorship && <MetaLine label={language === "pt" ? "Orientacao" : "Mentorship"} value={item.mentorship} />}
              {item.funding && <p className="mono note-line">{item.funding}</p>}
              {item.note && <p className="serif accent-note">{item.note}</p>}
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow={language === "pt" ? "Orientacao atual" : "Current mentorship"}>
        <div className="mentor-grid">
          {copy.mentors.map((mentor) => (
            <article className="mentor-card" key={mentor.name}>
              <span className="mono">{mentor.role}</span>
              <h3 className="serif">{mentor.name}</h3>
              <p className="serif">{mentor.area}</p>
            </article>
          ))}
        </div>
        <p className="serif section-note">{copy.mentorNote}</p>
      </SectionBlock>

      <SectionBlock eyebrow={language === "pt" ? "Areas de pesquisa" : "Research areas"}>
        <div className="stack-list">
          {copy.areas.map((area, index) => (
            <article className="numbered-row" key={area.title}>
              <span className="mono">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="serif">{area.title}</h3>
                <p className="serif">{area.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock eyebrow={language === "pt" ? "Projetos" : "Projects"}>
        <div className="stack-list">
          {copy.projects.map((project) => (
            <article className="project-row" key={project.title}>
              <div className="row-meta mono">
                <span>{project.period}</span>
                <span>{project.status}</span>
              </div>
              <h3 className="serif">{project.title}</h3>
              <p className="serif">{project.description}</p>
              <small className="mono">{project.meta}</small>
            </article>
          ))}
        </div>
      </SectionBlock>

      <div className="split-blocks">
        <SectionBlock eyebrow={language === "pt" ? "Idiomas" : "Languages"}>
          {copy.languages.map((item) => (
            <div className="simple-row" key={item.name}>
              <strong className="serif">{item.name}</strong>
              <span className="serif">{item.level}</span>
            </div>
          ))}
        </SectionBlock>
        <SectionBlock eyebrow={language === "pt" ? "Experiencia" : "Experience"}>
          <article className="project-row">
            <div className="row-meta mono">
              <span>{copy.experience.period}</span>
            </div>
            <h3 className="serif">{copy.experience.title}</h3>
            <p className="serif muted">{copy.experience.location}</p>
            <p className="serif">{copy.experience.description}</p>
          </article>
        </SectionBlock>
      </div>
    </section>
  );
}

function PublicationsView({ language }: { language: Language }) {
  const copy = publications[language];
  const t = labels[language];

  return (
    <section>
      <PageHeader header={sectionHeaders[language].publications}>
        <p className="citation-line mono">
          {t.citation}: Joaquim Segundo / J.C.M. Segundo
        </p>
      </PageHeader>

      <SectionBlock eyebrow={language === "pt" ? "Panorama" : "At a glance"}>
        <div className="stats-grid">
          {copy.stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong className="serif">{stat.value}</strong>
              <span className="mono">{stat.label}</span>
            </div>
          ))}
        </div>
      </SectionBlock>

      <PublicationSection title={language === "pt" ? "Artigos aceitos" : "Accepted papers"} count="02">
        {copy.papers.map((paper) => (
          <PublicationItem key={paper.title} item={paper} tag={paper.status} />
        ))}
      </PublicationSection>

      <PublicationSection title={language === "pt" ? "Dissertações" : "Theses"} count="01">
        {copy.theses.map((thesis) => (
          <article className="publication-item" key={thesis.title}>
            <div className="row-meta mono">
              <span>{thesis.year}</span>
              <span>{t.thesis}</span>
            </div>
            <h3 className="serif">{thesis.title}</h3>
            <p className="serif">{thesis.authors}</p>
            <p className="serif venue">{thesis.venue}</p>
            <p className="serif muted">{thesis.advisor}</p>
            <p className="mono note-line">{thesis.keywords}</p>
          </article>
        ))}
      </PublicationSection>

      <PublicationSection title={language === "pt" ? "Resumos em anais de congressos" : "Conference abstracts"} count="01">
        {copy.abstracts.map((item) => (
          <PublicationItem key={item.title} item={{ ...item, status: t.abstract }} tag={t.abstract} />
        ))}
      </PublicationSection>

      <PublicationSection title={language === "pt" ? "Textos em jornais / extensão" : "Newsletter / outreach articles"} count="01">
        {copy.outreach.map((item) => (
          <PublicationItem key={item.title} item={{ ...item, status: t.outreach }} tag={t.outreach} />
        ))}
      </PublicationSection>

      <p className="serif section-note publication-note">{copy.note}</p>
    </section>
  );
}

function ContactView({ language }: { language: Language }) {
  const copy = contact[language];

  return (
    <section>
      <PageHeader header={sectionHeaders[language].contact} />
      <div className="contact-grid">
        <div className="contact-primary">
          <SectionBlock eyebrow={copy.whereLabel}>
            <address className="address-block serif">
              <strong>{copy.institution}</strong>
              <span>{copy.unit}</span>
              <em>{copy.center}</em>
              <span>{copy.address}</span>
            </address>
          </SectionBlock>
          <div className="contact-methods">
            <div>
              <p className="section-eyebrow mono">E-mail</p>
              <a className="serif contact-link" href={`mailto:${shared.email}`}>
                {shared.email}
              </a>
              <span className="mono note-line">{copy.emailNote}</span>
            </div>
            <div>
              <p className="section-eyebrow mono">{language === "pt" ? "Telefone" : "Phone"}</p>
              <a className="serif contact-link" href="tel:+5583998319218">
                {shared.phone}
              </a>
              <span className="mono note-line">{copy.phoneNote}</span>
            </div>
          </div>
        </div>
        <aside className="profiles-panel">
          <p className="section-eyebrow mono">{copy.profilesLabel}</p>
          {copy.profiles.map((profile, index) => {
            const content = (
              <>
                <span className="mono profile-index">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <strong className="serif">{profile.label}</strong>
                  <small className="mono">{profile.value}</small>
                </span>
                <span className="mono">{profile.href ? "↗" : "+"}</span>
              </>
            );

            return profile.href ? (
              <a className="profile-row" href={profile.href} key={profile.label} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              <div className={`profile-row ${profile.muted ? "is-muted" : ""}`} key={profile.label}>
                {content}
              </div>
            );
          })}
        </aside>
      </div>

      <div className="research-callout">
        <p className="mono">{copy.groupLabel}</p>
        <strong className="serif">{copy.groupMessage}</strong>
        <span className="mono">{copy.groupCta}</span>
      </div>
    </section>
  );
}

function PageHeader({
  header,
  children,
}: {
  header: { eyebrow: string; title: string; subtitle: string };
  children?: ReactNode;
}) {
  return (
    <div className="page-header">
      <p className="eyebrow mono">§ {header.eyebrow}</p>
      <h2 className="serif">{header.title}</h2>
      <p className="serif">{header.subtitle}</p>
      {children}
    </div>
  );
}

function SectionBlock({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <section className="section-block">
      <p className="section-eyebrow mono">{eyebrow}</p>
      {children}
    </section>
  );
}

function PublicationSection({
  title,
  count,
  children,
}: {
  title: string;
  count: string;
  children: ReactNode;
}) {
  return (
    <SectionBlock eyebrow={title}>
      <div className="section-count mono">{count}</div>
      <div className="publication-list">{children}</div>
    </SectionBlock>
  );
}

function PublicationItem({
  item,
  tag,
}: {
  item: { year: string; status?: string; title: string; authors: string; venue: string };
  tag: string;
}) {
  return (
    <article className="publication-item">
      <div className="row-meta mono">
        <span>{item.year}</span>
        <span>{tag}</span>
      </div>
      <h3 className="serif">{item.title}</h3>
      <p className="serif">{item.authors}</p>
      <p className="serif venue">{item.venue}</p>
    </article>
  );
}

function Callout({ label, text }: { label: string; text: string }) {
  return (
    <div className="callout">
      <span className="mono">{label}</span>
      <p className="serif">{text}</p>
    </div>
  );
}

function MetaLine({ label, value }: { label: string; value: string }) {
  return (
    <>
      <span className="mono meta-label">{label}</span>
      <p className="serif meta-value">{value}</p>
    </>
  );
}

function Footer({ language }: { language: Language }) {
  return (
    <footer className="site-footer">
      <p className="mono">© 2026 / {shared.footerName}</p>
      <p className="mono">
        <a href={shared.lattesUrl} target="_blank" rel="noreferrer">
          Lattes
        </a>{" "}
        /{" "}
        <a href={shared.orcidUrl} target="_blank" rel="noreferrer">
          ORCID
        </a>{" "}
        / PPGMat UFCG / {language.toUpperCase()}
      </p>
    </footer>
  );
}

export default App;
