// @flow

import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

import { Page } from 'formAtion/src/components';
import { UserInformationForm } from '../../components/index';

import styles from './Home.style';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAL7GAa42h-4oFO4ATLQbp2cFbaAhhZl8s",
  authDomain: "formation-a6bb0.firebaseapp.com",
  databaseURL: "https://formation-a6bb0.firebaseio.com",
  storageBucket: "formation-a6bb0.appspot.com",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Home extends Component<PropsType> {
  static navigationOptions = {
    title: 'Home',
  };
  constructor() {
    super();
    this.itemsRef = this.getRef().child('users');
  }
  props: PropsType;

  getRef = () => firebaseApp.database().ref();

  onSubmit = values => {
    this.itemsRef.push({ username: values.username });
    Alert.alert('Submitted!', JSON.stringify(values))
  }

  render() {
    return (
      <UserInformationForm onSubmit={this.onSubmit} />
    );
  }
}

type PropsType = {
  navigation: any,
};
