import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { cartReducer } from "./cart.slice";
import { sessionReducer } from "./session.slice";
import { settingsReducer } from "./settings.slice";

export interface RootState {
  cart: ReturnType<typeof cartReducer>;
  settings: ReturnType<typeof settingsReducer>;
  localSession: ReturnType<typeof sessionReducer>;
}

type Action = {
  type: string;
  payload: any;
};

const combinedReducer = combineReducers<RootState>({
  cart: cartReducer,
  settings: settingsReducer,
  localSession: sessionReducer,
});

const initialState: RootState = {
  cart: cartReducer(undefined, { type: '' }),
  settings: settingsReducer(undefined, { type: '' }),
  localSession: sessionReducer(undefined, { type: '' }),
};

const reducer = (state: RootState = initialState, action: Action): RootState => {
  if (action.type === HYDRATE) {
    const nextState = { ...state };
    if (action.payload.settings) {
      nextState.settings = action.payload.settings;
    }
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV === "development",
  });

export const wrapper = createWrapper(makeStore);
export type AppStore = ReturnType<typeof makeStore>
