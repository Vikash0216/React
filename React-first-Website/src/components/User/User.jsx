import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams()
  return (
    <div className='h-48 flex items-center justify-center text-3xl'>
     Welcome to our website {userid}
    </div>
  )
}

export default User
