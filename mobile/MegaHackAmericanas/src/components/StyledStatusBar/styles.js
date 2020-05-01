import styled from 'styled-components/native';

function defineBarStyle(theme) {
  if (theme.key === 'light') return 'dark-content';
  if (theme.key === 'dark') return 'light-content';
  return 'dark-content';
}

export const CustomBar = styled.StatusBar.attrs(({ theme }) => ({
  barStyle: defineBarStyle(theme),
}))`
  background-color: ${props => props.theme.surfacePrimary};
`;

export const StatusBarSafeArea = styled.SafeAreaView`
  flex: 0;
  background-color: ${props =>
    props.background === '' ? props.theme.surfacePrimary : props.background};
  z-index: 4;
`;
