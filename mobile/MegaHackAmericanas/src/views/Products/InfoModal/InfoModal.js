import React, {useContext} from 'react';
import {Image} from 'react-native';
import {ThemeContext} from '../../../theme/themesContext';
import ProductImg from '../../../assets/mock/Products/desodorante.png';
import VideoImg from '../../../assets/mock/Products/video.png';
import {
  Container,
  ContainerPic,
  ContainerTitle,
  Title,
  DescriptionText,
  RedTitle,
  ContainerButton,
  MainButton,
  MainButtonText,
} from './styles';

export function InfoModal() {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <Container>
        <ContainerPic>
          <Image source={ProductImg} alt="produto" resizeMode="stretch" />
        </ContainerPic>
        <ContainerTitle>
          <Title numberOfLines={3} ellipsizeMode="tail">
            Desodorante Dove Men Aero
          </Title>
          <DescriptionText theme={theme}>
            Se você procura um desodorante aerossol potente contra o suor, mas
            delicado com a sua pele, experimente os produtos da linha Dove
            Men+Care.
          </DescriptionText>
        </ContainerTitle>
        <ContainerPic>
          <Image source={VideoImg} alt="VideoImg" resizeMode="center" />
        </ContainerPic>
        <ContainerTitle>
          <RedTitle theme={theme}>sobre o produto</RedTitle>
          <DescriptionText theme={theme}>
            Se você quiser impedir que o suor domine seu dia, experimente o
            Antitranspirante Dove Men+Care Aerosol Cuidado Total, um poderoso
            antitranspirante aerosol que ajuda a combater o suor e o mau cheiro
            por até 48 horas. Sua tecnologia com ¼ de creme hidratante ajuda a
            proteger a pele da irritação, para que você se beneficie de um
            antitranspirante dermatologicamente testado que é potente contra o
            suor e não irrita a sua pele. Além disso, ele tem uma fragrância
            suave e duradoura.
          </DescriptionText>
          <RedTitle theme={theme}>como usar</RedTitle>
          <DescriptionText theme={theme}>
            Butane, Isobutane, Propane, Aluminum Chlorohydrate, Ppg-14 Butyl
            Ether, Cyclomethicone, Parfum, Disteardimonium Hectorite, Helianthus
            Annuus Seed Oil, C12-15 Alkyl Benzoate, Bht, Octyldodecanol,
            Dimethiconol, Propylene Carbonate, Alpha-Isomethyl Ionone,
            Butylphenyl Methylpropional, Citronellol, Coumarin, Hexyl Cinnamal,
            Limonene, Linalool. Ingredientes corretos no momento desta
            publicação. Sempre verifique a embalagem do produto.
          </DescriptionText>
          <RedTitle theme={theme}>ingredientes</RedTitle>
          <DescriptionText theme={theme}>
            Butane, Isobutane, Propane, Aluminum Chlorohydrate, Ppg-14 Butyl
            Ether, Cyclomethicone, Parfum, Disteardimonium Hectorite, Helianthus
            Annuus Seed Oil, C12-15 Alkyl Benzoate, Bht, Octyldodecanol,
            Dimethiconol, Propylene Carbonate, Alpha-Isomethyl Ionone,
            Butylphenyl Methylpropional, Citronellol, Coumarin, Hexyl Cinnamal,
            Limonene, Linalool. Ingredientes corretos no momento desta
            publicação. Sempre verifique a embalagem do produto.
          </DescriptionText>
        </ContainerTitle>
        <ContainerButton>
          <MainButton theme={theme}>
            <MainButtonText theme={theme}>comprar agora</MainButtonText>
          </MainButton>
        </ContainerButton>
      </Container>
    </>
  );
}
