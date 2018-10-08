import React from 'react';
import styled from 'styled-components';

import Todo from './todo';

const StyledTodos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
`

export default class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.todos = [
            {
                id: 1,
                title: 'Important things',
                checked: false,
                items: [
                    {
                        id: 1,
                        title: 'Clean the dishes',
                        description: 'I need to clean them',
                        createdAt: new Date(),
                        checked: true,
                    },
                    {
                        id: 2,
                        title: 'Create awesome app',
                        description: 'You know, change the world',
                        createdAt: new Date(),
                        checked: false,
                    }
                ]
            },
            {
                id: 2,
                title: 'Not that important things',
                checked: true,
                items: [
                    {
                        id: 1,
                        title: 'Talk with Steve Jobs',
                        description: 'He needs my help',
                        createdAt: new Date(),
                        checked: true,
                    },
                    {
                        id: 2,
                        title: 'Play videogames',
                        description: 'Necesary',
                        createdAt: new Date(),
                        checked: false,
                    }
                ]
            }

        ]
    }

    render() {
        return (
            <StyledTodos>
                { this.todos.map(t => <Todo key={t.id} data={t} />) }
            </StyledTodos>
        );
    }
}
