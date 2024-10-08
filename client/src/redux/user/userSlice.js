import {createSlice} from '@reduxjs/toolkit';
const initialState ={
    currentUser:null,
    error:null,
    loading:false,
};

const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        SignInStart:(state)=>{
            state.loading=true;
        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        updateUserStart: (state)=>{
            state.loading=true;
        },
        updateUserSuccess: (state,action) =>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        updateUserFailure: (state,action) =>{
            state.error =action.payload;
            state.loading=false;
        
        },
        deleteUserStart:(state)=>{
            
            state.loading=false;
            
        },
        deleteUserFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        deleteUserSuccess:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=null;
        },
        signOutUserStart:(state)=>{
            
            state.loading=false;
            
        },
        signOutUserFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        signOutUserSuccess:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=null;
        }



    },
});
export const {SignInStart,signInSuccess,signInFailure,updateUserFailure,updateUserSuccess,updateUserStart,
    deleteUserFailure,deleteUserStart,deleteUserSuccess,signOutUserFailure,signOutUserStart,signOutUserSuccess

} =userSlice.actions;
export default userSlice.reducer;