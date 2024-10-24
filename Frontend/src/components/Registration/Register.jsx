import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here (e.g., sending data to backend)
    console.log("Form Data:", formData);
  };

  // Handle Google sign-up
  const handleGoogleSignup = () => {
    // Logic for Google sign-up (e.g., redirect to Google auth)
    console.log("Sign up with Google clicked");
  };

  return (
    <>
      <div className="flex items-center justify-center shadow-lg fixed top-0 left-0 right-0">
          <h1 className="tracking-widest uppercase border border-black px-3 py-2 my-2">
            Florist
          </h1>
      </div>
      <div className="flex items-center justify-center h-screen mt-10">
        <div className="bg-white p-8 rounded-lg shadow-lg border w-full max-w-md">
          <h2 className="text-xl font-normal text-center mb-6 tracking-widest uppercase text-black">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-normal tracking-wider text-black">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full border-b border-black text-sm bg-white text-black focus:ring-0 focus:outline-none p-1"
              />
            </div>
            <div>
              <label className="block text-sm font-normal tracking-wider text-black">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border-b border-black text-sm bg-white text-black focus:ring-0 focus:outline-none p-1 appearance-none focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white border text-black py-2 border-black hover:bg-black hover:text-white tracking-widest transition duration-300"
            >
              Register
            </button>
          </form>
          <div className="mt-6 text-center">
            <button
              onClick={handleGoogleSignup}
              className="w-full hover:bg-white border hover:text-black py-2 border-black bg-black text-white tracking-widest transition duration-300"
            >
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Register;
