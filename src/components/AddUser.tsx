import React, { useState } from 'react'
import { useAppDispatch } from '../store'

const AddUser = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useAppDispatch()

  const _handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const _handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setDescription(e.target.value)
  }

  const _handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setName('')
    setDescription('')
  }

  const _handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', payload: { name, description } })
    setName('')
    setDescription('')
  }

  return (
        <div className="card p-3" style={{ width: '18rem' }}>
          <h1>Servicio</h1>
          <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" placeholder="name" value={name} onChange={_handleChangeName} />
          </div>
          <div className="mb-3">
              <label htmlFor="description" className="form-label">Descripcion</label>
              <input type="text" className="form-control" id="description" placeholder="description" value={description} onChange={_handleChangeDescription} />
          </div>
          <div className="card-footer p-3 bg-secondary bg-opacity-25">
            <button className="btn btn-outline-success" onClick={_handleSubmit}>Grabar</button>
            <button type="button" className="btn btn-outline-danger" onClick={_handleCancel}>Cancelar</button>
          </div>
          <div>
            <h3>{}</h3>
          </div>
        </div>
  )
}

export default AddUser
