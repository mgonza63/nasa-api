// require('dotenv').config();

const api_key = "vT69ltJMZ0A3j8U3hAOmZaGjMCL65ASmfBtIPKu4"

const queryURL = 'https://api.nasa.gov/planetary/apod?api_key=vT69ltJMZ0A3j8U3hAOmZaGjMCL65ASmfBtIPKu4'

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.nasa.gov/planetary/apod?api_key=vT69ltJMZ0A3j8U3hAOmZaGjMCL65ASmfBtIPKu4\n", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result.hdurl))
    .catch(error => console.log('error', error));