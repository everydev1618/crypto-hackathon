import axios from 'axios'

export default function createToken(values) {
  return axios.get(`/api/token?name=${values.name}&sym=${values.sym}&totalSupply=${values.supply}&accounts=${values.accounts}`).then((res)=> {
    console.log(res);
  })
}