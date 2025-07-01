'use client'
import { useLocalStorage } from '@/Custom/LocalStorage'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import SignInComponent from './SignInComponent'

const LoginComponent = () => {
    const token = useLocalStorage('token');
    const {push} = useRouter();

    const [haveAccount, setHaveAccount] = useState<boolean>(true);

    if (token) {
        push('/dashboard')
    }

  return (
    <div className='flex flex-col items-center bg-gray-100 p-20 rounded-lg shadow-lg min-h-[60%]'>
        <div>
            <SignInComponent haveAccount={haveAccount} setHaveAccount={setHaveAccount}/>
        </div>
    </div>
  )
}

export default LoginComponent