import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
    label: string;
    path: string;
}

const BackButton = ({ label, path, }: BackButtonProps) => {
    return (
        <Button
            variant="link"
            className="font-normal w-full"
            size="sm"
            asChild
        >

            <Link href={path}>
                {label}
            </Link>

        </Button>

    );
}
export default BackButton;