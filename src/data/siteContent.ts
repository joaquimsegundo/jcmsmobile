export type Language = "pt" | "en";
export type ViewKey = "home" | "about" | "publications" | "contact";

export const viewOrder: ViewKey[] = ["home", "about", "publications", "contact"];

export const navLabels: Record<Language, Record<ViewKey, string>> = {
  pt: {
    home: "Início",
    about: "Sobre / CV",
    publications: "Publicações",
    contact: "Contato",
  },
  en: {
    home: "Home",
    about: "About / CV",
    publications: "Publications",
    contact: "Contact",
  },
};

type Localized<T> = Record<Language, T>;

export const shared = {
  name: "Joaquim Cavalcanti de Morais Segundo",
  shortName: "J.Segundo",
  footerName: "Joaquim Cavalcanti de Morais Segundo",
  lattesUrl: "https://lattes.cnpq.br/4474515397266513",
  orcidUrl: "https://orcid.org/0009-0000-8760-4760",
  email: "info.joaquimsegundo@gmail.com",
  phone: "(83) 9 9831-9218",
};

export const labels: Localized<{
  masthead: string;
  issue: string;
  role: string;
  readCv: string;
  allPublications: string;
  publicationCta: string;
  photoCaption: string;
  researchInterests: string;
  recent: string;
  accepted: string;
  current: string;
  concluded: string;
  thesis: string;
  abstract: string;
  outreach: string;
  citation: string;
  external: string;
  inactiveProfile: string;
}> = {
  pt: {
    masthead: "Mathematics / UFCG",
    issue: "Vol. I - Nº 01 / Junho 2026",
    role: "Doutorando em Matemática / UFCG / Bolsista FAPESQ",
    readCv: "Ler o CV",
    allPublications: "Ver todas as publicações",
    publicationCta: "Publicações",
    photoCaption: "CCT / UFCG - Campina Grande, PB.",
    researchInterests: "Interesses de pesquisa",
    recent: "Recentes",
    accepted: "Aceito",
    current: "Atual",
    concluded: "Concluído",
    thesis: "Dissertação",
    abstract: "Resumo",
    outreach: "Extensão",
    citation: "Citação",
    external: "Abrir",
    inactiveProfile: "a adicionar",
  },
  en: {
    masthead: "Mathematics / UFCG",
    issue: "Vol. I - Nº 01 / June 2026",
    role: "PhD Candidate in Mathematics / UFCG / FAPESQ Fellow",
    readCv: "Read the CV",
    allPublications: "See all publications",
    publicationCta: "Publications",
    photoCaption: "CCT / UFCG - Campina Grande, PB.",
    researchInterests: "Research interests",
    recent: "Latest",
    accepted: "Accepted",
    current: "Ongoing",
    concluded: "Concluded",
    thesis: "Thesis",
    abstract: "Abstract",
    outreach: "Outreach",
    citation: "Citation",
    external: "Open",
    inactiveProfile: "to add",
  },
};

