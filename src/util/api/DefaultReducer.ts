import {createSlice, Slice} from "@reduxjs/toolkit";

export const defaultReducer = (thunk: any): Slice =>
  createSlice({
    name: thunk.typePrefix,
    initialState: {
      data: [],
      isLoading: false,
      error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(thunk.pending, (state) => {
        state.isLoading = true;
      })
      builder.addCase(thunk.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        console.log(state.isLoading);
        state.data = payload.data ?? payload;
      })
      builder.addCase(thunk.rejected, (state, {payload}) => {
        state.isLoading = false
        state.error = payload?.message;
      })
    }
  });
