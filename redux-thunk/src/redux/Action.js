import { FETCH_DATA } from "./ActionType"
import axios from "axios";

export const getData=()=>(dispatch)=>{
     axios
     .get(`https://jsonplaceholder.typicode.com/users`)
     .then((res)=>dispatch(fecthDataAction(res.data)))
     .catch((err)=>console.log("errpr while fetching",err))
}

export const fecthDataAction=(payload)=>{
    return{type :FETCH_DATA,payload};
}