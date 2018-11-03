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

        this.onToggle = this.onToggle.bind(this);
    }

    async onChange(value) {
        const { todoId, item, onChange } = this.props;
        await actions.updateTodoItem(todoId, item.id, { title: value });
        onChange();
    }

    async onToggle() {
        const { todoId, item, onChange } = this.props;
        await actions.updateTodoItem(todoId, item.id, { isDone: !item.isDone });
        onChange();
    }

    render() {
        const { item } = this.props;
        
        return (
            <li className="list-group-item">
                <TodoHeader
                    title={item.title}
                    onToggle={this.onToggle}
                    onChange={(value) => this.onChange(value)}
                    isChecked={item.isDone}
                />
            </li>
        );
    }
}


export default TodoItemComponent;
