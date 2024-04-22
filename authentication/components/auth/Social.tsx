"use client"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
const SocialsCard = () => {
    return (
        <div className="flex gap-x-2 items-center w-full">
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => { }}
            >
                <FcGoogle className="h-5 w-5" />

            </Button>
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => { }}
            >
                <FaGithub className="h-5 w-5" />

            </Button>
        </div>

    )
}

export default SocialsCard;