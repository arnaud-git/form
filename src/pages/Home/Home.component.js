// @flow

import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

import { Page } from 'formAtion/src/components';
import { UserInformationForm } from '../../components/index';

import styles from './Home.style';

export default class Home extends Component<PropsType> {
  static navigationOptions = {
    title: 'Home',
  };
  props: PropsType;

  render() {
    return (
      <UserInformationForm onSubmit={(values) => Alert.alert('Submitted!', JSON.stringify(values))} />
    );
  }
}

type PropsType = {
  navigation: any,
};
