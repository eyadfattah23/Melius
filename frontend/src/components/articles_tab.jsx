
import "../assets/styles/articles_list.css"
import Articles_Card from "./common/articles_card";
import { useState, useEffect } from "react";
import Button from "./common/button";
import { Link } from "react-router-dom";
import PageNums from "./common/pagination";
import fetchContent from "../functions/fetch_content";
import Tab from "./tab";
function Articles_list({articleOfTheWeek}) {
  const [loading, setLoading] = useState(false);
  const [activeTabName, setActiveTabName] = useState("most_liked");
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [articles, setArticles] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"))
  useEffect(() => {
    if(articleOfTheWeek)
    {
      fetchContent("articles",token, pageNum, 4, null, setTotalPages, setLoading, setActiveTabName, activeTabName, setArticles);
    }
  }, [pageNum, articleOfTheWeek, activeTabName]);

 

 
  return (
    <section className="articles_section flex flex-col justify-center items-center  px-16">
      {articles ? (
        <div  className="flex flex-col gap-4">
          <div className="header flex flex-col gap-4 lg:flex-row lg:items-center">
  <h1>Articles</h1>
  <Tab
    pageNum={pageNum}
    setTotalPages={setTotalPages}
    setContent={setArticles}
    setLoading={setLoading}
    contentType={"articles"}
    activeTabName={activeTabName}
    setActiveTabName={setActiveTabName}
  />
</div>


          <div value="most_liked" className="content flex flex-col items-center gap-8">
            <div className="articles_list grid grid-cols-1 sm:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <Articles_Card
                  key={index}
                  orientation="vertical"
                  id={article.id}
                  title={article.title}
                  published_date={article.created_at}
                  likes={article.likes_count}
                  liked={article.liked}
                  img={article.img}
                />
              ))}
            </div>
            <PageNums totalPages={totalPages} pageNum={pageNum} setPageNum={setPageNum}/>
          </div>
        </div>
      ) : (
        <div className="no_articles flex flex-col gap-4 items-center">
          <h4>We're sorry, but there are currently no articles to display.</h4>
          <div className="description gap-2 flex flex-col ">
            <p>Please check back later or explore other sections of our website for more content.</p>
            <p>If you have any specific topics you're interested in, feel free to contact us. We would love to hear your suggestions!</p>
          </div>
         
          <Link to="/contact">
            <Button text="Contact us" type="cta_filled" />
          </Link>
        </div>
      )}
    </section>
  );
}

export default Articles_list;
