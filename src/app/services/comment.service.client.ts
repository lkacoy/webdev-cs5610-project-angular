export class CommentServiceClient {


  createComment(comment) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/comment', {
      method: 'post',
      body: JSON.stringify(comment),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findCommentsByPost(postId) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/comment/post/' + postId)
      .then(response => response.json());
  }

  deleteComment(comment) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/comment', {
      method: 'delete',
      body: JSON.stringify(comment),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  editComment(comment) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/comment', {
      method: 'put',
      body: JSON.stringify(comment),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
