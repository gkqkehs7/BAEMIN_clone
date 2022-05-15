import React, {useState, useRef, RefObject} from 'react';
import {Dimensions, Text, TextInput, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from 'react-native-nmap';

const LocationModal = React.forwardRef((props, modalizeRef: any) => {
  const P0 = {latitude: 37.564362, longitude: 126.977011};
  const P1 = {latitude: 37.565051, longitude: 126.978567};
  const P2 = {latitude: 37.565383, longitude: 126.976292};

  const start = {latitude: 37.564362, longitude: 126.977011};
  const end = {latitude: 38.565051, longitude: 127.978567};
  return (
    <>
      <Modalize ref={modalizeRef}>
        <View>
          <Text>주소설정</Text>
          <Text>편집</Text>
        </View>

        <View>
          <TextInput />
        </View>

        <View
          style={{
            flex: 1,
            width: Dimensions.get('window').width - 30,
            height: 200,
            marginTop: 10,
          }}>
          <Text>dd</Text>
          <NaverMapView
            style={{width: '100%', height: '100%'}}
            zoomControl={false}
            center={{
              zoom: 1000,
              tilt: 50,
              latitude: 37.541,
              longitude: 126.986,
            }}>
            <Marker
              coordinate={{
                latitude: start.latitude,
                longitude: start.longitude,
              }}
              pinColor="blue"
            />
            <Path
              coordinates={[
                {
                  latitude: start.latitude,
                  longitude: start.longitude,
                },
                {latitude: end.latitude, longitude: end.longitude},
              ]}
            />
            <Marker
              coordinate={{latitude: end.latitude, longitude: end.longitude}}
            />
          </NaverMapView>
        </View>

        {/* 배달지 목록들 따로 스크롤 할 수 있게해줌 */}
        <View></View>
      </Modalize>
    </>
  );
});

export default LocationModal;
