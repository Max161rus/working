const initialState = {
  count: 0
}

const ADD_COUNT = 'ADD_COUNT';
const DEC_COUNT = 'DEC_COUNT';

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {...state, count: state.count + 1}
    case DEC_COUNT:
      return {...state, count: state.count - 1}
    default:
      return state
  }
}