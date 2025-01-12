import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../actions/productActions";

const initialState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  statusCode: 0,
  message: null,
};

export const getProducts = createAsyncThunk("product_get", async (thunkAPI) => {
  try {
    return await productService.getProducts();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getProductDetail = createAsyncThunk(
  "product_detail",
  async (payload, thunkAPI) => {
    try {
      return await productService.getProductDetail(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action?.payload?.message;
        state.statusCode = action?.payload?.status;
        state.isSuccess = true;
        state.products = action?.payload?.data;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.products = [];
      });
  },
});

const productReducer = productSlice.reducer;

export default productReducer;
