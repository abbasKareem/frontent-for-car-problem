import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/auth/authSlice"
import meReducer from "./features/me/meSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user_info: meReducer,
  },
  devTools: true,
})
