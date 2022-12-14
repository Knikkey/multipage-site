import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import styles from "./Home.module.css";

export default function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");

  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending ? <div>Loading...</div> : null}
      {error ? <div>error</div> : null}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className={styles.card}>
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <Link to={`articles/${article.id}`}>Read more</Link>
          </div>
        ))}
    </div>
  );
}
