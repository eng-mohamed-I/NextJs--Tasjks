"use client";

import Link from "next/link";
import style from "./header.module.css";
import { useParams, usePathname } from "next/navigation";
const Header = () => {
  let path = usePathname();
  return (
    <header className={style.container}>
      <h1 className={style.h1}>My First Next App</h1>
      <Link
        className={`${style.navItem} ${path == "/" ? style.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${style.navItem} ${path == "/post" ? style.active : ""}`}
        href="/post"
      >
        Posts
      </Link>
      <Link
        className={`${style.navItem} ${path == "/blog" ? style.active : ""}`}
        href="/blog"
      >
        Blog
      </Link>
      <Link
        className={`${style.navItem} ${path == "/aboutus" ? style.active : ""}`}
        href="/aboutus"
      >
        About Us
      </Link>
      <Link
        className={`${style.navItem} ${
          path == "/contactus" ? style.active : ""
        }`}
        href="/contactus"
      >
        Contact Us
      </Link>
      <Link
        className={`${style.navItem} ${path == "/login" ? style.active : ""}`}
        href="/login"
      >
        Login
      </Link>
    </header>
  );
};

export default Header;
