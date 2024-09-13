import Icon from "../assets/icons/icon";
import Footer from "../components/footer";
import Navbar from "../components/common/navbar";
import "../assets/styles/one_article.css";
import article_img from "../assets/images/article_image.png";
import { useState, useEffect } from "react";
import Button from "../components/common/button";
import { Link } from "react-router-dom";
import axios from "axios";
import formatDate from "../functions/format_date";
import parse from "html-react-parser";
import Comments from "../components/common/comments";
import { useLocation } from "react-router-dom";
import likeOrUnlike from "../functions/like_or_unlike";
import config from "../config";
function One_Article({}) {
  const [article, setArticle] = useState();
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false); // to be corrected later
  const [loading, setLoading] = useState(false);
  const [commentField, setCommentField] = useState(false);
  const [comment, setComment] = useState("");
  let { article_id } = useLocation().state;
  let { likes } = useLocation().state;
  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          config.API_URL + `articles/${article_id}`
        );
        console.log(response.data);
        setArticle(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, []);
  return (
    <>
      <Navbar />
      <section className="article_section">
        {article ? (
          <div className="container">
            <div className="article_header">
              <div className="article_info">
                <h1> {article.title}</h1>
                <div className="metadata">
                  <p>{article.author}</p>
                  <p>Published on: {formatDate(article.created_at)}</p>
                </div>
              </div>
              <div className="article_likes">
                <Icon name={"heart_fill"} size={24} color={"red"} />
                <p>{likes}</p>
              </div>
            </div>
            <div className="article_image">
              <img src={article_img} alt="" />
            </div>
            <div className="article_content">{parse(article.content)}</div>
            <div className="article_footer">
              <div
                className="sec"
                onClick={() =>
                  likeOrUnlike(
                    setLoading,
                    setLiked,
                    liked,
                    "article",
                    article_id,
                    user_id
                  )
                }
              >
                <Icon
                  name={"hand_heart"}
                  size={20}
                  color={!liked ? "grey" : "red"}
                />
                <p className={liked ? "isLiked" : ""}>Like</p>
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
            {(comments || commentField) && (
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
              />
            )}
          </div>
        ) : (
          <div className="container no_article">
            <h2>We're sorry, but this article is currently not available</h2>
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
      <Footer />
    </>
  );
}
export default One_Article;
