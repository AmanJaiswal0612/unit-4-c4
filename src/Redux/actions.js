// use axios for api call
import axios from "axios";
import { ADD_DATA } from "./actionTypes";

export const MEN_SORT="MEN_SORT"
export const WOMEN_SORT="WOMEN_SORT"
export const CHILD_SORT="CHILD_SORT"
export const HOME="HOME"
// export const GET_TODO_LOADING= "GET_TODO_LOADING";
// export const GET_TODO_ERROR= "GET_TODO_ERROR";
export const adddata= (payload)=>{
  return {
      type:ADD_DATA,
      payload
  }
}
// export const getTodoLoading= ()=>{
//     return{
//         type: GET_TODO_LOADING
//     }
// }

// export const getTodoError= ()=>{
//     return{
//         type: GET_TODO_ERROR
//     }
// }


const getProductsData = () => (dispatch)=>{
    fetch(`https://movie-fake-server.herokuapp.com/products`)
    .then((res)=>res.json())
    .then((res)=>dispatch(adddata(res)));
    
    
}

export const womensort=()=>{
    return{
        type: WOMEN_SORT
    }
}



export const childsort=()=>{
    return{
        type: CHILD_SORT
    }
}
export const homesort=()=>{
    return{
        type: HOME
    }
}

export const mensort= ()=>{
    return{
        type:MEN_SORT
    }
}


export const htolow= ()=>{
    return{
        type:"HIGHTOLOW"
    }
}
export const ltohigh= ()=>{
    return{
        type:"LOWTOHIGH"
    }
}


const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
