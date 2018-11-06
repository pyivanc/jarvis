import * as React from 'react';
import TodoHeader from '../TodoHeader/TodoHeader.component';
import { TodoItem } from '../types';

interface PropTypes {
    item: TodoItem
    onChange: (data: object) => Promise<void>;
    onDelete: () => Promise<void>;
}

class TodoItemComponent extends React.Component<PropTypes, any> {
    render() {
        const { item, onChange, onDelete } = this.props;
        return (
            <li className="list-group-item">
                <TodoHeader
                    title={item.title}
                    isChecked={item.isDone}
                    onChange={onChange}
                    onDelete={onDelete}
                />
            </li>
        );
    }
}

export default TodoItemComponent;