export const home: Localized<{
  heroParagraph: string;
  interests: Array<{ title: string; description: string }>;
}> = {
  pt: {
    heroParagraph:
      "Joaquim é Bacharel (2022) e Mestre (2025) em Física pela Universidade Federal de Campina Grande, e atualmente doutorando em Matemática pela mesma instituição. Cursa, em paralelo, o Bacharelado em Matemática. Pesquisa Análise Geométrica, Nilmanifolds e Fluxo de Ricci, na interface da Geometria Topológica com a Física Matemática.",
    interests: [
      {
        title: "Análise Geométrica",
        description:
          "Propriedades topológicas, dinâmicas e analíticas de espaços diferenciáveis via métodos variacionais e funcionais geométricos.",
      },
      {
        title: "Nilmanifolds & Fluxo de Ricci",
        description:
          "Evolução temporal de métricas e subvariedades governadas por EDPs elípticas e parabólicas.",
      },
      {
        title: "Geometria Topológica em Física Matemática",
        description:
          "Reestruturação das geometrias e simetrias do espaço-tempo na interface com a física-matemática.",
      },
      {
        title: "Violação da Invariância de Lorentz",
        description:
          "Quebra de simetria via teorias de campos efetivas: efeito Casimir, EDPs de fronteira livre e formalismo de Abel-Plana.",
      },
    ],
  },
  en: {
    heroParagraph:
      "Joaquim holds a Bachelor's (2022) and a Master's (2025) in Physics from the Federal University of Campina Grande, and is currently a PhD candidate in Mathematics at the same institution. He is concurrently pursuing a Bachelor's in Mathematics. His research is in Geometric Analysis, Nilmanifolds and Ricci Flow, at the interface of Topological Geometry and Mathematical Physics.",
    interests: [
      {
        title: "Geometric Analysis",
        description:
          "Topological, dynamical and analytical properties of differentiable spaces, via variational methods and geometric functionals.",
      },
      {
        title: "Nilmanifolds & Ricci Flow",
        description:
          "Temporal evolution of metrics and submanifolds governed by elliptic and parabolic PDEs.",
      },
      {
        title: "Topological Geometry in Mathematical Physics",
        description:
          "Restructuring of space-time geometries and symmetries at the interface with mathematical physics.",
      },
      {
        title: "Lorentz Invariance Violation",
        description:
          "Symmetry breaking through effective field theories: Casimir effect, free-boundary PDEs, and the Abel-Plana formalism.",
      },
    ],
  },
};

export const sectionHeaders: Localized<Record<Exclude<ViewKey, "home">, { eyebrow: string; title: string; subtitle: string }>> = {
  pt: {
    about: {
      eyebrow: "Sobre / CV",
      title: "Sobre.",
      subtitle: "Da Física à Matemática - trajetória, formação e linhas de pesquisa.",
    },
    publications: {
      eyebrow: "Publicações",
      title: "Publicações.",
      subtitle: "Artigos aceitos, dissertações, resumos em anais e textos de extensão.",
    },
    contact: {
      eyebrow: "Contato",
      title: "Contato.",
      subtitle: "Endereço, telefone, e-mail e perfis acadêmicos.",
    },
  },
  en: {
    about: {
      eyebrow: "About / CV",
      title: "About.",
      subtitle: "From Physics to Mathematics - trajectory, training and research lines.",
    },
    publications: {
      eyebrow: "Publications",
      title: "Publications.",
      subtitle: "Accepted papers, theses, conference abstracts and outreach articles.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact.",
      subtitle: "Address, phone, e-mail and academic profiles.",
    },
  },
};

