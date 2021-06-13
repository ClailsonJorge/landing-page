import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionConceptsProps } from 'types/api'

type Props = {
  sectionProps: SectionConceptsProps
}

const SectionConcepts = ({ sectionProps }: Props) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{sectionProps.title}</Heading>
      <S.List>
        {sectionProps.concepts.map(({ concept }) => (
          <S.Item key={concept}>{concept}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
