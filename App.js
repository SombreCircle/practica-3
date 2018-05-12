import React,{Component} from 'react';
import {AppRegistry,  StyleSheet, Text, View,TextInput } from 'react-native';
import {NativeRouter,Route,Switch}from'react-router-native';
import Principal from './src/components/principal/principal';

/*export default class App extends React.Component {
  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/


export default class PizzaTranslator extends Component {
  constructor (props) {
    super(props);
    this.state={text: ''}

  }

  render() {
    return(
      <View style={{padding:10}}>
       <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding:10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '●ω●').join(' ')}
        </Text>
      </View>
    );
  }
}
