import React, {useState, useRef, useCallback} from 'react';
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from 'react-native';
import {Modalize} from 'react-native-modalize';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import LocationModal from '../components/LocationModal';
import TestScroll from '../components/TestScroll';
import Cateogories from '../components/Categories';
import TopSlick from '../components/TopSlick';
import CategoriesRecommend from '../components/CategoriesRecommend';

function LandingPage() {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        {/* to map */}
        <View style={styles.top}>
          <View>
            <MaterialIcons name="restaurant-menu" size={25} />
          </View>

          <Pressable onPress={onOpen}>
            <Text>toMap</Text>
          </Pressable>

          <View style={styles.topRight}>
            <Fontisto name="bell" size={25} style={{marginRight: 10}} />
            <Entypo name="emoji-flirt" size={25} />
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles.search}>
          <TextInput style={styles.searchInput} />
          <Feather
            style={styles.searchIcon}
            name="search"
            size={20}
            color={'#00dbc5'}
          />
        </View>
        <TopSlick />
        <CategoriesRecommend />
        <Cateogories />
      </ScrollView>

      <LocationModal ref={modalizeRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bab8',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#00dbc5',
    height: Dimensions.get('window').height / 11,
    justifyContent: 'flex-end',
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 12,
  },
  topRight: {
    flexDirection: 'row',
  },

  search: {
    height: 55,
    backgroundColor: '#00dbc5',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  searchInput: {
    backgroundColor: 'white',
    height: 40,
    marginHorizontal: 10,
    paddingLeft: 30,
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 9,
  },

  myLocationModal: {
    backgroundColor: 'orange',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default LandingPage;
