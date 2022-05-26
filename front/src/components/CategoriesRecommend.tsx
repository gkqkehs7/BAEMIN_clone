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
import {ScrollView} from 'react-native-gesture-handler';

const CategoriesRecommend = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={styles.foodImg}
            source={require('../assets/recommends/ddukbbokki.png')}
          />
        </View>

        <View>
          <Image
            style={styles.foodImg}
            source={require('../assets/recommends/ddukbbokki.png')}
          />
        </View>

        <View>
          <Image
            style={styles.foodImg}
            source={require('../assets/recommends/ddukbbokki.png')}
          />
        </View>

        <View>
          <Image
            style={styles.foodImg}
            source={require('../assets/recommends/ddukbbokki.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  foodImg: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
  },
});

export default CategoriesRecommend;
