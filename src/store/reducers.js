import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_BEGIN,
  FETCH_CARDS_FAIL,
  ADD_CARD,
} from "./actions";

const initialState = {
  items: [],
  isFetching: false,
  isError: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CARDS_BEGIN:
      return { ...state, isFetching: true };
    case FETCH_CARDS_SUCCESS:
      return { ...state, isFetching: false, items: payload };
    case FETCH_CARDS_FAIL:
      return {
        ...state,
        isFetching: false,
        isError: true,
        error: payload,
      };
    case ADD_CARD:
      return {
        ...state,
        items: [...state.items, payload],
      };
    default:
      return state;
  }
};
export default reducer;
