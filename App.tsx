import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootTabs} from './src/navigation/RootTabs';
import {Theme} from './src/theme';
import {ThemeProvider} from 'styled-components';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <RootTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
