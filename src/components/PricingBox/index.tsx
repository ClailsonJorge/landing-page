import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  button,
  benefits,
  numberInstallment,
  priceInstallment,
  totalPrice
}: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>{totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{`${numberInstallment}x de`}</span> {`R$${priceInstallment}`}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList
      dangerouslySetInnerHTML={{ __html: benefits }}
    ></S.BenefitsList>

    <Button href={button.url} onClick={onClick} withPrice>
      <p>{button.title}</p>
      <div>
        <S.ButtonFullPrice>R$549</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>{`R$${totalPrice}`}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
