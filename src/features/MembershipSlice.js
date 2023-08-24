import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { clientService } from "../services";

export const loginFeatures = createAsyncThunk(
  "auth/loginFeatures",
  async (data) => {
    try {
      const response = await clientService.login(data);
      localStorage.setItem("@token", response.data.data.token);

      return response;
    } catch (error) {
      return error.response;
    }
  }
);

export const registerFeatures = createAsyncThunk(
  "auth/registerFeatures",
  async (data) => {
    try {
      const response = await clientService.register(data);
      return response;
    } catch (error) {
      return error.response;
    }
  }
);

export const profileFeatures = createAsyncThunk("auth/getAuth", async () => {
  const response = await clientService.profile();
  return response.data.data;
});
export const profileUpdateFeatures = createAsyncThunk(
  "auth/updateAuth",
  async (data) => {
    const response = await clientService.profile_update(data);
    return response.data.data;
  }
);
export const profileImageFeatures = createAsyncThunk(
  "auth/imageAuth",
  async (data) => {
    try {
      const response = await clientService.profile_image(data);
      return response.data.data;
    } catch (error) {
      return error.response;
    }
  }
);

export const membershipEntity = createEntityAdapter({
  selectId: (member) => member.email,
});

const membershipSlice = createSlice({
  name: "membership",
  initialState: membershipEntity.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(profileFeatures.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(profileUpdateFeatures.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const membershipReducer = (state) => state.membership;
export default membershipSlice.reducer;
