import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instance from '../axios/axios'

const initialState = {
  userServiceListData: {},
  userServiceData: {}
}

// export const createUser = createAsyncThunk('user/create', async (params, { rejectWithValue }) => {
//   try {
//     return await instance.post('users', params)
//   } catch (error) {
//     return rejectWithValue(error.responce)
//   }
// })



export const skillsList = createAsyncThunk('/services', async ({ rejectWithValue }) => {
  try {
    return await instance.get(`/services`,)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})





const serviceSlice = createSlice({
  name: 'services',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(skillsList.pending, (state) => {
        state.loading = true;
        state.userServiceListData = {};
      })
      .addCase(skillsList.fulfilled, (state, action) => {
        state.loading = false;
        state.userServiceData = action.payload;
      })
      .addCase(skillsList.rejected, (state) => {
        state.loading = false;
        state.userServiceData = {};
      });
  },
});

export default serviceSlice.reducer