import Navbar from "../components/common/navbar";
import Articles_Card from "../components/common/articles_card";
import "../assets/styles/articles.css";
import Articles_list from "../components/articles_tab";
import { useState, useEffect } from "react";

import fetchContent from "../functions/fetch_content";
function Articles() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [activeTabName, setActiveTabName] = useState("Most Liked");
  const [articleOfTheWeek, setArticleOfTheWeek] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
 const token = JSON.parse(localStorage.getItem("token"))

 useEffect(() => {
  fetchContent("articles", token, 1, 1, null, setTotalPages, setLoading, setActiveTabName, "newest", setArticles);
}, []);

useEffect(() => {
  if (articles.length > 0) {
    setArticleOfTheWeek(articles[0]);
  }
}, [articles]);

  return (
    <>
      <Navbar />
     <main className="main_layout">
     <section className="main_article_section">
     <h1>Our Latest Article</h1>
          
          {articleOfTheWeek ? (
              <Articles_Card 
                orientation={"horizontal"} 
                id={articleOfTheWeek.id}
                title={articleOfTheWeek.title}
                published_date={articleOfTheWeek.created_at}
                likes={articleOfTheWeek.likes_count}
              />
          ) : (
            <p>Loading article of the week...</p>
          )}
      
      </section>
     </main>

      
        <Articles_list articles={articles} setArticles={setArticles}/>
      
    </>
  );
}

export default Articles;
