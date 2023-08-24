import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { clientService } from "../services";

export const servicesFeatures = createAsyncThunk(
  "information/services",
  async () => {
    const response = await clientService.services();
    return response.data.data;
  }
);

export const informationEntity = createEntityAdapter({
  selectId: (member) => member.service_code,
});

const informationSlice = createSlice({
  name: "informationService",
  initialState: informationEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(servicesFeatures.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const informationServiceReducer = (state) => state.informationService;

export default informationSlice.reducer;
