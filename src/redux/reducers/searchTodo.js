// import {SEARCH} from './actions';
import { SEARCH_TODO } from "../actions/actionTypes";

const initialState = {search: ''};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH_TODO: {
      const {value} = action;
      // const works = state.contents.filter((val) => val.includes(value));
      // return {...state, value, works};

      return {
        ...state,
        search: action.payload.keyword
      }; 

    }
    default:
      return state;
  }
}