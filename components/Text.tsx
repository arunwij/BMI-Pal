import React from 'react';
import {Text as RNText, useColorScheme} from 'react-native';

const Text: React.FC = ({children, style}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return <RNText style={style}>{children}</RNText>;
};

export default Text;
