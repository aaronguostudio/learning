# Implicit Grant and Authorization code grand type

## Authorization code grand type
- return both access token and refresh token

## implicit Grant
- no authorizon_code, only return access token


## ID Token and Access Token
- ID token
```js
{
  "iss": "http://YOUR_AUTH0_DOMAIN/",
  "sub": "auth0|123456",
  "aud": "YOUR_CLIENT_ID",
  "exp": 1311281970,
  "iat": 1311280970,
  "name": "Jane Doe",
  "given_name": "Jane",
  "family_name": "Doe",
  "gender": "female",
  "birthdate": "0000-10-31",
  "email": "janedoe@example.com",
  "picture": "http://example.com/janedoe/me.jpg"
}
```

- Access Token
```js
{
  "iss": "https://YOUR_AUTH0_DOMAIN/",
  "sub": "auth0|123456",
  "aud": [
    "my-api-identifier",
    "https://YOUR_AUTH0_DOMAIN/userinfo"
  ],
  "azp": "YOUR_CLIENT_ID",
  "exp": 1489179954,
  "iat": 1489143954,
  "scope": "openid profile email address phone read:appointments email"
}
```