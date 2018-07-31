export class UserServiceClient {

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:3000/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      if (response != null) {
        return response.json()
      }else {
        return;
      }
    });
  }

  logout() {
    return fetch('http://localhost:3000/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('http://localhost:3000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

}
