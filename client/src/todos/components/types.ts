export interface TodoItem {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    isDone: boolean;
    todoId: number;
}

export interface Todo {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    isDone: boolean;
    items: TodoItem[];
}