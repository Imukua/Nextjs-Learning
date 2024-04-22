" use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import AuthHeader from "./Header";
import SocialsCard from "./Social";
import BackButton from "./BackButton";

interface AuthProps {
    children: React.ReactNode;
    headerLabel: string;
    buttonLabel: string;
    path: string;
    showSocial: boolean;
}

export const AuthWrapper = ({ children, headerLabel, buttonLabel, path, showSocial }: AuthProps) => {
    return (
        <Card className="w-[400px] shadow-md bg-white">
            <CardHeader>
                <AuthHeader label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <SocialsCard />
                </CardFooter>)}
            <CardFooter>
                <BackButton
                    path={path}
                    label={buttonLabel}
                />
            </CardFooter>
        </Card>
    )


}
