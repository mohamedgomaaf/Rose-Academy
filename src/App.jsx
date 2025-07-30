import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
