import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import * as S from './styles'
import { SectionModulesProps } from 'types/api'

type Props = {
  sectionProps: SectionModulesProps
}

const SectionModules = ({ sectionProps }: Props) => (
  <Container>
    <Heading reverseColor>{sectionProps.title}</Heading>

    <S.Content>
      {sectionProps.module.map(({ title, subTitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subTitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
