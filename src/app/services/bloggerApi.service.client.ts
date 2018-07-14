export class BloggerApiServiceClient {
  FIND_BY_TAG = 'https://api.tumblr.com/v2/tagged?tag=KEYWORD&limit=LIMIT&api_key=fe1SEpCDiutEE7EDxpcnSo3RhfLoUjUNq0d7mk2xbnW2q1uesn';


  findPostsBySearchCriteria(keyword, limit)  {
    const url = this.FIND_BY_TAG.replace('KEYWORD', keyword).replace('LIMIT', limit);
    return fetch(url)
      .then(response => response.json());
  }
}
