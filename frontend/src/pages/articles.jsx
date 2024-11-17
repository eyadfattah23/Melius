import Navbar from "../components/common/navbar";
import Articles_Card from "../components/common/articles_card";
import Articles_list from "../components/articles_tab";
import { useState, useEffect } from "react";
import fetchContent from "../functions/fetch_content";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import Create_Article from "../components/common/create_article";
import Button from "../components/common/button";
import handleLogout from "../functions/loggout";
import Hero from "../components/articles/hero";
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
  console.log(isAdmin)
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
      
      <main>
        {loading ? (
          // Display loading message while content is being fetched
          <p>Loading...</p> 
        ) : (
          <>
            {articleOfTheWeek ? (
              <>
                {/* Display "Article of the Week" section */}
               <Hero isAdmin={isAdmin} articleOfTheWeek={articleOfTheWeek}/>

                {/* Display list of articles */}
                <Articles_list articleOfTheWeek={articleOfTheWeek} />
              </>
            ) : (
              // Message for when no articles are available
              <div className="h-screen pt-16 flex flex-col gap-4 lg:px-16 px-6 justify-center items-center">
                <h4 className="text-center">We're sorry, but there are currently no articles to display.</h4>
                  <p className="paragraph text-center text-[#363636]">Please check back later or explore other sections of our website for more content.</p>
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
