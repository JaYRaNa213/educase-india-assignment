export default function AccountSettings() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-6">Account Settings</h2>

        <div className="flex items-center mb-4">
          <img src="https://i.pravatar.cc/100" alt="profile" className="w-16 h-16 rounded-full mr-4"/>
          <div>
            <h3 className="font-semibold">Jay Prakash</h3>
            <p className="text-gray-500">jay@gmail.com</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm">
          
        </p>
      </div>
    </div>
  );
}
