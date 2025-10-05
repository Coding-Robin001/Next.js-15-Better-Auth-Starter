"use client";

import { signOut } from "@/lib/actions/auth-actions";
import { useRouter } from "next/navigation";

const DashboardClientPage = () => {

  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push("/auth")
  }


  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-6 rounded-2xl shadow">
        <div>
          <h1 className="text-2xl font-semibold">Welcome to Your Dashboard!</h1>
          <p className="text-sm text-gray-600">
            Manage your account and explore better-auth features
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="text-right">
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-500">email@gmail.com</p>
          </div>
          <button
            className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition cursor-pointe"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Authentication Status */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Authentication Status</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Status</p>
            <p className="font-medium text-green-600">Authenticated</p>
          </div>
          <div>
            <p className="text-gray-500">Provider</p>
            <p className="font-medium">Better-Auth</p>
          </div>
          <div>
            <p className="text-gray-500">User ID</p>
            <p className="font-medium">123456</p>
          </div>
          <div>
            <p className="text-gray-500">Email Verified</p>
            <p className="font-medium text-green-600">Yes</p>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Social Login */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-2">
            {/* Globe Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
              <path d="M2.05 12h19.9M12 2.05a9.94 9.94 0 010 19.9M12 2.05a9.94 9.94 0 000 19.9" />
            </svg>
            <h3 className="text-lg font-semibold">Social Login</h3>
          </div>
          <p className="text-sm text-gray-600">
            Seamlessly authenticate with Google, GitHub, and other social providers.
          </p>
        </div>

        {/* User Management */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-2">
            {/* Users Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 20v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            <h3 className="text-lg font-semibold">User Management</h3>
          </div>
          <p className="text-sm text-gray-600">
            Manage user accounts, profiles, and authentication settings.
          </p>
        </div>

        {/* Secure Access */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-2">
            {/* Lock Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            <h3 className="text-lg font-semibold">Secure Access</h3>
          </div>
          <p className="text-sm text-gray-600">
            Protect routes and ensure authentication with better-auth.
          </p>
        </div>
      </div>

      {/* Actions Section */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Try These Actions</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Update Profile
          </button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
            Save Settings
          </button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
            Export Data
          </button>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between">
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
          ← Back to Home
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Manage Account
        </button>
      </div>
    </div>
  );
};

export default DashboardClientPage;
