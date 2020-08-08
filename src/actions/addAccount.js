export const addAccount = account => {
  return dispatch => {
    dispatch({ type: 'ADDING_ACCOUNT' });
    fetch('/accounts', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(account),
    })
      .then(res => res.json())
      .then(account => dispatch({ type: 'ACCOUNT_ADDED', payload: account }));
  };
};
