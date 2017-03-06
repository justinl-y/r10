import React, { Component } from 'react';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Router from '../../js/navigation/router';
import { colours, typography } from '../../js/config/styles';
import styles from './styles';

const defaultRouteConfig = {
  navigationBar: {
    titleStyle: {
      color: colours.brandWhite,
      fontFamily: typography.fontMain,
      fontSize: typography.baseSize,
    },
    renderBackground: () =>
      <LinearGradient
        start={{ x: 1.0, y: 0.5 }} end={{ x: 0, y: 1 }}
        colors={[colours.brandPurple, colours.brandRed]}
        style={styles.linearGradient}
      />,
  },
};

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  };

  renderTitle(title, isSelected) {
    const color = isSelected ? colours.navIconSelected : colours.navIconDefault;

    return (
      <Text
        style={[styles.titleText, { color }]}
      >{title}</Text>
    );
  }

  renderIcon(iconName, isSelected) {
    const color = isSelected ? colours.navIconSelected : colours.navIconDefault;

    return (
      <Icon
        name={iconName}
        size={22}
        color={color}
        style={styles.titleIcon}
      />
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
            defaultRouteConfig={defaultRouteConfig}
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
            defaultRouteConfig={defaultRouteConfig}
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
            defaultRouteConfig={defaultRouteConfig}
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
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}

export default NavigationLayout;
