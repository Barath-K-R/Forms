import React from 'react'
import '../styles/Auth.css'
const Auth = () => {
  const google=()=>{
     window.open("http://localhost:5000/api/auth/google","_self")
  }
  return (
    <div className='flex justify-center pt-16 w-full bg-gray-100'>
      <div className="flex flex-col h-5/6 w-2/6 pt-7 pl-7  gap-4 bg-white">
      <h1 className='text-2xl'>Sign in</h1>
      <h2>to access forms</h2>
       <section className='flex flex-col w-5/6' >
          <label htmlFor="username">Username</label>
          <input type="text" className='border rounded w-5/6 py-1 px-3'/>
       </section>
       <section className='flex flex-col w-5/6' >
          <label htmlFor="password">Password</label>
          <input type="text" className='border rounded w-5/6 py-1 px-3'/>
       </section>
       <button className='w-4/6 h-8 text-center bg-blue-400'>Login</button>
       <button className='w-1/6 bg-gray-100' onClick={google}><img src="./images/googlelogo.png" alt="googleicon" className='w-24' /></button>
      </div>
    </div>
  )
}

export default Auth