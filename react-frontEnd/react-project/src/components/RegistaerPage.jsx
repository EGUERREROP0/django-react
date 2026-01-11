import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RegistaerPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmition = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        userData
      );
      const data = await response.data;
      console.log(data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mx-auto flex-1 flex justify-center items-center">
        <div
          className="p-4  bg-gray-800
           rounded-2xl     
             w-full 
            sm:w-3/4 
            md:w-1/2 
            lg:w-1/2"
        >
          <h1 className="mb-3 text-2xl font-bold text-center">
            Create an account
          </h1>
          <form action="" className="">
            <div className="mb-4">
              <input
                name="username"
                type="text"
                className="bg-gray-100 w-full text-gray-600 p-1 rounded-sm"
                placeholder="username"
                value={userData.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                name="email"
                className="bg-gray-100 w-full text-gray-600 p-1 rounded-sm"
                type="email"
                placeholder="correo@correo.com"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                name="password"
                type="password"
                className="bg-gray-100 w-full text-gray-600 p-1 rounded-sm"
                placeholder="1234"
                value={userData.password}
                onChange={handleChange}
              />
            </div>

            <div className="text-center">
              <button
                onClick={handleSubmition}
                className="bg-blue-700 p-2 rounded-sm mt-2 w-[30%]"
              >
                register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
