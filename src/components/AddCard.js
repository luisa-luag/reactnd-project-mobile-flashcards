import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { saveQuestion } from '../utils/storage';


class AddCard extends Component {
  state = {
    deckName: this.props.navigation.getParam('deckName'),
    question: {
      question: '',
      answer: ''
    }
  };

  saveQuestion = () => {
    const { deckName, question } = this.state;

    if (question.question !== '' && question.answer !== '') {
      saveQuestion(deckName, question).then(() => {
        ToastAndroid.show(`Card added to ${deckName}!`, ToastAndroid.SHORT);
        this.props.navigation.goBack();
        this.setState({
          ...this.state,
          question: {
            question: '',
            answer: ''
          }
        });
      });
    } else {
      ToastAndroid.show('You must enter a question and an answer!', ToastAndroid.SHORT);
    }
  };

  handleChange = (field, text) => {
    this.setState({
      ...this.state,
      question: {
        ...this.state.question,
        [field]: text
      }
    });
  };

  render() {
    const { question, answer } = this.state.question;

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={[styles.container, styles.innerContainer]}>
          <View style={styles.textInput}>
            <TextInput
              editable
              onChangeText={(text) => this.handleChange('question', text)}
              placeholder='Question...'
              value={question}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              editable
              onChangeText={(text) => this.handleChange('answer', text)}
              placeholder='Answer...'
              value={answer}
            />
          </View>
        </View>
        <View style={[styles.container, styles.innerContainer]}>
          <TouchableOpacity
            onPress={this.saveQuestion}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  textInput: {
    alignSelf: 'stretch',
    margin: 20,
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
    marginVertical: 10,
    marginHorizontal: 50,
    borderRadius: 4
  },
  buttonText: {
    color: 'white'
  }
});

export default AddCard;