import Button from "./button"
import article_img from "../assets/images/article_image.png"
import { Link } from "react-router-dom";
function Articles_Card({orientation, title, id, key, published_date}){
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    }
    if (orientation === "horizontal")
    {
        return <div className="article_card">
         <div className="container">
        <div className="article_description">
            <div className="content">
            <h2>How I Took Control: My Journey to Quit Pornography Addiction </h2>
            <p>posted on: 14/06/2000</p>
            </div>
            <div className="cta_btn">
                <Button text={"Read Now"} type={"primary"}/>
            </div>
        </div>
        <img src={article_img}/>
        </div>
       
        
    </div>
    }
    else{
        return (
            <div className=" article_card_vertical" key={key}>
                 <img src={article_img}/>
                 <div className="article_description">
                <div className="content">
                <h2>{title}</h2>
                <p>posted on: {formatDate(published_date)}</p>
                </div>
                <div className="cta_btn">
                    <Link to={"/one_article"} state={{article_id: `${id}`}}>
                    <Button text={"Read Now"} type={"primary"}/>
                    </Link>
                </div>
            </div>
           
                 </div>
        )
    }
}
export default Articles_Card