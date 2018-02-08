// @flow

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Page } from 'formAtion/src/components';
import UserInformationForm from '../../components/Forms/UserInformationForm';

import styles from './Home.style';

export default class Home extends Component<PropsType> {
  static navigationOptions = {
    title: 'Home',
  };
  props: PropsType;

  render() {
    return (
      <UserInformationForm />
    );
  }
}

type PropsType = {
  navigation: any,
};
