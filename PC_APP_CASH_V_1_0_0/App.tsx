import React from 'react';
import {View, Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MyApp = () => {
  return (
    <View>
      <Text style = {{color: 'red', fontSize: 50,}}>
        Hello World
      </Text>
    </View>
  );
};

export default MyApp;