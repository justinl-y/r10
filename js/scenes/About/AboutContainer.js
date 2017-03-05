import React, { PropTypes } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import CodeOfConduct from '../../components/CodeOfConduct';
import styles from './styles';

const AboutContainer = ({ items }) => (
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
        items.map(item => (
          <CodeOfConduct
            key={Math.random() * Date.now()}
            title={item.title}
            description={item.description}
          />
        ))
      }
    </View>
    <Text style={styles.footerText}>&copy; RED Academy</Text>
  </ScrollView>
);


AboutContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AboutContainer;
