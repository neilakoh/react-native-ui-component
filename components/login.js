/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableHighlight,
} from 'react-native';
const {width , height} = Dimensions.get('window');
import ComponentFixer from '../ComponentFixer.js';

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.standard = this.standard.bind(this);
    this.graphical = this.graphical.bind(this);
    this.loginUsernameUI = this.loginUsernameUI.bind(this);
    this.loginPasswordUI = this.loginPasswordUI.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.logo = this.logo.bind(this);
  }

  standard() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>Standard</Text>
      </View>
    )
  }

  graphical(
    backgroundImageFilename,
    passwordIconFilename,
    usernameIconFilename,
    loginBorderColor,
    passwordBorderColor,
    loginBgColor,
    passwordBgColor,
    loginBtnColor,
    loginBtnTextColor,
    loginBtnBorderColor,
    event,
    inputSeparator,
    usernameIconBgColor,
    passwordIconBgColor,
    logoFilename,
  ) {
    let separatorSize = inputSeparator === 'full' ? 100 : inputSeparator === 'mid' ? 50 : inputSeparator === 'small' ? 35 : 0;
    return (
      <Image source={{uri: backgroundImageFilename}} style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
      }}>
        <View ref='loginUIWrapper' style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {
            this.logo(logoFilename)
          }
          {
            this.loginUsernameUI(
              usernameIconFilename,
              loginBorderColor,
              loginBgColor,
              separatorSize,
              usernameIconBgColor
            )
          }
          {
            this.loginPasswordUI(
              passwordIconFilename,
              passwordBorderColor,
              passwordBgColor,
              separatorSize,
              passwordIconBgColor
            )
          }
          {
            this.loginButton(
              loginBtnColor,
              loginBtnTextColor,
              loginBtnBorderColor,
              event,
            )
          }
        </View>
      </Image>
    )
  }

  logo(logoFilename) {
    return (
      <View style={{
        width: ComponentFixer.getPercentage(width, 100),
        height: ComponentFixer.getPercentage(height, 25),
        justifyContent: 'center',
        alignItems: 'center',
      }} ref='logoWrapper'>
        <Image source={{uri: logoFilename}} style={{
          width: ComponentFixer.getPercentage(width, 50),
          height: ComponentFixer.getPercentage(height, 25),
          resizeMode: 'contain',
        }} ref='logo'/>
      </View>
    )
  }

  loginUsernameUI(
    usernameIconFilename,
    loginBorderColor,
    loginBgColor,
    separatorSize,
    usernameIconBgColor,
  ) {

    return (
      <View ref='username' style={{
        width: ComponentFixer.getPercentage(width, 65),
        height: ComponentFixer.getPercentage(height, 8),
        backgroundColor: loginBgColor,
        flexDirection: 'row',
        borderColor: loginBorderColor,
        borderWidth: 1,
      }}>
        <View ref='usernameIcon' style={{
          left: 0,
          position: 'absolute',
          width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25),
          height: ComponentFixer.getPercentage(ComponentFixer.getPercentage(height, 8), 95),
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: usernameIconBgColor,
        }}>
          <Image source={{uri: usernameIconFilename}} ref='uicon' style={{
            resizeMode: 'contain',
            height: ComponentFixer.getPercentage(ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25), 50),
            width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25), 50),
            zIndex: 5,
          }}></Image>
          <View ref='unameSeparator' style={{
            width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25),
            height: ComponentFixer.getPercentage(ComponentFixer.getPercentage(height, 8), separatorSize),
            position: 'absolute',
            zIndex: 1,
            borderRightWidth: 1,
            borderRightColor: loginBorderColor,
          }}></View>
        </View>
        <View ref='usernameInput' style={{
          right: 0,
          position: 'absolute',
          width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 75),
          height: ComponentFixer.getPercentage(height, 8),
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TextInput ref='uinput' style={{
            width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 72),
            height: ComponentFixer.getPercentage(height, 7),
            fontSize: 16,
            color: '#ffffff',
          }} placeholder='Username' underlineColorAndroid='transparent' placeholderTextColor='#696969' />
        </View>
      </View>
    )
  }

  loginPasswordUI(
    passwordIconFilename,
    passwordBorderColor,
    passwordBgColor,
    separatorSize,
    passwordIconBgColor
  ) {
    return (
      <View ref='password' style={{
        width: ComponentFixer.getPercentage(width, 65),
        height: ComponentFixer.getPercentage(height, 8),
        backgroundColor: passwordBgColor,
        flexDirection: 'row',
        borderColor: passwordBorderColor,
        borderWidth: 1,
        marginTop: 5,
      }}>
        <View ref='passwordIcon' style={{
          left: 0,
          position: 'absolute',
          width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25),
          height: ComponentFixer.getPercentage(ComponentFixer.getPercentage(height, 8), 95),
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: passwordIconBgColor,
        }}>
          <Image source={{uri: passwordIconFilename}} ref='picon' style={{
            resizeMode: 'contain',
            height: ComponentFixer.getPercentage(ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25), 50),
            width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25), 50),
            zIndex: 5,
          }}></Image>
          <View ref='passSeparator' style={{
            width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25),
            height: ComponentFixer.getPercentage(ComponentFixer.getPercentage(height, 8), separatorSize),
            position: 'absolute',
            zIndex: 1,
            borderRightWidth: 1,
            borderRightColor: passwordBorderColor,
          }}></View>
        </View>
        <View ref='passwordInput' style={{
          right: 0,
          position: 'absolute',
          width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 75),
          height: ComponentFixer.getPercentage(height, 8),
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TextInput ref='pinput' style={{
            width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 72),
            height: ComponentFixer.getPercentage(height, 7),
            fontSize: 16,
            color: '#ffffff',
          }} placeholder='Password' underlineColorAndroid='transparent' placeholderTextColor='#696969' secureTextEntry={true}/>
        </View>
      </View>
    )
  }

  loginButton(
    loginBtnColor,
    loginBtnTextColor,
    loginBtnBorderColor,
    event,
  ) {
    return (
      <TouchableHighlight ref='loginButton' onPress={event} style={{
        width: ComponentFixer.getPercentage(width, 65),
        height: ComponentFixer.getPercentage(height, 8),
        marginTop: 5,
        backgroundColor: loginBtnColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: loginBtnBorderColor,
        borderWidth: 1,
      }}>
        <View>
          <Text ref='loginText' style={{
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            color: loginBtnTextColor,
          }}>LOGIN</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const {
      type,
      backgroundImageFilename,
      passwordIconFilename,
      usernameIconFilename,
      loginBorderColor,
      passwordBorderColor,
      loginBgColor,
      passwordBgColor,
      loginBtnColor,
      loginBtnTextColor,
      loginBtnBorderColor,
      event,
      inputSeparator,
      usernameIconBgColor,
      passwordIconBgColor,
      logoFilename,
    } = this.props;
    return (
      type === 'graphical' ? this.graphical(
        backgroundImageFilename,
        passwordIconFilename,
        usernameIconFilename,
        loginBorderColor,
        passwordBorderColor,
        loginBgColor,
        passwordBgColor,
        loginBtnColor,
        loginBtnTextColor,
        loginBtnBorderColor,
        event,
        inputSeparator,
        usernameIconBgColor,
        passwordIconBgColor,
        logoFilename,
      ) : this.standard()
    )
  }
}
