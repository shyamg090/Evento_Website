import { createSlice } from "@reduxjs/toolkit";

const initial_event = {
    _id : '',
    eventname: '',
    hostedby: '',
    description: '',
    location: '',
    date: '',
    time: '',
    price: '',
    category: '',
    eventimage: null
}

const EventsSlice = createSlice({
    name : 'events',
    initialState : {
        events : [],
        editingevent : initial_event
    },
    reducers : {
        saveevents : (state, action)=>{
            state.events = [...state.events, ...action.payload]
        },
        editevent : (state,action)=>{
            state.editingevent = {...action.payload}
        },
        cleareditevent : (state,action)=>{
            state.editingevent = initial_event
        }
    }
})
export const {saveevents, editevent, cleareditevent} = EventsSlice.actions;
export default EventsSlice.reducer;