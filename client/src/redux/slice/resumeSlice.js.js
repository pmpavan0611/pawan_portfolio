import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instance from '../axios/axios'

const initialState = {
  userExperienceListData: {},
  userExperienceData: {}
}

// export const createUser = createAsyncThunk('user/create', async (params, { rejectWithValue }) => {
//   try {
//     return await instance.post('users', params)
//   } catch (error) {
//     return rejectWithValue(error.responce)
//   }
// })



export const experience = createAsyncThunk('/experiences', async ({ rejectWithValue }) => {
  try {
    return await instance.get(`/experiences`,)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})





const userSlice = createSlice({
  name: 'experience',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(experience.pending, (state) => {
        state.loading = true;
        state.userExperienceListData = {};
      })
      .addCase(experience.fulfilled, (state, action) => {
        state.loading = false;
        state.userExperienceData = action.payload;
      })
      .addCase(experience.rejected, (state) => {
        state.loading = false;
        state.userExperienceData = {};
      });
  },
});

export default userSlice.reducer