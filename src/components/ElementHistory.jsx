import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { format } from "date-fns";
import { historyFeatures, historyReducer } from "../features/HistorySlice";
import { useNavigate } from "react-router-dom";

const ElementHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector(historyReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(historyFeatures());
  }, [dispatch]);

  return (
    <>
      <div className="container_history">
        <p className=" is-size-6 has-text-weight-bold pb-3">Semua transaksi</p>

        {Object.values(history).map((item) => {
          try {
            const currentDate = new Date(item.created_on);
            let formattedDate = format(currentDate, "dd MMMM yyyy HH:mm 'WIB'");

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

      <p
        className=" is-size-6 has-text-danger submit_custom has-text-centered has-text-weight-bold pt-3  "
        onClick={() => navigate("/dashboard/transaksi/detail")}
      >
        Show more
      </p>

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ElementHistory;
