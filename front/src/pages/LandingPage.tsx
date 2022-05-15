import React, {useState, useRef} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {Modalize} from 'react-native-modalize';

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

          <TouchableOpacity onPress={onOpen}>
            <Text>toMap</Text>
          </TouchableOpacity>

          <View style={styles.topRight}>
            <Fontisto name="bell" size={25} />
            <Entypo name="emoji-flirt" size={25} />
          </View>
        </View>

        {/* menu search */}
        <TextInput style={styles.search} />
      </View>

      <Modalize ref={modalizeRef}>
        <View>
          <Text>ss</Text>
        </View>
      </Modalize>
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
    height: Dimensions.get('window').height / 9,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },

  topRight: {
    flexDirection: 'row',
  },

  search: {
    height: 35,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 10,
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
