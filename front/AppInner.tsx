import React, {useEffect, useState} from 'react';
import LandingPage from './src/pages/LandingPage';
import StartPage from './src/pages/StartPage';

import usePermissions from './src/hooks/usePermissions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

function AppInner() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  usePermissions();

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
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
