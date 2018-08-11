export class UserServiceClient {

  USER_API = "https://cs5610project-node-lexi.herokuapp.com/api/";

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch(this.USER_API + 'login', {
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
    return fetch(this.USER_API + 'logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch(this.USER_API + 'profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(user) {
    return fetch(this.USER_API + 'register', {
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
    return fetch( this.USER_API + 'profile', {
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

  deleteUser() {
    return fetch(this.USER_API + 'profile', {
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
    return fetch(this.USER_API + 'blogWriter')
      .then(response => response.json());
  }

  getCurrentUserSession() {
    return fetch(this.USER_API + 'session/get/currentUser', {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findAllUsers() {
    return fetch(this.USER_API + 'user')
      .then(response => response.json());
  }

  adminDeleteUser(userId) {
    return fetch(this.USER_API + 'profile/admin/' + userId, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  adminUpdateUser(user) {
    return fetch( this.USER_API + 'profile/admin', {
      method: 'put',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  adminAddUser(user) {
    return fetch( this.USER_API + 'admin', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then (response => response.json());
  }

}
