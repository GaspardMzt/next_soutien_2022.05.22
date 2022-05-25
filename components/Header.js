import Link from "next/link";
import HeaderStyle from "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/" className={HeaderStyle.link}>
          <a>Home</a>
        </Link>
        <Link href="/articles">
          <a>Articles</a>
        </Link>
      </nav>
    </header>
  );
}
