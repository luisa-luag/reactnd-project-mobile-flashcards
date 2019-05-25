import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class QuizQuestion extends Component {
  state = {
    button: 'Answer'
  };

  toggleQuestionAnswer = () => {
    this.setState({
      ...this.state,
      button: this.state.button === 'Answer' ? 'Question' : 'Answer'
    });
  };

  render() {
    const { button } = this.state;
    const { nextQuestion, question, currentQuestion, totalQuestions } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.questionCounter}>{currentQuestion}/{totalQuestions}</Text>
        </View>
        <View style={[styles.container, styles.innerContainer]}>
          <Text style={styles.title}>{button === 'Answer' ? question.question : question.answer}</Text>
          <TouchableOpacity onPress={this.toggleQuestionAnswer}>
            <Text style={styles.switch}>{button}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.container, styles.innerContainer]}>
          <TouchableOpacity onPress={() => nextQuestion(true)}>
            <View style={[styles.button, {backgroundColor: 'green'}]}>
              <Text style={styles.buttonText}>Correct</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nextQuestion(false)}>
            <View style={[styles.button, {backgroundColor: 'red'}]}>
              <Text style={styles.buttonText}>Incorrect</Text>
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
  questionCounter: {
    fontSize: 20,
    margin: 5
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    margin: 10
  },
  switch: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    color: 'red'
  },
  button: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
    marginVertical: 10,
    marginHorizontal: 50,
    borderRadius: 4
  },
  buttonText: {
    color: 'white'
  }
});

export default QuizQuestion;