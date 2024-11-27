import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ">
        <div className="flex-1">
        <Link to='/' className=' font-sbold dark:text-white text-4xl'>
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Sahand's
            </span> Blog
     </Link>
     <p className='text-sm mt-5'>This is a demo project, you can signup with your email , password and Google</p>
        </div>
        <div className="right flex-1">
          <div>
            <form className='flex flex-col gap-4'>
              <div className="">
                <Label value='Username'/>
                <TextInput type='text'
                placeholder='Username'
                id='username'
                />

              </div>
              <div className="">
                <Label value='Email'/>
                <TextInput type='email'
                placeholder='Email'
                id='Email'
                />

              </div>
              <div className="">
                <Label value='Password'/>
                <TextInput type='password'
                placeholder='Password'
                id='password'
                />

              </div>
              <Button type='submit'>Sign Up</Button>

            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account</span>
              <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp