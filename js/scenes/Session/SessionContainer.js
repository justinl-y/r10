import React, { Component, PropTypes } from 'react';
import {
  Platform,
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { goToSpeaker } from '../../lib/navigationHelpers';
import { formatTimeStampToHours } from '../../lib/timeFormatHelpers';
import { getFave, addFave, deleteFave } from '../../config/models';
import LinearGradient from 'react-native-linear-gradient';
import { colours } from '../../config/styles';
import styles from './styles';

class SessionContainer extends Component {
  constructor() {
    super();

    this.state = {
      isFave: false,
      faveButtonText: 'Add to Faves',
      faveIconColour: colours.brandWhite,
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
      this.setState({ faveIconColour: colours.brandRed });
    }
  }

  toggleFaves(sessionId) {
    if (this.state.isFave) {
      deleteFave(sessionId);

      this.setState({ isFave: false });
      this.setState({ faveButtonText: 'Add to Faves' });
      this.setState({ faveIconColour: colours.brandWhite });
    } else {
      addFave(sessionId);

      this.setState({ isFave: true });
      this.setState({ faveButtonText: 'Remove from Faves' });
      this.setState({ faveIconColour: colours.brandRed });
    }
  }

  render() {
    const { session, speaker } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerItems}>
          <Text style={styles.sessionH2}>{session.location}</Text>
          {
          Platform.OS === 'ios' &&
            <Icon name={'ios-heart'} size={16} color={this.state.faveIconColour} />
          }
          {
          Platform.OS === 'android' &&
            <Icon name={'md-heart'} size={16} color={this.state.faveIconColour} />
          }
        </View>
        <Text style={styles.sessionH1}>{session.title}</Text>
        <Text style={styles.sessionTime}>{formatTimeStampToHours(session.start_time)}</Text>
        <Text style={styles.sessionText}>{session.description}</Text>
        { speaker !== undefined ?
          <View>
            <Text style={styles.sessionH2}>Presented By:</Text>
            <View style={styles.imageItems}>
              <TouchableHighlight
                onPress={() => { goToSpeaker(speaker); }}
                activeOpacity={75 / 100}
                underlayColor={colours.selectedItemLight}
              >
                <Image
                  style={styles.speakerImage}
                  source={{ uri: speaker.image }}
                />
              </TouchableHighlight>
              <Text style={styles.speakerTitle}>{speaker.name}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <LinearGradient
                  start={{ x: 1.0, y: 0.5 }} end={{ x: 0, y: 1 }}
                  colors={[colours.brandBlue, colours.brandPurple]}
                  style={styles.linearGradient}
                >
                  <Text
                    style={styles.buttonText}
                    onPress={() => { this.toggleFaves(session.session_id); }}
                  >
                    { this.state.faveButtonText }
                  </Text>
                </LinearGradient>
              </View>
            </View>
          </View>
        : null }
      </ScrollView>
    );
  }
}

SessionContainer.defaultProps = {
  speaker: PropTypes.object,
};

SessionContainer.propTypes = {
  session: PropTypes.object.isRequired,
  speaker: PropTypes.object,
};

export default SessionContainer;
