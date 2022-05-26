import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const data = [
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
  {
    title: '햄버거',
    src: require('../assets/foodIcon/hambuger.png'),
  },
];

const Cateogories = () => {
  return (
    <View style={styles.iconsContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Pressable style={styles.iconContainer}>
            <Image source={item.src} style={styles.icon} resizeMode="contain" />
            <View>
              <Text style={styles.iconText}>{item.title}</Text>
            </View>
          </Pressable>
        )}
        numColumns={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    backgroundColor: 'white',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: Dimensions.get('window').width / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 50,
  },
  iconText: {
    fontFamily: 'SCDream8',
    color: 'black',
  },
});

export default Cateogories;
