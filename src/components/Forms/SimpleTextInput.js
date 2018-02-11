import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export default class SimpleTextInput extends Component {
  render() {
    const { input } = this.props;
    return (
      <View>
        <TextInput
          style={styles.simpleTextInputStyle}
          onChangeText={input.onChange}
          value={input.value} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  simpleTextInputStyle: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
  }
})
