import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import EventsSlice from "./slices/EventsSlice";

const eventoStore = configureStore({
    reducer :{
        auth : AuthSlice,
        events : EventsSlice,
    }
})

export default eventoStore;