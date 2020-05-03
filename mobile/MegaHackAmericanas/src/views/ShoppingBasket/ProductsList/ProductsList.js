import React, {useContext} from 'react';
import product from '../../../assets/mock/Products/desodorante.png';
import {ThemeContext} from '../../../theme/themesContext';
import {StarRating} from '../../../components/StarRating/StarRating';
import {
  ContainerList,
  ContainerProduct,
  ProductDescription,
  ProductDetails,
  ProductImage,
  Description,
  ItemName,
  StarContainer,
  ItemDelivery,
  QuantityContainer,
  QuantityIcon,
  ItemQuantity,
  ItemPrice,
} from './styles';
export function ProductsList() {
  const {theme} = useContext(ThemeContext);

  return (
    <ContainerList theme={theme}>
      <ContainerProduct>
        <ProductDescription theme={theme}>
          <ProductImage source={product} alt="product" resizeMode="center" />
          <Description>
            <ItemName theme={theme}>
              Desodorante Dove Men Aerosol 150ml
            </ItemName>
            <StarContainer>
              <StarRating rating={product.rating} starSize={12} />
            </StarContainer>
            <ItemDelivery>entrega até 12 dias úteis</ItemDelivery>
          </Description>
        </ProductDescription>
        <ProductDetails>
          <QuantityContainer>
            <ItemQuantity theme={theme}>1 un.</ItemQuantity>
            <QuantityIcon theme={theme} name="keyboard-arrow-down" />
          </QuantityContainer>
          <ItemPrice>R$ 12,99</ItemPrice>
        </ProductDetails>
      </ContainerProduct>
      <ContainerProduct>
        <ProductDescription theme={theme}>
          <ProductImage source={product} alt="product" resizeMode="center" />
          <Description>
            <ItemName theme={theme}>
              Desodorante Dove Men Aerosol 150ml
            </ItemName>
            <StarContainer>
              <StarRating rating={product.rating} starSize={12} />
            </StarContainer>
            <ItemDelivery>entrega até 12 dias úteis</ItemDelivery>
          </Description>
        </ProductDescription>
        <ProductDetails>
          <QuantityContainer>
            <ItemQuantity theme={theme}>1 un.</ItemQuantity>
            <QuantityIcon theme={theme} name="keyboard-arrow-down" />
          </QuantityContainer>
          <ItemPrice>R$ 12,99</ItemPrice>
        </ProductDetails>
      </ContainerProduct>
      <ContainerProduct>
        <ProductDescription theme={theme}>
          <ProductImage source={product} alt="product" resizeMode="center" />
          <Description>
            <ItemName theme={theme}>
              Desodorante Dove Men Aerosol 150ml
            </ItemName>
            <StarContainer>
              <StarRating rating={product.rating} starSize={12} />
            </StarContainer>
            <ItemDelivery>entrega até 12 dias úteis</ItemDelivery>
          </Description>
        </ProductDescription>
        <ProductDetails>
          <QuantityContainer>
            <ItemQuantity theme={theme}>1 un.</ItemQuantity>
            <QuantityIcon theme={theme} name="keyboard-arrow-down" />
          </QuantityContainer>
          <ItemPrice>R$ 12,99</ItemPrice>
        </ProductDetails>
      </ContainerProduct>
    </ContainerList>
  );
}
