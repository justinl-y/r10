import React, { PropTypes } from 'react';
import {
  ScrollView,
  Text,
  Image,
} from 'react-native';
import ButtonLinking from '../../components/ButtonLinking';
import styles from './styles';

const SpeakerContainer = ({ speaker }) => (
  <ScrollView>
    <Image
      style={styles.speakerImage}
      source={{ uri: speaker.image }}
    />
    <Text>{speaker.name}</Text>
    <Text>{speaker.bio}</Text>
    <ButtonLinking
      url={speaker.url}
      text="Read more on Wikipedia"
    />
  </ScrollView>
);

SpeakerContainer.propTypes = {
  speaker: PropTypes.object.isRequired,
};

export default SpeakerContainer;
