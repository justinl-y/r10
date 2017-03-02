import React, { PropTypes } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import { colours } from '../../config/styles';
import { goToSession } from '../../lib/navigationHelpers';
import { formatTimeStampToHours } from '../../lib/timeFormatHelpers';

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
      <TouchableHighlight
        onPress={() => { goToSession('schedule', item); }}
        activeOpacity={75 / 100}
        underlayColor={colours.lightGrey}
      >
        <View style={styles.rowItem}>
          <Text style={styles.rowItemTitle}>{item.title}</Text>
          <Text>{item.location}</Text>
        </View>
      </TouchableHighlight>
    }
  />
);

ScheduleContainer.propTypes = {
  items: PropTypes.object.isRequired,
};

export default ScheduleContainer;
