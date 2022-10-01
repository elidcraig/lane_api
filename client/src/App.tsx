import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'

function App() {

  return (
    <div className='app'>
      <Header />
      {/* Outlet component renders nested routes as children */}
      <Outlet />
    </div>
  )
}

export default App
