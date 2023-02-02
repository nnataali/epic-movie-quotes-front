import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', email: '', id: '' };

const userDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
  },
});
export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;