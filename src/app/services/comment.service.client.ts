export class CommentServiceClient {


  createComment(comment) {
    return fetch('http://localhost:3000/api/comment', {
      method: 'post',
      body: JSON.stringify(comment),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
