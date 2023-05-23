import '@popperjs/core';
import axios from 'axios';
import 'bootstrap';

// Style
import './../style/index.scss';

axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
