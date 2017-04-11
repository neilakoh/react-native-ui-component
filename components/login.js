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
      <View style={styles.container}>
        <Text>Standard</Text>
      </View>
    )
  }

  graphical(backgroundImageFilename, passwordIconFilename, usernameIconFilename) {
    return (
      <Image source={{uri: backgroundImageFilename}} style={styles.imageType}>
        <View ref='loginUIWrapper' style={styles.loginUIWrapper}>
          {
            this.logo()
          }
          {
            this.loginUsernameUI(usernameIconFilename)
          }
          {
            this.loginPasswordUI(passwordIconFilename)
          }
          {
            this.loginButton()
          }
        </View>
      </Image>
    )
  }

  logo() {
    return (
      <View style={styles.logoWrapper} ref='logoWrapper'>
        <Image source={{uri: 'logo'}} style={styles.logo} ref='logo'/>
      </View>
    )
  }

  loginUsernameUI(usernameIconFilename) {
    return (
      <View ref='username' style={styles.usernameUI}>
        <View ref='usernameIcon' style={styles.usernameIcon}>
          <Image source={{uri: usernameIconFilename}} ref='uicon' style={styles.uicon}></Image>
          <View ref='unameSeparator' style={styles.unameSeparator}></View>
        </View>
        <View ref='usernameInput' style={styles.usernameInput}>
          <TextInput ref='uinput' style={styles.uinput} placeholder='Username' underlineColorAndroid='transparent' placeholderTextColor='#696969' />
        </View>
      </View>
    )
  }

  loginPasswordUI(passwordIconFilename) {
    return (
      <View ref='password' style={styles.passwordUI}>
        <View ref='passwordIcon' style={styles.passwordIcon}>
          <Image source={{uri: passwordIconFilename}} ref='picon' style={styles.picon}></Image>
          <View ref='passSeparator' style={styles.passSeparator}></View>
        </View>
        <View ref='passwordInput' style={styles.passwordInput}>
          <TextInput ref='pinput' style={styles.uinput} placeholder='Password' underlineColorAndroid='transparent' placeholderTextColor='#696969' secureTextEntry={true}/>
        </View>
      </View>
    )
  }

  loginButton() {
    return (
      <TouchableHighlight ref='loginButton' style={styles.loginButton}>
        <View>
          <Text ref='loginText' style={styles.loginText}>LOGIN</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const {type, backgroundImageFilename, passwordIconFilename, usernameIconFilename} = this.props;
    return (
      type === 'graphical' ? this.graphical(backgroundImageFilename, passwordIconFilename, usernameIconFilename) : this.standard()
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageType: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  //USERNAME STYLE
  usernameUI: {
    width: ComponentFixer.getPercentage(width, 65),
    height: ComponentFixer.getPercentage(height, 8),
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flexDirection: 'row',
    borderColor: '#daa520',
    borderWidth: 1,
  },
  usernameIcon: {
    left: 0,
    position: 'absolute',
    width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25),
    height: ComponentFixer.getPercentage(height, 8),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameInput: {
    right: 0,
    position: 'absolute',
    width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 75),
    height: ComponentFixer.getPercentage(height, 8),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uicon: {
    resizeMode: 'contain',
    height: ComponentFixer.getPercentage(ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25), 50),
    width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25), 50),
    zIndex: 5,
  },
  uinput: {
    width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 72),
    height: ComponentFixer.getPercentage(height, 7),
    fontSize: 16,
    color: '#ffffff',
  },
  unameSeparator: {
    width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25),
    height: ComponentFixer.getPercentage(height, 4),
    position: 'absolute',
    zIndex: 1,
    borderRightWidth: 1,
    borderRightColor: '#daa520',
  },
  //PASSWORD STYLE
  passwordUI: {
    width: ComponentFixer.getPercentage(width, 65),
    height: ComponentFixer.getPercentage(height, 8),
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flexDirection: 'row',
    borderColor: '#daa520',
    borderWidth: 1,
    marginTop: 5,
  },
  passwordIcon: {
    left: 0,
    position: 'absolute',
    width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25),
    height: ComponentFixer.getPercentage(height, 8),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordInput: {
    right: 0,
    position: 'absolute',
    width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 75),
    height: ComponentFixer.getPercentage(height, 8),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picon: {
    resizeMode: 'contain',
    height: ComponentFixer.getPercentage(ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25), 50),
    width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25), 50),
    zIndex: 5,
  },
  pinput: {
    width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 72),
    height: ComponentFixer.getPercentage(height, 7),
    fontSize: 16,
    color: '#ffffff',
  },
  passSeparator: {
    width: ComponentFixer.getPercentage(ComponentFixer.getPercentage(width, 65), 25),
    height: ComponentFixer.getPercentage(height, 4),
    position: 'absolute',
    zIndex: 1,
    borderRightWidth: 1,
    borderRightColor: '#daa520',
  },
  //LOGIN BUTTON
  loginButton: {
    width: ComponentFixer.getPercentage(width, 65),
    height: ComponentFixer.getPercentage(height, 8),
    marginTop: 5,
    backgroundColor: '#daa520',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.8)',
    borderWidth: 1,
  },
  loginText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.8)',
  },
  logoWrapper: {
    width: ComponentFixer.getPercentage(width, 100),
    height: ComponentFixer.getPercentage(height, 25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: ComponentFixer.getPercentage(width, 50),
    height: ComponentFixer.getPercentage(height, 25),
    resizeMode: 'contain',
  },
  loginUIWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
