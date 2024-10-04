import {createAsyncThunk} from "@reduxjs/toolkit";

type Callback = (params: any) => any;

export const thunkWrapper = (prefix: string, callback: Callback): any => {
  const name = `${prefix}/${callback.name}`;
  return createAsyncThunk(name, async (params, thunkAPI) => {
    try {
      const response = await callback(params);

      const data = await response.data;
      let resp: {};

      if (response.status === 200) {
        resp = [...data];
      } else {
        resp = thunkAPI.rejectWithValue(data);
      }

      return resp;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  });
};
