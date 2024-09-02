import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Account = () => {
  const {id, username} = useParams()

  let savedID = localStorage.getItem('id')
  let ids = JSON.parse(savedID)

  useEffect(() => {
      console.log(ids);
      
  },[id, username])
  return (
    <>
    <section>
        <h1>Account</h1>
    </section>
    </>
  )
}

export default Account