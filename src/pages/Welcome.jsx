import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome to PopX</h1>
      <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <Link to="/signup" className="mt-6 w-64 bg-purple-600 text-white py-3 rounded-lg text-center font-medium">
        Create Account
      </Link>
      
      <Link to="/login" className="mt-3 w-64 bg-purple-200 text-purple-700 py-3 rounded-lg text-center font-medium">
        Already Registered? Login
      </Link>
    </div>
  );
}
