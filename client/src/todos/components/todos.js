import * as React from 'react';

import Todo from './todo';
import * as actions from '../actions';

export default class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };

        this.onChange = this.onChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    async componentDidMount() {
        await this.onChange();
    }

    async onChange() {
        const todos = await actions.getTodos();
        this.setState({ todos: todos });
    }

    async onAdd() {
        await actions.addTodo();
        await this.onChange();
    }

    renderTodo(todo, index) {
        const items = [
            (<Todo
                key={`todo_${todo.id}`}
                todo={todo}
                onChange={this.onChange}
            />)
        ];
        if (index % 3 === 2) {
            items.push(<div className="w-100 mb-4"></div>);
        }
        return items;
    }

    render() {
        return (
            <div className="container">
                <div className="row mb-4">
                    <div className="col">
                        <button className="btn btn-primary" onClick={this.onAdd}>Add TODO</button>
                    </div>
                </div>
                <div className="row">
                    { this.state.todos.map((t, i) => this.renderTodo(t, i) )}
                </div>
            </div>
        );
    }
}
