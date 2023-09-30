import React from 'react'
import { useUser } from '../Context/UserContext'

const Home = () => {
  const { user } = useUser()
  console.log(user)
  return (
    
    <>
    </>
  )
}

export default Home