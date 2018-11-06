import * as React from 'react'

import { Todo as TodoType } from '../types';
import * as actions from '../../actions';
import TodoComponent from './Todo.component';


interface PropTypes {
    todo: TodoType;
    onChange: () => any;
}

class Todo extends React.Component<PropTypes, null> {

    constructor(props: PropTypes) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }

    async onChange(data) {
        const { todo, onChange } = this.props;
        await actions.updateTodo(todo.id, data);
        await onChange();
    }

    async onAddItem() {
        const { todo, onChange } = this.props;
        await actions.addTodoItem(todo.id);
        await onChange();
        return false;
    }

    async onDelete() {
        const { todo, onChange } = this.props;
        await actions.deleteTodo(todo.id);
        await onChange();
    }

    render() {
        const { todo, onChange } = this.props;
        todo.items.sort((a, b) => a.id < b.id);
        return (
            <TodoComponent
                todo={todo}
                onChange={this.onChange}
                onChangeItem={onChange}
                onAddItem={this.onAddItem}
                onDelete={this.onDelete}
            />
        )

    }
}

export default Todo;
