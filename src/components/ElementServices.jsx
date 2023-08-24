import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  informationServiceReducer,
  servicesFeatures,
} from "../features/InformationService";
import { Link } from "react-router-dom";

const ElementServices = () => {
  const dispatch = useDispatch();
  const information = useSelector(informationServiceReducer);



  useEffect(() => {
    dispatch(servicesFeatures());
  }, [dispatch]);

  return (
    <>
      <div className="container_Info_service">
        {Object.values(information).map((item) => (
          <Link key={item.id} to={"/dashboard/transaksi/" + item.service_code}>
            <img src={item.service_icon} alt="" />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ElementServices;
