import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { clientService } from "../services";

export const historyFeatures = createAsyncThunk(
  "transaction/history",
  async () => {
    try {
      const response = await clientService.history();
      return response.data.data.records;
    } catch (error) {
      return error.response;
    }
  }
);

export const historyEntity = createEntityAdapter({
  selectId: (member) => member.invoice_number,
});

const historySlice = createSlice({
  name: "history",
  initialState: historyEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(historyFeatures.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const historyReducer = (state) => state.history;

export default historySlice.reducer;
