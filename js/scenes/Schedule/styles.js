import {
  StyleSheet,
} from 'react-native';
import { colours, typography } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  sectionHeader: {
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
    backgroundColor: colours.selectedItemLight,
    fontFamily: typography.fontMain,
    fontSize: typography.smallSize,
  },
});

export default styles;
