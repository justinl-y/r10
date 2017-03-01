import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
import {
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Router from '../../js/navigation/router';
// import { typography } from '../../js/config/styles';

const styles = {
  tabNavigation: {
    tabBarColor: 'black',
  },

  tabItem: {
    color: 'white',
  },
};

class NavigationLayout extends Component {
  renderTitle(title, isSelected) {
    const color = isSelected ? 'grey' : 'white';

    return (
      <Text size={12} style={{ color }}>{title}</Text>
    );
  }

  renderIcon(iconName, isSelected) {
    // let color = 'white'; //isSelected ? Colors.tabIconSelected : Colors.tabIconDefault;
    const color = isSelected ? 'grey' : 'white';

    return (
      <Icon name={iconName} size={24} color={color} />
    );
  }

  render() {
    return (
      <TabNavigation
        style={styles.tabNavigation}
        id="main"
        tabBarColor="black"
        navigatorUID="main"
        initialTab="about"
      >
        <TabNavigationItem
          style={styles.tabItem}
          // routeNavigatorUID="about"
          id="about"
          title="About"
          // selectedStyle={styles.selectedTab}
          // renderIcon={(isSelected) => <Image source={require('./assets/images/home.png')} />}
          // renderIcon={isSelected => <Image source={require('../assets/images/about.png')} />}

          renderTitle={isSelected => this.renderTitle('About', isSelected)}
          renderIcon={isSelected => this.renderIcon('ios-book', isSelected)}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabNavigationItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout;
