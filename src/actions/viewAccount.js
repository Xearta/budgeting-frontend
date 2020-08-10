export const viewAccount = account => {
  return dispatch => {
    fetch(`/accounts/${account.id}`)
      .then(res => res.json())
      .then(account => dispatch({ type: 'ACCOUNT_FOUND', payload: account }));
  };
};
