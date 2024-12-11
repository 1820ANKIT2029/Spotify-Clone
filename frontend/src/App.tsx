import { Route, Routes } from "react-router-dom";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage.tsx";
import Homepage from "./pages/home/Homepage.tsx";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route 
          path="/sso-callback" 
          element={<AuthenticateWithRedirectCallback signInForceRedirectUrl={"/auth-callback"} />} 
        />
        
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App
