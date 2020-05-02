import styled from 'styled-components/native';

export const HorizonPd = styled.View`
  padding-right: ${props => props.value};
  padding-left: ${props => props.value};
`;

export const VerticalPd = styled.View`
  padding-top: ${props => props.value};
  padding-bottom: ${props => props.value};
`;

export const AreaPd = styled.View`
  padding-top: ${props => props.valueY};
  padding-bottom: ${props => props.valueY};
  padding-right: ${props => props.valueX};
  padding-left: ${props => props.valueX};
`;

export const PaddingArea = styled.View`
  padding-top: ${props => props.padTop};
  padding-bottom: ${props => props.padBottom};
  padding-right: ${props => props.padRight};
  padding-left: ${props => props.padLeft};
`;
