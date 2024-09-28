import AuthLayouts from "../layouts/AuthLayouts";
import LoginForm from "../components/organisems/LoginForm";

const Login = () => {
  return (
    <>
      <section className="login-background">
        <AuthLayouts>
          <LoginForm />
        </AuthLayouts>
      </section>
    </>
  );
};

export default Login;
