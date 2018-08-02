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

  findCommentsByPost(postId) {
    return fetch('http://localhost:3000/api/comment/post/' + postId)
      .then(response => response.json());
  }

  deleteComment(comment) {
    return fetch('http://localhost:3000/api/comment', {
      method: 'delete',
      body: JSON.stringify(comment),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  editComment(comment) {
    return fetch('http://localhost:3000/api/comment', {
      method: 'put',
      body: JSON.stringify(comment),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
