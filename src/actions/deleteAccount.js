export const deleteAccount = account => {
  return dispatch => {
    fetch(`/accounts/${account.id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(account => dispatch({ type: 'DELETE_ACCOUNT', payload: account }));
  };
};
