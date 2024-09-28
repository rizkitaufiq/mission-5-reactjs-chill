import { useState } from "react";
import InputLabel from "../molecules/InputField/InputLabel";
import ButtonSubmit from "../atoms/Button/ButtonSubmit";
import ChillLogo from "../../assets/images/auth/Logo.svg";
import EyesIcon from "../../assets/images/auth/eye-off.svg";
import SSOIcon from "../../assets/images/auth/sso-icon.svg";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setErrorMessage("Name is required");
    } else {
      setErrorMessage("");
      console.log("Form submitted");
    }
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
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <div className="p-4">
          <InputLabel
            htmlFor="username"
            id="username"
            name="username"
            label="Username"
            type="text"
            placeholder="Masukan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="relative">
            <InputLabel
              htmlFor="password"
              id="password"
              name="password"
              label="Kata Sandi"
              type="password"
              placeholder="Masukan kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              <p className="text-gray">Daftar</p>
            </div>

            <div className="flex">
              <a href="" className="text-gray">
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
              className="absolute top-3 right-3/4 mr-1"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
