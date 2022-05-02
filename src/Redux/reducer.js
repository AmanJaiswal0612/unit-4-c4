import { CHILD_SORT, HOME, MEN_SORT, WOMEN_SORT } from "./actions";
import { ADD_DATA } from "./actionTypes";


const initState = {
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {

  switch(type){
    case ADD_DATA :{
      return{
        ...state,products:payload
      }
    }
    case MEN_SORT:{
      let mdata= state.products.filter((el)=>{
        return el.category==="men";
      })
      return{
        ...state,products:[...mdata]
      }
    }
    case WOMEN_SORT:{
      let mdata= state.products.filter((el)=>{
        return el.category==="women";
      })
      return{
        ...state,products:[...mdata]
      }
    }
    case CHILD_SORT:{
      let mdata= state.products.filter((el)=>{
        return el.category==="kids";
      })
      return{
        ...state,products:[...mdata]
      }
    }
    case HOME:{
      let mdata= state.products.filter((el)=>{
        return el.category==="homedecor";
      })
      return{
        ...state,products:[...mdata]
      }
    }
    case "HIGHTOLOW":{
      let ndata=state.products.sort((a,b)=>{
        return b.price-a.price
      })
      return{
        ...state,products:[...ndata]
      }
      
    }
    case "LOWTOHIGH":{
      let ndata=state.products.sort((a,b)=>{
        return a.price-b.price
      })
      return{
        ...state,products:[...ndata]
      }

    }
    default :return state;
  }
};
export { reducer };
