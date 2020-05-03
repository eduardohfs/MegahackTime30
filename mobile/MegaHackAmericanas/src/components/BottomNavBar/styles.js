import styled from 'styled-components/native';
import {widthPercentageToDP} from '../../core/utils';

function calc() {
  return `${widthPercentageToDP('50%') - 36}px`;
}

export const BottomNav = styled.View`
  z-index: 2;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  background-color: transparent;
`;

export const BottomNavFix = styled.View`
  z-index: 1;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 10px;
  background-color: #f4f4f4;
`;

export const BottomNavImg = styled.Image`
  width: 100%;
  height: 100%;
`;

export const FabBottomNav = styled.TouchableOpacity`
  elevation: 12;
  position: absolute;
  bottom: 30px;
  left: ${calc()};
  z-index: 2;
  width: 72px;
  height: 72px;
  background-color: #5dac29;
  /* border-width: 1px;
  border-color: #fafafa; */
  border-radius: 36px;
  align-items: center;
  justify-content: center;
`;

export const BottomNavLeftArea = styled.View`
  z-index: 2;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 35%;
  height: 60px;
  flex-direction: row;
`;

export const BottomNavRightArea = styled.View`
  z-index: 2;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 35%;
  height: 60px;
  flex-direction: row;
`;

export const BottomNavItemContainer = styled.View`
  z-index: 2;
  width: 50%;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 28px;
  height: 28px;
`;

export const BarcodeIcon = styled.Image`
  width: 60px;
  height: 60px;
`;

export const ItemText = styled.Text`
  font-size: 10px;
  color: #707070;
  text-transform: lowercase;
`;
