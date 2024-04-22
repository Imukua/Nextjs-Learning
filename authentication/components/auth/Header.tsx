import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { BiSolidLockOpenAlt } from "react-icons/bi";
const font = Poppins({
    subsets: ["latin"],
    weight: ["500"],
})

interface HeaderProps {
    label: string;

}

const AuthHeader = ({ label }: HeaderProps) => {
    return (
        <div className="flex w-full flex-col gap-3  items-center justify-center">
            <h1 className={cn("text-3xl font-semibold", font.className)}>
                🔒Auth
            </h1>
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    );

}

export default AuthHeader;