import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", password: "", company: "", agency: "Yes"
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Create your PopX account</h2>
        
        <input name="name" placeholder="Full Name*" onChange={handleChange} className="w-full border p-3 rounded mb-3"/>
        <input name="phone" placeholder="Phone Number*" onChange={handleChange} className="w-full border p-3 rounded mb-3"/>
        <input name="email" placeholder="Email Address*" onChange={handleChange} className="w-full border p-3 rounded mb-3"/>
        <input type="password" name="password" placeholder="Password*" onChange={handleChange} className="w-full border p-3 rounded mb-3"/>
        <input name="company" placeholder="Company Name" onChange={handleChange} className="w-full border p-3 rounded mb-3"/>
        
        <div className="mb-4">
          <p className="mb-2">Are you an Agency?*</p>
          <label className="mr-4">
            <input type="radio" name="agency" value="Yes" checked={form.agency === "Yes"} onChange={handleChange}/> Yes
          </label>
          <label>
            <input type="radio" name="agency" value="No" checked={form.agency === "No"} onChange={handleChange}/> No
          </label>
        </div>

        <button onClick={() => navigate("/account")} className="w-full bg-purple-600 text-white py-3 rounded-lg">
          Create Account
        </button>
      </div>
    </div>
  );
}
