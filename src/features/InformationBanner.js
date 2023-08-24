import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { clientService } from "../services";

export const bannerFeatures = createAsyncThunk(
  "information/banner",
  async () => {
    const response = await clientService.banner();
    return response.data.data;
  }
);

export const informationEntity = createEntityAdapter({
  selectId: (member) => member.banner_name,
});

const informationSlice = createSlice({
  name: "informationBanner",
  initialState: informationEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(bannerFeatures.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const informationBannerReducer = (state) => state.informationBanner;

export default informationSlice.reducer;
