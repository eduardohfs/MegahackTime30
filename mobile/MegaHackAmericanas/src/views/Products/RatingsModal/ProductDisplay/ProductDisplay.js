import React, {useContext} from 'react';
import {ThemeContext} from '../../../../theme/themesContext';
import {StarRating} from '../../../../components/StarRating/StarRating';
import {
  Container,
  ImgContainer,
  ImgProduct,
  InfoContainer,
  TitleContainer,
  Title,
  RatingContainer,
  RatingNumber,
  StarsContainer,
  RatingTextContainer,
} from './styles';

export function ProductDisplay({
  productImg,
  productTitle,
  avgRating,
  totalRating,
}) {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <Container>
        <ImgContainer>
          <ImgProduct source={productImg} resizeMode="center" />
        </ImgContainer>
        <InfoContainer>
          <TitleContainer>
            <Title numberOfLines={2} ellipsizeMode="tail">
              {productTitle}
            </Title>
          </TitleContainer>
          <RatingContainer>
            <StarsContainer>
              <StarRating rating={avgRating} starSize={12} />
            </StarsContainer>
            <RatingTextContainer>
              <RatingNumber theme={theme}>
                {`${totalRating} avaliações`}
              </RatingNumber>
            </RatingTextContainer>
          </RatingContainer>
        </InfoContainer>
      </Container>
    </>
  );
}
