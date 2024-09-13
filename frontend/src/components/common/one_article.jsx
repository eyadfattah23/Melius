import Icon from "../../assets/icons/icon";
import Footer from "../../components/footer";
import Navbar from "../../components/common/navbar";
import "../../assets/styles/common/one_article.css";
import article_img from "../../assets/images/article_image.png";
import { useState, useEffect } from "react";
import Button from "../../components/common/button";
import { Link } from "react-router-dom";
import axios from "axios";
import formatDate from "../../functions/format_date";
import parse from "html-react-parser";
import Comments from "../../components/common/comments";
import { useLocation } from "react-router-dom";
import likeOrUnlike from "../../functions/like_or_unlike";
import config from "../../config";

function One_Article() {
  const [article, setArticle] = useState();
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [commentField, setCommentField] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const { article_id, likes, liked } = useLocation().state;
  const [isLiked, setIsLiked] = useState(liked)
  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${config.API_URL}articles/${article_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setArticle(response.data);
        setLikesCount(likes);
        setCommentsCount(response.data.comments_count);
        
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
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
                <div className="article_likes">
                  <Icon name={"heart_fill"} size={24} color={"red"} />
                  <p>{likesCount}</p>
                </div>
              </div>
              <div className="article_image">
                <img src={article_img} alt="Article" />
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
                      likesCount
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
