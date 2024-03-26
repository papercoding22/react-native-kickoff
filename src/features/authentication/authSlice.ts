import {createSlice} from '@reduxjs/toolkit';

interface Auth {
  isSignedIn: boolean;
}

const initialState: Auth = {
  isSignedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
  },
});

export const {setIsSignedIn} = authSlice.actions;

export default authSlice.reducer;
