import Button from "./button"
import article_img from "../../assets/images/article_image.png"
import { Link } from "react-router-dom";
import "../../assets/styles/common/article_card.css"
function Articles_Card({orientation, title, id, published_date, likes, liked}){
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    }
    if (orientation === "horizontal")
    {
        return <div className="article_card" id="article_horizontal">
        <div className="article_description">
            <div className="content">
            <h2>{title}</h2>
            <p>posted on: {formatDate(published_date)}</p>
            </div>
            <div className="cta_btn">
            <Link to={"/one_article"} state={{article_id: `${id}`, likes: likes, liked: liked}}>
                    <Button text={"Read Now"} type={"cta_filled"}/>
                    </Link>
            </div>
        </div>
        <img src={article_img}/>
      
       
        
    </div>
    }
    else{
        return (
            <div className="article_card"  id="article_vertical">
                 <img src={article_img}/>
                 <div className="article_description">
                <div className="content">
                <h2>{title}</h2>
                <p>posted on: {formatDate(published_date)}</p>
                </div>
                <div className="cta_btn">
                    <Link to={"/one_article"} state={{article_id: `${id}`, likes: likes}}>
                    <Button text={"Read Now"} type={"cta_filled"}/>
                    </Link>
                </div>
            </div>
           
                 </div>
        )
    }
}
export default Articles_Card