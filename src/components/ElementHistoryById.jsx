import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { format } from "date-fns";
import { historyFeatures, historyReducer } from "../features/HistorySlice";
import { useNavigate } from "react-router-dom";

const ElementHistoryById = () => {
  const dispatch = useDispatch();
  const history = useSelector(historyReducer);
  const [bulan, setBulan] = useState("Maret");

  useEffect(() => {
    dispatch(historyFeatures());
  }, [dispatch]);

  return (
    <>
      <div className="container_history">
        <p className=" is-size-6 has-text-weight-bold pb-3">Semua transaksi</p>

        <div className="is-flex">
          <p
            className={
              bulan == "March"
                ? "is-size-6 submit_custom has-text-blak has-text-weight-bold mr-4"
                : "is-size-6 submit_custom has-text-grey-light has-text-weight-bold mr-4"
            }
            onClick={() => setBulan("March")}
          >
            Maret
          </p>
          <p
            className={
              bulan == "April"
                ? "is-size-6 submit_custom has-text-blak has-text-weight-bold mr-4"
                : "is-size-6 submit_custom has-text-grey-light has-text-weight-bold mr-4"
            }
            onClick={() => setBulan("April")}
          >
            April
          </p>
          <p
            className={
              bulan == "May"
                ? "is-size-6 submit_custom has-text-blak has-text-weight-bold mr-4"
                : "is-size-6 submit_custom has-text-grey-light has-text-weight-bold mr-4"
            }
            onClick={() => setBulan("May")}
          >
            Mei
          </p>
          <p
            className={
              bulan == "June"
                ? "is-size-6 submit_custom has-text-blak has-text-weight-bold mr-4"
                : "is-size-6 submit_custom has-text-grey-light has-text-weight-bold mr-4"
            }
            onClick={() => setBulan("June")}
          >
            Juni
          </p>
          <p
            className={
              bulan == "July"
                ? "is-size-6 submit_custom has-text-blak has-text-weight-bold mr-4"
                : "is-size-6 submit_custom has-text-grey-light has-text-weight-bold mr-4"
            }
            onClick={() => setBulan("July")}
          >
            Juli
          </p>
          <p
            className={
              bulan == "August"
                ? "is-size-6 submit_custom has-text-blak has-text-weight-bold mr-4"
                : "is-size-6 submit_custom has-text-grey-light has-text-weight-bold mr-4"
            }
            onClick={() => setBulan("August")}
          >
            Agustus
          </p>
          <p
            className={
              bulan == "September"
                ? "is-size-6 submit_custom has-text-blak has-text-weight-bold mr-4"
                : "is-size-6 submit_custom has-text-grey-light has-text-weight-bold mr-4"
            }
            onClick={() => setBulan("September")}
          >
            September
          </p>
        </div>

        <br />
        {Object.values(history)
          .filter((response) => {
            try {
              const currentDate = new Date(response.created_on);
              let formattedDate = format(currentDate, "MMMM");
              if (bulan === "") {
                return response;
              } else if (
                bulan.toLowerCase().includes(formattedDate.toLowerCase())
              ) {
                return response;
              }
            } catch (error) {}
          })
          .map((item) => {
            try {
              const currentDate = new Date(item.created_on);
              let formattedDate = format(
                currentDate,
                "dd MMMM yyyy HH:mm 'WIB'"
              );

              return (
                <div className="list " key={item.id}>
                  <div className="left ">
                    <p
                      className={
                        item.transaction_type == "TOPUP"
                          ? "is-size-5 has-text-success has-text-weight-bold"
                          : "is-size-5 has-text-danger has-text-weight-bold"
                      }
                    >
                      {item.transaction_type == "TOPUP" ? "+" : "-"} Rp.{" "}
                      {item.total_amount}
                    </p>
                    <p className=" is-size-7 has-text-grey has-text-weight-bold">
                      {formattedDate}
                    </p>
                  </div>

                  <div className="right">
                    <p className=" is-size-7  has-text-weight-bold">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            } catch (error) {}
          })}
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ElementHistoryById;
