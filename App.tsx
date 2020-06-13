import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const App = () => {
  const [myLocation, setMyLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.012,
          })
          console.log('my location => ', myLocation);
        },
        (error) => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [])

  const getLocation = (cord) => {
    console.log('cords => ', cord)
  }

  return (
      <MapView
        region={myLocation}
        style={styles.mapStyle}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onPress={(position) => getLocation(position.nativeEvent)}
      />
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});

export default App;
