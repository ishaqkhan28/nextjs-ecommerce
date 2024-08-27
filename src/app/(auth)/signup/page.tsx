import SignupFormComp from "@/app/(auth)/signup/Signuppage";
import ContextWrapper from "@/global/context/Context";


const SignupForm = () => {
    return (
        <ContextWrapper>
            <SignupFormComp />
        </ContextWrapper>
    );
};

export default SignupForm;