import React, { PropTypes } from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import { colours } from '../../config/styles';
import { goToSpeaker } from '../../lib/navigationHelpers';
import { formatTimeStampToHours } from '../../lib/timeFormatHelpers';

const SessionContainer = ({ session, speaker }) => {
  return (
    <ScrollView>
      <Text>{session.location}</Text>
      <Text>{session.title}</Text>
      <Text>{formatTimeStampToHours(session.start_time)}</Text>
      <Text>{session.description}</Text>
      <Text>Presented By:</Text>
      <TouchableHighlight
        onPress={() => { goToSpeaker(speaker); }}
        activeOpacity={75 / 100}
        underlayColor={colours.lightGrey}
      >
        <Image
          style={styles.speakerImage}
          source={{ uri: speaker.image }}
        />
      </TouchableHighlight>
      <Text>{speaker.name}</Text>
    </ScrollView>
  );
};

SessionContainer.propTypes = {
  session: PropTypes.object.isRequired,
  speaker: PropTypes.object.isRequired,
};

export default SessionContainer;
