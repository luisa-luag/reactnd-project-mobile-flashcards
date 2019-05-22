import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class DeckList extends Component {
  render() {
    return(
      <View>
        <Text>Deck List</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck', {deckName: 'Deck Name'})}>
          <Text>go to deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeckList;