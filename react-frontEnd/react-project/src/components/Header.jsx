import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import { Dashboard1 } from "./dashboards/Dashboard1";

export const Header = () => {
  const { isLogged, setIsLogged } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLogged(false);
    navigate("/");
  };

  return (
    <>
      {/* <div className="container bg-red-500 p-3 flex justify-between items-center mx-0"> */}
      <nav className="container mx-auto p-3 flex justify-between items-center">
        <Link className="p-2 font-bold" to={"/"}>
          Stock Prediccion Portal
        </Link>
        <div className="flex gap-4">
          {isLogged ? (
            <>
              <button
                text="Logout"
                className="bg-red-700 shadow-sm shadow-blue-500/50 p-2 rounded-sm"
                onClick={handleLogOut}
              >
                Logout
              </button>

              <Button
                text="Dashboard"
                style="bg-blue-300 shadow-sm shadow-blue-500/50 p-2 rounded-sm"
                url={"/dashboard"}
              />
            </>
          ) : (
            <>
              <Button
                text="Login"
                style="bg-blue-700 shadow-sm shadow-blue-500/50 p-2 rounded-sm"
                url="/login"
              />
              <Button
                text="Register"
                style="bg-blue-700 p-2 rounded-sm"
                url="/register"
              />
            </>
          )}
        </div>
      </nav>
    </>
  );
};
