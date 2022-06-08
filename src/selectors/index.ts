import { RootAppState } from '../store'

export const getTodos = (state: RootAppState) => state.todo.todos
export const textTodo = (state: RootAppState) => state.todo.todos.forEach(todo => todo.name)
