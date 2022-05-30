import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {Account} from "../../models/types"

type initStateType = {
    accountList: Account[],
}

const initAccounts = [
    {userName: "admin",
    password: "Admin1",
    accType: "admin"},
    {userName: "miguel1",
    password: "Essilor2022",
    accType: "trainee"},
]

const initialState: initStateType = {
    accountList: initAccounts,
}

export const accSlice = createSlice({
    name:"accSlice",
    initialState,
    reducers: {
        addAccount: (state, action: PayloadAction<Account>) => {
            state.accountList.push(action.payload);
        },
        delAccount: (state, action: PayloadAction<{uName:string}>) => {
            state.accountList.filter((acc) => acc.userName !== action.payload.uName)
        }
    }
}
);

export const {addAccount, delAccount} = accSlice.actions;
export default accSlice.reducer; 