import { Action } from 'redux'

// export interface CounterState {
//     count: number;
// }

export interface Todo {
    name: string;
    description: string;
    completed: boolean;
    id: number;
}

export interface TodoState {
    todos: Todo[];
}

export enum TodoActionType {
    // eslint-disable-next-line no-unused-vars
    ADD_TODO = 'ADD_TODO',
    // eslint-disable-next-line no-unused-vars
    TOGGLE_TODO = 'TOGGLE_TODO',
    // eslint-disable-next-line no-unused-vars
    REMOVE_TODO = 'REMOVE_TODO',
    // eslint-disable-next-line no-unused-vars
    EDIT_TODO = 'EDIT_TODO'
}

export interface AddTodoAction extends Action {
    type: TodoActionType.ADD_TODO;
    payload: {
        name: string;
        description: string;
    };
}

export interface ToggleTodoAction extends Action {
    type: TodoActionType.TOGGLE_TODO;
    index: number;
}

export interface RemoveTodoAction extends Action {
    type: TodoActionType.REMOVE_TODO;
    index: number;
}

export interface EditTodoAction extends Action {
    type: TodoActionType.EDIT_TODO;
    index: number;
    payload: {
        name: string;
        description: string;
    };
}

export type TodoActions = AddTodoAction | ToggleTodoAction | RemoveTodoAction | EditTodoAction;
