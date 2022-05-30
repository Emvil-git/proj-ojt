import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { accSlice } from "./slices/AccountsSlice";

const reducers = combineReducers({
    accList:accSlice.reducer,
});

const store = configureStore({
    reducer:{reducers},
}
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;