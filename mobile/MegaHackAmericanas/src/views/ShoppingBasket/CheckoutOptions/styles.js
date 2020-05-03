import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ContainerCheckout = styled.View`
  background-color: #fff;
  padding: ${props => (props.isOpen ? '0 5px 15px 5px' : '5px')};
  margin-bottom: 65px;
`;

export const ContainerInfo = styled.View`
  padding: 8px 10px 15px 10px;
`;

export const ContainerButtons = styled.View`
  align-items: center;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const InfoText = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.onSurfaceSecondary};
`;

export const InfoPrice = styled.Text`
  font-weight: bold;
`;

export const CheckoutButton = styled.TouchableOpacity`
  height: 37px;
  width: 95%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 5px;
  background-color: ${props => props.theme.background};
`;

export const KeepBuying = styled(CheckoutButton)`
  background-color: red;
`;

export const KeepBuyingText = styled.Text`
  color: ${props => props.theme.background};
`;

export const AddBasket = styled(CheckoutButton)`
  border: 1px solid ${props => props.theme.primary};
`;

export const AddBasketText = styled.Text`
  color: ${props => props.theme.primary};
`;

export const CollapseView = styled.View`
  align-items: center;
  padding: 0;
`;

export const CollapseIcon = styled(Icon)`
  font-size: 20px;
  color: ${props => props.theme.onSurfaceSecondary};
`;
