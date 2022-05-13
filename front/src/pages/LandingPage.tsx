import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';

function LandingPage() {
  return (
    <View>
      <View style={styles.header}>
        {/* to map */}
        <View style={styles.top}>
          <View>
            <Text>leftmenu</Text>
          </View>

          <View>
            <Text>toMap</Text>
          </View>

          <View style={styles.topRight}>
            <Text>alarm</Text>
            <Text>myPage</Text>
          </View>
        </View>

        {/* menu search */}

        <TextInput style={styles.search} />
      </View>
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
});

export default LandingPage;
