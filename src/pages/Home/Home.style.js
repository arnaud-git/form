// @flow

import { StyleSheet, Text, View } from 'react-native';
import theme from 'formAtion/src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    ...theme.fonts.header,
    textAlign: 'center',
    margin: theme.grid.x1,
  },
  instructions: {
    ...theme.fonts.default,
    textAlign: 'center',
    color: theme.colors.darkGray,
    marginBottom: theme.grid.x1,
  },
  touchableStyle: {
    marginTop: 40,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  touchableTextStyle: {
    fontSize: 30,
  },

});
