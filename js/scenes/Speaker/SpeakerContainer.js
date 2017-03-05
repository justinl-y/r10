import React, { PropTypes } from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
} from 'react-native';
import ButtonLinking from '../../components/ButtonLinking';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SpeakerContainer = ({ speaker, navigator }) => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerIcon}>
        <Icon
          style={styles.headerIconIcon}
          name={'ios-close'}
          size={40} color={'white'}
          onPress={() => { navigator.pop(); }}
        />
      </View>
      <View style={styles.speakerH1}>
        <Text style={styles.speakerH1Text}>About the Speaker</Text>
      </View>
      <View style={styles.headerIcon} />
    </View>
    <View style={styles.speakerContent}>
      <Image
        style={styles.speakerImage}
        source={{ uri: speaker.image }}
      />
      <Text style={styles.speakerH2Text}>{speaker.name}</Text>
      <Text style={styles.speakerText}>{speaker.bio}</Text>
      <ButtonLinking
        url={speaker.url}
        text="Read more on Wikipedia"
      />
    </View>
  </ScrollView>
);

SpeakerContainer.propTypes = {
  navigator: PropTypes.object.isRequired,
  speaker: PropTypes.object.isRequired,
};

export default SpeakerContainer;
