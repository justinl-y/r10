import React, { Component, PropTypes } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Platform,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { colours } from '../../config/styles';
import { goToSession } from '../../lib/navigationHelpers';
import { getFave } from '../../config/models';
import styles from './styles';

class ScheduleItem extends Component {
  constructor() {
    super();

    this.state = {
      isFave: false,
      faveIconColour: 'white',
    };

    this.setStateIfFave.bind(this);
  }

  componentDidMount() {
    this.setStateIfFave(this.props.item.session_id);
  }

  setStateIfFave(sessionId) {
    if (getFave(sessionId) !== 0) {
    // if (getRealmFave(sessionId) !== 0) {
      this.setState({ isFave: true });
      this.setState({ faveIconColour: 'red' });
    }
  }

  render() {
    const { item, origin } = this.props;

    return (
      <TouchableHighlight
        onPress={() => { goToSession(origin, item); }}
        activeOpacity={75 / 100}
        underlayColor={colours.lightGrey}
      >
        <View style={styles.rowItem}>
          <Text style={styles.rowItemTitle}>{item.title}</Text>
          <Text>{item.location}</Text>
          {
          Platform.OS === 'ios' &&
            <Icon name={'ios-heart'} size={24} color={this.state.faveIconColour} />
          }
          {
          Platform.OS === 'android' &&
            <Icon name={'md-heart'} size={24} color={this.state.faveIconColour} />
          }
        </View>
      </TouchableHighlight>
    );
  }
}

ScheduleItem.propTypes = {
  item: PropTypes.object.isRequired,
  origin: PropTypes.string.isRequired,
};

export default ScheduleItem;
