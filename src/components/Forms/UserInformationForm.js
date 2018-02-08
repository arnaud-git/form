import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, StyleSheet } from 'react-native';

import SimpleTextInput from './SimpleTextInput';

function UserInformationForm() {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <Text style={styles.fieldNameStyle}>Username</Text>
      <Field
        name={'username'}
        component={SimpleTextInput}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fieldNameStyle: {
    marginLeft: 20,
  }
})

export default reduxForm({ form: 'signIn' })(UserInformationForm);
