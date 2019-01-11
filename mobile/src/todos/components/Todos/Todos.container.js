import * as React from 'react';
import { Text } from 'react-native';
import JarvisCommon from 'jarvis-web-common'

import TodosComponent from './Todos.component';

const Container = JarvisCommon.Todos(TodosComponent);
export default () => <Container />;
