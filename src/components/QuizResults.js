import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class QuizResults extends Component {

  backToDeck = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { correctQuestions, totalQuestions, restartQuiz } = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.container, styles.innerContainer]}>
          <Text style={styles.title}>Your score:</Text>
          <Text style={styles.score}>{correctQuestions}/{totalQuestions}</Text>
        </View>
        <View style={[styles.container, styles.innerContainer]}>
          <TouchableOpacity onPress={restartQuiz}>
            <View style={[styles.button, {backgroundColor: 'white'}]}>
              <Text style={[styles.buttonText, {color: 'black'}]}>Restart Quiz</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.backToDeck}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Back to Deck</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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
  score: {
    textAlign: 'center',
    fontSize: 60,
    margin: 10
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

export default QuizResults;