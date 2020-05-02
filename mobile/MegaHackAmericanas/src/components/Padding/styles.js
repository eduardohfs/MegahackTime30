import styled from 'styled-components/native';

export const HorizonPd = styled.View`
  padding-right: ${props => (props.value ? props.value : 20)};
  padding-left: ${props => (props.value ? props.value : 20)};
`;

export const VerticalPd = styled.View`
  padding-top: ${props => (props.value ? props.value : 20)};
  padding-bottom: ${props => (props.value ? props.value : 20)};
`;

export const AreaPd = styled.View`
  padding-top: ${props => (props.valueY ? props.valueY : 20)};
  padding-bottom: ${props => (props.valueY ? props.valueY : 20)};
  padding-right: ${props => (props.valueX ? props.valueX : 20)};
  padding-left: ${props => (props.valueX ? props.valueX : 20)};
`;

export const PaddingArea = styled.View`
  padding-top: ${props => (props.padTop ? props.padTop : 20)};
  padding-bottom: ${props => (props.papadBottomdTop ? props.padBottom : 20)};
  padding-right: ${props => (props.padRight ? props.padRight : 20)};
  padding-left: ${props => (props.padLeft ? props.padLeft : 20)};
`;
