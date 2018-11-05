import * as React from 'react';

import { TodoItem as TodoItemType } from './types';
import TodoHeader from './todo-header';
import * as actions from '../actions';

interface PropTypes {
    item: TodoItemType;
    todoId: number,
    onChange: () => Promise<void>;
}

class TodoItemComponent extends React.Component<PropTypes, null> {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    async onChange(data) {
        const { todoId, item, onChange } = this.props;
        await actions.updateTodoItem(todoId, item.id, data);
        await onChange();
    }

    async onDelete() {
        const { todoId, onChange, item } = this.props;
        await actions.deleteTodoItem(todoId, item.id);
        await onChange();
    }

    render() {
        const { item } = this.props;
        
        return (
            <li className="list-group-item">
                <TodoHeader
                    title={item.title}
                    isChecked={item.isDone}
                    onChange={this.onChange}
                    onDelete={this.onDelete}
                />
            </li>
        );
    }
}

export default TodoItemComponent;
