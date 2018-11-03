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
    }

    async componentDidMount() {
        await this.onChange();
    }

    async onChange() {
        const todos = await actions.getTodos();
        this.setState({ todos: todos });
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
                            onChange={this.onChange}
                        />) }
                </div>
            </div>
        );
    }
}
