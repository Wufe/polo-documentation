import React from 'react';
import useThemeContext from '@docusaurus/theme-classic/lib/theme/hooks/useThemeContext';
import Spacer from './Spacer';

export default function Logo() {
  const {isDarkTheme} = useThemeContext();
  return <div align="center">
      {isDarkTheme && <img src="/img/white-no-background.svg" width="400" />}
      {!isDarkTheme && <img src="/img/color-no-background.svg" width="400" />}
      <Spacer height={20} />
      <h1 align="center">Polo</h1>
      <hr />
      <p style={{
        fontSize: '18px'
      }}>Serve your application development branches</p>
      <Spacer height={50} />
    </div>
}