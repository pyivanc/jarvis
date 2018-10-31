import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { TodoItem as TodoItemType } from './types';

interface PropTypes {
    item: TodoItemType;
    todoId: number,
    onToggle: any;
}

class TodoItemComponent extends React.Component<PropTypes, null> {

    render() {
        const { item, todoId, onToggle } = this.props;
        const checkIcon: IconProp = item.isDone ? faCheckSquare : faSquare;

        return (
            <li className="list-group-item">
                { item.title }
                <div onClick={() => onToggle(todoId, item.id)}>
                    <FontAwesomeIcon icon={checkIcon} />
                </div>
            </li>
        );
    }
}


export default TodoItemComponent;
