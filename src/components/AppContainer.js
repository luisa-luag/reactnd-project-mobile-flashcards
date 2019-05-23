import React from 'react';
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import DeckList from './DeckList';
import NewDeck from './NewDeck';
import Deck from './Deck';
import Quiz from './Quiz';
import AddCard from './AddCard'

const TabNavigator = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'New Deck'
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'black',
    pressColor: 'gray',
    style: {
      backgroundColor: 'white'
    },
    indicatorStyle: {
      borderBottomColor: 'black',
      borderBottomWidth: 3
    }
  }
});

const StackNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions:  ({ navigation }) => ({
      title: navigation.getParam('deckName'),
      headerForceInset: {top: 'never'}
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerForceInset: {top: 'never'}
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerForceInset: {top: 'never'}
    }
  }
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;