// Post schema
class Post {
  comments: ?Array<Comment>;
  content: string;
  date: Date;
  id: string;
  image: ?string;
  link: ?Object;
  user: ?Object;
  likes: number;
  categories: Array<string>;
}
