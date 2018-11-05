import * as React from 'react';

import { TodoItem as TodoItemType } from './types';
import TodoHeader from './todo-header';
import * as actions from '../actions';

interface PropTypes {
    item: TodoItemType;
    todoId: number,
    onChange: () => Promise<void>;
    onDelete: (todoItemId: number) => Promise<void>;
}

class TodoItemComponent extends React.Component<PropTypes, null> {

    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
    }

    async onChange(value) {
        const { todoId, item, onChange } = this.props;
        await actions.updateTodoItem(todoId, item.id, { title: value });
        await onChange();
    }

    async onToggle() {
        const { todoId, item, onChange } = this.props;
        await actions.updateTodoItem(todoId, item.id, { isDone: !item.isDone });
        await onChange();
    }

    render() {
        const { item, onDelete } = this.props;
        
        return (
            <li className="list-group-item">
                <TodoHeader
                    title={item.title}
                    isChecked={item.isDone}
                    onToggle={this.onToggle}
                    onChange={async (value) => await this.onChange(value)}
                    onDelete={async () => await onDelete(item.id)}
                />
            </li>
        );
    }
}


export default TodoItemComponent;
