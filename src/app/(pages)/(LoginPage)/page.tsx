import LoginComponent from '@/Components/Login/LoginComponent';

const page = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-20">
        <h1 className='font-bold text-5xl'>Chatter</h1>
        <LoginComponent />
    </div>
  )
}

export default page