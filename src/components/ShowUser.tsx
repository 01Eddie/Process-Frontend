import React from 'react'
import { getTodos } from '../selectors'
import { useAppDispatch, useAppSelector } from '../store'

const ShowUser = () => {
  const todos = useAppSelector(getTodos)
  const dispatch = useAppDispatch()

  return (
    <div style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '1138px',
      padding: '1em 1em',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    }}>
      {
        todos.map(todo => (
            <div className='card' key={todo.id}>
                <div className="card-body">
                    <h5 className='card-title'>{todo.name} - {todo.id}</h5>
                    <p className='card-text'>{todo.description} - {todo.id}</p>
                </div>
                <div className="card-footer p-3">
                    <button className='btn btn-link'>Editar</button>
                    <button className='btn btn-link' onClick={() => dispatch({ type: 'DELETE_TODO', payload: { id: todo.id } })}>Eliminar</button>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default ShowUser
