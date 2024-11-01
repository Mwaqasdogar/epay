import React, { useState } from 'react';
import epay from "../../assets/epay.png";
import cointwo from "../../assets/cointwo.svg";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className=" container flex h-screen">
      {/* Left Section: Images */}
      <div className="w-1/2 h-screen flex flex-col items-center justify-center gap-8 bg-[#cddcef]">
        <img className="w-1/2" src={epay} alt="ePay Logo" />
        <img className="w-2/4" src={cointwo} alt="Coin Logo" />
      </div>

      {/* Right Section: Login Form */}
      <div className="w-1/2 h-screen flex flex-col items-center justify-center bg-white">
      <div className='flex justify-end items-end '>
      <img className="w-1/2" src={epay} alt="ePay Logo" />

      </div>
        <div className="w-9/12 max-w-lg p-10 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-8">Sign in to ePay</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="yourmail@gmail.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="********"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm2.5 4a9 9 0 11-9-9M21 21l-4-4"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a href="#" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800">
                Forgot Password?
              </a>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
