import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import instance from '../axios/axios'

const initialState = {
    loading: false,
    loggedInUser: {},
    isUserLoggedIn: localStorage.getItem('token') ? true : false
}

export const login = createAsyncThunk('account/login', async (data, { rejectWithValue }) => {
    try {
        return await instance.post('login', data, { withCredentials: true })

    } catch (error) {
        return rejectWithValue(error.responce)
    }
})

// export const forgotPassword = createAsyncThunk('account/forgotPassword', async (params, { rejectWithValue }) => {
//     try {
//         return await instance.post('forgotPassword', params)
//     } catch (error) {
//         return rejectWithValue(error.responce)
//     }
// })

// export const resetPassword = createAsyncThunk('account/resetPassword', async (params, { rejectWithValue }) => {
//     try {
//         return await instance.post('forgotPasswordVerify', params)
//     } catch (error) {
//         return rejectWithValue(error.responce)
//     }
// })

// export const register = createAsyncThunk('account/register', async (params, { rejectWithValue }) => {
//     try {
//         return await instance.post('register', params)
//     } catch (error) {
//         return rejectWithValue(error.responce)
//     }
// })

// export const logOut = createAsyncThunk('account/logOut', async (params, { rejectWithValue }) => {
//     try {
//         return await instance.get('logout', params)
//     } catch (error) {
//         return rejectWithValue(error.responce)
//     }
// })


const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state,) => {
                state.loading = true
                state.isUserLoggedIn = false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.isUserLoggedIn = true
                state.loggedInUser = action.payload
                toast.success(action.payload.message);
                localStorage.setItem('token', action.payload.token)
            })
            .addCase(login.rejected, (state,) => {
                state.loading = false
                state.isUserLoggedIn = false
            })

        // [forgotPassword.pending]: (state,) => {
        //     state.loading = false
        // },
        // [forgotPassword.fulfilled]: (state, action) => {
        //     state.loading = false
        //     state.isUserLoggedIn = true
        //     toast.success(action.payload.message);
        // },
        // [forgotPassword.rejected]: (state,) => {
        //     state.loading = false
        //     state.isUserLoggedIn = false

        // },

        // [resetPassword.pending]: (state,) => {
        //     state.loading = false
        // },
        // [resetPassword.fulfilled]: (state, action) => {

        //     state.loading = false
        //     toast.success(action.payload.message);


        // },
        // [resetPassword.rejected]: (state,) => {
        //     state.loading = false
        // },

        // [register.pending]: (state,) => {
        //     state.loading = false
        //     state.isUserLoggedIn = false
        // },

        // [register.fulfilled]: (state, action) => {
        //     state.loading = false
        //     state.isUserLoggedIn = true
        //     toast.success(action.payload.message);
        // },

        // [register.rejected]: (state,) => {
        //     state.loading = false
        //     state.isUserLoggedIn = false

        // },


        // [logOut.pending]: (state,) => {
        //     state.loading = false
        // },

        // [logOut.fulfilled]: (state, action) => {
        //     state.loading = false
        //     state.isUserLoggedIn = false
        //     toast.success(action.payload.message);
        //     localStorage.clear()
        // },

        // [logOut.rejected]: (state,) => {
        //     state.loading = false
        // },
    }
})

export default authSlice.reducer