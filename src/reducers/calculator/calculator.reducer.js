export const INITIAL_STATE = {
  value1: 0,
  result: null,
  operation: null,
  history: [],
};

const resultReducer = (operation, value1, value2) => {
  switch (operation) {
    case 'SUM':
      return value1 + value2;
    case 'SUB':
      return value1 - value2;
    case 'DIV':
      return value1 / value2;
    case 'MULT':
      return value1 * value2;
  }
};

export const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'SUM':
    case 'SUB':
    case 'DIV':
    case 'MULT':
      return { ...state, value1: action.value, operation: action.type };
    case 'RESULT': {
      return {
        ...state,
        result: resultReducer(state.operation, state.value1, action.value),
        history: [
          ...state.history,
          resultReducer(state.operation, state.value1, action.value),
        ].sort((a, b) => b - a),
      };
    }
    case 'RESET':
      return { ...state, value1: 0, result: 0, operation: null };
    default:
      break;
  }
};
