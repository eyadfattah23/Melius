import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/shadcn/ui/tabs";
import "../assets/styles/articles_list.css"
import Articles_Card from "./common/articles_card";
import { useState, useEffect } from "react";
import Button from "./common/button";
import { Link } from "react-router-dom";
import PageNums from "./common/pagination";
import fetchContent from "../functions/fetch_content";
import Tab from "./tab";
function Articles_list({ }) {
  const [loading, setLoading] = useState(false);
  const [activeTabName, setActiveTabName] = useState("Most Liked");
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [articles, setArticles] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"))
  useEffect(() => {
    fetchContent("articles",token, pageNum, 3, null, setTotalPages, setLoading, setActiveTabName, "most_liked", setArticles);
    console.log(articles)
  }, [pageNum]);

 

 
  return (
    <section className="articles_section">
      {articles && articles.length > 0 ? (
        <Tabs defaultValue="Most Liked" className="container">
          <div className="header">
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

          <TabsContent value={activeTabName} className="content">
            <div className="articles_list grid grid-cols-2">
              {articles.map((article, index) => (
                <Articles_Card
                  key={index}
                  orientation="vertical"
                  id={article.id}
                  title={article.title}
                  published_date={article.created_at}
                  likes={article.likes_count}
                />
              ))}
            </div>
            <PageNums totalPages={totalPages} pageNum={pageNum} setPageNum={setPageNum}/>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="no_articles container">
          <h4>We're sorry, but there are currently no articles to display.</h4>
          <div className="description">
            <p>Please check back later or explore other sections of our website for more content.</p>
            <p>If you have any specific topics you're interested in, feel free to contact us. We would love to hear your suggestions!</p>
          </div>
          <Link to="/contact">
            <Button text="Contact us" type="primary" />
          </Link>
        </div>
      )}
    </section>
  );
}

export default Articles_list;
