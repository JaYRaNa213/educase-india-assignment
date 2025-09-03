import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-2">Sign in to your PopX account</h2>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <input type="email" placeholder="Enter email address" className="w-full border p-3 rounded mb-4"/>
        <input type="password" placeholder="Enter password" className="w-full border p-3 rounded mb-4"/>

        <button className="w-full bg-gray-400 text-white py-3 rounded-lg">Login</button>

        <p className="mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-600 font-medium">Create one</Link>
        </p>
      </div>
    </div>
  );
}
