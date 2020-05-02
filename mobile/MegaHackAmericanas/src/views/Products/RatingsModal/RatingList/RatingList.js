import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {ThemeContext} from '../../../../theme/themesContext';
import {StarRating} from '../../../../components/StarRating/StarRating';
import {Padding} from '../../../../components/Padding/Padding';
import {
  Container,
  RatingContainer,
  Title,
  StarContainer,
  DescriptionText,
  AuthorText,
} from './styles';

export function RatingList({list}) {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <Container>
        <FlatList
          data={list}
          initialNumToRender={3}
          keyExtractor={item => `${item.Id}`}
          renderItem={({item}) => (
            <Padding valueX="0px" valueY="10px">
              <RatingContainer theme={theme}>
                <Title>{item.Title}</Title>
                <StarContainer>
                  <StarRating rating={item.Rating} starSize={12} />
                </StarContainer>
                <DescriptionText theme={theme}>
                  {item.Description}
                </DescriptionText>
                <AuthorText theme={theme}>{item.Author}</AuthorText>
              </RatingContainer>
            </Padding>
          )}
        />
      </Container>
    </>
  );
}
