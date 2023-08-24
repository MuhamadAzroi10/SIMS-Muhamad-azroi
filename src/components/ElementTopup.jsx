import ElementInput from "./ElementInput";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { topupFeatures } from "../features/TransactionSlice";

// image
import icnDompet from "./../assets/image/Logo.png";
import icnGagal from "./../assets/image/gagal.png";
import icnBerhasil from "./../assets/image/berhasil.png";
import { useNavigate } from "react-router-dom";

const ElementTopup = () => {
  const dispatch = useDispatch();
  const [alertError, setAlertError] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertAsk, setAlertAsk] = useState(false);
  const [nominal, setNominal] = useState(0);
  const navigate = useNavigate();
  // func
  const onSubmit = async (data) => {
    const action = await dispatch(topupFeatures({ top_up_amount: nominal }));
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
        <p className=" is-size-6 ">Silahkan masukan</p>
        <p className=" is-size-3 has-text-weight-bold ">Nominal Top Up</p>
        <br />
        <br />

        <div class="columns">
          <div class="column is-three-quarters">
            <ElementInput
              value={nominal}
              type_input="topUp"
              placeholder="Masukkan nim..."
            />

            <button
              type="submit"
              class={
                nominal != 0
                  ? "button is-danger is-medium is-fullwidth"
                  : "button warna_button_custom is-medium is-fullwidth"
              }
              disabled={nominal != 0 ? false : true}
              onClick={() => onSubmit()}
            >
              Top Up
            </button>
          </div>
          <div class=" nominal_custom">
            <div className="list_nominal" onClick={() => setNominal(10000)}>
              Rp.10.000
            </div>
            <div className="list_nominal" onClick={() => setNominal(20000)}>
              Rp.20.000
            </div>
            <div className="list_nominal" onClick={() => setNominal(50000)}>
              Rp.5.0000
            </div>
            <div className="list_nominal" onClick={() => setNominal(100000)}>
              Rp.100.000
            </div>
            <div className="list_nominal" onClick={() => setNominal(250000)}>
              Rp.250.000
            </div>
            <div className="list_nominal" onClick={() => setNominal(500000)}>
              Rp.500.000
            </div>
          </div>
        </div>
      </div>

      {alertError && (
        <div className="modal is-active ">
          <div
            className="modal-background"
            onClick={() => setAlertError(false)}
          ></div>
          <div className="modal-card is-1 is-small modal_alert_custom">
            <section className="modal-card-body">
              <p>Konten modal kecil...</p>
            </section>
          </div>
        </div>
      )}

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
                Bayar Top Up sebesar
              </p>
              <p className=" is-size-3  has-text-centered has-text-weight-bold  ">
                Rp. {nominal} ?
              </p>
              <p
                className=" is-size-6 has-text-danger submit_custom has-text-centered has-text-weight-bold pt-5 "
                onClick={() => onSubmit()}
              >
                Ya, lanjutkan Top Up
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
                Top Up sebesar
              </p>
              <p className=" is-size-3  has-text-centered has-text-weight-bold  ">
                Rp. {nominal}
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
                Top Up senilai
              </p>
              <p className=" is-size-3  has-text-centered has-text-weight-bold  ">
                Rp. {nominal} ?
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

export default ElementTopup;
