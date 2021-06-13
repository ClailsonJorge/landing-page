import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'

type Props = {
  pricingBoxProps: PricingBoxProps
}

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({ pricingBoxProps }: Props) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>{pricingBoxProps.totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{`${pricingBoxProps.numberInstallment}x de`}</span>{' '}
        {`R$${pricingBoxProps.priceInstallment}`}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList
      dangerouslySetInnerHTML={{ __html: pricingBoxProps.benefits }}
    ></S.BenefitsList>

    <Button href={pricingBoxProps.button.url} onClick={onClick} withPrice>
      <p>{pricingBoxProps.button.title}</p>
      <div>
        <S.ButtonFullPrice>R$549</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>{`R$${pricingBoxProps.totalPrice}`}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
