import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { orderService } from "../actions/orderActions";

const initialState = {
  orders: [],
  isLoading: false,
};

export const getOrders = createAsyncThunk("orders_get", async (thunkAPI) => {
  try {
    return await orderService.getOrders();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    postOrder: (state, action) => {
      state.categories = [...state.categories, action?.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action?.payload?.data;
      })
      .addCase(getOrders.rejected, (state) => {
        state.isLoading = false;
        state.orders = [];
      });
  },
});

const orderReducer = orderSlice.reducer;

export default orderReducer;
