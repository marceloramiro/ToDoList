import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootTabs} from './src/navigation/RootTabs';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootTabs />
    </NavigationContainer>
  );
}

export default App;
