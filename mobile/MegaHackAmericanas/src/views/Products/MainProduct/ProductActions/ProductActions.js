import React, {useContext, useState} from 'react';
import {CustomModal} from '../../../../components/CustomModal/CustomModal';
import {RatingsModal} from '../../RatingsModal/RatingsModal';
import {InfoModal} from '../../InfoModal/InfoModal';
import comments from '../../../../assets/icons/comments.png';
import grouplist from '../../../../assets/icons/grouplist.png';
import info from '../../../../assets/icons/info.png';
import {ThemeContext} from '../../../../theme/themesContext';
import {
  ContainerActions,
  Icon,
  IconContent,
  IconText,
  MainButton,
  MainButtonIcon,
  MainButtonText,
  SectionButton,
  SectionIcons,
  TouchableIcon,
} from './styles';

export function ProductActions({handleNavigate, availableNearby}) {
  const {theme} = useContext(ThemeContext);
  const [modalRatings, setModalRatings] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);

  const handleShowModalRatings = () => {
    setModalRatings(!modalRatings);
  };

  const handleShowModalInfo = () => {
    setModalInfo(!modalInfo);
  };

  return (
    <>
      <ContainerActions>
        <SectionIcons>
          <IconContent>
            <TouchableIcon onPress={() => handleNavigate('ShoppingBasket')}>
              <Icon source={grouplist} alt="buylist" resizeMode="center" />
            </TouchableIcon>
            <IconText theme={theme}>adicione à sua lista de compras</IconText>
          </IconContent>
          <IconContent>
            <TouchableIcon onPress={handleShowModalRatings}>
              <Icon source={comments} alt="buylist" resizeMode="center" />
            </TouchableIcon>
            <IconText theme={theme}>avaliações e comentários</IconText>
          </IconContent>
          <IconContent>
            <TouchableIcon onPress={handleShowModalInfo}>
              <Icon source={info} alt="buylist" resizeMode="center" />
            </TouchableIcon>
            <IconText theme={theme}>saiba mais informações</IconText>
          </IconContent>
        </SectionIcons>
        <SectionButton>
          {availableNearby ? (
            <>
              <MainButton theme={theme}>
                <MainButtonText theme={theme}>
                  pegar ou receber hoje
                </MainButtonText>
              </MainButton>
            </>
          ) : (
            <MainButton theme={theme}>
              <MainButtonIcon theme={theme} name="shopping-basket" />
              <MainButtonText theme={theme}>comprar</MainButtonText>
            </MainButton>
          )}
        </SectionButton>
      </ContainerActions>
      <CustomModal onClose={handleShowModalRatings} visible={modalRatings}>
        <RatingsModal />
      </CustomModal>
      <CustomModal onClose={handleShowModalInfo} visible={modalInfo}>
        <InfoModal />
      </CustomModal>
    </>
  );
}
