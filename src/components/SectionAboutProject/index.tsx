import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProjectProps } from 'types/api'
import getImageUrl from 'utils/getImageUrl'

type Props = {
  sectionProps: SectionAboutProjectProps
}

const SectionAboutProject = ({ sectionProps }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={getImageUrl(sectionProps.image.url)}
            type="image/webp"
          />
          <source srcSet={require('@images/project.png')} type="image/png" />
          <img
            src={require('@images/project.png')}
            loading="lazy"
            alt={sectionProps.image.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>{sectionProps.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{ __html: sectionProps.description }}
          ></S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
