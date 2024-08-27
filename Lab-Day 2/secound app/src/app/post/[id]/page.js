import Link from "next/link";
import styles from "./post.module.css";

const Post = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();
  return (
    <div className={styles.container}>
      <h2>Post Details</h2>
      <h4>{post.title}</h4>
      <p> {post.body} </p>
      <Link href="/post">Back to posts</Link>
    </div>
  );
};

export default Post;
