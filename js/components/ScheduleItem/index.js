import React, { Component, PropTypes } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Platform,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { goToSession } from '../../lib/navigationHelpers';
import { getFave } from '../../config/models';
import { colours } from '../../config/styles';
import styles from './styles';

class ScheduleItem extends Component {
  constructor() {
    super();

    this.state = {
      isFave: false,
      faveIconColour: colours.brandWhite,
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
      this.setState({ faveIconColour: colours.brandRed });
    }
  }

  render() {
    const { item, origin } = this.props;

    return (
      <TouchableHighlight
        onPress={() => { goToSession(origin, item); }}
        activeOpacity={75 / 100}
        underlayColor={colours.selectedItemLight}
      >
        <View style={styles.rowItem}>
          <Text style={styles.rowItemTitle}>{item.title}</Text>
          <View style={styles.rowItemContent}>
            <Text style={styles.textItem}>{item.location}</Text>
            {
            Platform.OS === 'ios' &&
              <Icon name={'ios-heart'} size={16} color={this.state.faveIconColour} />
            }
            {
            Platform.OS === 'android' &&
              <Icon name={'md-heart'} size={16} color={this.state.faveIconColour} />
            }
          </View>
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
