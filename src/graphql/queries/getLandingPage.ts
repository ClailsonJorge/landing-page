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

  fragment sectionAboutProject on LandingPage {
    SectionAboutProject {
      title
      image {
        alternativeText
        url
      }
      description
    }
  }

  fragment SectionTech on LandingPage {
    SectionTech {
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

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...SectionTech
    }
  }
`

export default GET_LANDING_PAGE
