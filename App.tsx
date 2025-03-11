import React from 'react';
import Toast from 'react-native-toast-message';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {RootTabs} from '@/navigation/RootTabs';
import {TodoProvider} from '@/contexts/TodoContext';
import {Theme} from '@/theme';

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
