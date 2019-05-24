import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getDeck } from '../utils/storage';

class Deck extends Component {

  state = {
    title: this.props.navigation.getParam('deckName'),
    questions: []
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      getDeck(this.props.navigation.getParam('deckName')).then(({ title, questions }) => {
        this.setState({
          ...this.state,
          title,
          questions
        });
      });
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  render() {
    const { title, questions } = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.container, styles.innerContainer]}>
          <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardCount}>{questions.length} cards</Text>
        </View>
        <View style={[styles.container, styles.innerContainer]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard', {deckName: title})}>
            <View style={[styles.button, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: 'black'}]}>Add Card</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Start Quiz</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Deck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  innerContainer: {
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    margin: 10
  },
  cardCount: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
    color: 'grey'
  },
  button: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 50,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 4
  },
  buttonText: {
    color: 'white'
  }
});