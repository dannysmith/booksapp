const fetch = require('node-fetch')

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY

exports.handler = function(event, context, callback) {
  fetch('https://api.airtable.com/v0/appB4V75drkeQ0rJc/Books', {
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + AIRTABLE_API_KEY,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      callback(null, {
        statusCode: 200,
        body: json,
      })
    })
}
