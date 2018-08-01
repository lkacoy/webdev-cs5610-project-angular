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
}
