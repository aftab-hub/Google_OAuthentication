import axios from "axios";

export const getMe = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/me`,
    {
      withCredentials: true,
    }
  );

  return res.data;
};


export const logout = async () => {
  await axios.post(
    `${import.meta.env.VITE_API_URL}/api/auth/logout`,
    {},
    {
      withCredentials: true,
    }
  );
};