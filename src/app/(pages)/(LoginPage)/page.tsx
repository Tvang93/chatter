import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [haveAccount, setHaveAccount] = useState(true);
    const {push} = useRouter()

    useEffect(() => {
        if (typeof window !== null) {
            const token = sessionStorage.getItem('token')
            if (token) {
                push('/dashboard')
            }
        }
    }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div>Welcome to Chatter</div>
        
    </div>
  )
}

export default page