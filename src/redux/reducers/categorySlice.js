import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categoryService } from "../actions/categoryActions";

const initialState = {
  categories: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  statusCode: 0,
  message: null,
};

export const getCategories = createAsyncThunk(
  "categories_get",
  async (thunkAPI) => {
    try {
      return await categoryService.getCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    postCategory: (state, action) => {
      state.categories = [...state.categories, action?.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action?.payload?.message;
        state.statusCode = action?.payload?.status;
        state.isSuccess = true;
        state.categories = action?.payload?.data;
      })
      .addCase(getCategories.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.categories = [];
      });
  },
});

const categoryReducer = categorySlice.reducer;

export default categoryReducer;
