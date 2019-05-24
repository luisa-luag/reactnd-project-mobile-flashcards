import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';

class DeckEntry extends Component {

  state = {
    fontSize: new Animated.Value(25)
  };

  openDeck = () => {
    const { fontSize } = this.state;

    Animated.spring(fontSize, { toValue: 50, speed: 7 }).start(() => {
      Animated.timing(fontSize, { toValue: 25, duration: 100 }).start();
    });
    this.props.navigation.navigate('Deck', {deckName: this.props.title});
  };

  render() {
    const { title, questions } = this.props;
    const { fontSize } = this.state;

    return (
      <TouchableWithoutFeedback onPress={this.openDeck}>
        <View style={styles.entry}>
          <Animated.Text style={{ fontSize }}>{title}</Animated.Text>
          <Text style={styles.text}>{questions.length} card{questions.length === 1 ? '' : 's'}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default DeckEntry;

const styles = StyleSheet.create({
  entry: {
    height: 100,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: 'grey'
  }
});
