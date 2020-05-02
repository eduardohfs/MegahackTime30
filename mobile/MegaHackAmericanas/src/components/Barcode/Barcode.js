import React, {Component} from 'react';
import {Modal} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {ThemeContext} from '../../theme/themesContext';
import {
  AnimationView,
  Overlay,
  FlashButton,
  Camera,
  Container,
  BasketButton,
  WrapperTopBar,
  SaveButton,
} from './styles';
import {Animations} from '../Animations/Animations';
import Qrcode from '../../assets/animation/qrcode.json';

export class Barcode extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];

    this.state = {
      type: RNCamera.Constants.Type.back,
      flashMode: 'off',
      focus: RNCamera.Constants.AutoFocus.on,
    };
  }

  onBarCodeRead = scanResult => {
    const {onClose, onCapture, multipleCodes} = this.props;
    if (scanResult.data != null) {
      if (multipleCodes) {
        if (!this.barcodeCodes.includes(scanResult.data)) {
          this.barcodeCodes.push(scanResult.data);
        }
      } else {
        if (onCapture && typeof onCapture === 'function') {
          onCapture(scanResult.data);
        }
        if (onClose && typeof onClose === 'function') {
          onClose();
        }
      }
    }
  };

  saveMultipleCodes = () => {
    const {onClose, onCapture} = this.props;
    if (onCapture && typeof onCapture === 'function') {
      onCapture(this.barcodeCodes);
    }
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  handleClose = () => {
    const {onClose} = this.props;

    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  handleFlash = () => {
    const {flashMode} = this.state;
    this.setState({flashMode: flashMode === 'off' ? 'torch' : 'off'});
  };

  render() {
    const {flashMode, type, focus} = this.state;
    const {open} = this.props;
    const {theme} = this.context;

    return (
      <Modal
        visible={open}
        transparent={false}
        animationType="slide"
        onRequestClose={this.handleClose}>
        <Container>
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            flashMode={flashMode}
            mirrorImage
            autoFocus={focus}
            onBarCodeRead={this.onBarCodeRead}
            captureAudio={false}
            androidCameraPermissionOptions={{
              title: 'Permissão',
              message: 'Deseja permitir o acesso a camera?',
              buttonNegative: 'Cancelar',
              buttonPositive: 'OK',
            }}
            type={type}
          />
          <Overlay>
            <AnimationView>
              <Animations source={Qrcode} />
            </AnimationView>
          </Overlay>
          <WrapperTopBar theme={theme}>
            <FlashButton
              name={flashMode === 'off' ? 'flash' : 'flash-off'}
              onPress={() => this.handleFlash()}
            />
            <BasketButton
              name={'shopping-basket'}
              onPress={() => this.handleFlash()}
            />
            <SaveButton name={'close'} onPress={() => this.handleClose()} />
          </WrapperTopBar>
        </Container>
      </Modal>
    );
  }
}

Barcode.contextType = ThemeContext;
