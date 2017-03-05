import { StyleSheet } from 'react-native';
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
    // borderColor: colours.borderLight,
    // borderStyle: 'solid',
    // borderWidth: 1,
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
    // borderColor: colours.borderLight,
    // borderStyle: 'solid',
    // borderWidth: 1,
  },
  speakerH1Text: {
    fontFamily: typography.fontMain,
    fontSize: 16,
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
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 15,
    marginBottom: 20,
  },
  speakerH2Text: {
    fontFamily: typography.fontMain,
    fontSize: 26,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  speakerText: {
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    // paddingBottom: 20,
    lineHeight: 25,
  },
});

export default styles;
