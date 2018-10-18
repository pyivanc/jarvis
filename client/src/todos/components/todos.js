import React from 'react';
import styled from 'styled-components';

import Todo from './todo';
import { getTodos } from '../actions';

const StyledTodos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
`

export default class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    async componentWillMount() {
        const todos = await getTodos();
        this.setState({ todos: todos });
    }

    render() {
        return (
            <StyledTodos>
                { this.state.todos.map(t => <Todo key={`todo_${t.id}`} data={t} />) }
            </StyledTodos>
        );
    }
}
