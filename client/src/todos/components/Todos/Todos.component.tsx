import * as React from 'react';

import { Todo as TodoType} from '../types';
import Todo from '../Todo';

interface PropTypes {
    todos: TodoType[];
    onAdd: () => Promise<void>;
    onChange: () => Promise<void>;
}

class TodosComponent extends React.Component<PropTypes, any> {

    renderTodo(todo, index) {
        const { onChange } = this.props;
        const items = [
            (<Todo
                key={`todo_${todo.id}`}
                todo={todo}
                onChange={onChange}
            />)
        ];
        if (index % 3 === 2) {
            items.push(<div className="w-100 mb-4"></div>);
        }
        return items;
    }

    render() {
        const { onAdd, todos } = this.props;
        return (
            <div className="container">
                <div className="row mb-4">
                    <div className="col">
                        <button className="btn btn-primary" onClick={onAdd}>Add TODO</button>
                    </div>
                </div>
                <div className="row">
                    { todos.map((t, i) => this.renderTodo(t, i) )}
                </div>
            </div>
        );
    }
}

export default TodosComponent;

