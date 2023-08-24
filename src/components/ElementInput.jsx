import React, { useState } from "react";

import icnEye from "./../assets/image/eye.svg";

const ElementInput = ({
  register = 0,
  errors = 0,
  name,
  placeholder,
  type_input,
  confirmPassword,
  value,
  border,
}) => {
  const [type, setType] = useState(false);

  const setTypePassword = () => {
    setType(!type);
  };

  return (
    <>
      {type_input == "text" ? (
        <>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input is-medium "
                type="text"
                placeholder={placeholder}
                {...register(name, {
                  required: "Input tidak boleh kosong",
                })}
              />

              <span className="icon is-small is-left">
                <i class="fa-solid fa-user"></i>
              </span>
            </p>
          </div>
        </>
      ) : type_input == "number" ? (
        <>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input is-medium "
                type="number"
                placeholder={placeholder}
                {...register(name, {
                  required: "Input tidak boleh kosong",
                })}
              />

              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
        </>
      ) : type_input == "email" ? (
        <>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input is-medium  "
                type="email"
                placeholder={placeholder}
                {...register(name, {
                  required: "Input tidak boleh kosong",
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />

              <span className="icon is-small is-left">
                <i class="fa-solid fa-envelope"></i>
              </span>
            </p>
          </div>
        </>
      ) : type_input == "topUp" ? (
        <>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input is-medium"
                value={value}
                type="text"
                readOnly
              />

              <span className="icon is-small is-left">
                <i class="fa-solid fa-credit-card"></i>
              </span>
            </p>
          </div>
        </>
      ) : type_input == "person" ? (
        <>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input is-medium"
                value={value}
                type="text"
                readOnly
              />

              <span className="icon is-small is-left">
                <i class="fa-solid fa-user"></i>
              </span>
            </p>
          </div>
        </>
      ) : type_input == "mail2" ? (
        <>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input is-medium"
                value={value}
                type="text"
                readOnly
              />

              <span className="icon is-small is-left">
                <i class="fa-solid fa-envelope"></i>
              </span>
            </p>
          </div>
        </>
      ) : type_input == "password" ? (
        <>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className={
                  border ? "input is-medium is-danger " : "input is-medium"
                }
                type={type ? "text" : "password"}
                placeholder={placeholder}
                {...register(name, {
                  required: "Input tidak boleh kosong",
                })}
                onClick={() => setTypePassword()}
              />

              <span
                className={
                  border
                    ? "icon is-small is-left has-text-danger "
                    : "icon is-small is-left"
                }
              >
                <i class="fas fa-lock "></i>
              </span>
              <span className="icon is-small is-right ">
                <img src={icnEye} alt="" />
              </span>
            </p>
          </div>
        </>
      ) : type_input == "confirmPassword" ? (
        <>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input is-medium"
                type={type ? "text" : "password"}
                placeholder={placeholder}
                {...register(name, {
                  required: "Input tidak boleh kosong",

                  validate: (value) =>
                    value === confirmPassword || "Password tidak sesuai",
                })}
                onClick={() => setTypePassword()}
              />

              <span className="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
              <span className="icon is-small is-right has-z-index-20">
                <img src={icnEye} alt="" />
              </span>
            </p>
          </div>
        </>
      ) : type_input == "readOny" ? (
        <>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input is-medium "
                type="text"
                readOnly
                value={value}
              />

              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
        </>
      ) : null}

      {errors[name] && (
        <p className="global_errorText">{errors[name].message}</p>
      )}
    </>
  );
};

export default ElementInput;
