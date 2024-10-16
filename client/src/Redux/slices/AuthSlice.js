import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    username : null,
    isAuthenticated : false
}

const AuthSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        userLoggedin : (state, action) =>{
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        userLoggedout : (state)=>{
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})

export const {userLoggedin, userLoggedout} = AuthSlice.actions;

export default AuthSlice.reducer;

