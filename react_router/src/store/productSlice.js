//API call in reducers

import { createSlice, createASyncThunk } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

// const dispatch = useDispatch();
export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder;
    addCase(fetchProducts.pending, (state, action) => {
      state.status = STATUS.LOADING;
    });
    addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUS.IDLE;
    });
    addCase(fetchProducts.rejected, (state, action) => {
      state.status = STATUS.ERROR;
    });
  },
});

export const { setproducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const response = await fetch("url");
//       const data = await response.JSON();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (error) {
//       console.log("Error Occurs:", error);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }

export const fetchProducts = createASyncThunk("fetch/products", async () => {
  const response = await fetch("url");
  const data = await response.json();
  return data;
});
