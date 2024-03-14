import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instance from '../axios/axios';
import { toast } from 'react-toastify';

const initialState = {
    loading: false,
    projectListData: {},
    projectData: {}
}


export const createProject = createAsyncThunk('create/projects', async (data, { rejectWithValue }) => {
    try {
        return await instance.post('/projects', data, { withCredentials: true })
    } catch (error) {
        return rejectWithValue(error.responce)
    }
})

export const updateProject = createAsyncThunk('/users/profile', async (data, { rejectWithValue }) => {
    try {
        return await instance.patch('/users/profile', data, { withCredentials: true })
    } catch (error) {
        return rejectWithValue(error.responce)
    }
})


export const projectList = createAsyncThunk('projects', async (params, { rejectWithValue }) => {
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
            .addCase(createProject.pending, (state) => {
                state.loading = true;
                state.loading = false;
                state.projectData = {};
            })
            .addCase(createProject.fulfilled, (state, action) => {
                state.loading = false;
                state.projectData = action.payload;
                toast.success(action.payload.message);
            })
            .addCase(createProject.rejected, (state) => {
                state.loading = false;
                state.projectData = {};
            })


            .addCase(projectList.pending, (state) => {
                state.loading = true;
                state.projectListData = {};
            })
            .addCase(projectList.fulfilled, (state, action) => {
                state.loading = false;
                state.projectListData = action.payload;
            })
            .addCase(projectList.rejected, (state) => {
                state.loading = false;
                state.projectListData = {};
            })
    },
})

export default projectSlice.reducer