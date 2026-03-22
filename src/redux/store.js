import { configureStore } from "@reduxjs/toolkit"
import userDB from "./reduser/uaersDB"
import kindTaskDB from "./reduser/kindTaskDB"
import taskDB from "./reduser/taskDB"


export const store=configureStore({
    reducer:{
        userDBReducer:userDB,
        taskDBReducer:taskDB,
        kindTaskDBReducer:kindTaskDB
    }
})