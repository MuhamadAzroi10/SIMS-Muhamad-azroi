import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  membershipReducer,
  profileFeatures,
} from "../../features/MembershipSlice";
import ElementInput from "../../components/ElementInput";

const Akun = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const membership = useSelector(membershipReducer);

  useEffect(() => {
    dispatch(profileFeatures());
  }, [dispatch]);

  const Exit = () => {
    localStorage.removeItem("@token");
    navigate("/auth/login");
  };

  return (
    <>
      <div className="container_akun">
        <div className="profile">
          <img src={membership?.profile_image} alt="" />
        </div>

        <p className=" is-size-3 custom-line-height has-text-centered has-text-weight-bold pb-6 ">
          {membership.first_name} {membership.last_name}
        </p>

        <p className=" is-size-6  has-text-weight-bold pt-3 pb-2">Email</p>

        <ElementInput
          value={membership?.email}
          type_input="mail2"
          placeholder=""
        />
        <p className=" is-size-6  has-text-weight-bold pt-3 pb-2">Nama Depan</p>
        <ElementInput
          value={membership?.first_name}
          type_input="person"
          placeholder=""
        />
        <p className=" is-size-6  has-text-weight-bold pt-3 pb-2">
          Nama Belakang
        </p>
        <ElementInput
          value={membership?.last_name}
          type_input="person"
          placeholder=""
        />

        <button
          type="submit"
          class="button is-danger is-medium is-fullwidth mt-6"
          onClick={() => navigate("/dashboard/akun/update")}
        >
          Edit Profile
        </button>
        <button
          type="submit"
          class="button is-danger is-outlined  is-medium is-fullwidth mt-6"
          onClick={() => Exit()}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Akun;
