import Navbar from "../components/navbar";
import Articles_Card from "../components/articles_card";
import "../assets/styles/articles.css";
import Articles_list from "../components/articles_tab";
import { useState, useEffect } from "react";
import axios from "axios";
import fetchContent from "../functions/fetch_content";
function Articles() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [activeTabName, setActiveTabName] = useState("Most Liked");
  const [articleOfTheWeek, setArticleOfTheWeek] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
 

  useEffect(() => {
    fetchContent("articles",1, 1, null, setTotalPages, setLoading, setActiveTabName, "newest", setArticles, setArticleOfTheWeek);
  }, []);

  return (
    <>
      <Navbar />
      <section className="main_article_section">
        <div className="container">
          <h1>Our Latest Article</h1>
          {articleOfTheWeek ? (
            <div className="main_article_card">
              {/* <Articles_Card 
                orientation={"horizontal"} 
                id={articleOfTheWeek.id}
                title={articleOfTheWeek.title}
                published_date={articleOfTheWeek.created_at}
                likes={articleOfTheWeek.likes_count}
              /> */}
            </div>
          ) : (
            <p>Loading article of the week...</p>
          )}
        </div>
      </section>

      {/* <section className="articles_section">
        <Articles_list articles={articles} setArticles={setArticles}/>
      </section> */}
    </>
  );
}

export default Articles;
