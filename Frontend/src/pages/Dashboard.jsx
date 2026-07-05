
const Dashboard = ({ user }) => {

    const name = user.name.split(" ")[0]

    
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* Welcome */}
      <div className=" text-gray-700 text-center  rounded-2xl ">
        <h1 className="text-3xl font-bold">
          Welcome, {name}! 👋
        </h1>

      
      </div>

    </div>
  );
};

export default Dashboard;