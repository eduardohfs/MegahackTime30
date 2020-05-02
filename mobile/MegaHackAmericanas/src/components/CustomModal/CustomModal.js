import React, {useContext} from 'react';
import {Modal, Platform} from 'react-native';
// import {ModalHeader} from './Header/ModalHeader';
import {
  ChildrenContainer,
  ModalContainer,
  CloseIcon,
  IconContainer,
} from './styles';
import {ThemeContext} from '../../theme/themesContext';
import {StyledStatusBar} from '../StyledStatusBar/StyledStatusBar';

export function CustomModal({children, visible, onClose, title, actions}) {
  const handleAction = action => {
    if (action && typeof action === 'function') {
      action();
    }
  };
  const context = useContext(ThemeContext);
  const {theme} = context;
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent
      onRequestClose={() => {
        onClose();
      }}>
      {Platform.OS === 'ios' && <StyledStatusBar background={theme.primary} />}
      <ModalContainer theme={theme}>
        <ChildrenContainer theme={theme}>
          <IconContainer theme={theme} onPress={() => onClose()}>
            <CloseIcon size={16} name="close" color={theme.onSurfaceTertiary} />
          </IconContainer>
          {children}
        </ChildrenContainer>
      </ModalContainer>
    </Modal>
  );
}
