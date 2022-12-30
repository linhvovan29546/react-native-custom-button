// @ts-ignore
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableThrottle, TouchableSkeuomorphism } from '../../src/index'


export default function App() {
  return (
    <View style={styles.container}>
      <TouchableThrottle onPress={() => {
        console.log('on TouchableThrottle')
      }}>
        <Text>TouchableThrottle</Text>
      </TouchableThrottle>
      <TouchableSkeuomorphism size={12}
      >
        <Text>TouchableSkeuomorphism</Text>
      </TouchableSkeuomorphism>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
