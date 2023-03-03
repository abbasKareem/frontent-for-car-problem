import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// Get user from localstorage
const token = JSON.parse(localStorage.getItem("tokens"))
const initalState = {
  tokens: token ? token : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  error: null,
}

export const get_user_info = createAsyncThunk("me/user_info", async (userData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.access_token
    const response = await axios.post("https://car-problem.onrender.com/auth/jwt/create/", userData)

    if (response.data) {
      localStorage.setItem("tokens", JSON.stringify(response.data))
    }
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const meSlice = createSlice({
  name: "me",
  initialState: initalState,
  reducers: {
    reset_tokens: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
      state.tokens = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_user_info.pending, (state) => {
        state.isLoading = true
      })
      .addCase(get_user_info.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tokens = action.payload
      })
      .addCase(get_user_info.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.payload
        state.tokens = null
      })
  },
})

export const { reset_tokens } = meSlice.actions
export default meSlice.reducer