export const about: Localized<{
  facts: Array<{ label: string; value: string; note: string }>;
  bio: string[];
  education: Array<{
    period: string;
    degree: string;
    institution: string;
    note?: string;
    thesis?: string;
    mentorship?: string;
    funding?: string;
  }>;
  mentors: Array<{ role: string; name: string; area: string }>;
  mentorNote: string;
  areas: Array<{ title: string; description: string }>;
  projects: Array<{ period: string; status: string; title: string; description: string; meta: string }>;
  languages: Array<{ name: string; level: string }>;
  experience: {
    period: string;
    title: string;
    location: string;
    description: string;
  };
}> = {
  pt: {
    facts: [
      { label: "Nascimento", value: "18 fev 1999", note: "Viana do Castelo, Portugal" },
      { label: "Instituição", value: "UFCG / CCT", note: "Campina Grande, PB" },
      { label: "Financiamento", value: "FAPESQ", note: "Doutorado / Paraíba" },
    ],
    bio: [
      "Joaquim Cavalcanti de Morais Segundo é Bacharel (2022) e Mestre (2025) em Física pela Universidade Federal de Campina Grande (UFCG), e atualmente Doutorando em Matemática pela mesma instituição, com bolsa FAPESQ. Cursa, em paralelo, o Bacharelado em Matemática.",
      "É integrante do grupo de pesquisa em Geometria da UFCG desde 2025. Sua pesquisa concentra-se em Análise Geométrica, Geometria Topológica em Física Matemática e na investigação de nilmanifolds - em particular, no estudo do Fluxo de Ricci.",
      "No mestrado, dedicou-se ao Efeito Casimir e à Radiação do Corpo Negro em (1+1) Dimensões com Violação da Invariância de Lorentz, explorando, com o formalismo da fórmula de Abel-Plana, as modificações induzidas pela quebra de simetria nas flutuações do vácuo e na termodinamica bidimensional.",
      "A linha atual - Análise Geométrica e Fluxos em Variedades Classicas e Generalizadas - investiga a evolução temporal de métricas e subvariedades governadas por EDPs elípticas e parabólicas, sob orientação do Prof. Francisco de Assis de Brito (UFCG) e coorientação do Prof. Francisco Vieira de Oliveira (UFERSA / UFCG).",
    ],
    education: [
      {
        period: "2025 -",
        degree: "Doutorado em Matemática (em andamento)",
        institution: "Universidade Federal de Campina Grande - UFCG",
        mentorship:
          "Prof. Francisco de Assis de Brito (orientador) / Prof. Francisco Vieira de Oliveira (coorientador, UFERSA/UFCG)",
        funding: "Bolsa FAPESQ",
      },
      {
        period: "2023 - 2025",
        degree: "Mestrado em Física",
        institution: "Universidade Federal de Campina Grande - UFCG",
        thesis:
          "O Efeito Casimir e Radiação do Corpo Negro em (1+1) Dimensões com a Violação da Invariância de Lorentz",
        mentorship:
          "Prof. Eduardo Marcos Rodrigues dos Passos (orientador) / Prof. Klécio Emanuel Lima de Farias (coorientador)",
        funding: "Bolsa CAPES",
      },
      {
        period: "2024 -",
        degree: "Bacharelado em Matemática (em andamento)",
        institution: "Universidade Federal de Campina Grande - UFCG",
        note: "Em curso, paralelo ao Doutorado.",
      },
      {
        period: "2020 - 2022",
        degree: "Bacharelado em Física",
        institution: "Universidade Federal de Campina Grande - UFCG",
        mentorship: "Prof. Diego Alejandro Cogollo Aponte / Prof. Emanuel Fernandes de Lima",
        funding: "Bolsa CAPES / Iniciação Científica",
      },
    ],
    mentors: [
      { role: "Orientador", name: "Prof. Francisco de Assis de Brito", area: "Análise Geométrica / UFCG" },
      { role: "Coorientador", name: "Prof. Francisco Vieira de Oliveira", area: "Geometria / UFERSA / UFCG" },
    ],
    mentorNote:
      "No mestrado em Física: Prof. Eduardo M. R. dos Passos (orientador) e Prof. Klécio E. L. de Farias (coorientador).",
    areas: [
      {
        title: "Análise Geométrica",
        description:
          "Estudo das propriedades topológicas, dinâmicas e analíticas de espaços diferenciáveis e singulares, com foco na evolução temporal de métricas e subvariedades governadas por EDPs elípticas e parabólicas. Existência, regularidade e rigidez de imersões isométricas, abordadas por métodos variacionais e pela análise de funcionais geométricos.",
      },
      {
        title: "Nilmanifolds & Fluxo de Ricci",
        description:
          "Investigação de novas geometrias e do Fluxo de Ricci como ferramenta para uniformização. A metodologia inclui formação de singularidades, comportamento assintótico de longo prazo, fórmulas do tipo Simons e princípios do máximo generalizados associados a operadores diferenciais de Chen e Yau.",
      },
      {
        title: "Geometria Topológica em Física Matemática",
        description:
          "Reestruturação das geometrias e simetrias do espaço-tempo via geometria diferencial e topologia algebrica - dinamica de campos de gauge e propagacao em métricas anomalas ou em espaços com torcao.",
      },
      {
        title: "Violação da Invariância de Lorentz",
        description:
          "Implicações formais da quebra da invariância de Lorentz em teorias de campos efetivas: modificações no efeito Casimir, EDPs de fronteira livre e fenomenologia de altas energias. Uso extensivo do formalismo da fórmula de Abel-Plana para isolar contribuições topológicas das divergências do contínuo de Minkowski.",
      },
    ],
    projects: [
      {
        period: "2025 - Atual",
        status: "Em andamento",
        title: "Análise Geométrica e Fluxos em Variedades Classicas e Generalizadas",
        description:
          "Análise Geométrica, Geometria Diferencial e fluxos para investigar propriedades topológicas, dinâmicas e analíticas de espaços diferenciáveis e singulares - fluxo de Ricci e curvatura média em espaços com densidade e estruturas pseudorriemannianas.",
        meta: "Coordenador / FAPESQ",
      },
      {
        period: "2023 - 2025",
        status: "Concluído",
        title: "Violação da Invariância de Lorentz via Teorias de Campos Efetivas",
        description:
          "Modificacoes no efeito Casimir, efeitos de fronteira livre em EDPs e reestruturação das geometrias do espaço-tempo sob LIV. Formalismo de Abel-Plana, análise complexa, geometria nao comutativa.",
        meta: "Coordenador",
      },
      {
        period: "2020 - 2021",
        status: "Concluído",
        title: "Defeitos topologicos via Teoria Classica de Campos Escalares",
        description:
          "Teoria classica de campos escalares aplicada à cosmologia: minimizacao da acao, métodos perturbativos e modelos de quintessencia. Orientação do Prof. João Rafael Lúcio dos Santos.",
        meta: "Integrante / Coord. J. R. L. dos Santos",
      },
    ],
    languages: [
      { name: "Português", level: "Compreende, fala, lê e escreve bem." },
      { name: "Inglês", level: "Lê e escreve bem / compreende e fala razoavelmente." },
      { name: "Espanhol", level: "Lê razoavelmente / básico em fala e escrita." },
    ],
    experience: {
      period: "2022 - 2024",
      title: "Software Developer / RoleCatcher",
      location: "RoleCatcher / Inglaterra / 40h/semana",
      description:
        "Desenvolvimento web full-stack em plataforma SaaS de EdTech/HRTech. Atuação em front-end (dashboards interativos) e back-end (lógica de integracao com IA, extensão de navegador, modelagem de banco de dados).",
    },
  },
  en: {
    facts: [
      { label: "Born", value: "18 Feb 1999", note: "Viana do Castelo, Portugal" },
      { label: "Affiliation", value: "UFCG / CCT", note: "Campina Grande, PB" },
      { label: "Funding", value: "FAPESQ", note: "PhD / Paraíba" },
    ],
    bio: [
      "Joaquim Cavalcanti de Morais Segundo holds a Bachelor's (2022) and a Master's (2025) in Physics from the Federal University of Campina Grande (UFCG), and is currently a PhD candidate in Mathematics at the same institution, with FAPESQ support. He is concurrently pursuing a Bachelor's in Mathematics.",
      "He has been a member of UFCG's Geometry research group since 2025. His work focuses on Geometric Analysis, Topological Geometry in Mathematical Physics, and the investigation of nilmanifolds - in particular, the study of Ricci Flow.",
      "In his Master's, he studied the Casimir Effect and Black-Body Radiation in (1+1) Dimensions with Lorentz Invariance Violation, using the Abel-Plana formalism to investigate modifications induced by symmetry breaking in vacuum fluctuations and two-dimensional thermodynamics.",
      "His current line - Geometric Analysis and Flows on Classical and Generalized Manifolds - investigates temporal evolution of metrics and submanifolds governed by elliptic and parabolic PDEs, under Prof. Francisco de Assis de Brito (UFCG, advisor) and Prof. Francisco Vieira de Oliveira (UFERSA / UFCG, co-advisor).",
    ],
    education: [
      {
        period: "2025 -",
        degree: "PhD in Mathematics (in progress)",
        institution: "Federal University of Campina Grande - UFCG",
        mentorship:
          "Prof. Francisco de Assis de Brito (advisor) / Prof. Francisco Vieira de Oliveira (co-advisor, UFERSA/UFCG)",
        funding: "FAPESQ Fellow",
      },
      {
        period: "2023 - 2025",
        degree: "MSc in Physics",
        institution: "Federal University of Campina Grande - UFCG",
        thesis:
          "O Efeito Casimir e Radiação do Corpo Negro em (1+1) Dimensões com a Violação da Invariância de Lorentz",
        mentorship:
          "Prof. Eduardo Marcos Rodrigues dos Passos (advisor) / Prof. Klécio Emanuel Lima de Farias (co-advisor)",
        funding: "CAPES Fellow",
      },
      {
        period: "2024 -",
        degree: "BSc in Mathematics (in progress)",
        institution: "Federal University of Campina Grande - UFCG",
        note: "Ongoing, alongside the PhD.",
      },
      {
        period: "2020 - 2022",
        degree: "BSc in Physics",
        institution: "Federal University of Campina Grande - UFCG",
        mentorship: "Prof. Diego Alejandro Cogollo Aponte / Prof. Emanuel Fernandes de Lima",
        funding: "CAPES / Undergraduate Research",
      },
    ],
    mentors: [
      { role: "Advisor", name: "Prof. Francisco de Assis de Brito", area: "Geometric Analysis / UFCG" },
      { role: "Co-advisor", name: "Prof. Francisco Vieira de Oliveira", area: "Geometry / UFERSA / UFCG" },
    ],
    mentorNote:
      "For the Master's in Physics: Prof. Eduardo M. R. dos Passos (advisor) and Prof. Klécio E. L. de Farias (co-advisor).",
    areas: [
      {
        title: "Geometric Analysis",
        description:
          "Study of topological, dynamical and analytical properties of differentiable and singular spaces, with focus on temporal evolution of metrics and submanifolds governed by elliptic and parabolic PDEs. Existence, regularity and rigidity of isometric immersions, approached through variational methods and analysis of geometric functionals.",
      },
      {
        title: "Nilmanifolds & Ricci Flow",
        description:
          "Investigation of new geometries and Ricci Flow as a uniformization tool. The methodology includes singularity formation, long-term asymptotic behavior, Simons-type formulas and generalized maximum principles associated with Chen-Yau differential operators.",
      },
      {
        title: "Topological Geometry in Mathematical Physics",
        description:
          "Restructuring of space-time geometries and symmetries via differential geometry and algebraic topology - gauge field dynamics and propagation in anomalous metrics or spaces with torsion.",
      },
      {
        title: "Lorentz Invariance Violation",
        description:
          "Formal implications of Lorentz invariance breaking in effective field theories: Casimir effect modifications, free-boundary PDEs and high-energy phenomenology. Extensive use of the Abel-Plana formalism to isolate topological contributions from Minkowski continuum divergences.",
      },
    ],
    projects: [
      {
        period: "2025 - Ongoing",
        status: "Ongoing",
        title: "Geometric Analysis and Flows on Classical and Generalized Manifolds",
        description:
          "Geometric Analysis, Differential Geometry and flows to investigate topological, dynamical and analytical properties of differentiable and singular spaces - Ricci flow and mean curvature in spaces with density and pseudo-Riemannian structures.",
        meta: "Coordinator / FAPESQ",
      },
      {
        period: "2023 - 2025",
        status: "Concluded",
        title: "Lorentz Invariance Violation via Effective Field Theories",
        description:
          "Casimir effect modifications, free-boundary PDE effects, and restructuring of space-time geometries under LIV. Abel-Plana formalism, complex analysis, non-commutative geometry.",
        meta: "Coordinator",
      },
      {
        period: "2020 - 2021",
        status: "Concluded",
        title: "Topological Defects via Classical Scalar Field Theory",
        description:
          "Classical scalar field theory applied to cosmology: action minimization, perturbative methods and quintessence models. Under Prof. João Rafael Lúcio dos Santos.",
        meta: "Member / PI: J. R. L. dos Santos",
      },
    ],
    languages: [
      { name: "Portuguese", level: "Comprehends, speaks, reads and writes well." },
      { name: "English", level: "Reads and writes well / comprehends and speaks reasonably." },
      { name: "Spanish", level: "Reads reasonably / basic speaking and writing." },
    ],
    experience: {
      period: "2022 - 2024",
      title: "Software Developer / RoleCatcher",
      location: "RoleCatcher / United Kingdom / 40h/week",
      description:
        "Full-stack web development on a SaaS EdTech/HRTech platform. Front-end work on interactive dashboards and back-end work on AI integration logic, browser extension and database modelling.",
    },
  },
};

