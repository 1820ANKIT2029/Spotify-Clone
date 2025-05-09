import { SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom"
import SignInOAuthButtoms from "./SignInOAuthButtoms.tsx";
import { useAuthStore } from "@/stores/useAuthStore.ts";
import { cn } from "@/lib/utils.ts";
import { buttonVariants } from "./ui/button.tsx";

const TopBar = () => {
    const { isAdmin } = useAuthStore();

    return (
        <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
            <div className="flex gap-2 items-center">
                <img src="/spotify.png"  className="size-8" alt="Spotify Logo" />
                Spotify
            </div>
            <div className="flex items-center gap-4">
                {isAdmin && (
                    <Link to={"/admin"}
                        className={cn(buttonVariants({ variant: "outline"}))}
                    >
                        <LayoutDashboardIcon className="size-4 mr-2" />
                        Admin Dashboard
                    </Link>
                )}

                <SignedOut>
                    <SignInOAuthButtoms />
                </SignedOut>

                <UserButton />
            </div>
        </div>
    );
}

export default TopBar;