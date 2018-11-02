import * as React from 'react';

import Todo from './todo';
import * as actions from '../actions';

export default class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };

        this.onToggle = this.onToggle.bind(this);
        this.onToggleItem = this.onToggleItem.bind(this);
    }

    async componentDidMount() {
        const todos = await actions.getTodos();
        this.setState({ todos: todos });
    }

    async onToggle(todoId) {
        await actions.toggleTodo(todoId);
        const todos = await actions.getTodos();
        this.setState({ todos });
    }

    async onToggleItem(todoId, todoItemId) {
        await actions.toggleTodoItem(todoId, todoItemId);
        const todos = await actions.getTodos();
        this.setState({ todos });
    }

    render() {
        return (
            <div className="container">
                <div className="row mb-4">
                    <div className="col">
                        <button className="btn btn-primary">Add TODO</button>
                    </div>
                </div>
                <div className="row">
                    { this.state.todos.map(t => 
                        <Todo
                            key={`todo_${t.id}`}
                            todo={t}
                            onToggle={this.onToggle}
                            onToggleItem={this.onToggleItem}
                        />) }
                </div>
            </div>
        );
    }
}
