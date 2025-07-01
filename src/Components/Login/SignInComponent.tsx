import React from 'react'

interface IProps {
  haveAccount: boolean;
  setHaveAccount: (value: boolean) => void;
}

const SignInComponent = (props: IProps) => {
  const { haveAccount, setHaveAccount } = props;

  return (
      <div className='flex flex-col items-center justify-between'>
        <div>Login</div>
        <div className='self-start flex flex-col gap-2'>
          <label htmlFor='Username'>Username</label>
          <input id='Username' type="text" className='bg-white w-full'/>
        </div>
        <div className='self-start flex flex-col gap-2'>
          <label htmlFor="Password">Password</label>
          <input id='Password' type="password" className='bg-white w-full'/>
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4'>Sign In</button>

        <div className='mt-4'>
          {haveAccount ? (
            <span>Don't have an account? <button onClick={() => setHaveAccount(false)} className='text-blue-500'>Create Account</button></span>
          ) : (
            <span>Already have an account? <button onClick={() => setHaveAccount(true)} className='text-blue-500'>Sign In</button></span>
          )}
        </div>
      </div>
  )
}

export default SignInComponent