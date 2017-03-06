import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { colours, typography } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colours.brandBlack,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  headerIcon: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  headerIconIcon: {
    color: colours.brandWhite,
  },
  speakerH1: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  speakerH1Text: {
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    color: colours.brandWhite,
  },
  speakerContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colours.brandWhite,
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  speakerImage: {
    ...Platform.select({
      ios: {
        height: 100,
        width: 100,
      },
      android: {
        height: 125,
        width: 125,
      },
    }),

    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 15,
    marginBottom: 20,
  },
  speakerH2Text: {
    fontFamily: typography.fontMain,
    fontSize: typography.largeSize,
    paddingBottom: 20,
  },
  speakerText: {
    fontFamily: typography.fontMainLight,
    fontSize: typography.baseSize,
    lineHeight: 25,
  },
});

export default styles;
