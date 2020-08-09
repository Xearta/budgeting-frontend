export const deleteTransaction = (transactionId, accountId) => {
  return dispatch => {
    fetch(`/accounts/${accountId}/transactions/${transactionId}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(account => dispatch({ type: 'DELETE_TRANSACTION', payload: account }));
  };
};
