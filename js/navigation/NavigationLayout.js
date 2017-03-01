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
import { colours, typography } from '../../js/config/styles';

class NavigationLayout extends Component {
  renderTitle(title, isSelected) {
    const color = isSelected ? colours.tabIconSelected : colours.tabIconDefault;

    return (
      <Text size={12} style={{ color }}>{title}</Text>
    );
  }

  renderIcon(iconName, isSelected) {
    // let color = 'white'; //isSelected ? Colors.tabIconSelected : Colors.tabIconSelected;
    // const color = isSelected ? 'grey' : 'white';
    const color = isSelected ? colours.tabIconSelected : colours.tabIconDefault;

    return (
      <Icon name={iconName} size={24} color={color} />
    );
  }

  render() {
    return (
      <TabNavigation
        id="main"
        tabBarColor="black"
        navigatorUID="main"
        initialTab="about"
      >

        <TabNavigationItem
          // routeNavigatorUID="schedule"
          id="schedule"
          title="Schedule"
          renderTitle={isSelected => this.renderTitle('Schedule', isSelected)}
          renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          // routeNavigatorUID="about"
          id="map"
          title="Map"
          renderTitle={isSelected => this.renderTitle('Map', isSelected)}
          renderIcon={isSelected => this.renderIcon('ios-map', isSelected)}
        >
          <StackNavigation
            id="map"
            navigatorUID="map"
            initialRoute={Router.getRoute('map')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          // routeNavigatorUID="about"
          id="faves"
          title="Faves"
          renderTitle={isSelected => this.renderTitle('Faves', isSelected)}
          renderIcon={isSelected => this.renderIcon('ios-heart', isSelected)}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          // routeNavigatorUID="about"
          id="about"
          title="About"
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
