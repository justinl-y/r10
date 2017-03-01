import React, { PropTypes } from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
// import CodeOfConduct from '../../components/CodeOfConduct';
import styles from './styles';

function formatTimeStampToHours(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`;
  const dayHalf = hours < 13 ? 'AM' : 'PM';

  return `${hours}:${minutes.substr(-2)} ${dayHalf}`;
}

const ScheduleContainer = ({ items }) => (
  <ListView
    style={styles.container}
    dataSource={items}
    renderSectionHeader={(sectionData, startTime) =>
      <Text
        style={styles.sectionHeader}
      >{formatTimeStampToHours(startTime)}</Text>
    }
    renderRow={item =>
      <View style={styles.rowItem}>
        <Text style={styles.rowItemTitle}>{item.title}</Text>
        <Text>{item.location}</Text>
      </View>
    }
  />
);

ScheduleContainer.propTypes = {
  items: PropTypes.object.isRequired,
};

export default ScheduleContainer;
