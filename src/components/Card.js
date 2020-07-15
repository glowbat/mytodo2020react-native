import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity ,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import moment from 'moment';

const url = 'https://node-todo-dev.herokuapp.com/api/todos';

export default (props) => {
  const [enabled, setEnabled] = useState(props.done);
  function toggleSwitch() {
    const data = {_id: props.id, done: !enabled};
    setEnabled(!enabled);
    axios.put(`${url}/${props.id}`, data).then((res) => {
      if (Platform.OS === 'ios') {
        alert('Todo atualizado!'); 
      } else {
        ToastAndroid.show('Todo atualizado!', ToastAndroid.LONG);
      }
    });
  }
  function handleScreen() {
    Actions.todoDetail({todo: props.todo});
  }
  return (
    <View key={props.id} style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={handleScreen}>
          <Text style={styles.title}>{props.description}</Text>
          <Text style={styles.subTitle}>
            {moment(props.date).format('DD/MM/YYYY')}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Switch
          trackColor={{false: '#aaa', true: '#070'}}
          thumbColor={props.done ? '#FFF' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={enabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 0.84,
  },
  leftContainer: {
    width: '85%',
  },
  rightContainer: {
    flexDirection: 'column-reverse',
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#666',
    fontSize: 14,
    marginTop: 5,
  },
});
