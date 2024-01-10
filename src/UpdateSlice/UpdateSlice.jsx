import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidepage: true,
};

const UpdateSlice = createSlice({
    name:'update',
    initialState:initialState,
    reducers: {
        ShowSidepage:(state)=> {
            state.sidepage = true;
        },

        CloseSidepage:(state)=> {
            state.sidepage = false;
        },
    },
});

export default UpdateSlice.reducer;

export const {ShowSidepage, CloseSidepage} = UpdateSlice.actions;