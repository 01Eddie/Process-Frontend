import React from 'react'
import AddUser from './components/AddUser'
import ShowUser from './components/ShowUser'

const App = () => (
  <div className="container">
    <h1 className='text-center' style={{ marginTop: 20 }}>Servicios</h1>
    <div className="d-flex flex-row mb-3">
      <div className="p-2">Todos</div>
      <div className="p-2">Autos</div>
      <div className="p-2">Salud</div>
      <div className="p-2">Hogar</div>
    </div>
    <AddUser />
    <ShowUser/>
  </div>
)

export default App
