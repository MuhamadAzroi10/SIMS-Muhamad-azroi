import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  membershipReducer,
  profileFeatures,
  profileImageFeatures,
  profileUpdateFeatures,
} from "../../features/MembershipSlice";
import ElementInput from "../../components/ElementInput";
import { useNavigate } from "react-router-dom";
import icnProfile from "./../../assets/image/Profile Photo.png";

const AkunUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const membership = useSelector(membershipReducer);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];

    if (image) {
      setSelectedImage(URL.createObjectURL(image));
      try {
        const login = dispatch(profileImageFeatures(image));
        console.log(login.payload);
      } catch (error) {}
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      details: {
        email: "",
        first_name: "",
        last_name: "",
      },
    },
  });

  const onSubmit = async (data) => {
    try {
      const login = dispatch(profileUpdateFeatures(data.details));
      navigate("/");
    } catch (error) {}
  };

  useEffect(() => {
    dispatch(profileFeatures());
  }, [dispatch]);

  useEffect(() => {
    setValue("details", {
      email: membership?.email,
      first_name: membership?.first_name,
      last_name: membership?.last_name,
    });
  }, [membership]);

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
                src={icnProfile}
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <p className=" is-size-6  has-text-weight-bold pt-3 pb-2">Email</p>
          <ElementInput
            register={register}
            errors={errors}
            name="details.email"
            type_input="text"
            placeholder="Masukkan nim..."
          />

          <p className=" is-size-6  has-text-weight-bold pt-3 pb-2">
            Nama Depan
          </p>
          <ElementInput
            register={register}
            errors={errors}
            name="details.first_name"
            type_input="text"
            placeholder="Masukkan nim..."
          />
          <p className=" is-size-6  has-text-weight-bold pt-3 pb-2">
            EmaiNama Belakang
          </p>
          <ElementInput
            register={register}
            errors={errors}
            name="details.last_name"
            type_input="text"
            placeholder="Masukkan nim..."
          />

          <button type="submit" class="button is-danger is-fullwidth">
            Simpan
          </button>
        </form>
      </div>
    </>
  );
};

export default AkunUpdate;
