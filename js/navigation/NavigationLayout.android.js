import React, { Component } from 'react';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Router from '../../js/navigation/router';
import { colours } from '../../js/config/styles';

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  };

  renderTitle(title, isSelected) {
    // const color = isSelected ? colours.tabIconSelected : colours.tabIconDefault;
    const color = isSelected ? 'purple' : 'grey';

    return (
      <Text size={12} style={{ color }}>{title}</Text>
    );
  }

  renderIcon(iconName, isSelected) {
    // const color = isSelected ? colours.tabIconSelected : colours.tabIconDefault;
    const color = isSelected ? 'purple' : 'grey';

    return (
      <Icon name={iconName} size={24} color={color} />
    );
  }

  render() {
    return (
      <DrawerNavigation
        id="main"
        initialItem="schedule"
        drawerWidth={300}
      >
        <DrawerNavigationItem
          id="schedule"
          title="Schedule"
          renderTitle={isSelected => this.renderTitle('Schedule', isSelected)}
          renderIcon={isSelected => this.renderIcon('md-calendar', isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="map"
          title="Map"
          renderTitle={isSelected => this.renderTitle('Map', isSelected)}
          renderIcon={isSelected => this.renderIcon('md-map', isSelected)}
        >
          <StackNavigation
            id="map"
            navigatorUID="map"
            initialRoute={Router.getRoute('map')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="faves"
          title="Faves"
          renderTitle={isSelected => this.renderTitle('Faves', isSelected)}
          renderIcon={isSelected => this.renderIcon('md-heart', isSelected)}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="about"
          title="About"
          renderTitle={isSelected => this.renderTitle('About', isSelected)}
          renderIcon={isSelected => this.renderIcon('md-book', isSelected)}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}

export default NavigationLayout;
