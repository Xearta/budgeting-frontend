export default (state = { accounts: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOADING_ACCOUNTS':
      return {
        ...state,
        loading: true,
      };
    case 'ACCOUNTS_LOADED':
      return {
        ...state,
        accounts: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
