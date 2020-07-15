import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button, ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import moment from 'moment';
import axios from 'axios';
import { Formik } from 'formik';

const url = 'https://node-todo-dev.herokuapp.com/api/todos';



export default (props) => {
  function handleRemove() {
    axios
      .delete(`${url}/${props.todo._id}`)
      .then((res) => {
        Actions.todos();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /** 
  function handleSubmit() {
           axios.put(`${url}/${props.id}`, values).then((res) => {
               if (Platform.OS === 'ios') {
                alert('Todo atualizado!');
               } else {
                ToastAndroid.show('Todo atualizado!', ToastAndroid.LONG);
               }
               Actions.todos();
           });
       }
 */


  return (
    <>
    <View style={styles.container}>
      <Text style={styles.information}>Descrição</Text>
      <Text style={styles.information}>{props.todo.description}</Text>
      <Text style={styles.information}>Data de criação</Text>
      <Text style={styles.information}>
        {moment(props.todo.createdAt).format('DD/MM/YYYY')}
      </Text>
      <Text style={styles.information}>Completo</Text>
      <Text style={styles.information}>{props.todo.done ? 'Sim' : 'Não'}</Text>
      <Button color="#ea2041" title="Remover" onPress={handleRemove} />

      <Formik initialValues={{   description: ''  }}  onSubmit={values => 
        axios.put(`${url}/${props.todo._id}`, values).then((res) => {
           
        if (Platform.OS === 'ios') {
          alert('Todo atualizada!');
        } else {
          ToastAndroid.show("TODO alterada!", ToastAndroid.LONG);
          Actions.todos();
        }
        console.log();
    }) 
  }
  >  
  {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (

    <View>
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Altere o TODO"
        onChangeText={handleChange('description')}
        onBlur={() => setFieldTouched('description')}
        value={values.description}
        />
        <Button title="Editar" onPress={handleSubmit}></Button>
    </View>
    </View>
  )}
  </Formik>
    </View> 
  </>
  );
  
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
    height: '100%',
    padding: 10,
  },
  information: {
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
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
