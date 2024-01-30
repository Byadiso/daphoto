import { ADD_COMMENT, ADD_LIKE } from './ActionsType.jsx';

const initialState = {
  comments: [],
  likes: 0,
  // Add other initial states for photo uploads, text posts, etc.
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case ADD_LIKE:
      return {
        ...state,
        likes: state.likes + action.payload,
      };
    // Add cases for other actions here
    default:
      return state;
  }
};

export default rootReducer;
