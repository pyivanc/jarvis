import * as React from 'react';

import TodoItemComponent from './TodoItem.component';
import { TodoItem as TodoItemType } from '../types';
import * as actions from '../../actions';

interface PropTypes {
    item: TodoItemType;
    todoId: number,
    onChange: () => Promise<void>;
}

class TodoItem extends React.Component<PropTypes, null> {

    constructor(props: PropTypes) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    async onChange(data: object) {
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
            <TodoItemComponent
                item={item}
                onChange={this.onChange}
                onDelete={this.onDelete}
            />
        )
        

    }
}

export default TodoItem;
