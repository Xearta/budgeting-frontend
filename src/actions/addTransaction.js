export const addTransaction = (transaction, accountId) => {
  return dispatch => {
    dispatch({ type: 'ADDING_TRANSACTION' });
    fetch(`/accounts/${accountId}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(transaction),
    })
      .then(res => res.json())
      .then(account => {
        if (account.error) {
          alert(account.error);
        } else {
          dispatch({ type: 'TRANSACTION_ADDED', payload: account });
        }
      });
  };
};
