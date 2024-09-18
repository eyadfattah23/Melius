import Button from "./button"
import article_img from "../../assets/images/article_image.png"
import { Link } from "react-router-dom";
import "../../assets/styles/common/article_card.css"
import formatDate from "../../functions/format_date";
/**
 * Articles_Card component renders an article card with a specified layout.
 */
function Articles_Card({orientation, title, id, published_date, likes, liked, img}){
    
    if (orientation === "horizontal")
    {
        return <div className="article_card flex flex-col-reverse items-center sm:flex-row p-6 gap-4" id="article_horizontal">
        <div className="article_description flex flex-col items-center gap-8 justify-center lg:w-1/2 h-auto text-center lg:text-left lg:items-start">
            <div className="content flex px-2 flex-col gap-4">
            <h2 className="text-center lg:text-left">{title}</h2>
            <p className="text-center lg:text-right">posted on: {formatDate(published_date)}</p>
            </div>
            <div className="cta_btn">
            <Link to={"/one_article"} state={{article_id: `${id}`, likes: likes, liked: liked}}>
                    <Button text={"Read Now"} type={"cta_filled"}/>
                    </Link>
            </div>
        </div>
        <img src={img ? img : article_img} alt={title} className="w-full lg:w-1/2 h-auto" />

      
       
        
    </div>
    }
    else{
        return (
            <div className="article_card flex p-6 gap-4 flex-col items-center"  id="article_vertical">
                 <img src={img ? img : article_img}/>
                 <div className="article_description flex flex-col gap-8 items-center">
                <div className="content px-2 flex-col gap-4 ">
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