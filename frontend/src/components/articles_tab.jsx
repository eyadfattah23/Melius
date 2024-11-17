
import "../assets/styles/articles_list.css"
import Articles_Card from "./common/articles_card";
import { useState, useEffect } from "react";
import Button from "./common/button";
import { Link, useNavigate } from "react-router-dom";
import PageNums from "./common/pagination";
import fetchContent from "../functions/fetch_content";
import Tab from "./common/tab";
function Articles_list({articleOfTheWeek}) {
  const [loading, setLoading] = useState(false);
  const [activeTabName, setActiveTabName] = useState("newest");
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [articles, setArticles] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"))
  const navigate = useNavigate()
  useEffect(() => {
    if(articleOfTheWeek)
    {
      fetchContent("articles",token, pageNum, 4, null, setTotalPages, setLoading, setActiveTabName, activeTabName, setArticles, null, navigate);
    }
    console.log(articles)
  }, [pageNum, articleOfTheWeek, activeTabName]);

 

 
  return (
    <section className="articles_section  px-6  lg:px-20 py-16 bg-[#F2F2F2]">
      {articles ? (
        <div  className="flex flex-col gap-12  justify-center items-center w-full">
          <header className=" flex flex-col gap-4 lg:flex-row lg:items-center justify-between w-full">
  <h1 className="text-center lg:text-left">{activeTabName=== "oldest" ? "Oldest Articles": activeTabName=== "most_liked" ? "Most Liked Articles": "Latest Articles"}</h1>
  <Tab
    pageNum={pageNum}
    setTotalPages={setTotalPages}
    setContent={setArticles}
    setLoading={setLoading}
    contentType={"articles"}
    activeTabName={activeTabName}
    setActiveTabName={setActiveTabName}
  />
</header>


            <div className=" grid lg:grid-cols-3 grid-cols-auto gap-8  w-full">
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
                  author={article.author}
                />
              ))}
            </div>
            <PageNums totalPages={totalPages} pageNum={pageNum} setPageNum={setPageNum}/>
         
        </div>
      ) : (
        <div className="h-screen pt-16 flex flex-col gap-4 lg:px-16 px-6 justify-center items-center">
        <h4 className="text-center">We're sorry, but there are currently no articles to display.</h4>
          <p className="paragraph text-center text-[#363636]">Please check back later or explore other sections of our website for more content.</p>
      </div>
      )}
    </section>
  );
}

export default Articles_list;
