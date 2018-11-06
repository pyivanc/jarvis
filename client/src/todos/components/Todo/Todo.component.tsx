import * as React from 'react';

import TodoItem from '../TodoItem';
import TodoHeader from '../TodoHeader';
import { Todo as TodoType } from '../types';
import { EditableInput } from '../../../common';

interface PropTypes {
    todo: TodoType;
    onChange: (data: object) => Promise<void>;
    onChangeItem: () => Promise<void>;
    onAddItem: () => any;
    onDelete: () => any;

}

class TodoComponent extends React.Component<PropTypes, any> {
    render() {
        const { todo, onChange, onDelete, onChangeItem, onAddItem } = this.props;
        return (
            <div className="col-sm">
                <div className="card">
                    <div className="card-body">
                        <TodoHeader
                            title={todo.title}
                            isChecked={todo.isDone}
                            onChange={onChange}
                            onDelete={onDelete}
                        />
                        <EditableInput
                            className="card-text"
                            value={todo.description}
                            onSubmit={async (val) => await onChange({ description: val})}
                        />
                    </div>
                    <ul className="list-group list-group-flush">
                        { todo.items
                            .map(i => 
                                <TodoItem
                                    key={`todo_item_${i.id}`}
                                    item={i}
                                    todoId={todo.id}
                                    onChange={onChangeItem}
                                />
                            )
                        }
                    </ul>
                    <div className="card-body">
                        <button
                            onClick={onAddItem}
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

