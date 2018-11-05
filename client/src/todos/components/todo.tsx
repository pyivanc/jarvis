import * as React from 'react'

import { Todo as TodoType } from './types';
import * as actions from '../actions';
import TodoItem from './todo-item';
import TodoHeader from './todo-header';
import { EditableInput } from '../../common';

interface PropTypes {
    todo: TodoType;
    onChange: () => any;
}

class TodoComponent extends React.Component<PropTypes, null> {

    constructor(props: PropTypes) {
        super(props);
        this.onHeaderToggle = this.onHeaderToggle.bind(this);
        this.onHeaderChange = this.onHeaderChange.bind(this);
        this.onDescChange = this.onDescChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }

    async onHeaderToggle() {
        const { todo, onChange } = this.props;
        await actions.updateTodo(todo.id, { isDone: !todo.isDone });
        await onChange();
    }

    async onHeaderChange(value) {
        const { todo, onChange } = this.props;
        await actions.updateTodo(todo.id, { title: value });
        await onChange();
    }

    async onDescChange(value) {
        const { todo, onChange } = this.props;
        await actions.updateTodo(todo.id, { description: value });
        await onChange();
    }

    async onAddItem() {
        const { todo, onChange } = this.props;
        await actions.addTodoItem(todo.id);
        await onChange();
        return false;
    }

    async onDeleteItem(todoItemId) {
        const { todo, onChange } = this.props;
        await actions.deleteTodoItem(todo.id, todoItemId);
        await onChange();
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
            <div className="col-sm">
                <div className="card">
                    <div className="card-body">
                        <TodoHeader
                            title={todo.title}
                            isChecked={todo.isDone}
                            onToggle={this.onHeaderToggle}
                            onChange={this.onHeaderChange}
                            onDelete={this.onDelete}
                        />
                        <EditableInput
                            className="card-text"
                            value={todo.description}
                            onSubmit={this.onDescChange}
                        />
                    </div>
                    <ul className="list-group list-group-flush">
                        { todo.items
                            .map(i => 
                                <TodoItem
                                    key={`todo_item_${i.id}`}
                                    item={i}
                                    todoId={todo.id}
                                    onChange={onChange}
                                    onDelete={this.onDeleteItem}
                                />
                            )
                        }
                    </ul>
                    <div className="card-body">
                        <button
                            onClick={this.onAddItem}
                            type="button"
                            className="btn btn-link card-link">
                                Add item
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoComponent;
