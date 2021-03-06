export class BloggerApiServiceClient {
  FIND_BY_TAG = 'https://api.tumblr.com/v2/tagged?tag=KEYWORD&limit=LIMIT&api_key=fe1SEpCDiutEE7EDxpcnSo3RhfLoUjUNq0d7mk2xbnW2q1uesn';
  FIND_BLOG_INFO = 'https://api.tumblr.com/v2/blog/KEYWORD/info?api_key=fe1SEpCDiutEE7EDxpcnSo3RhfLoUjUNq0d7mk2xbnW2q1uesn';
  FIND_AVATAR = 'https://api.tumblr.com/v2/blog/BLOGNAME/avatar/96';
  FIND_RECENT_POSTS = 'https://api.tumblr.com/v2/blog/BLOGNAME/posts?api_key=fe1SEpCDiutEE7EDxpcnSo3RhfLoUjUNq0d7mk2xbnW2q1uesn';

  findPostsBySearchCriteria(keyword, limit)  {
    const url = this.FIND_BY_TAG.replace('KEYWORD', keyword).replace('LIMIT', limit);
    return fetch(url)
      .then(response => response.json());
  }

  findBlogInfo(id) {
    const url = this.FIND_BLOG_INFO.replace('KEYWORD', id);
    return fetch(url)
      .then(response => response.json());

  }

  findBlogAvatar(blogName) {
    const url = this.FIND_AVATAR.replace('BLOGNAME', blogName);
    return fetch(url)
      .then(response => response.json());
  }

  findRecentBlogPosts(blogName) {
    const url = this.FIND_RECENT_POSTS.replace('BLOGNAME', blogName);
    return fetch(url)
      .then(response => response.json());
  }
}
