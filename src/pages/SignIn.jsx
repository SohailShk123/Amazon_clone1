import React, { useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, } from 'firebase/auth';
import { auth } from '../firebase';

function SignIn() {
  const [value, setValue] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if ( !value.email || !value.password) {
      setError('Fill all the fields')
      return
    }
    setError('')
    const {user} = await signInWithEmailAndPassword(auth, value.email, value.password);
    if(user.email){
      navigate('/')
    }
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <h1 className='text-center text-3xl text-red-900 font-extrabold'>Sign In {error}</h1>


      <label htmlFor="email">Email</label>
      <input type="email" name='email' id="email" placeholder='Enter your email' onChange={(e) => setValue((pre) => ({ ...pre, email: e.target.value }))} />

      <label htmlFor="password">Password</label>
      <input type="password" placeholder='Enter your password'
        onChange={(e) => setValue((pre) => ({ ...pre, password: e.target.value }))}
      />
      <button onClick={handleSubmit} className='btn mt-3'>Submit</button>
      <p className='text-center font-bold'>Already have an account ?<span className='text-orange-600 ml-1 cursor-pointer' onClick={() => navigate('/signin')}>Login</span></p>
    </div>
  )
}

export default SignIn;