const axiosLib = require("axios");
const fs = require("fs");

const WILCO_ID = process.env.WILCO_ID || fs.readFileSync('../.wilco', 'utf8')

const baseURL = 'http://wilco-engine.herokuapp.com';
const axios = axiosLib.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});

async function sendEvent(event, metadata, async=true) {
  const sendEventCall = async function() { 
    axios.post(`/users/${WILCO_ID}/event`, 
      JSON.stringify({ event, metadata }),
      {
        validateStatus: function (status) {
         return status < 500; // Resolve only if the status code is less than 500
        }
      }
    ); 
  }

  if (async) {
    const result = await sendEventCall();
    return result.data;
  }
  else {
    sendEventCall();
  }
  
}

module.exports = {
  sendEvent,
}
