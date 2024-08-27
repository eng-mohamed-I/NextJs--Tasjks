import Link from "next/link";
import styles from "./post.module.css";

// ##SSG static side generation .. fully cached

const Post = async ({ params }) => {
  let post;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  post = await response.json();
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Post Details</h2>
      <h4 className={styles.h4}>{post.title}</h4>
      <p className={styles.p}> {post.body} </p>

      <div class={styles.linkes}>
        <Link
          className={styles.prev}
          href={`/post/${
            +params.id - 1 == 0 ? (params.id = 1) : +params.id - 1
          }`}
        >
          Previous
        </Link>
        <Link className={styles.bth} href="/post">
          Back to posts
        </Link>
        <Link className={styles.next} href={`/post/${+params.id + 1}`}>
          Next
        </Link>
      </div>
    </div>
  );
};

export default Post;
