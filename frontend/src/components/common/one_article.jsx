import Icon from "../../assets/icons/icon";
import Footer from "../../components/footer";
import Navbar from "../../components/common/navbar";
import "../../assets/styles/common/one_article.css";
import article_img from "../../assets/images/article_image.png";
import { useState, useEffect } from "react";
import Button from "../../components/common/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import formatDate from "../../functions/format_date";
import parse from "html-react-parser";
import Comments from "../../components/common/comments";
import { useLocation } from "react-router-dom";
import likeOrUnlike from "../../functions/like_or_unlike";
import config from "../../config";
import Edit_Article from "./edit_article";

function One_Article() {
  const navigate = useNavigate()
  const [article, setArticle] = useState();
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [commentField, setCommentField] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
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
  const handleDelete = async () => {
    try {
      const response = await axios.delete(config.API_URL + `articles/${article_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/articles")
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      <main className="main_layout">
        <section className="article_section">
          {article ? (
            <>
            {isAdmin && (
              <div className="create-article-container flex flex-col gap-4" style={{ position: "absolute", top: "200px", right: "64px" }}>
               <Edit_Article articleId={article_id} initialTitle={article.title} initialContent={article.content} initialImage={article.img}/>
               <Button
          text={"Delete Article"}
          type="cta_filled"
          onClick={handleDelete}
        />
              </div>
            
            )}
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
