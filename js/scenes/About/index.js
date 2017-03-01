import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchCodeOfConduct, setIsLoading } from '../../redux/modules/actionReducer';
import styles from './styles';

class About extends Component {
  constructor() {
    super();
  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  componentDidMount() {
    this.props.fetchCodeOfConduct();
  }

  componentDidUpdate() {
    if (this.props.dataSource && this.props.isLoading) {
      this.props.setIsLoading();
    }
  }

  render() {
    console.log(this.props.isLoading);
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating size="small" color="black" />
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View style={[styles.borderBottom, styles.imageCentre]}>
            <Image
              style={styles.headerImage}
              resizeMode={'contain'}
              source={require('../../assets/images/r10_logo.png')}
            />
          </View>
          <View>
            <Text style={styles.bodyText}>R10 is a conference that focuses on just about any topic related to dev.</Text>
            <Text style={styles.bodyTextHeader}>Date & Venue</Text>
            <Text style={styles.bodyText}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC</Text>
            <Text style={styles.bodyTextHeader}>Code of Conduct</Text>
            {
              this.props.dataSource.map((item) => {
                return (
                  <View key={Math.random() * Date.now()}>
                    <Text style={styles.listTextHeader}>{item.title}</Text>
                    <Text style={styles.bodyText}>{item.description}</Text>
                  </View>);
              })
            }
          </View>
        </ScrollView>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.about.isLoading,
    dataSource: state.about.dataSource,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCodeOfConduct: () => {
    dispatch(fetchCodeOfConduct());
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
