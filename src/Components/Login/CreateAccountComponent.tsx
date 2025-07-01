import React, { useState } from "react";

const CreateAccountComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false);

  return (
    <div className="relative grow h-full flex flex-col justify-center item-center pt-14">
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
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Username">Email</label>
          <input
            id="Username"
            type="email"
            className="bg-white w-full p-2"
            placeholder="Enter Email"
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
            className={`absolute text-sm  right-1.5 bottom-1.5 cursor-pointer rounded p-1 min-w-10.5 ${
              showPassword ? "bg-gray-300" : "bg-amber-500"
            }`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "hide" : "show"}
          </button>
        </div>
        <div className="relative flex flex-col gap-2">
          <label htmlFor="ConfirmPassword">Confirm Password</label>
          <input
            id="ConfirmPassword"
            type={showPasswordConfirm ? "text" : "password"}
            className="bg-white w-full p-2 overflow-clip pe-13"
            placeholder="Enter password"
          />
          <button
            className={`absolute text-sm  right-1.5 bottom-1.5 cursor-pointer rounded p-1 min-w-10 ${
              showPasswordConfirm ? "bg-gray-300" : "bg-amber-500"
            }`}
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
          >
            {showPasswordConfirm ? "hide" : "show"}
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 flex justify-center w-full mb-10">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 cursor-pointer">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateAccountComponent;
