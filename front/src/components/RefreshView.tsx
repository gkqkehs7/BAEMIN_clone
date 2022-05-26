import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RefreshView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>땡겨요</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00dbc5',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RefreshView;