export const publications: Localized<{
  stats: Array<{ value: string; label: string }>;
  papers: Array<{ year: string; status: string; title: string; authors: string; venue: string }>;
  theses: Array<{
    year: string;
    title: string;
    authors: string;
    venue: string;
    advisor: string;
    keywords: string;
  }>;
  abstracts: Array<{ year: string; title: string; authors: string; venue: string }>;
  outreach: Array<{ year: string; title: string; authors: string; venue: string }>;
  note: string;
}> = {
  pt: {
    stats: [
      { value: "02", label: "Artigos aceitos" },
      { value: "01", label: "Dissertação" },
      { value: "02", label: "Resumos / Extensão" },
      { value: "2020", label: "desde" },
    ],
    papers: [
      {
        year: "2026",
        status: "Aceito",
        title:
          "Nonexistence and uniqueness of CMC hypersurfaces in warped products and Moser-Bernstein type results for the mean curvature equation",
        authors: "de Lima, H. F.; Leite, A. V. F.; Segundo, J. C. M.; Velasquez, M. A. L.",
        venue: "Rendiconti del Circolo Matematico di Palermo, Series 2, 2026.",
      },
      {
        year: "2026",
        status: "Aceito",
        title: "Characterizations of hyperplanes in Euclidean space through higher order anisotropic mean curvatures",
        authors: "Velasquez, M. A. L.; Lima, H. F.; Lacerda, J. H.; Gomes, W. F.; Segundo, J.",
        venue: "Journal of the Australian Mathematical Society, 2026.",
      },
    ],
    theses: [
      {
        year: "2025",
        title:
          "O Efeito Casimir e Radiação do Corpo Negro em (1+1) Dimensões com a Violação da Invariância de Lorentz",
        authors: "Segundo, J. C. M.",
        venue: "Dissertação (Mestrado em Física) / UFCG, 2025.",
        advisor:
          "Orientador: Eduardo Marcos Rodrigues dos Passos / Coorientador: Klécio Emanuel Lima de Farias",
        keywords:
          "Palavras-chave: invariância de Lorentz / efeito Casimir / radiação de corpo negro / lei de Stefan-Boltzmann",
      },
    ],
    abstracts: [
      {
        year: "2020",
        title: "A study of the movement towards understanding energy",
        authors: "Segundo, J.; Santos, J. R. L.",
        venue: "International Symposium of Physics - ISP 2020, Campina Grande.",
      },
    ],
    outreach: [
      {
        year: "2022",
        title: "Elaboração e divulgação de vídeos para formação de professores em situação de inovação curricular",
        authors: "Segundo, J.; Santos, R. H.; Carvalho, A. A.; Oliveira, A. J. S.; Campos, A.",
        venue: "Encontro de Extensão Universitária da UFCG / edufcg, p. 79, 2022.",
      },
    ],
    note:
      "Lista compilada do Currículo Lattes (atualizado em 04/06/2026). Para a versão completa e indexada, consulte os perfis Lattes e ORCID em Contato.",
  },
  en: {
    stats: [
      { value: "02", label: "Accepted papers" },
      { value: "01", label: "Thesis" },
      { value: "02", label: "Abstracts / Outreach" },
      { value: "2020", label: "since" },
    ],
    papers: [
      {
        year: "2026",
        status: "Accepted",
        title:
          "Nonexistence and uniqueness of CMC hypersurfaces in warped products and Moser-Bernstein type results for the mean curvature equation",
        authors: "de Lima, H. F.; Leite, A. V. F.; Segundo, J. C. M.; Velasquez, M. A. L.",
        venue: "Rendiconti del Circolo Matematico di Palermo, Series 2, 2026.",
      },
      {
        year: "2026",
        status: "Accepted",
        title: "Characterizations of hyperplanes in Euclidean space through higher order anisotropic mean curvatures",
        authors: "Velasquez, M. A. L.; Lima, H. F.; Lacerda, J. H.; Gomes, W. F.; Segundo, J.",
        venue: "Journal of the Australian Mathematical Society, 2026.",
      },
    ],
    theses: [
      {
        year: "2025",
        title:
          "O Efeito Casimir e Radiação do Corpo Negro em (1+1) Dimensões com a Violação da Invariância de Lorentz",
        authors: "Segundo, J. C. M.",
        venue: "Dissertation (Master's in Physics) / UFCG, 2025.",
        advisor: "Advisor: Eduardo Marcos Rodrigues dos Passos / Co-advisor: Klécio Emanuel Lima de Farias",
        keywords:
          "Keywords: Lorentz invariance / Casimir effect / black-body radiation / Stefan-Boltzmann law",
      },
    ],
    abstracts: [
      {
        year: "2020",
        title: "A study of the movement towards understanding energy",
        authors: "Segundo, J.; Santos, J. R. L.",
        venue: "International Symposium of Physics - ISP 2020, Campina Grande.",
      },
    ],
    outreach: [
      {
        year: "2022",
        title: "Production and dissemination of videos for teacher education in curricular innovation contexts",
        authors: "Segundo, J.; Santos, R. H.; Carvalho, A. A.; Oliveira, A. J. S.; Campos, A.",
        venue: "UFCG University Extension Meeting / edufcg, p. 79, 2022.",
      },
    ],
    note:
      "List compiled from the Lattes CV (updated 04 Jun 2026). For the indexed version, see the Lattes and ORCID profiles in Contact.",
  },
};

