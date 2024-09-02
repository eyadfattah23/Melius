import Icon from "../assets/icons/icon"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "../assets/styles/one_article.css"
import article_img from "../assets/images/article_image.png"
import { useState, useEffect } from "react"
import Button from "../components/button"
import { Link } from "react-router-dom"
import axios from "axios"
import parse from 'html-react-parser';
import { useLocation } from "react-router-dom"
function One_Article({loggedin}){
    const [loading, setLoading] = useState(false);
    const [article, setArticle] = useState()
    let {article_id} = useLocation().state
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    }
    useEffect(()=>{
        const fetchArticle = async () => {
          setLoading(true);
          
          try {
              const response = await axios.get(`http://127.0.0.1:5050/api/v1/articles/${article_id}`);
              console.log(response.data);
              setArticle(response.data)
              
          } catch (error) {
              console.error(error);
          } finally {
              setLoading(false);
          }
          
      };
      fetchArticle()
       }, [article])
    return (
        <>
        <Navbar loggedin={loggedin}/>
       <section className="article_section">
           {
            article ?  <div className="container">
            <div className="article_header">
                <div className="article_info">
                    <h1> {article.title}</h1>
                    <div className="metadata">
                        <p>{article.author}</p>
                        <p>Published on: {formatDate(article.created_at)}</p>
                    </div>
                </div>
                <div className="article_likes">
                    <Icon name={"heart_fill"} size={24} color={"red"}/>
                    <p>90k</p>
                </div>
            </div>
            <div className="article_image">
                <img src={article_img} alt="" />
            </div>
            <div className="article_content">
           {
            parse(article.content)
           }
            </div>
            <div className="article_footer">
            <div className="sec">
        <Icon name={"hand_heart"} size={20} color={"grey"}/>
        <p>Like</p>
      </div>
      <div className="sec">
        <Icon name={"chat"} size={20} color={"grey"}/>
        <p>Comment</p>
      </div>
      <div className="sec">
      <Icon name={"share"} size={20} color={"grey"}/>
      <p>Share</p>
      </div>
            </div>
        </div>
        :
        <div className="container no_article">
        <h2>We're sorry, but this article is currently not available</h2>
        <p>Please check back later or explore other sections of our website for more content.</p>
        
        <Link to="/articles">
          <Button text="Go back to articles" type="primary" />
        </Link>
      </div>
           }
        </section>
        <Footer/>
        </>
      )
}
export default One_Article    
