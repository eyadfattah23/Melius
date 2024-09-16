import Navbar from "../components/common/navbar";
import Articles_Card from "../components/common/articles_card";
import "../assets/styles/articles.css";
import Articles_list from "../components/articles_tab";
import { useState, useEffect } from "react";
import fetchContent from "../functions/fetch_content";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import Create_Article from "../components/common/create_article";
import Button from "../components/common/button";
import handleLogout from "../functions/loggout";
/**
 * This component renders the Articles page, which includes a Navbar, a list of articles,
 * an "Article of the Week" section, and a footer. Admin users can also access the 
 * article creation functionality. The content is dynamically fetched, and a loading 
 * spinner is displayed while the data is being retrieved.
 */

function Articles() {
  // State for managing loading, articles, active tab, article of the week, and total pages
  const [loading, setLoading] = useState(true); 
  const [articles, setArticles] = useState([]);
  const [activeTabName, setActiveTabName] = useState("most_liked");
  const [articleOfTheWeek, setArticleOfTheWeek] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  // Retrieve token and admin status from local storage
  const token = JSON.parse(localStorage.getItem("token"));
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
  const navigate = useNavigate()
  if (!token){
    // if token removed, it logs out the user
    handleLogout(navigate)
  }
  // Fetch content on component mount, and stop loading once data is fetched
  useEffect(() => {
    fetchContent("articles", token, 1, 1, null, setTotalPages, setLoading, setActiveTabName, "newest", setArticles, setArticleOfTheWeek, navigate)
      .finally(() => setLoading(false)); // Ensures loading stops regardless of success or failure
  }, [token]); 

  return (
    <>
      <Navbar />
      
      <main className="main_layout">
        {loading ? (
          // Display loading message while content is being fetched
          <p>Loading...</p> 
        ) : (
          <>
            {articleOfTheWeek ? (
              <>
                {/* Display "Article of the Week" section */}
                <section className="main_article_section flex flex-col justify-center gap-8 px-16 py-8">
                  <h1>Our Latest Article</h1>
                  <Articles_Card
                    orientation={"horizontal"}
                    id={articleOfTheWeek.id}
                    title={articleOfTheWeek.title}
                    published_date={articleOfTheWeek.created_at}
                    likes={articleOfTheWeek.likes_count}
                    liked={articleOfTheWeek.liked}
                  />
                </section>

                {/* Display list of articles */}
                <Articles_list articleOfTheWeek={articleOfTheWeek} />
              </>
            ) : (
              // Message for when no articles are available
              <div className="empty_response flex flex-col gap-4 justify-center items-center">
                <h4>We're sorry, but there are currently no articles to display.</h4>
                <div className="description gap-2 flex flex-col">
                  <p>Please check back later or explore other sections of our website for more content.</p>
                  <p>If you have any specific topics you're interested in, feel free to contact us. We would love to hear your suggestions!</p>
                </div>
                <Link to={"/contact"}>
                  <Button text={"Contact us"} type={"cta_filled"} />
                </Link>
              </div>
            )}
            {isAdmin && (
              <div className="create-article-container" style={{ position: "relative", marginTop: "20px" }}>
                <Create_Article />
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Articles;
