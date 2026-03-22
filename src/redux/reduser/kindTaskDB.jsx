import { createSlice } from "@reduxjs/toolkit";
const initialState=
{
    kindTaskDB:[]
    
}

export const SliceKindTaskDB=createSlice({
    name:"kindTaskDB",
    initialState,
    reducers:{

        fillkindTaskDB:(state , action)=>
        {
            state.kindTaskDB = action.payload
        }

    }  
})
   export const{fillkindTaskDB}=SliceKindTaskDB.actions
   export default SliceKindTaskDB.reducer
