import Link from "next/link";
import styles from "./post.module.css";

const Posts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return (
    <div className={styles.container}>
      <h2>posts</h2>
      <div className={styles.main}>
        {posts.map((post) => (
          <div className={styles.card} key={post.id}>
            {" "}
            <div>{post.title}</div>
            <h4>content</h4>
            <div>{post.body}</div>
            <Link href={`/post/${post.id}`}>show more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
