const initialState = {
  item: [],
  active:'',
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEM':
      return { ...state, item: action.payload };
      case 'ACTIVE_COM':
        return { ...state, active: action.payload };
    default:
      return state;
  }
};

export default itemReducer;
