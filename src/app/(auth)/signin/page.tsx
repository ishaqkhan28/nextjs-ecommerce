import SignInForm from "@/app/(auth)/signin/Signinpage"
import ContextWrapper from "@/global/context/Context"

const SignIn = () => {
    return (
        <ContextWrapper>
            <SignInForm />
        </ContextWrapper>
    )
}

export default SignIn
