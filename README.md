# react-native-ui-component
my ready made react native ui components for easy development :)

HOW TO USE:

```import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
const {width , height} = Dimensions.get('window');
import Login from './components/login.js';

export default class experiment extends Component {
  render() {
    return (
      <Login
        type='graphical' // graphical or standard
        backgroundImageFilename='background'
        passwordIconFilename='pass'
        usernameIconFilename='user'
        loginBorderColor='#663399'
        passwordBorderColor='#daa520'
        loginBgColor='rgba(0, 0, 0, 0.8)'
        passwordBgColor='rgba(0, 0, 0, 0.8)'
        loginBtnColor='#daa520'
        loginBtnTextColor='rgba(0,0,0,0.8)'
        loginBtnBorderColor='rgba(0, 0, 0, 0.8)'
        event={()=>{this.test('testing')}}
      />
    );
  }
}```
