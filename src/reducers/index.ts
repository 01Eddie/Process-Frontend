import { Action } from 'redux'
import { TodoState, TodoActions, TodoActionType } from '../types'

const initialStateForTodo: TodoState = {
  todos: []
}

export const todo = (
  state: TodoState = initialStateForTodo,
  action: Action | TodoActions
): TodoState => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            name: action.type.name,
            description: action.type.description,
            completed: false,
            id: state.todos.length + 1
          }
        ]
      }
    case TodoActionType.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.type.index) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      }
    case TodoActionType.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.type.index)
      }
    case TodoActionType.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.type.index) {
            return {
              ...todo,
              name: action.type.payload.name,
              description: action.type.payload.description
            }
          }
          return todo
        })
      }
    default:
      return state
  }
}
