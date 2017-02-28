import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
  },

  imageCentre: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  borderBottom: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderBottomColor: '#e6e6e6',
    borderStyle: 'solid',
    borderWidth: 0.5,
    //height: StyleSheet.hairlineWidth,
  },

  headerImage: {
    width: 200,
    height: 50,
  },

  bodyTextHeader: {
    fontFamily: 'Verdana',
    color: '#999999',
    fontSize: 22,
    paddingBottom: 20,
    fontWeight: 'bold',
  },

  bodyText: {
    fontFamily: 'Verdana',
    color: '#999999',
    paddingBottom: 20,
  },

  listTextHeader: {
    fontFamily: 'Verdana',
    color: '#9963ea',
    fontSize: 14,
    paddingBottom: 20,
    fontWeight: 'bold',
  },

});

export default styles;
