import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { clientService } from "../services";

export const balanceFeatures = createAsyncThunk(
  "transaction/balance",
  async () => {
    const response = await clientService.balance();
    return response.data.data;
  }
);
export const topupFeatures = createAsyncThunk(
  "transaction/topupFeatures",
  async (data) => {
    try {
      const response = await clientService.topup(data);
      return response;
    } catch (error) {
      return error.response;
    }
  }
);

export const transactionFeatures = createAsyncThunk(
  "transaction/transactionFeatures",
  async (data) => {
    try {
      const response = await clientService.transaction(data);
      return response;
    } catch (error) {
      return error.response;
    }

  }
);
export const transactionEntity = createEntityAdapter({
  selectId: (member) => member.balance,
});

const transactionSlice = createSlice({
  name: "transaction",
  initialState: transactionEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(balanceFeatures.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const transactionReducer = (state) => state.transaction;

export default transactionSlice.reducer;
