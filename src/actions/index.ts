import { TodoActionType, AddTodoAction, RemoveTodoAction, ToggleTodoAction, EditTodoAction } from '../types'

export const addTodo = (name: string, description: string): AddTodoAction => ({
  type: TodoActionType.ADD_TODO,
  payload: {
    name,
    description
  }
})

export const removeTodo = (index: number): RemoveTodoAction => ({
  type: TodoActionType.REMOVE_TODO,
  index
})

export const toggleTodo = (index: number): ToggleTodoAction => ({
  type: TodoActionType.TOGGLE_TODO,
  index
})

export const editTodo = (index: number, name: string, description: string): EditTodoAction => ({
  type: TodoActionType.EDIT_TODO,
  index,
  payload: {
    name,
    description
  }
})
