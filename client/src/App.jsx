import { Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import ForgotAccount from "./pages/ForgotAccount";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/create-account" element={<CreateAccount />}></Route>
      <Route path="/forgot-password" element={<ForgotAccount />}></Route>
    </Routes>
  );
}

export default App;
