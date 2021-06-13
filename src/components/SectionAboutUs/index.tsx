import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'

type Props = {
  sectionProps: SectionAboutUsProps
}

const SectionAboutUs = ({ sectionProps }: Props) => (
  <Container>
    <Heading reverseColor>{sectionProps.title}</Heading>

    <S.Content>
      {sectionProps.authors.map(
        ({ name, role, description, photo, socialLinks }) => (
          <ProfileCard
            key={name}
            name={name}
            role={role}
            image={photo.url}
            socialLinks={socialLinks}
            description={description}
          />
        )
      )}
    </S.Content>
  </Container>
)

export default SectionAboutUs
