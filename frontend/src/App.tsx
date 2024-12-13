import { Route, Routes } from "react-router-dom";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage.tsx";
import Homepage from "./pages/home/Homepage.tsx";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout.tsx";
import ChatPage from "./pages/chat/ChatPage.tsx";
import AlbumPage from "./pages/album/AlbumPage.tsx";
import AdminPage from "./pages/admin/AdminPage.tsx";

import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <Routes>

        <Route path="/auth-callback" element={<AuthCallbackPage />} />

        <Route 
          path="/sso-callback" 
          element={<AuthenticateWithRedirectCallback signInForceRedirectUrl={"/auth-callback"} />} 
        />
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/albums/:albumId" element={<AlbumPage />} />
        </Route>

        <Route path="/admin" element={<AdminPage />} />

      </Routes>

      <Toaster />
    </>
  );
}

export default App
