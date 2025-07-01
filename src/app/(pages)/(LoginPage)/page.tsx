import LoginComponent from "@/Components/Login/LogInComponent"


const page = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-20 bg-amber-100">
        <h1 className='font-bold text-5xl'>Chatter</h1>
        <LoginComponent />
    </div>
  )
}

export default page