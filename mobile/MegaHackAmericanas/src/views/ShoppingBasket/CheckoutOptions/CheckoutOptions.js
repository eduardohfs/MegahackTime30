import React, {useContext, useState} from 'react';
import {ThemeContext} from '../../../theme/themesContext';
import {
  AddBasket,
  AddBasketText,
  CollapseIcon,
  CollapseView,
  ContainerButtons,
  ContainerCheckout,
  ContainerInfo,
  InfoPrice,
  InfoRow,
  InfoText,
  KeepBuying,
  KeepBuyingText,
} from './styles';

export function CheckoutOptions() {
  const {theme} = useContext(ThemeContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckoutDisplay = () => {
    setShowCheckout(!showCheckout);
  };

  return (
    <ContainerCheckout isOpen={showCheckout}>
      <CollapseView>
        <CollapseIcon
          onPress={handleCheckoutDisplay}
          theme={theme}
          name="keyboard-arrow-up"
        />
      </CollapseView>
      {showCheckout && (
        <>
          <ContainerInfo>
            <InfoRow>
              <InfoText theme={theme}>Total do pedido</InfoText>
              <InfoPrice>R$40,97</InfoPrice>
            </InfoRow>
          </ContainerInfo>
          <ContainerButtons>
            <KeepBuying>
              <KeepBuyingText theme={theme}>continuar comprando</KeepBuyingText>
            </KeepBuying>
            <AddBasket theme={theme}>
              <AddBasketText theme={theme}>adicionar a cesta</AddBasketText>
            </AddBasket>
          </ContainerButtons>
        </>
      )}
    </ContainerCheckout>
  );
}
