import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { colours } from '../../config/styles';
import { goToSpeaker } from '../../lib/navigationHelpers';
import { formatTimeStampToHours } from '../../lib/timeFormatHelpers';
import { getFave, addFave, deleteFave } from '../../config/models';

// const SessionContainer = ({ session, speaker }) => {
class SessionContainer extends Component {
  constructor() {
    super();

    this.state = {
      isFave: false,
      faveButtonText: 'Add to Faves',
      faveIconColour: 'white',
    };

    this.setStateIfFave.bind(this);
    this.toggleFaves.bind(this);
  }

  componentDidMount() {
    this.setStateIfFave(this.props.session.session_id);
  }

  setStateIfFave(sessionId) {
    if (getFave(sessionId) !== 0) {
      this.setState({ isFave: true });
      this.setState({ faveButtonText: 'Remove from Faves' });
      this.setState({ faveIconColour: 'red' });
    }
  }

  toggleFaves(sessionId) {
    if (this.state.isFave) {
      deleteFave(sessionId);
      this.setState({ isFave: false });
      this.setState({ faveButtonText: 'Add to Faves' });
      this.setState({ faveIconColour: 'white' });
    } else {
      addFave(sessionId);
      this.setState({ isFave: true });
      this.setState({ faveButtonText: 'Remove from Faves' });
      this.setState({ faveIconColour: 'red' });
    }
  }

  render() {
    const { session, speaker } = this.props;

    return (
      <ScrollView>
        <Text>{session.location}</Text>
        <Icon name={'ios-heart'} size={24} color={this.state.faveIconColour} />
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
        <Text
          onPress={() => { this.toggleFaves(session.session_id); }}
        >
          { this.state.faveButtonText }
        </Text>
      </ScrollView>
    );
  }
}

SessionContainer.propTypes = {
  session: PropTypes.object.isRequired,
  speaker: PropTypes.object.isRequired,
};

export default SessionContainer;
