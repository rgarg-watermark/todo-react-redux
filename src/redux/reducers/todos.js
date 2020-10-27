import { ADD_TODO, TOGGLE_TODO, CHANGE_TODO_STATUS } from "../actions/actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content, tags } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            tags,
            deleted: false,
            status: 'not_start'
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            deleted: !state.byIds[id].deleted
          }
        }
      };
    }
    case CHANGE_TODO_STATUS: {
      const { id, status } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            status
          }
        }
      };
    }
    // case SEARCH_TODO: {
    //   const { keyword } = action.payload;
    //   const tags = state.content.filter((val) => val.includes(keyword));
    //   return {...state, keyword, tags};
    // }
    default:
      return state;
  }
}
