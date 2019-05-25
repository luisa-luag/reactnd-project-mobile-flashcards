import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';
import { clearLocalNotification, setLocalNotification } from '../utils/notification';

class Quiz extends Component {
  state = {
    current: 0,
    correct: 0
  };

  nextQuestion = (isCorrect) => {
    const next = this.state.current + 1 >= this.props.navigation.getParam('questions').length ? 'results' : ++this.state.current;
    if (next === 'results') {
      clearLocalNotification().then(setLocalNotification);
    }

    this.setState({
      ...this.state,
      current: next,
      correct: this.state.correct + (isCorrect ? 1 : 0)
    });
  };

  restartQuiz = () => {
    this.setState({
      ...this.state,
      current: 0,
      correct: 0
    });
  };

  render() {
    const { current, correct } = this.state;
    const questions = this.props.navigation.getParam('questions');

    return (
      (current === 'results')
        ? <QuizResults
          correctQuestions={correct}
          totalQuestions={questions.length}
          restartQuiz={this.restartQuiz}
          navigation={this.props.navigation}
        />
        : <QuizQuestion
          currentQuestion={current+1}
          totalQuestions={questions.length}
          question={questions[current]}
          nextQuestion={this.nextQuestion}
        />
    );
  }
}

export default Quiz;