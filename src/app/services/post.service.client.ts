export class PostServiceClient {

  createPost(post) {
    return fetch('http://localhost:3000/api/post', {
      method: 'post',
      body: JSON.stringify(post),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deletePost(post) {
    return fetch('http://localhost:3000/api/post', {
      method:'delete',
      body: JSON.stringify(post),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findPostById(postId) {
    return fetch('http://localhost:3000/api/post/'+postId)
      .then(response => response.json());
  }

  findPostsForUser(username) {
    return fetch('http://localhost:3000/api/post/user/' + username)
      .then(response => response.json());
  }

  findAllPosts() {
    return fetch('http://localhost:3000/api/post')
      .then(response => response.json());
  }

  searchPosts(query) {
    return fetch('http://localhost:3000/api/post/search', {
      method: 'post',
      body: JSON.stringify(query),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  updatePost(post) {
    return fetch('http://localhost:3000/api/post', {
      method: 'put',
      credentials: 'include',
      body: JSON.stringify(post),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
