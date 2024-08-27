import Link from "next/link";
import styles from "./post.module.css";
import dbConnect from "../../../lib/mogodb";
import { dbPosts } from "../../../data/db";

// ##ISR => Icremantal Static Regeneration (update posts [every 3 sec])##
export const revalidate = 3;

const Posts = async () => {
  let posts = [];

  // Data Base Connection
  const dbConnected = await dbConnect;

  // Database
  const db = dbConnected.db();

  // Collection in Database
  posts = await db.collection("posts").find({}).toArray();

  // fill posts in your in database
  if (posts.length == 0) {
    console.log("posts fill...");
    await db.collection("posts").insertMany(dbPosts);
    posts = await db.collection("posts").find({}).toArray(); //get data after fill
    console.log("Completed, Posts is Ready to use");
  } else {
    console.log("Posts Ready to use", posts.length);
  }

  const timePromise = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

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
