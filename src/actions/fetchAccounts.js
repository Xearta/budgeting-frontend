export const fetchAccounts = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_ACCOUNTS' });
    fetch('/accounts')
      .then(res => res.json())
      .then(accounts => dispatch({ type: 'ACCOUNTS_LOADED', payload: accounts }));
  };
};
