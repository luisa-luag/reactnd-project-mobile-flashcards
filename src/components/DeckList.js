import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getAllDecks } from '../utils/storage';
import DeckEntry from './DeckEntry';

class DeckList extends Component {
  state = {
    decks: []
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      getAllDecks().then((decks) => {
        this.setState({
          ...this.state,
          decks: decks
        });
      });
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  renderItem = ({ item }) => (<DeckEntry {...item} navigation={this.props.navigation}/>);

  render() {
    const { decks } = this.state;

    return(
      <View style={styles.container}>
        {decks.length > 0
          ? <FlatList
            contentContainerStyle={styles.container}
            data={decks}
            renderItem={this.renderItem}
          />
          : <Text style={styles.label}>No decks here yet</Text>
        }
      </View>
    );
  }
}

export default DeckList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  label: {
    textAlign: 'center',
    fontSize: 20
  }
});
