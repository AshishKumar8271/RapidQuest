import { configureStore } from "@reduxjs/toolkit";
import UpdateSlice from "./UpdateSlice/UpdateSlice.jsx";

const store = configureStore({
    reducer: {
        update:UpdateSlice,
    }
});

export default store;
