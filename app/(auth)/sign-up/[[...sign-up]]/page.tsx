import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return <SignUp afterSignUpUrl={"/onboarding"} />;
};

export default SignUpPage;
