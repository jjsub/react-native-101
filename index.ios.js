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
  TextInput
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={styles.estilo}>Hello {this.props.name}!</Text>
    );
  }
}

class app101 extends Component {
  constructor(props) {
  super(props);
  this.state = {text: ''};
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 20}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
      <Text style={{padding: 10, fontSize: 60}}>
          {this.state.text.split(' ').map((word) => word && '🙊').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  estilo: {
    color: 'blue',
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('app101', () => app101);

//
// <View style={styles.container}>
//   <View style={{
//       flex: 1,
//       flexDirection: 'row',
//       justifyContent: 'flex-end',
//       alignItems: 'flex-start'
//   }}>
//     <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//     <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//     <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
// </View>
//   <Text>Inge es la Reina de mi VIDA💑</Text>
//   <Text style={styles.welcome}>
//     Welcome to React Native!
//   </Text>
//   <Text style={styles.instructions}>
//     To get started, edit index.ios.js
//   </Text>
//   <Text style={styles.instructions}>
//     Press Cmd+R to reload,{'\n'}
//     Cmd+D or shake for dev menu
//   </Text>
//   <Greeting name='Rexxar' />
//   <Greeting name='Jaina' />
//   <Greeting name='Valeera' />
// </View>
