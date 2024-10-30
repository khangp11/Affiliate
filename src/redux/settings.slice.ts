import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import data from "../../data.json";

interface SettingsData {
  color: any;
  loaded: boolean;
  // Add other properties of settingsData as needed
}

interface InitialState {
  settingsData: SettingsData;
}

const initialState: InitialState = { settingsData: data.settings };
const hydrator = createAction<InitialState>(HYDRATE);
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSettings: (state, action: PayloadAction<SettingsData | undefined>) => {
      state.settingsData = action.payload
        ? action.payload
        : initialState.settingsData;
      state.settingsData.loaded = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hydrator, (state, action: PayloadAction<InitialState>) => {
        state.settingsData = action.payload.settingsData;
      })
      .addDefaultCase((state) => { });
  },
});

export const settingsReducer = settingsSlice.reducer;

export const { updateSettings } = settingsSlice.actions;
