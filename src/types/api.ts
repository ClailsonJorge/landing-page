export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
  button: {
    title: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  image: {
    alternativeText: string
    url: string
  }
  description: string
}

type Tech = {
  image: {
    url: string
    alternativeText: string
  }
  tech: string
}
export type SectionTechProps = {
  title: string
  techs: Tech[]
}

type Concept = {
  concept: string
}
export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

type Module = {
  title: string
  subTitle: string
  description: string
}
export type SectionModulesProps = {
  title: string
  module: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
}
