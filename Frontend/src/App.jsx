import { useEffect, useState } from "react";
import OAuth from "./pages/OAuth";
import Profile from "./pages/Profile";
import { getMe } from "./services/auth";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await getMe();
        setUser(data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

   

  return user ? (
     <div className="min-h-screen bg-slate-100">
      <Layout user={user} setUser={setUser} />
      <Dashboard user={user} setUser={setUser} />
    </div>
  ) : (
    <OAuth setUser={setUser} />
  );
};

export default App;