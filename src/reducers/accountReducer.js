export default (state = { accounts: [], loading: false }, action) => {
  switch (action.type) {
    // Fetch Accounts
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

    // Add Accounts
    case 'ADDING_ACCOUNT':
      return {
        ...state,
        loading: true,
      };
    case 'ACCOUNT_ADDED':
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
        loading: false,
      };

    // Add Transaction
    case 'ADDING_TRANSACTION':
      return {
        ...state,
        loading: true,
      };

    case 'TRANSACTION_ADDED':
      let accounts = state.accounts.map(account => {
        if (account.id === action.payload.id) {
          return action.payload;
        } else {
          return account;
        }
      });
      return {
        ...state,
        accounts: accounts,
      };

    // Default State
    default:
      return state;
  }
};
