import React from 'react';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Login from './src/screens/Login';
import Todos from './src/screens/Todos';
import NewTodo from './src/screens/NewTodo';
import TodoDetail from './src/screens/TodoDetail';
import 'react-native-gesture-handler';

const App: () => React$Node = () => {
  return (
    <>
      <Router>
        <Stack key="root" headerLayoutPreset="center">
          <Scene key="todos" initial={true}  component={Todos} hideNavBar={true} />
          <Scene key="todoDetail" component={TodoDetail} hideNavBar={false} />
          <Scene key="NewTodo" component={NewTodo} hideNavBar={false} />

        </Stack>
      </Router>
    </>
  );
};

export default App;
