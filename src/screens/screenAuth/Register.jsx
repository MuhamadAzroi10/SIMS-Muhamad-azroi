import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

// redux
import { useDispatch } from "react-redux";
import { registerFeatures } from "../../features/MembershipSlice";

// image
import icnDompet from "./../../assets/image/Logo.png";

// component
import ElementInput from "../../components/ElementInput";

const Register = () => {
  // state
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // func
  const onSubmit = async (data) => {
    const action = await dispatch(registerFeatures(data));
    if (action.payload.status == 200) {
      reset();
      setLoginSuccess(action.payload.data.message);
      setLoginError(null);
    } else {
      setLoginError(action.payload.data.message);
    }
  };

  return (
    <>
      <div className="custom-container">
        <div className="">
          <br />
          <br />
          <br />
          <br />
          <div className="is-flex is-justify-content-center is-align-items-center  pb-5 ">
            <img src={icnDompet} alt="" className="mr-3" />
            <p className=" is-size-5  has-text-weight-bold">SIMS PPOB</p>
          </div>

          <p className=" is-size-3 custom-line-height has-text-centered has-text-weight-bold px-6 pb-6 ">
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
              name="first_name"
              type_input="text"
              placeholder="Nama depan"
            />
            <br />
            <ElementInput
              register={register}
              errors={errors}
              name="last_name"
              type_input="text"
              placeholder="Nama belakang"
            />
            <br />
            <ElementInput
              register={register}
              errors={errors}
              name="password"
              type_input="password"
              placeholder="Buat password"
            />
            <br />
            <ElementInput
              register={register}
              errors={errors}
              confirmPassword={watch("password", "")}
              name="confirmPassword"
              type_input="confirmPassword"
              placeholder="Konfirmasi password"
            />
            <br />
            <button
              type="submit"
              class="button is-danger is-medium is-fullwidth mt-6"
            >
              Registrasi
            </button>
          </form>

          <p className=" is-size-6 custom-line-height has-text-centered  pt-5 ">
            Sudah punya akun? login{" "}
            <Link to="/auth/login">
              <span className="has-text-danger has-text-weight-bold">
                di sini
              </span>
            </Link>
          </p>
        </div>
      </div>
      <br />

      {/* alert */}
      {loginError ? (
        <div className="container">
          <div class="notification notification_custom is-danger is-light">
            <button class="delete" onClick={() => setLoginError(null)}></button>
            {loginError}
          </div>
        </div>
      ) : null}
      {loginSuccess ? (
        <div className="container">
          <div class="notification notification_custom is-success  is-light">
            <button
              class="delete"
              onClick={() => setLoginSuccess(null)}
            ></button>
            {loginSuccess}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Register;
