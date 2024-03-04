import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./pages/Authentication/authSlice";

export default configureStore({
    reducer: {
        auth: authSlice,
    },
})