import { StyleSheet } from 'react-native';
import { colours, typography } from '../../config/styles';

const styles = StyleSheet.create({
  rowItem: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderLeftColor: colours.brandWhite,
    borderRightColor: colours.brandWhite,
    borderTopColor: colours.brandWhite,
    borderBottomColor: colours.borderLight,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  rowItemTitle: {
    paddingBottom: 5,
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
  },
  rowItemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textItem: {
    fontFamily: typography.fontMain,
    color: colours.textDark,
    fontSize: typography.smallSize,
  },
});

export default styles;
