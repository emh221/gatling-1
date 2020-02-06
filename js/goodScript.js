const axios = require('axios');

axios.get('http://ec2-52-70-123-221.compute-1.amazonaws.com/')
    .then(response => {
      console.log(response)
    })
    .catch(error =>{
      console.log(error)
    })
