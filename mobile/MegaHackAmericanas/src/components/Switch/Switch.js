import React, {useContext} from 'react';
import {Switch} from 'react-native';
import {ThemeContext} from '../../theme/themesContext';
import {SwitchLabel, SwitchContainer} from './styles';

export function SwitchInput({value, label, onChange, disabled}) {
  const {theme} = useContext(ThemeContext);

  return (
    <SwitchContainer>
      <Switch
        thumbColor={[theme.success]}
        trackColor={{true: theme.success, false: theme.onPrimary}}
        onValueChange={onChange}
        value={true}
      />
      {label && <SwitchLabel theme={theme}>{label}</SwitchLabel>}
    </SwitchContainer>
  );
}
