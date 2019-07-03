//const API = 'https://cors-anywhere.herokuapp.com/http://api.stackexchange.com/docs/search';
const API = 'http://api.stackexchange.com/2.2/search';


export const getData = (filter) => dispatch => {
    let condition = filter ? '?' + filter : '';
    fetch(API + condition).then(response => response.json())
      .then(response => dispatch(afterGetData(response)))
      .catch(function (error) { console.log("ERROR=" + error) })
  }
  
  export function afterGetData(response) {
    return {
      type: 'GET_DATA',
      data: response
    }
  }