export class UserServiceClient {

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://node-lexikacoyannakis.herokuapp.com/api/login', {
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
    return fetch('https://node-lexikacoyannakis.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

}
