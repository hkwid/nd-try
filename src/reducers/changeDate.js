let initialDate = {
  fromDate: 0,
  toDate: Date.now()
};

const changeDate = (state = initialDate, action) => {
  switch (action.type) {
  case 'CHANGE_FROM_DATE':
    return Object.assign({}, state, {
      fromDate: action.date
    });

  case 'CHANGE_TO_DATE':
    return Object.assign({}, state, {
      toDate: action.date
    });

  default:
    return state;
  }
};

export default changeDate;
