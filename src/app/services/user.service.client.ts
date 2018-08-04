export class UserServiceClient {

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/login', {
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
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(user) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
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

  updateUser(user) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/profile', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'put',
      headers:{
        'content-type': 'application/json'
      }
    }).then(response => {
      return response.json();
    });
  }

  deleteUser(username) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/profile', {
      credentials: 'include',
      method: 'delete',
      headers:{
        'content-type': 'application/json'
      }
    }).then(response => {
      return response.json();
    });
  }

  findBlogWriters() {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/blogWriter')
      .then(response => response.json());
  }

  getCurrentUserSession() {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/session/get/currentUser', {
      credentials: 'include'
    })
      .then(response => response.json());
  }

}
