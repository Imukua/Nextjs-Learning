import { AuthWrapper } from "@/components/auth/Wrapper";
export default function SignUp() {
    return (
        <AuthWrapper
            headerLabel="Welcome Baack!"
            buttonLabel="Dont have an account ?"
            path="/sign-up"
            showSocial={true}
        >
        </AuthWrapper>
    );
}
