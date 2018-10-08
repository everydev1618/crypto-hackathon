import axios from 'axios'

export const createToken = (values) => {
  return (dispatch) => {
    let route = `/api/token?name=${values.name}&sym=${values.sym}&totalSupply=${values.supply}&accounts=${values.accounts}`
    dispatch({
      type: 'GET_TOKEN',
      payload: axios.get(route)
        .then((res) => {
          return res
        })
    })
  }
}