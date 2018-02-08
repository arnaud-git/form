// @flow

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

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
      <View>
        <UserInformationForm />
        <TouchableOpacity style={styles.touchableStyle} onPress={() => { }}>
          <Text style={styles.touchableTextStyle}>Submit!</Text>
        </TouchableOpacity >
      </View>
    );
  }
}

type PropsType = {
  navigation: any,
};
