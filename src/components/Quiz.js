import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';


class Quiz extends Component {
  state = {
    current: 0,
    correct: 0
  };

  nextQuestion = (isCorrect) => {
    this.setState({
      ...this.state,
      current: this.state.current + 1 >= this.props.navigation.getParam('questions').length ? 'results' : ++this.state.current,
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