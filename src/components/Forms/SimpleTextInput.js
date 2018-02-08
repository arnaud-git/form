import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export default function SimpleTextInput(props) {
  const { input, ...inputProps } = props;

  return (
    <View>
      <TextInput style={styles.simpleTextInputStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  simpleTextInputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 20,
    backgroundColor: 'white',
  }
})
