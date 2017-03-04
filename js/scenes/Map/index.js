import React, { Component } from 'react';
import Map from './Map';

class AppMap extends Component {
  constructor() {
    super();
  }
  
  static route = {
    navigationBar: {
    title: 'Map',
    }
  }

  render() {
    return (
      <Map />
    );
  }
}

export default AppMap;
