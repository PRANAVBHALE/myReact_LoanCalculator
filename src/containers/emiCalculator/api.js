//import axios from 'axios';
import axios from 'axios'


export function getEmi(loanAmount,duration) {  

  return axios({
    method: "get",
    url: `https://ftl-frontend-test.herokuapp.com/interest?amount=${loanAmount}&numMonths=${duration}`  
  });
}