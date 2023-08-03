import { AuthForm } from "../components/common/AuthForm";
import { AuthInput } from "../components/common/AuthInput";

export const Signin = () => {
  return (
    <section>
      <AuthForm>
        <AuthInput />
        <AuthInput />
      </AuthForm>
    </section>
  );
};
