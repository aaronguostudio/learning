# Firebase

- Install [Firebase CLI](https://firebase.google.com/docs/cli#install-cli-mac-linux)

```bash
# After install, run
firebase login

# Some useful commands
firebase projects:list
```

## Authentication

### Custom Authentication

- [Documentation]
  - [custom auth](https://firebase.google.com/docs/auth/web/custom-auth)
  - [custom token](https://firebase.google.com/docs/auth/admin/create-custom-tokens)

- Authentication flow
  - client login
  - server authenticate and also request firebase token
  - server use firebase admin app
  - add security rules for client
  - client use the token to login

## Firestore

### Learning Materials

- [YouTube Firebase Official](https://www.youtube.com/watch?v=v_hR4K4auoQ&list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ&index=2&t=0s)
