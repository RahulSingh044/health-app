import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the User type
export interface User {
  name: string;
}

// Define the initial state of the user
interface UserState {
  user: User | null;
}

// Initial state
const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload; // Set the user
    },
    clearUser: (state) => {
      state.user = null; // Clear the user
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
