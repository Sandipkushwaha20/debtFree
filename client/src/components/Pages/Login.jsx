import React from 'react';
import LoginImage  from "../../../public/Images/Login_logo.jpg"
import Logo from '../CommonCom/Logo';
import CTAButton from '../CommonCom/Button';


const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className=" w-11/12 h-150 rounded-lg shadow-lg p-10 flex flex-col bg-gradient-to-b from-white to-green-100">
        <Logo/>
        <div className='flex flex-row gap-3 justify-center items-center '>
            <div className="w-100 pr-8">
                <h1 className="text-3xl font-medium mb-2 text-center">Create an account</h1>
                <p className="text-sm text-gray-600 mb-6 text-center">Get personal assistance now</p>
                <form>
                    <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Full name (as per pan card) <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Jessica Doe"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Phone number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                        +91
                        </span>
                        <input
                        type="text"
                        placeholder="6548989462"
                        className="flex-1 min-w-0 block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    </div>
                    {/* <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 px-4 mt-5 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                    
                    </button> */}
                    <div className="w-full text-center">
                        <CTAButton active={true} linkto={"/login"}>
                            <div className="flex justify-center  gap-3">
                            Sign in
                            </div>
                        </CTAButton>
                    </div>
                </form>
                <p className="mt-4 text-xs text-gray-500 text-center">Terms & conditions</p>
            </div>
            <div className="w-140">
                <img
                    src={LoginImage}
                    alt="Placeholder"
                    className="rounded-lg"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;