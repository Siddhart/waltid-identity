import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import LogoSvg from "@/assets/logo";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    const router = useRouter();
    const cookies = new Cookies();
    const [isAuthPath, setIsAuthPath] = useState(false);

    useEffect(() => {
        if (!router.isReady) return;
        setIsAuthPath(router.asPath.includes("/auth"));
    }, [router.isReady, router.asPath]);

    useEffect(() => {
        const checkSession = () => {
            const session = cookies.get("session");
            if (session && router.asPath.includes("/auth")) {
                window.location.href = "/";
            }
        };

        const interval = setInterval(checkSession, 500);

        return () => clearInterval(interval);
    }, [router, router.isReady]);

    useEffect(() => {
        const handleCookieChange = () => {
            const session = cookies.get("session");
            if (!session && !router.asPath.includes("/auth")) {
                router.push("/auth/login");
            }
        };

        // Initial check on mount
        handleCookieChange();

        // Listen for cookie changes
        cookies.addChangeListener(handleCookieChange);

        // Cleanup listener on unmount
        // return () => {
        //     cookies.removeChangeListener(handleCookieChange);
        // };
    }, [router]);

    if (isAuthPath) {
        return <main>{children}</main>;
    }

    return (
        <div className="bg-[#F5F4F9] h-screen w-screen flex flex-row">
            <NavBar />
            <main className="flex flex-1 w-full py-4 pr-4">
                <div className='flex flex-1 w-full bg-white p-6 rounded-2xl'>
                    {children}
                </div>
            </main>
        </div>
    );
}
