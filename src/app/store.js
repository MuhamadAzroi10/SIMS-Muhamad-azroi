import { configureStore } from "@reduxjs/toolkit";
import membershipReducer from "./../features/MembershipSlice";
import transactionReducer from "../features/TransactionSlice";
import informationServiceReducer from "../features/InformationService";
import informationBannerReducer from "../features/InformationBanner";
import historyReducer from "../features/HistorySlice";

export const store = configureStore({
  reducer: {
    membership: membershipReducer,
    transaction: transactionReducer,
    informationService: informationServiceReducer,
    informationBanner: informationBannerReducer,
    history: historyReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
