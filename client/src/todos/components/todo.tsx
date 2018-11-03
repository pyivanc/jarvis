import * as React from 'react'
import { Todo as TodoType } from './types';
import * as actions from '../actions';

import TodoItem from './todo-item';
import TodoHeader from './todo-header';

interface PropTypes {
    todo: TodoType;
    onChange: () => any;
}

class TodoComponent extends React.Component<PropTypes, null> {

    constructor(props: PropTypes) {
        super(props);
        this.onHeaderToggle = this.onHeaderToggle.bind(this);
        this.onHeaderChange = this.onHeaderChange.bind(this);
    }

    async onHeaderToggle() {
        const { todo, onChange } = this.props;
        await actions.updateTodo(todo.id, { isDone: !todo.isDone });
        onChange();
    }

    async onHeaderChange(value) {
        const { todo, onChange } = this.props;
        await actions.updateTodo(todo.id, { title: value });
        onChange();
    }

    render() {
        const { todo, onChange } = this.props;
        todo.items.sort((a, b) => a.id < b.id);
        return (
            <div className="col-sm">
                <div className="card">
                    <div className="card-body">
                        <TodoHeader
                            isChecked={todo.isDone}
                            onToggle={this.onHeaderToggle}
                            onChange={this.onHeaderChange}
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
                                    onChange={onChange}
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
