export class Post {
  _id: number;
  username: string;
  postTitle: string;
  postContent: string;
  published: boolean;
  datePublished: string; //must be string and then can format in component.
  dateCreated: string;
  topic: string;
}
