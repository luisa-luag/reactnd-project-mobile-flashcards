import React, { Component } from 'react';
import { View, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import { createDeck } from '../utils/storage';

class NewDeck extends Component {
  state = {
    deckName: ''
  };

  handleChange = (text) => {
    this.setState({
      ...this.state,
      deckName: text
    });
  };

  createDeck = () => {
    if (this.state.deckName !== '') {
      createDeck(this.state.deckName).then((response) => {
        if (response) {
          ToastAndroid.show(`Deck ${this.state.deckName} created!`, ToastAndroid.SHORT);
          this.props.navigation.navigate('Deck', {deckName: this.state.deckName});
          this.setState({
            ...this.state,
            deckName: ''
          });
        } else {
          ToastAndroid.show('A deck with this name already exists!', ToastAndroid.SHORT);
        }
      });
    } else {
      ToastAndroid.show('Enter a name for your deck!', ToastAndroid.SHORT);
    }
  };

  render() {
    const { deckName } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Give a name to your new deck:</Text>
          <View style={styles.textInput}>
            <TextInput
              editable
              onChangeText={this.handleChange}
              placeholder='Deck name...'
              value={deckName}
            />
          </View>
        <TouchableOpacity
          onPress={this.createDeck}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Create New Deck</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NewDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  mainText: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center'
  },
  textInput: {
    alignSelf: 'stretch',
    margin: 50,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5
  },
  button: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 4
  },
  buttonText: {
    color: 'white'
  }
});