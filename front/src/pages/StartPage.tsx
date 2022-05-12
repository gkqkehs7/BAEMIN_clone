import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {login} from '@react-native-seoul/kakao-login';

function StartPage() {
  const kakaoLogin = useCallback(async () => {
    await login();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require('../assets/textLogo.png')} />
      </View>

      <View style={styles.loginButtons}>
        <Pressable onPress={kakaoLogin}>
          <Image
            style={styles.loginButton}
            source={require('../assets/kakao_login_button.png')}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00dbc5',
    justifyContent: 'space-between',
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },

  loginButtons: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButton: {},
});
export default StartPage;
