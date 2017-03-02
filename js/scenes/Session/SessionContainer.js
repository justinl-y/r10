import React, { PropTypes } from 'react';
import {
  ScrollView,
  Text,
  Image,
} from 'react-native';
import styles from './styles';
import { formatTimeStampToHours } from '../../lib/timeFormatHelpers';

const SessionContainer = ({ session, speaker }) => {
  return (
    <ScrollView>
      <Text>{session.location}</Text>
      <Text>{session.title}</Text>
      <Text>{formatTimeStampToHours(session.start_time)}</Text>
      <Text>{session.description}</Text>
      <Text>Presented By:</Text>
      <Image
        style={styles.speakerImage}
        source={{ uri: speaker.image }}
      />
      <Text>{speaker.name}</Text>
    </ScrollView>
  );
};

SessionContainer.propTypes = {
  session: PropTypes.object.isRequired,
  // speaker: PropTypes.array.isRequired,
};

export default SessionContainer;
