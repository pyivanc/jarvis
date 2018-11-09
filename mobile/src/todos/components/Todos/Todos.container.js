import * as React from 'react';
import { Text } from 'react-native';
import Todos from 'jarvis-web-common/src/todos/components/Todos';

import TodosComponent from './Todos.component';

const Container = Todos(TodosComponent);
export default () => <Container />;
