import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  ActivityIndicator,
  // DataSource,
} from 'react-native';
import styles from './styles';

export default class About extends Component {
  constructor() {
    super();
    this.ds = [];
    this.state = {
      dataSource: this.ds,
      isLoading: true,
    };
  }

  componentDidMount() {
    const endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';

    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then(response => response.json())
      .then((result) => {
        this.setState({ dataSource: result });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }

  componentDidUpdate() {
    if (this.state.dataSource && this.state.isLoading) {
      this.setState({ isLoading: false });
    }
  }


  render() {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator animating size="small" color="black" />
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <Image
            style={styles.headerImage}
            resizeMode={'contain'}
            source={require('../../assets/images/r10_logo.png')}
          />
          <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
          <Text>Date & Venue</Text>
          <Text>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC</Text>
          <Text>Code of Conduct</Text>
          {
            this.state.dataSource.map((item) => {
              return (
                <View key={Math.random() * Date.now()}>
                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>);
            })
          }
        </ScrollView>
      );
    }
  }
}

/*
return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(data) => <View><Text>{data.name}</Text></View>} 
    />
  );
}
*/
