export class PostServiceClient {

  createPost(post) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/post', {
      method: 'post',
      body: JSON.stringify(post),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deletePost(post) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/post', {
      method:'delete',
      body: JSON.stringify(post),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findPostById(postId) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/post/'+postId)
      .then(response => response.json());
  }

  findPostsForUser(username) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/post/user/' + username)
      .then(response => response.json());
  }

  findAllPosts() {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/post')
      .then(response => response.json());
  }

  searchPosts(query) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/post/search', {
      method: 'post',
      body: JSON.stringify(query),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  updatePost(post) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/post', {
      method: 'put',
      credentials: 'include',
      body: JSON.stringify(post),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
