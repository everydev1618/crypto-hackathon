const defaultState = {
  ledger: [],
  name: '',
  sym: ''
}

export default function TokenReducer(state = defaultState, action) {
  const { payload, type } = action;
  switch(type) {
    case 'GET_TOKEN_PENDING': {
      console.log('pending')
      return {...state}
    }
    case 'GET_TOKEN_FULFILLED': {
      let data = payload.data;
      return {...state, ledger: data.ledger, name: data.name, sym: data.sym}
    }
    case 'GET_TOKEN_REJECTED': {
      console.log('rejected');
      return {...state}
    }
    default: {
      return state;
    }
  }
}