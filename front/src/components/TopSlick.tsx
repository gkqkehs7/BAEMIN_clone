import React, {Component} from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Slick from 'react-native-slick';

const TopSlick = () => {
  return (
    <View style={styles.container}>
      <Slick style={styles.wrapper}>
        <View style={styles.slide1}>
          <Image
            style={styles.img}
            source={require('../assets/event.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.slide1}>
          <Image
            style={styles.img}
            source={require('../assets/event.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.slide1}>
          <Image
            style={styles.img}
            source={require('../assets/event.png')}
            resizeMode="contain"
          />
        </View>
      </Slick>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  wrapper: {
    height: Dimensions.get('window').height / 3,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {
    width: Dimensions.get('window').width,
  },
});
export default TopSlick;
