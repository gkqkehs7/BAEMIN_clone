import React, {useEffect, useState} from 'react';
import LandingPage from './src/pages/LandingPage';
import StartPage from './src/pages/StartPage';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import usePermissions from './src/hooks/usePermissions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AppInner() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  usePermissions();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isLoggedIn ? (
          <Stack.Screen name="LandingPage" component={LandingPage} />
        ) : (
          <Stack.Screen name="StartPage" component={StartPage} />
        )}
      </Stack.Navigator>
    </>
  );
}
export default AppInner;
