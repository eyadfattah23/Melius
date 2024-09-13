import Navbar from "../components/common/navbar";
import Articles_Card from "../components/common/articles_card";
import "../assets/styles/articles.css";
import Articles_list from "../components/articles_tab";
import { useState, useEffect } from "react";
import fetchContent from "../functions/fetch_content";
import Footer from "../components/footer";
import Create_Article from "../components/common/create_article";

function Articles() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [activeTabName, setActiveTabName] = useState("most_liked");
  const [articleOfTheWeek, setArticleOfTheWeek] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
 const token = JSON.parse(localStorage.getItem("token"))
 const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))

 useEffect(() => {
  fetchContent("articles", token, 1, 1, null, setTotalPages, setLoading, setActiveTabName, "newest", setArticles, setArticleOfTheWeek);
  console.log(articleOfTheWeek)
}, []);

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
      
        {
          isAdmin && <div style={{position: "absolute", right: "64px", top: "100px"}}>
<Create_Article/>
          </div>
        }
        <Articles_list articleOfTheWeek = {articleOfTheWeek}/>
     </main>
     <Footer/>

      
      
    </>
  );
}

export default Articles;