export const contact: Localized<{
  whereLabel: string;
  institution: string;
  unit: string;
  center: string;
  address: string;
  emailNote: string;
  phoneNote: string;
  profilesLabel: string;
  profiles: Array<{ label: string; value: string; href?: string; muted?: boolean }>;
  groupLabel: string;
  groupMessage: string;
  groupCta: string;
}> = {
  pt: {
    whereLabel: "Onde encontrar",
    institution: "Universidade Federal de Campina Grande",
    unit: "Unidade Acadêmica de Matemática / Bloco CX, sala da Pos",
    center: "Centro de Ciências e Tecnologia / CCT",
    address: "Campus Universitário / 58429-900 / Campina Grande, PB / Brasil",
    emailNote: "Institucional / UFCG",
    phoneNote: "Whatsapp Profissional",
    profilesLabel: "Perfis acadêmicos",
    profiles: [
      { label: "Lattes - CNPq", value: "lattes.cnpq.br/4474515397266513", href: shared.lattesUrl },
      { label: "ORCID", value: "orcid.org/0009-0000-8760-4760", href: shared.orcidUrl },
      { label: "Página / PPGMat UFCG", value: "mat.ufcg.edu.br/ppgmat/joaquim-...", muted: true },
      { label: "Google Scholar", value: "a adicionar", muted: true },
      { label: "arXiv", value: "Account: jcmsegundo", muted: true },
    ],
    groupLabel: "Grupo de pesquisa",
    groupMessage: "Integrante do grupo de pesquisa em Geometria da UFCG desde 2025 / vinculado ao PPGMat.",
    groupCta: "PPGMat / UFCG",
  },
  en: {
    whereLabel: "Where",
    institution: "Federal University of Campina Grande",
    unit: "Academic Unit of Mathematics / Block CX, graduate room",
    center: "Center of Science and Technology / CCT",
    address: "University Campus / 58429-900 / Campina Grande, PB / Brazil",
    emailNote: "Institutional / UFCG",
    phoneNote: "Professional WhatsApp",
    profilesLabel: "Academic profiles",
    profiles: [
      { label: "Lattes - CNPq", value: "lattes.cnpq.br/4474515397266513", href: shared.lattesUrl },
      { label: "ORCID", value: "orcid.org/0009-0000-8760-4760", href: shared.orcidUrl },
      { label: "Page / PPGMat UFCG", value: "mat.ufcg.edu.br/ppgmat/joaquim-...", muted: true },
      { label: "Google Scholar", value: "to add", muted: true },
      { label: "arXiv", value: "Account: jcmsegundo", muted: true },
    ],
    groupLabel: "Research group",
    groupMessage: "Member of UFCG's Geometry research group since 2025 / affiliated with PPGMat.",
    groupCta: "PPGMat / UFCG",
  },
};

