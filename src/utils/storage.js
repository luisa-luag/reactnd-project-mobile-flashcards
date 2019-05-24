import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'MOBILE_FLASHCARDS:DECKS';

export function createDeck(deckName) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    let data = JSON.parse(results);
    if (data === null) {
      data = {};
    }
    if (data[deckName] !== undefined) {
      return false;
    }
    data[deckName] = {
      key: deckName,
      title: deckName,
      questions: []
    };
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    return true;
  });
}

export function getAllDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => results !== null ? Object.values(JSON.parse(results)) : []);
}

export function getDeck(deckName) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => JSON.parse(results)[deckName]);
}

export function saveQuestion(deckName, question) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    let data = JSON.parse(results);
    data[deckName].questions.push(question);
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  });
}