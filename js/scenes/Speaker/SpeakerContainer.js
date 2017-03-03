import React, { PropTypes } from 'react';
import {
  ScrollView,
  Text,
  Image,
  Linking,
} from 'react-native';
import styles from './styles';

const SpeakerContainer = ({ speaker }) => (
  <ScrollView>
    <Image
      style={styles.speakerImage}
      source={{ uri: speaker.image }}
    />
    <Text>{speaker.name}</Text>
    <Text>{speaker.bio}</Text>
    <Text
      onPress={() => Linking.openURL(speaker.url)}
    >
    Read more on Wikipedia
  </Text>
  </ScrollView>
);

SpeakerContainer.propTypes = {
  speaker: PropTypes.object.isRequired,
};

export default SpeakerContainer;
