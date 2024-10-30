import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface SessionState {
  session: any; // Replace 'any' with the appropriate type if known
  status: string;
}

const initialState: SessionState = { session: null, status: "loading" };
const hydrator = createAction<SessionState>(HYDRATE);
const sessionSlice = createSlice({
  name: "localSession",
  initialState,
  reducers: {
    updateSession: (state, action: PayloadAction<{ session: any; status: string }>) => {
      state.session = action.payload.session;
      state.status = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hydrator, (state, action: PayloadAction<SessionState>) => {
        state.session = action.payload;
      })
      .addDefaultCase((state, action) => { });
  },
});

export const sessionReducer = sessionSlice.reducer;

export const { updateSession } = sessionSlice.actions;
