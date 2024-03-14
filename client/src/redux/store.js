import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice';
import userSlice from './slice/userSlice';
import resumeSlice from './slice/resumeSlice.js';
import skillSliceJsCopy from './slice/skillSlice.js';
import serviceSlice from './slice/serviceSlice.js';
import projectSlice from './slice/projectSlice.js';




export const store = configureStore({
  reducer: {
    project: projectSlice,
    auth: authSlice,
    user: userSlice,
    experience: resumeSlice,
    skill: skillSliceJsCopy,
    service:serviceSlice,
  }
});