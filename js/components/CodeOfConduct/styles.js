import {
  StyleSheet,
} from 'react-native';
import { colours, typography } from '../../config/styles';


const styles = StyleSheet.create({
  bodyText: {
    fontFamily: typography.fontMainLight,
    color: colours.mediumGrey,
    paddingBottom: 20,
  },

  listTextHeader: {
    fontFamily: typography.fontMain,
    color: colours.purple,
    fontSize: 14,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
});

export default styles;
