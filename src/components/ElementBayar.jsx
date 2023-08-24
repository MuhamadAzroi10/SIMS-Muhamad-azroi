import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  informationServiceReducer,
  servicesFeatures,
} from "../features/InformationService";
import ElementInput from "./ElementInput";
// image
import icnDompet from "./../assets/image/Logo.png";
import icnGagal from "./../assets/image/gagal.png";
import icnBerhasil from "./../assets/image/berhasil.png";

import {
  balanceFeatures,
  transactionFeatures,
} from "../features/TransactionSlice";

const ElementBayar = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const information = useSelector(informationServiceReducer);
  const [alertError, setAlertError] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertAsk, setAlertAsk] = useState(false);

  const exitingInformation = Object.values(information).filter(
    (item) => item.service_code === id
  );

  useEffect(() => {
    dispatch(servicesFeatures());
  }, [dispatch]);

  const onSubmit = async (data) => {
    const action = await dispatch(transactionFeatures({ service_code: id }));
    if (action.payload.status == 200) {
      setAlertSuccess(true);
      setAlertAsk(false);
      setAlertError(false);
    } else {
      setAlertError(true);
      setAlertSuccess(false);
      setAlertAsk(false);
    }
  };

  return (
    <>
      <div className="container_Info_banner">
        <p className=" is-size-6 ">Pembayaran</p>
        <div className="is-flex is-align-items-center">
          <img src={exitingInformation[0]?.service_icon} alt="" />
          <p className=" is-size-5 has-text-weight-bold pl-3 ">
            {exitingInformation[0]?.service_name}
          </p>
        </div>
        <br />
        <br />

        <ElementInput
          value={exitingInformation[0]?.service_tariff}
          type_input="topUp"
          placeholder="Masukkan nim..."
        />

        <button
          type="submit"
          class="button is-danger is-medium is-fullwidth"
          onClick={() => setAlertAsk(true)}
        >
          Bayar
        </button>
      </div>

      {alertAsk && (
        <div className="modal is-active ">
          <div
            className="modal-background"
            onClick={() => setAlertAsk(false)}
          ></div>
          <div className="modal-card is-1 is-small modal_alert_custom">
            <section className="modal-card-body">
              <center>
                <img className="image-logo" src={icnDompet} alt="" />
              </center>

              <p className=" is-size-6 has-text-grey has-text-centered  has-text-weight-bold pt-3 ">
                Bayar {exitingInformation[0]?.service_name} senilai
              </p>
              <p className=" is-size-3  has-text-centered has-text-weight-bold  ">
                Rp. {exitingInformation[0]?.service_tariff} ?
              </p>
              <p
                className=" is-size-6 has-text-danger submit_custom has-text-centered has-text-weight-bold pt-5 "
                onClick={() => onSubmit()}
              >
                Ya, lanjutkan bayar
              </p>
              <p
                className=" is-size-6 has-text-grey-light has-text-centered submit_custom has-text-weight-bold pt-4 "
                onClick={() => setAlertAsk(false)}
              >
                Batalkan
              </p>
            </section>
          </div>
        </div>
      )}
      {alertError && (
        <div className="modal is-active ">
          <div
            className="modal-background"
            onClick={() => setAlertAsk(false)}
          ></div>
          <div className="modal-card is-1 is-small modal_alert_custom">
            <section className="modal-card-body">
              <center>
                <img className="image-logo" src={icnGagal} alt="" />
              </center>

              <p className=" is-size-6 has-text-grey has-text-centered  has-text-weight-bold pt-3 ">
                Pembayaran {exitingInformation[0]?.service_name} sebesar
              </p>
              <p className=" is-size-3  has-text-centered has-text-weight-bold  ">
                Rp. {exitingInformation[0]?.service_tariff}
              </p>
              <p className=" is-size-6 has-text-grey-light has-text-centered submit_custom has-text-weight-bold pt-4 ">
                gagal
              </p>
              <p
                className=" is-size-6 has-text-danger submit_custom has-text-centered has-text-weight-bold pt-5 "
                onClick={() => navigate("/")}
              >
                Kembali ke beranda
              </p>
            </section>
          </div>
        </div>
      )}
      {alertSuccess && (
        <div className="modal is-active ">
          <div
            className="modal-background"
            onClick={() => setAlertAsk(false)}
          ></div>
          <div className="modal-card is-1 is-small modal_alert_custom">
            <section className="modal-card-body">
              <center>
                <img className="image-logo" src={icnBerhasil} alt="" />
              </center>

              <p className=" is-size-6 has-text-grey has-text-centered  has-text-weight-bold pt-3 ">
                Bayar {exitingInformation[0]?.service_name} senilai
              </p>
              <p className=" is-size-3  has-text-centered has-text-weight-bold  ">
                Rp. {exitingInformation[0]?.service_tariff} ?
              </p>
              <p className=" is-size-6 has-text-grey-light has-text-centered submit_custom has-text-weight-bold pt-4 ">
                berhasil!
              </p>
              <p
                className=" is-size-6 has-text-danger submit_custom has-text-centered has-text-weight-bold pt-5 "
                onClick={() => navigate("/")}
              >
                Kembali ke Beranda
              </p>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default ElementBayar;
