export const makeOperation = (dispatch, inputRef, operation) => {
  dispatch({
    type: operation.action,
    value: Number(inputRef.current.value),
  });

  inputRef.current.value = null;
  inputRef.current.focus();
};

export const getResult = (dispatch, inputRef) => {
  dispatch({ type: 'RESULT', value: Number(inputRef.current.value) });
  inputRef.current.value = null;
  inputRef.current.focus();
};
