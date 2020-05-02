import React, {useContext, useState} from 'react';
import {ThemeContext} from '../../theme/themesContext';

import {
  SearchIcon,
  EraseIcon,
  InputStyleStack,
  LeftIconButton,
  RightIconButton,
  SearchContainer,
  StyledInput,
} from './styles';

export const SearchBar = ({
  handleSearch,
  variant,
  onClose,
  hideArrow,
  handleErase,
  clickSearch,
  noElevation,
}) => {
  const context = useContext(ThemeContext);

  const {theme} = context;

  const [value, setValue] = useState('');

  const search = e => {
    setValue(e);

    if (handleSearch && typeof handleSearch === 'function' && !clickSearch) {
      handleSearch(e);
    }
  };

  const erase = () => {
    if (handleErase && typeof handleErase === 'function') {
      handleErase();
    }
    setValue('');
  };

  const onClickSearch = () => {
    if (handleSearch && typeof handleSearch === 'function' && clickSearch) {
      handleSearch(value);
    }
  };
  return (
    <SearchContainer theme={theme} variant={variant} noElevation={noElevation}>
      <InputStyleStack hideArrow={hideArrow}>
        {!hideArrow && (
          <LeftIconButton>
            <SearchIcon
              name="search"
              onPress={onClickSearch}
              variant={variant}
              theme={theme}
            />
          </LeftIconButton>
        )}
        <StyledInput
          theme={theme}
          onChangeText={search}
          placeholder={'buscar'}
          variant={variant}
          hideArrow={hideArrow}
          value={value}
          returnKeyType="search"
        />
        <RightIconButton>
          <EraseIcon
            name="close"
            onPress={erase}
            variant={variant}
            theme={theme}
          />
        </RightIconButton>
      </InputStyleStack>
    </SearchContainer>
  );
};
