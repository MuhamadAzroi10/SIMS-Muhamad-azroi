import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import icnProfile from "./../../assets/image/Profile Photo.png";
import {
  membershipReducer,
  profileFeatures,
  profileImageFeatures,
} from "../../features/MembershipSlice";
import ElementInput from "../../components/ElementInput";

const Akun = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const membership = useSelector(membershipReducer);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];

    if (image) {
      setSelectedImage(URL.createObjectURL(image));
      try {
        const formData = new FormData();
        formData.append("file", image);
        const login = dispatch(profileImageFeatures(formData));
      } catch (error) {}
    }
  };

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
          <input
            type="file"
            id="imageInput"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />

          {selectedImage ? (
            <center>
              <img
                src={selectedImage}
                alt="Selected"
                className="image_custom_profile"
              />

              <i
                onClick={() => {
                  document.getElementById("imageInput").click();
                }}
                class="pencil_custom_profile fa-solid fa-pencil"
              ></i>
            </center>
          ) : (
            <center>
              <img
                src={
                  membership.profile_image
                    ? membership.profile_image
                    : icnProfile
                }
                alt="Selected"
                className="image_custom_profile"
              />

              <i
                onClick={() => {
                  document.getElementById("imageInput").click();
                }}
                class="pencil_custom_profile fa-solid fa-pencil"
              ></i>
            </center>
          )}
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
