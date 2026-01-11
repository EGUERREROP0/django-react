import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

export const Header = () => {
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const { themeDarkMode, setThemeDarkMode } = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLogged(false);
    navigate("/");
  };

  const handleChangeMode = () => {
    setThemeDarkMode((prev) => !prev);
  };

  return (
    <>
      {/* <div className="container bg-red-500 p-3 flex justify-between items-center mx-0"> */}
      <nav className="container mx-auto p-3 flex justify-between items-center">
        <Link className="p-2 font-bold" to={"/"}>
          Stock Prediccion Portal
        </Link>
        <div className="flex gap-4">
          <button onClick={handleChangeMode}>
            {themeDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

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
