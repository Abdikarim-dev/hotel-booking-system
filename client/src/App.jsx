import { Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import ForgotAccount from "./pages/ForgotAccount";
import LoginPage from "./pages/LoginPage";
import VerifyEmail from "./pages/VerifyEmail";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/create-account" element={<CreateAccount />}></Route>
      <Route path="/forgot-password" element={<ForgotAccount />}></Route>
      <Route path="/verify-email" element={<VerifyEmail />}></Route>
      <Route path="/dashboard" element={<AdminPage />}></Route>
    </Routes>
  );
}

export default App;
