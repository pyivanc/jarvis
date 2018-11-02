import * as React from 'react';

import { TodoItem as TodoItemType } from './types';
import TodoHeader from './todo-header';

interface PropTypes {
    item: TodoItemType;
    todoId: number,
    onToggle: any;
}

class TodoItemComponent extends React.Component<PropTypes, null> {

    render() {
        const { item, todoId, onToggle } = this.props;
        
        return (
            <li className="list-group-item">
                <TodoHeader
                    title={item.title}
                    onToggle={() => onToggle(todoId, item.id)}
                    isChecked={item.isDone}
                />
            </li>
        );
    }
}


export default TodoItemComponent;
