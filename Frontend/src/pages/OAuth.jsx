import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const OAuth = ({ setUser }) => {

  const handleSuccess = async (credentialResponse) => {
    try {

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/google`,
        {
          token: credentialResponse.credential,
        },
        {
          withCredentials: true,
        }
      );

      setUser(res.data.user);

    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-[400px]">

        <h1 className="text-4xl font-bold text-center mb-2">
          Welcome
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Sign in with Google to continue
        </p>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log("Login Failed")}
          />
        </div>

      </div>

    </div>
  );
};

export default OAuth;