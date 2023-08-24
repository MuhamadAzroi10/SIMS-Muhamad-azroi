import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginFeatures } from "../../features/MembershipSlice";
import ElementInput from "../../components/ElementInput";
import icnDompet from "./../../assets/image/Logo.png";

const Login = () => {
  const [loginError, setLoginError] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const action = await dispatch(loginFeatures(data));
    if (action.payload.status === 200) {
      navigate("/");
    } else {
      setLoginError(action.payload.data.message);
    }
  };

  return (
    <>
      <div className="custom-container">
        <div>
          <div className="is-flex is-justify-content-center is-align-items-center pb-5">
            <img src={icnDompet} alt="" className="mr-3" />
            <p className="is-size-5 has-text-weight-bold">SIMS PPOB</p>
          </div>

          <p className="is-size-3 custom-line-height has-text-centered has-text-weight-bold px-6 pb-6">
            Masuk atau buat akun untuk memulai
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <ElementInput
              register={register}
              errors={errors}
              name="email"
              type_input="email"
              placeholder="Masukkan email anda"
            />
            <br />

            <ElementInput
              register={register}
              errors={errors}
              border={loginError}
              name="password"
              type_input="password"
              placeholder="Masukkan password anda"
            />
            <br />

            <button
              type="submit"
              className="button is-danger is-medium is-fullwidth mt-6"
            >
              Masuk
            </button>
          </form>

          <p className="is-size-6 custom-line-height has-text-centered pt-5">
            Belum punya akun? Registrasi{" "}
            <Link
              to="/auth/register"
              className="has-text-danger has-text-weight-bold"
            >
              di sini
            </Link>
          </p>
        </div>
      </div>

      {loginError && (
        <div className="container">
          <div className="notification notification_custom is-danger is-light">
            <button
              className="delete"
              onClick={() => setLoginError(null)}
            ></button>
            {loginError}
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
