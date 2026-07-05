import { logout } from "../services/auth";

const Profile = ({ user, setUser }) => {
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

        {/* Cover */}
        <div className="h-40 bg-linear-to-r from-blue-600 to-indigo-600"></div>

        {/* Profile Content */}
        <div className="px-8 pb-8">
          <div className="-mt-16 flex flex-col items-center">

            <img
              src={user.avatar}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
            />

            <h2 className="text-3xl font-bold mt-4">
              {user.name}
            </h2>

            <p className="text-gray-500">
              {user.email}
            </p>
          </div>

          {/* User Details */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="text-lg font-semibold">{user.name}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="text-lg font-semibold">{user.email}</p>
            </div>

          </div>

          <div className="flex justify-end mt-10">
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-200"
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;