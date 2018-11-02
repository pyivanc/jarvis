import * as React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

import { Todo as TodoType } from './types';

import TodoItem from './todo-item';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import TodoHeader from './todo-header';


const Title = styled.h5`
    display: flex;
`;

const TitleText = styled.div`
    flex: 1;
`;

interface PropTypes {
    todo: TodoType;
    onToggle: any;
    onToggleItem: any;
}

class TodoComponent extends React.Component<PropTypes, null> {

    constructor(props: PropTypes) {
        super(props);
    }

    render() {
        const { todo, onToggle, onToggleItem } = this.props;
        const checkIcon: IconProp = todo.isDone ? faCheckSquare : faSquare;
        todo.items.sort((a, b) => a.id < b.id);
        return (
            <div className="col-sm">
                <div className="card">
                    <div className="card-body">
                        <TodoHeader
                            isChecked={todo.isDone}
                            onToggle={() => onToggle(todo.id)}
                            title={todo.title}
                        />
                        <h6 className="card-subtitle">{todo.description}</h6>
                    </div>
                    <ul className="list-group list-group-flush">
                        { todo.items
                            .map(i => 
                                <TodoItem
                                    key={`todo_item_${i.id}`}
                                    item={i}
                                    todoId={todo.id}
                                    onToggle={onToggleItem}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoComponent;
