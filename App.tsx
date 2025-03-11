import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootTabs} from './src/navigation/RootTabs';
import {Theme} from './src/theme';
import {TodoProvider} from './src/contexts/TodoContext';
import {ThemeProvider} from 'styled-components';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <TodoProvider>
        <NavigationContainer>
          <RootTabs />
          <Toast />
        </NavigationContainer>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
