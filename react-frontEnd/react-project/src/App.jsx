import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoginPage } from "./components/LoginPage";
import { Main } from "./components/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegistaerPage } from "./components/RegistaerPage";
import { AuthProvider } from "./AuthProvider";
import { Dashboard1 } from "./components/dashboards/Dashboard1";
import { ThemeProvider } from "./ThemeProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/register" element={<RegistaerPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/dashboard" element={<Dashboard1 />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
