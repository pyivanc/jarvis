import * as React from 'react';

import * as actions from '../../actions';
import { Todo as TodoType} from '../types';
import TodosComponent from './Todos.component';

interface PropTypes {

}

interface StateTypes {
    todos: TodoType[];
}

export default class Todos extends React.Component<PropTypes, StateTypes> {
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


    render() {
        return (
            <TodosComponent
                todos={this.state.todos}
                onChange={this.onChange}
                onAdd={this.onAdd}
            />
        )
    }
}
