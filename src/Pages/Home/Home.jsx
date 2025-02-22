import React from 'react'
import'./Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
const Home = (sidebar) => {
  return (
    <>
    <Sidebar sidebar={sidebar}/>
    <div></div>
      </>
  )
}

export default Home