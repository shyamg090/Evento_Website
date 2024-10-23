import { createSlice } from "@reduxjs/toolkit";

const EventsSlice = createSlice({
    name : 'events',
    initialState : {
        events : []
    },
    reducers : {
        saveevents : (state, action)=>{
            state.events = [...state.events, ...action.payload]
        }
    }
})
export const {saveevents} = EventsSlice.actions;
export default EventsSlice.reducer;