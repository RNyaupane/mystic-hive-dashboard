import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { authService } from "../actions/authActions";

const initialState = {
  user: [],
  isError: false,
  isAuthenticated: false,
  isSuccess: false,
  isLoading: false,
  statusCode: 0,
  message: "",
  token: "",
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      return await authService.login(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Reset State
export const logoutUser = createAction("Reset_all");

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Login User
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.user = [];
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.user = action?.payload?.user;
        state.token = action?.payload?.jwt;
        try {
          localStorage.setItem("user-token", action.payload.jwt);
        } catch (error) {
          console.error("Error storing token in local storage:", error);
        }
      })
      .addCase(loginUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.user = [];
      })

      //Reset State
      .addCase(logoutUser, (state) => {
        state.isSuccess = false;
        state.statusCode = 0;
        state.isError = false;
        state.user = [];
        state.token = "";
        state.isAuthenticated = false;
      });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
