import React from 'react'
import Routers from '../Routes/Routers'
import Header from './Header'

function Layout(props) {
  return (
    <>
    <Header/>
    <div>
        <Routers/>
    </div>

    </>
  )
}

export default Layout