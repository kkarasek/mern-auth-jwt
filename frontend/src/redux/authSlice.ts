import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  userInfo : string | null
}

const storedUserInfo = localStorage.getItem('userInfo');

const initialState: InitialState = {
  userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<string | null>) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    clearCredentials: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo')
    }
  }
})

export const {setCredentials, clearCredentials} = authSlice.actions

export default authSlice.reducer