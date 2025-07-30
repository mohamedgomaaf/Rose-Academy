import React, { useState } from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

function AuthPage() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center gap-[30px]">
      <Login showSignup={showSignup} setShowSignup={setShowSignup} />
      <Register showSignup={showSignup} setShowSignup={setShowSignup} />
    </div>
  );
}

export default AuthPage;
