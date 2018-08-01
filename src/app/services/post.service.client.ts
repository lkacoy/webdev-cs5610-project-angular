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
}
