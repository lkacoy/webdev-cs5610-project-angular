export class ShareServiceClient {

  createShare(share) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/share', {
      method: 'post',
      body: JSON.stringify(share),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findSharesForPost(postId) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/share/post/' + postId)
      .then(response => response.json());

  }

  findSharesForUser(username) {
    return fetch('https://cs5610project-node-lexi.herokuapp.com/api/share/user/' + username)
      .then(response => response.json());
  }
}
