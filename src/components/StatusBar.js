import React from 'react';
import { View, StatusBar as StatusBarReact } from 'react-native';
import { Constants } from 'expo';

const StatusBar = (props) => {
  const { backgroundColor } = props;
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBarReact backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

export default StatusBar;