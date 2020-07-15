import React, {useState, useEffect} from 'react';
import {SafeAreaView, Button, StyleSheet, View, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    initializeFirebase();
  }, []);

  async function initializeFirebase() {
    await firebase.initializeApp(credentials);
  }

  /*
  const credentials = {
    appId: '1:981593524298:ios:487a2e40918407f409feb3',
    apiKey: 'AIzaSyAzENW_0ONxCJh_yaL-1KH0bt7IaYOshBw',
    authDomain: 'back-end-as-service.firebaseapp.com',
    databaseURL: 'https://back-end-as-service.firebaseio.com',
    storageBucket: 'back-end-as-service.appspot.com',
    messagingSenderId: '981593524298',
    projectId: 'back-end-as-service',
  };
*/

  function handleSubmit() {
    /**auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {**/
        Actions.todos();
      /*})
      .catch((error) => console.log(error));*/
  }

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.input}
          placeholder="E-mail"
          
        />
        <TextInput
          onChangeText={(password) => setPassword(password)}
          value={password}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        />
        <Button title="Entrar" onPress={handleSubmit}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '70%',
    height: 40,
    backgroundColor: '#FFF',
    marginBottom: 10,
    color: '#000',
    borderRadius: 7,
    padding: 10,
  },
});
