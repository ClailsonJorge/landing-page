import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionAgendaProps } from 'types/api'

type Props = {
  sectionProps: SectionAgendaProps
}

const SectionAgenda = ({ sectionProps }: Props) => (
  <Container id="agenda">
    <Heading reverseColor>{sectionProps.title}</Heading>
    <S.Text
      dangerouslySetInnerHTML={{ __html: sectionProps.description }}
    ></S.Text>
  </Container>
)

export default SectionAgenda
