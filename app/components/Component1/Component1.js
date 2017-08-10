/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class Component1 extends Component {
  constructor(props){
    super(props);
    this.state={
      Name:'Shopping List',
      showName:true,
      message:this.props.message
    }

  }
  static defaultProps = {
    message: 'Hi There'

  }
  
  render() {
    let name = this.state.showName ? this.state.Name : 'No Name';
    
    return (
      <View >
        <Text >
         {name}
        </Text>
        <Text >
         {this.state.message}
        </Text>
        <Text >
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('Component1', () => Component1);
