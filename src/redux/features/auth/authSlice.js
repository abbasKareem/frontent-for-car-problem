import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import authService from "./authService.js"

// Get user from localstorage
const user = JSON.parse(localStorage.getItem("user"))
const tokens = JSON.parse(localStorage.getItem("tokens"))
const initalState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  error: null,
  access_token: tokens ? tokens.access : "",
  refresh_token: tokens ? tokens.refresh : "",
}

// Register user
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  try {
    return await authService.register(user)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

// Logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.access_token = action.payload.access
        state.refresh_token = action.payload.refresh
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
        state.user = null
        state.access_token = ""
        state.refresh_token = ""
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
