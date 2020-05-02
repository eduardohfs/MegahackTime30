import React, {useContext} from 'react';
import {ThemeContext} from '../../../../../theme/themesContext';
import {Code, Description, DescriptionCard, Title} from './styles';

export function Info() {
  const {theme} = useContext(ThemeContext);
  return (
    <DescriptionCard>
      <Title>Desodorante Dove Men Aero</Title>
      <Code theme={theme}>(Cód. 37559111)</Code>
      <Description theme={theme}>
        Com o Dove Men + Care você garante 48 horas de proteção seca e ação
        antibacteriana. Poderoso contra suor, mas sem irritar a pele
      </Description>
    </DescriptionCard>
  );
}
