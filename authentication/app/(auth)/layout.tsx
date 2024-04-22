import "@/app/globals.css";


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=" flex  items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
            {children}
        </div>
    );
}
