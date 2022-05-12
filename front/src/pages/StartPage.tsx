import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

function StartPage() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.img} source={require('../assets/textLogo.png')} />
      </View>

      <View style={styles.loginButtons}>
        <Image
          style={styles.loginButton}
          source={require('../assets/kakao_login_button.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',

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
