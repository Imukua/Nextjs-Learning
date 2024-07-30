import { FaExclamationTriangle } from "react-icons/fa";

const FormSuccess = ({ message }: { message?: string }) => {
    if (!message) {
        return null;
    };


    return (
        <div className="flex bg-emerald-500/15 p-3 rounded-md items-center gap-x-2 text-sm text-emerald-500">
            <FaExclamationTriangle className="h-4 w-4" />
            {message}
        </div>
    );
}

export default FormSuccess;
