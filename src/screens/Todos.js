import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import Card from '../components/Card';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

const url = 'https://node-todo-dev.herokuapp.com/api/todos';


export default () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setTodos(res.data);
    });
  }, []);

  function renderCards() {
    return todos.map((todo, index) => (
      <Card
        todo={todo}
        description={todo.description}
        date={todo.createdAt}
        key={index}
        id={todo._id}
        done={todo.done}
      />
    ));
  } 

  function handleSubmit() {
        Actions.NewTodo();
  }

  return (
 
    <View style={styles.container}>
      <Button title="Cadastrar novo TODO" onPress={handleSubmit}></Button>
      <Text>LISTA DE TODOS</Text>
      {renderCards()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
    height: '100%',
    padding: 10,
  },
});
