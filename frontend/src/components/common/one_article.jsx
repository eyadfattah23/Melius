import Icon from "../../assets/icons/icon";
import Footer from "../../components/footer";
import Navbar from "../../components/common/navbar";
import "../../assets/styles/common/one_article.css";
import article_img from "../../assets/images/article_image.png";
import { useState, useEffect } from "react";
import Button from "../../components/common/button";
import { Link, useNavigate } from "react-router-dom";
import formatDate from "../../functions/format_date";
import parse from "html-react-parser";
import Comments from "../../components/common/comments";
import { useLocation } from "react-router-dom";
import likeOrUnlike from "../../functions/like_or_unlike";
import fetchArticle from "../../functions/fetch_article";
import handleLogout from "../../functions/loggout";
import ArticleOptions from "./article_options";
/**
 * `One_Article` component displays a single article's details including title, author, publication date, 
 * content, and options to like, comment, and share the article. It also handles loading states and errors.
 */
function One_Article() {
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
  const token = JSON.parse(localStorage.getItem("token"));
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const navigate = useNavigate()
  
  // Redirect to logout if user is not authenticated
  if (!user_id || !token){
    handleLogout(navigate)
  }

  // Component state
  const [article, setArticle] = useState();
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [commentField, setCommentField] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { article_id, likes, liked } = useLocation().state;
  const [isLiked, setIsLiked] = useState(liked)
  
  // Fetch the article details on component mount or when article_id or token changes
  useEffect(() => {
    fetchArticle(article_id, token, setLoading, setArticle, setLikesCount, likes, setCommentsCount, navigate)
  }, [article_id, token, likes]);
  
  return (
    <>
      <Navbar />
      <main className="main_layout">
        <section className="article_section">
          {article ? (
            <>
              <div className="article_header">
                <div className="article_info">
                  <h1>{article.title}</h1>
                  <div className="metadata">
                    <p>{article.author}</p>
                    <p>Published on: {formatDate(article.created_at)}</p>
                  </div>
                </div>
               <div className="flex gap-4 items-center">
               <div className="article_likes">
                  <Icon name={"heart_fill"} size={24} color={"red"} />
                  <p>{likesCount}</p>
                </div>
                {isAdmin && (
             
             <ArticleOptions articleId={article_id} initialTitle={article.title} initialContent={article.content} initialImage={article.img}/>
          )}
               </div>
              </div>
              <div className="article_image">
                <img src={article.img ? article.img : article_img} alt="Article" />
              </div>
              <div className="article_content">{parse(article.content)}</div>
              
              <div className="article_footer">
                <div
                  className="sec"
                  onClick={() =>
                    likeOrUnlike(
                      setLoading,
                      setIsLiked,
                      isLiked,
                      "article",
                      article_id,
                      user_id,
                      setLikesCount,
                      likesCount,
                      navigate
                    )
                  }
                >
                  <Icon
                    name={"hand_heart"}
                    size={20}
                    color={!isLiked ? "grey" : "red"}
                  />
                  <p className={isLiked ? "isLiked" : ""}>Like</p>
                </div>
                <div className="sec" onClick={() => setCommentField(true)}>
                  <Icon name={"chat"} size={20} color={"grey"} />
                  <p>Comment</p>
                </div>
                <div className="sec">
                  <Icon name={"share"} size={20} color={"grey"} />
                  <p>Share</p>
                </div>
              </div>
              {(comments.length > 0 || commentField) && (
                <Comments
                  comment={comment}
                  setComment={setComment}
                  setCommentField={setCommentField}
                  contentType={"article"}
                  content_id={article_id}
                  setComments={setComments}
                  setLoading={setLoading}
                  user_id={user_id}
                  comments={comments}
                  commentsCount={commentsCount}
                  setCommentsCount={setCommentsCount}
                />
              )}
            </>
          ) : (
            <div className="container no_article">
              <h2>
                We're sorry, but this article is currently not available
              </h2>
              <p>
                Please check back later or explore other sections of our website
                for more content.
              </p>

              <Link to="/articles">
                <Button text="Go back to articles" type="primary" />
              </Link>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default One_Article;
