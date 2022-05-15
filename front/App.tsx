import React, {useState} from 'react';
import LandingPage from './src/pages/LandingPage';
import StartPage from './src/pages/StartPage';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        {isLoggedIn ? <LandingPage /> : <StartPage />}
      </GestureHandlerRootView>
    </>
  );
}
export default App;
