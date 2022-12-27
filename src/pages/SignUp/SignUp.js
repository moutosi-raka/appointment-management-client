import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const SignUp = () => {
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl  mx-auto my-20  shadow-2xl bg-base-100">
        <h1 className="text-2xl font-bold text-center ">Sign Up</h1>
        <form
         
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full text-black px-4 py-3 rounded-md  bg-slate-50 outline-none"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Your Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Your PhotoURL"
              className="w-full text-black px-4 py-3 rounded-md  bg-slate-50 outline-none"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full text-black px-4 py-3 rounded-md  bg-slate-50 outline-none"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block \">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 text-black  bg-slate-50 outline-none"
              required
            />
            <div className="flex justify-end text-xs text-white"></div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm  bg-purple-500 text-white">
            Sing Up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-black"></div>
          <p className="px-3 text-sm ">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-black"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <GoogleSignIn></GoogleSignIn>
        </div>
        <p className="text-sm text-center sm:px-6 ">
          Already have a account?
          <Link
            rel="noopener noreferrer"
            to="/"
            className="underline text-pink-900 font-bold ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    );
};

export default SignUp;