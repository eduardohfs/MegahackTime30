import React from 'react';
import {Barcode} from '../../components/Barcode/Barcode';

import {Container} from './styles';
export default function Main() {
  return (
    <>
      <Container>
        <Barcode open={false} onCapture={res => console.log(res)} />
      </Container>
    </>
  );
}
