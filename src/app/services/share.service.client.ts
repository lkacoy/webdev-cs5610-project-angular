export class ShareServiceClient {

  createShare(share) {
    return fetch('http://localhost:3000/api/share', {
      method: 'post',
      body: JSON.stringify(share),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findSharesForPost(postId) {
    return fetch('http://localhost:3000/api/share/post/' + postId)
      .then(response => response.json());

  }
}
