import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../../theme/themesContext';
import {StyledSwitch, SwitchLabel, SwitchContainer} from './styles';

export function SwitchInput({value, label, onChange, disabled}) {
  const {theme} = useContext(ThemeContext);

  return (
    <SwitchContainer>
      <StyledSwitch
        theme={theme}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {label && <SwitchLabel theme={theme}>{label}</SwitchLabel>}
    </SwitchContainer>
  );
}
