import { configureStore } from "@reduxjs/toolkit";
import FetchSlice from "./FetchSlice";
const store=configureStore({
    reducer:{
        FetchData:FetchSlice
    }
})
export default store