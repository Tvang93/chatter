"use client";
import { useLocalStorage } from "@/Custom/LocalStorage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SignInComponent from "./SignInComponent";
import CreateAccountComponent from "./CreateAccountComponent";

const LogInComponent = () => {
  const token = useLocalStorage("token");
  const { push } = useRouter();

  const [haveAccount, setHaveAccount] = useState<boolean>(true);

  if (token) {
    push("/dashboard");
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 px-15 py-10 rounded-lg shadow-lg min-h-[70%] border border-gray-200">
      <div className="flex flex-col items-center w-full h-full justify-between">
        <div className="font-semibold text-2xl">{haveAccount ? 'Sign In': 'Create Account'}</div>
        {haveAccount ? <SignInComponent /> : <CreateAccountComponent/>}
        <div className="min-w-70.5 text-center">
          {haveAccount ? (
            <span>
              Don't have an account?{" "}
              <button
                onClick={() => setHaveAccount(false)}
                className="text-blue-500 hover:cursor-pointer hover:underline"
              >
                Create Account
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                onClick={() => setHaveAccount(true)}
                className="text-blue-500 hover:cursor-pointer hover:underline"
              >
                Sign In
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogInComponent;
