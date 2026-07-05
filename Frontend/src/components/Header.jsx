import { useState } from "react";
import { logout } from "../services/auth";
import { useEffect } from "react";

const Header = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);


  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-rd-600 cursor-pointer">
          Auth App
        </h1>

        {/* Avatar */}
        <div className="relative">
          <img
            src={user?.avatar}
            alt={user.name}
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-11 h-11 rounded-full border object-cover cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
          />

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-lg border border-gray-200 p-5 z-50">

              <div className="flex items-center gap-3 pb-4 border-b">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h2 className="font-semibold">{user.name}</h2>
                  <p className="text-sm text-gray-500 break-all">
                    {user.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>


      </div>
        
    </header>
  );
};

export default Header;