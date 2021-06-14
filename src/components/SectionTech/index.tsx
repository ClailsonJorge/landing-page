import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionTechProps } from 'types/api'
import getImageUrl from 'utils/getImageUrl'

const SectionTech = ({ title, techs }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techs.map(({ tech, image }) => (
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
