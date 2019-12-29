const request = require('request')

const options = {
  method: 'POST',
  url: "https://kudosee.auth0.com/oauth/token",
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({
    'client_id': 'DA4FE1RewxwdbICNo8HEDQAmGsrRc0U0',
    'client_secret': 'oBf1VI5AFFCZ5aV0hLerA6ry7qEkV3DpLwLrBP0952eal_WSHPUWusFvxcxmhOXG',
    'audience': 'https://kudosee.auth0.com/api/v2/',
    'grant_type': 'client_credentials'
  })
}

request(options, function (error, response, body) {
  if (error) console.log('> error', error)

  console.log(body);
});