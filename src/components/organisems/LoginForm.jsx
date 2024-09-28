import { useNavigate } from "react-router-dom";
import InputLabel from "../molecules/InputField/InputLabel";
import ButtonSubmit from "../atoms/Button/ButtonSubmit";
import ChillLogo from "../../assets/images/auth/Logo.svg";
import EyesIcon from "../../assets/images/auth/eye-off.svg";
import SSOIcon from "../../assets/images/auth/sso-icon.svg";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/beranda");
  };

  return (
    <div className="box-form-color w-auto rounded-2xl p-2">
      <div className="flex justify-center mt-4 ">
        <img src={ChillLogo} alt="image" />
      </div>

      <div className="flex justify-center text-center mt-2 text-white">
        <div className="row">
          <h3 className="font-bold text-3xl">Masuk</h3>
          <p className="text-base">Selamat datang kembali</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="p-4">
          <InputLabel
            htmlFor="username"
            id="username"
            name="username"
            label="Username"
            type="text"
            placeholder="Masukan username"
          />

          <div className="relative">
            <InputLabel
              htmlFor="password"
              id="password"
              name="password"
              label="Kata Sandi"
              type="password"
              placeholder="Masukan kata sandi"
            />
            <img
              src={EyesIcon}
              alt="image"
              className="absolute top-10 right-3"
            />
          </div>

          <div className="flex justify-between text-sm mb-8">
            <div className="flex column gap-1">
              <p className="text-gray">Belum punya akun?</p>
              <p className="text-white">Daftar</p>
            </div>

            <div className="flex">
              <a href="" className="text-white">
                Lupa kata sandi?
              </a>
            </div>
          </div>

          <ButtonSubmit type="submit" text="Masuk" buttonColor="bg-primary" />

          <p className="text-center text-sm text-gray mb-2">Atau</p>

          <div className="relative">
            <ButtonSubmit type="button" text="Masuk dengan Google" />
            <img
              src={SSOIcon}
              alt="image"
              className="absolute top-3 right-3/4 mr-[0.5rem]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
