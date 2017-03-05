import React, { PropTypes } from 'react';
import {
  Text,
  ListView,
} from 'react-native';
import ScheduleItem from '../../components/ScheduleItem';
import { formatTimeStampToHours } from '../../lib/timeFormatHelpers';
import styles from './styles';

const ScheduleContainer = ({ items, origin }) => (
  <ListView
    style={styles.container}
    dataSource={items}
    renderSectionHeader={(sectionData, startTime) =>
      <Text
        style={styles.sectionHeader}
      >{formatTimeStampToHours(startTime)}</Text>
    }
    renderRow={item =>
      <ScheduleItem
        item={item}
        origin={origin}
      />
    }
  />
);

ScheduleContainer.propTypes = {
  items: PropTypes.object.isRequired,
  origin: PropTypes.string.isRequired,
};

export default ScheduleContainer;
