"use client"
import { useState } from "react";

const SignInPage=()=> {
  const [formData, setFormData] = useState({
    
    Email: "",
    Password: ""
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src="/icons/Pizza-Logo.svg" alt="Logo" className="h-12" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Sign In</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
            <input
              type="text"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Email/Contact"
              required
            />
          </div>
      
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1 ">Password</label>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <p className="text-blue-300 text-center">Forgot Password</p>
          <p className="text-center">Don't have an account ? <a className="text-blue-300" href="/sign-up">Sign-Up</a></p>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}


export default SignInPage
