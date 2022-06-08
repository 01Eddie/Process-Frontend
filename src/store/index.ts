import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import logger from 'redux-logger'

import { todo } from '../reducers'
import { TodoState } from '../types'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// eslint-disable-next-line no-use-before-define
export const useAppDispatch = () => useDispatch<AppDispatch>()
// eslint-disable-next-line no-use-before-define
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const reducer = combineReducers({
  todo
})

export interface RootAppState {
    todo: TodoState
}

const configureOfStore = (initialState?: RootAppState) =>
  configureStore({
    reducer,
    middleware: [logger],
    preloadedState: initialState
  })

const store = configureOfStore()

store.subscribe(() => {
  localStorage.state = JSON.stringify(store.getState)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
