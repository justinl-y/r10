import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Router from '../../js/navigation/router';
import { colours } from '../../js/config/styles';
import { styles } from './styles';

const defaultRouteConfig = {
  navigationBar: {
    titleStyle: {
      color: 'white',
    },
    renderBackground: () =>
      <LinearGradient
        start={{ x: 1.0, y: 0.5 }} end={{ x: -0.25, y: 1.25 }}
        colors={[colours.purple, 'red']}
        style={styles.linearGradient}
      />,
  },
};

class NavigationLayout extends Component {
  constructor() {
    super();

    this.renderTitle.bind(this);
    this.renderIcon.bind(this);
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": [renderTitle, renderIcon ] }] */
  renderTitle(title, isSelected) {
    const color = isSelected ? colours.tabIconSelected : colours.tabIconDefault;

    return (
      <Text size={12} style={{ color }}>{title}</Text>
    );
  }

  renderIcon(iconName, isSelected) {
    const color = isSelected ? colours.tabIconSelected : colours.tabIconDefault;

    return (
      <Icon name={iconName} size={24} color={color} />
    );
  }

  render() {
    return (
      <TabNavigation
        id="main"
        initialTab="schedule"
        tabBarColor="black"
      >
        <TabNavigationItem
          id="schedule"
          title="Schedule"
          renderTitle={isSelected => this.renderTitle('Schedule', isSelected)}
          renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="map"
          title="Map"
          renderTitle={isSelected => this.renderTitle('Map', isSelected)}
          renderIcon={isSelected => this.renderIcon('ios-map', isSelected)}
        >
          <StackNavigation
            id="map"
            navigatorUID="map"
            initialRoute={Router.getRoute('map')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="faves"
          title="Faves"
          renderTitle={isSelected => this.renderTitle('Faves', isSelected)}
          renderIcon={isSelected => this.renderIcon('ios-heart', isSelected)}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="about"
          title="About"
          renderTitle={isSelected => this.renderTitle('About', isSelected)}
          renderIcon={isSelected => this.renderIcon('ios-book', isSelected)}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabNavigationItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout;
