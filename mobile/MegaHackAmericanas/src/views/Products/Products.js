import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {Switch} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: blue;
`;

export const PrimeBar = styled.View`
  width: 100%;
  height: 40px;
  background-color: #f1f0f0;
  align-items: flex-start;
`;

export default function Products() {
  return (
    <>
      <Container>
        <PrimeBar>
          <Switch value={true} onChange={() => console.log('mudei')} />
        </PrimeBar>
      </Container>
    </>
  );
}
