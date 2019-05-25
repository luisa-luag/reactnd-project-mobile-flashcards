import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'MOBILE_FLASHCARDS:NOTIFICATIONS';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync);
}

export function createNotification() {
  return {
    title: "Don't forget to study!",
    body: "You didn't complete a Quiz today!",
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  };
}

export  function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY).then((results => {
    const data = JSON.parse(results);
    if (data === null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
        if (status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync().then(() => {
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);
            tomorrow.setSeconds(0);

            Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: tomorrow,
                repeat: 'day'
              }
            );

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          });
        }
      });
    }
  }));
}