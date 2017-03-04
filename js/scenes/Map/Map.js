import React from 'react';
import MapView from 'react-native-maps';
import styles from './styles';

const Map = () => {
  const marker = {
    latlng: {
      latitude: 49.280000,
      longitude: -123.1194397,
    },
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 49.2748223,
        longitude: -123.1194397,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapView.Marker
        coordinate={marker.latlng}
        image={require('../../assets/images/map_pin.png')}
      />
    </MapView>
  );
};

export default Map;
