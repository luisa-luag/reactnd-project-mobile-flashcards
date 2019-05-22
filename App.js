import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppContainer from './src/components/AppContainer';
import StatusBar from './src/components/StatusBar';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='black'
        />
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
