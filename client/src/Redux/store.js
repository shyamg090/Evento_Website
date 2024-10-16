import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";

const eventoStore = configureStore({
    reducer :{
        auth : AuthSlice
    }
})

export default eventoStore;