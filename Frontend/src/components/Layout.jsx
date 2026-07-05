import Header from "./Header";


const Layout = ({ user, setUser, children }) => {
  return (
    <div className="h-60 bg-slate-100">
      <Header user={user} setUser={setUser} />
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;