import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ContainerList = styled.ScrollView`
  background-color: #e5e5e5;
  flex: 1;
`;

export const ContainerProduct = styled.View`
  background-color: #fff;
  padding: 20px;
  margin: 10px;
`;

export const ProductDescription = styled.View`
  flex: 0.7;
  flex-direction: row;
  padding: 10px 10px 10px 0;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.meta};
`;

export const ProductDetails = styled.View`
  justify-content: space-between;
  flex-direction: row;
  flex: 0.4;
  padding: 10px 10px 0px 10px;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 22px;
  height: 66px;
  padding: 25px 35px 25px 0;
`;

export const Description = styled.View`
  padding-left: 15px;
`;

export const ItemName = styled.Text`
  color: ${props => props.theme.onSurfacePrimary};
  font-size: 13px;
  padding: 2px;
`;

export const ItemDelivery = styled.Text`
  color: #404040;
  font-size: 12px;
  padding: 2px;
`;

export const StarContainer = styled.View`
  align-items: center;
  width: 30%;
  padding: 2px;
`;

export const QuantityContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  padding: 2px;
`;

export const ItemQuantity = styled.Text`
  padding: 2px 2px 2px 5px;
  color: ${props => props.theme.onSurfaceSecondary};
`;

export const QuantityIcon = styled(Icon)`
  font-size: 20px;
  margin-top: 2px;
  color: ${props => props.theme.onSurfaceSecondary};
`;

export const ItemPrice = styled.Text`
  text-align: center;
  font-weight: bold;
`;
