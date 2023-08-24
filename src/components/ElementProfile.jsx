import React, { useState, useEffect } from "react";


import icnProfile from "./../assets/image/Profile Photo.png";

import { useSelector, useDispatch } from "react-redux";
import {
  membershipReducer,
  profileFeatures,
} from "../features/MembershipSlice";
import {
  balanceFeatures,
  transactionReducer,
} from "../features/TransactionSlice";

const ElementProfile = () => {
  const [type, setType] = useState(false);

  const setTypePassword = () => {
    setType(!type);
  };

  const dispatch = useDispatch();
  const membership = useSelector(membershipReducer);
  const transaction = useSelector(transactionReducer);

  useEffect(() => {
    dispatch(profileFeatures());
    dispatch(balanceFeatures());
  }, [dispatch]);

  return (
    <>
      <div className=" container_profile">
        <div className="left">
          <img className="foto_profile" src={icnProfile} alt="" />
          <p className=" is-size-6  ">Selamat Datang</p>
          <p className=" is-size-3 has-text-weight-bold ">
            {membership.first_name} {membership.last_name}
          </p>
        </div>
        <div className="right">
          <div className="box_custom has-background-danger">
            <p className=" is-size-6 has-text-weight-bold has-text-white  ">
              Saldo anda
            </p>
            <div className="is-flex is-align-items-center">
              <p className=" is-size-1 has-text-weight-bold has-text-white">
                Rp
              </p>
              <input
                type={type ? "text" : "password"}
                value={transaction?.balance?.toLocaleString()}
                readOnly
              />
            </div>

            <div className="is-flex is-align-items-center">
              <p className=" is-size-7 has-text-weight-bold has-text-white mr-2">
                Topup saldo
              </p>

              <i
                class="fa-solid fa-eye"
                onClick={() => setTypePassword()}
                style={{ color: "white" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElementProfile;
