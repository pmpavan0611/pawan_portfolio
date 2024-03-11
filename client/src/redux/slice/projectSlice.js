import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instance from '../axios/axios';

const initialState = {
    projectListData: {},
    projectData: {}
}


export const projectList = createAsyncThunk('projects', async ( { rejectWithValue }) => {
    try {
        return await instance.get(`/projects`)
    } catch (error) {
        return rejectWithValue(error.responce)
    }
})


const projectSlice = createSlice({
    name: 'project',
    initialState: initialState,
    reducers: {},

    //***************   Create Product ******************/

    extraReducers: (builder) => {
        builder
            .addCase(projectList.pending, (state) => {
                state.loading = false;
                state.projectData = {};
            })
            .addCase(projectList.fulfilled, (state, action) => {
                state.loading = false;
                state.projectData = action.payload;
            })
            .addCase(projectList.rejected, (state) => {
                state.loading = false;
                state.projectData = {};
            })
    },
})

export default projectSlice.reducer