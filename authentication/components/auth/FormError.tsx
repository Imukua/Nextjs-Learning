import { FaExclamationTriangle } from "react-icons/fa";

const FormError = ({ message }: { message?: string }) => {
    if (!message) {
        return null;
    };


    return (
        <div className="rounded-md flex bg-destructive p-5  items-center gap-x-2 text-sm text-destructive">
            <FaExclamationTriangle className="h-4 w-4" />
            {message}
        </div>
    );
}

export default FormError;
