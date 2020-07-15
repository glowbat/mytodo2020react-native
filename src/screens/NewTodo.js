import React, {useState, useEffect} from 'react';
import { StyleSheet, View,Button, TextInput, Alert, ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import * as Yup from "yup";
import { Formik } from 'formik';

const url = 'https://node-todo-dev.herokuapp.com/api/todos';


export default (props) => {
     //valida se a descricao do TODO foi informada
   /*
     const todoSchema = Yup.object({
        description: Yup.string().required("A descrição precisa ser informada!"),
      });
    
      const formik = useFormik({
        initialValues: {
            description: "",
        }
    });
    */
 

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


    return (
        <Formik
            initialValues={{ 
            description: ''
        }}
        onSubmit={values => 
            axios.post(url, values).then((res) => { 
                if (Platform.OS === 'ios') {
                alert('Todo atualizado!');
                } else {
                /*ToastAndroid.show('Todo atualizado!', ToastAndroid.LONG);*/
                ToastAndroid.show("TODO foi criado com sucesso!", ToastAndroid.LONG);
                Actions.todos();
                }
            }) 
        }
        > 
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (

            <View>
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                placeholder="Descreva o TODO"
                onChangeText={handleChange('description')}
                onBlur={() => setFieldTouched('description')}
                value={values.description}
                />
                <Button title="Cadastrar" onPress={handleSubmit}></Button>
            </View>
            </View>
        )}
        </Formik>
    );
 



};