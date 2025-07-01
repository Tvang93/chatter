import React, { useState } from "react";

const SignInComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="relative grow h-full flex flex-col item-center pt-34">
      <div className="self-start flex flex-col gap-2 w-full h-full">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Username">Username</label>
          <input
            id="Username"
            type="text"
            className="bg-white w-full p-2"
            placeholder="Enter Username"
          />
        </div>
        <div className="relative flex flex-col gap-2">
          <label htmlFor="Password">Password</label>
          <input
            id="Password"
            type={showPassword ? "text" : "password"}
            className="bg-white w-full p-2 overflow-clip pe-13"
            placeholder="Enter password"
          />
          <button
            className={`absolute text-sm  right-1.5 bottom-1.5 cursor-pointer rounded p-1 min-w-10 ${
              showPassword ? "bg-gray-300 hover:bg-gray-200" : "bg-amber-500 hover:bg-amber-400"
            }`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "hide" : "show"}
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 flex justify-center w-full mb-10">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 cursor-pointer shadow-lg hover:bg-blue-600 transition-colors">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignInComponent;
