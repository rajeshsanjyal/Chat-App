import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="flex flex-col items-center gap-2 justify-center w-full p-6 rounded-lg shadow-md bg-gray-200">
            <h1 className="text-3xl font-semibold text-center text-slate-700">
                Login To 
            </h1>
            <span className="text-blue-700"> Chat Application</span>
            <form action="">
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email" className="w-full input input-bordered h-10"/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter your password" className="w-full input input-bordered h-10"/>
                </div>
                <Link to={"/signup"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                {"Don't"} have an account?
                </Link>
                <div>
                    <button className="btn btn-block btn-sm mt-2 bg-blue-700 text-white">Login</button>
                </div>
            </form>
        </div>
    </div>;
};

export default Login;
