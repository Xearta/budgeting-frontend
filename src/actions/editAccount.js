export const editAccount = account => {
  return dispatch => {
    fetch(`/accounts/${account.id}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(account),
    })
      .then(res => res.json())
      .then(account => dispatch({ type: 'EDIT_ACCOUNT', payload: account }));
  };
};
