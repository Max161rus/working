const initialState = {
  sortBy: 'popular'
};

const firstReducer = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload
    };
  }
  return state;
};

const setSortBy = (name) => {
  return {
    type: 'SET_SORT_BY',
    payload: name
  };
};

export default firstReducer;
