import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, seUserPassword] = useState("");

  const { isLogged, setIsLogged } = useContext(AuthContext);

  console.log("desde log", isLogged);

  const userCredentials = { username: userName, password: userPassword };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/token/",
        userCredentials
      );
      const result = await response.data;
      console.log("Logeado Correctamente");
      localStorage.setItem("accessToken", result.access);
      localStorage.setItem("refreshToken", result.refresh);
      setIsLogged(true);
    } catch (error) {
      console.log("invalid credentials: ", error);
    }
  };
  return (
    <>
      <div className="container mx-auto flex-1 flex justify-center items-center">
        <div
          className="p-4 h-full bg-gray-800 rounded-2xl w-full 
            sm:w-3/4 
            md:w-1/2 
            lg:w-1/2"
        >
          <h1 className="font-bold mb-3 text-2xl text-center">Init Sesión</h1>
          <form action="" className="">
            <div className="mb-4">
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-600 p-1 rounded-sm"
                placeholder="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="bg-gray-100 w-full text-gray-600 p-1 rounded-sm"
                placeholder="1234"
                value={userPassword}
                onChange={(e) => seUserPassword(e.target.value)}
              />
            </div>

            <div className="text-center">
              <button
                className="bg-blue-700 p-2 rounded-sm mt-2 w-[30%]"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
