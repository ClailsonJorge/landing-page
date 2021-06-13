const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        title
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  fragment SectionAboutProject on LandingPage {
    sectionAboutProject: SectionAboutProject {
      title
      image {
        alternativeText
        url
      }
      description
    }
  }

  fragment SectionTech on LandingPage {
    sectionTech: SectionTech {
      title
      techs {
        image {
          url
          alternativeText
        }
        tech
      }
    }
  }

  fragment SectionConcepts on LandingPage {
    sectionConcepts: SectionConcepts {
      title
      concepts {
        concept
      }
    }
  }

  fragment SectionModules on LandingPage {
    sectionModules: SectionModules {
      title
      module {
        title
        subTitle
        description
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...SectionAboutProject
      ...SectionTech
      ...SectionConcepts
      ...SectionModules
    }
  }
`

export default GET_LANDING_PAGE
