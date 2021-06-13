import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionTechProps } from 'types/api'
import getImageUrl from 'utils/getImageUrl'

type Props = {
  sectionProps: SectionTechProps
}

const SectionTech = ({ sectionProps }: Props) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{sectionProps.title}</Heading>
      <S.IconsContainer>
        {sectionProps.techs.map(({ tech, image }) => (
          <S.Icon key={tech}>
            <S.Icons src={getImageUrl(image.url)} alt={tech} loading="lazy" />
            <S.IconsName>{tech}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
