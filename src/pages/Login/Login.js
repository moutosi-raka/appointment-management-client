import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Login = () => {
    const handleLogin = event =>{
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     signIn(email,password)
    // .then(result =>{
    //   const user = result.user;
    //   console.log(user);
    //   toast.success('Congratulations!!!!');
    //   form.reset();

    //   const currentUser = {
    //     email: user.email
    //   }

    //   //get jwt token
    //    fetch('https://beauty-parlour-server-moutosi-raka.vercel.app/jwt',
    //    {
    //     method: 'POST',
    //     headers: {
    //       'content-type' : 'application/json'
    //     },
    //     body: JSON.stringify(currentUser)
    //    })
    //    .then(res => res.json())
    //    .then(data => {
    //     console.log(data)
    //     localStorage.setItem('token', data.token);
    //      navigate(from, {replace: true});
    //    })

     
    // })
    // .catch(e => {
    //   console.error('error', e)
    //   // setError(e.message);
    // })
    }

    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl  mx-auto my-20  shadow-2xl">
        <h1 className="text-2xl font-bold text-center ">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block  ">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 border-gray-700 text-black rounded-md bg-slate-50 outline-none"
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
            />
            <div className="flex justify-end text-xs text-white">
            </div>
          </div>
          <button   className="block w-full p-3 text-center rounded-sm text-white  bg-purple-500">
            Log in
          </button>
        </form >
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-black"></div>
          <p className="px-3 text-sm ">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-black"></div>
        </div>
        <div className="flex justify-center space-x-4">
        <GoogleSignIn></GoogleSignIn>
        </div>
        <p className="text-sm text-center sm:px-6 ">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            to="/signup"
            className="underline text-pink-900 font-bold ml-2"
          >
            Sign up
          </Link>
        </p>
      </div>
    );
};

export default Login;