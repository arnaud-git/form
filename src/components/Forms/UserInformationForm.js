import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

import SimpleTextInput from './SimpleTextInput';

const UserInformationForm = (props) => {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <Text style={styles.fieldNameStyle}>Username</Text>
      <Field
        name={'username'}
        component={SimpleTextInput}
      />
      <TouchableOpacity style={styles.touchableStyle} onPress={props.handleSubmit}>
        <Text style={styles.touchableTextStyle}>Submit!</Text>
      </TouchableOpacity >
    </ScrollView >)
};

const styles = StyleSheet.create({
  fieldNameStyle: {
    marginHorizontal: 20,
    marginTop: 10,
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
})

export default reduxForm({ form: 'signUp' })(UserInformationForm);
