/*
* File: App.js
* Author: Szekeres András
* Copyright: 2024, Szekeres András
* Group: Szoft 2/2/N
* Date: 2024.02.28
* Github: https://github.com/8UVUVUV8/Dolgozat_2024_02_28_tomtestin
* Licenc: GNU GPL
*/

import { useState } from 'react';
import { Pressable, TextInput, StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  const [heig, setUserHeight] = useState(0)
  const [weig, setUserweight] = useState(0)
  const [result, setResult] = useState('eredmény')

  function calc(){
    let res = Math.round(10000*(weig/Math.pow(heig,2)));
    setResult(res)
  }

  return (
    <View style={styles.container}>
      <Image source={require('../tomtestin/assets/logo.png')} />
      <Text style={styles.h1}>BMI</Text>
      <Text style={styles.h2}>Számolo</Text>
      <View style={styles.inputs}>

        <Text style={styles.h3}>Adja meg a maggaságát (cm)</Text>
        <TextInput
          style={styles.input} onChangeText={heig => {setUserHeight(heig)}}
        />
        <Text style={styles.h3}>Adja meg a test tömegét (kg)</Text>
        <TextInput
          style={styles.input} onChangeText={weig => {setUserweight(weig)}}
        />

      </View>

      <Pressable style={styles.pressable} onPress={calc}>
        <Text style={styles.h3}>Számit</Text>
      </Pressable>
      <TextInput
          style={styles.resinput} value={result}
      />
    <Text style={styles.footer}>Made by: Szekeres András 2024.02.28</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  inputs: {
    backgroundColor: '#D4F5FF',
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 2,
    padding: 50
  },
  input:{
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 50,
    borderWidth: 2
  },
  pressable: {
    backgroundColor: 'lightgreen',
    borderColor: 'black',
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 10,
    margin: 10
  },
  resinput:{
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 5
  },
  h1: {
    fontStyle: 'italic',
    fontSize: 50,
    fontFamily: 'Verdana'
  },
  h2: {
    fontStyle: 'italic',
    fontSize: 30,
    fontFamily: 'Verdana'
  },
  h3: {
    fontStyle: 'italic',
    fontSize: 15,
    fontFamily: 'Verdana',
    marginVertical: 10
  },
  footer: {
    position: 'absolute',
    bottom: 0
  }
});
