import { axiosInstance } from "@/lib/axios";
import { useAuthStore } from "@/stores/useAuthStore";
import { useChatStore } from "@/stores/useChatStore";
import { useAuth } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";


// help to add Authorization header to axios if user is logged in
// as auth provider run every time when page is refreash so do the 
// updateApiToken , hence authorization get added to axios
const updateApiToken = (token:string | null) => {
    if(token){
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axiosInstance.defaults.headers.common['Authorization']
    }
};

const AuthProvider = ({ children }:{ children: React.ReactNode }) => {
    const { getToken, userId} = useAuth();
    const { checkAdminStatus } = useAuthStore();
    const [loading, setLoading] = useState(true);
    const { initSocket, disconnectSocket } = useChatStore();

    useEffect(() => {
        const initAuth = async () => {
            try{
                const token = await getToken();
                updateApiToken(token);
                if(token){
                    await checkAdminStatus();

                    //init socket
                    if(userId) initSocket(userId);
                }
            }catch(error: any){
                updateApiToken(null);
                console.log("Error in auth Provider", error);
            }
            finally{
                setLoading(false);
            }
        };

        initAuth();

        // clean up 
        return () => disconnectSocket();
    }, [getToken, userId, initSocket, disconnectSocket]);

    if(loading) return (
        <div className="h-screen w-full flex items-center justify-center">
            <Loader className="size-8 text-emerald-500 animate-spin" />
        </div>
    )

  return (
    <>{children}</>
  )
}

export default AuthProvider