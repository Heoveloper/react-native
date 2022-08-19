// import React, {Fragment} from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App from './src/App';
export default App;

export function App2() {
  const name = '홍길동';
  const number = 10;
  return (
    <View style={styles.container}>
      <Text style={styles.myfont}>{name}</Text>
      <Text>
        {
          (() => {
            if(number % 2 == 0) return '짝수';
            else return '홀수';
          })()
        }
      </Text>
      <Text>
        {
          (() => {
            return (number % 2 == 0) ? '짝수' : '홀수'
          })()
        }
      </Text>
      <Text>
        {
          (() => (number % 2 == 0) ? '짝수' : '홀수')()
        }
      </Text>
      { number % 2 == 0 && <Text>짝수</Text> }
      { number % 2 !== 0 && <Text>홀수</Text> }
      <StatusBar style="auto" />
    </View>
      // <Fragment>
      //   <Text>R E A C T</Text>
      //   <StatusBar style="auto" />
      // </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  myfont: {
    fontSize: 80,
    fontWeight: 900,
    color: 'orange',
    backgroundColor: 'black',
  }
});
