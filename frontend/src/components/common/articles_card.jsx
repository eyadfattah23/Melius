import Button from "./button"
import article_img from "../../assets/images/article_image.png"
import { Link } from "react-router-dom";
import "../../assets/styles/common/article_card.css"
import formatDate from "../../functions/format_date";
/**
 * Articles_Card component renders an article card with a specified layout.
 */
function Articles_Card({orientation, title, id, published_date, likes, liked, img, author}){
    
    if (orientation === "horizontal")
    {
        return <div className="flex flex-col items-center justify-center lg:items-start rounded-[12px] lg:p-0 p-6 gap-4 relative lg:w-[55rem] lg:h-[37rem] " id="article_horizontal"
        style={{    
            background: window.innerWidth > 1024 ? `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${img ? img : article_img}) lightgray 50% / cover no-repeat`: "white"      ,
            boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.09)"}}>
                <img src={img ? img: article_img} alt="" className="lg:hidden rounded-[6px]  " style={{boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.09)"}} />
        <div className="lg:w-[25rem] lg:p-6  flex flex-col items-start lg:gap-6 gap-5 lg:absolute left-8 -bottom-8 rounded-[12px] bg-white lg:border border-[#E8E8EA]"
        style={{boxShadow: window.innerWidth > 1024 ? "0px 12px 24px -6px rgba(24, 26, 42, 0.12)": "none"}}>
            <h2 className="text-center lg:text-left text-[#363636]">{title}</h2>
            <div className="flex self-end items-center gap-3 text-[#97989F]">
                <p className="paragraph font-semibold ">{author}</p>
            <p className="paragraph"> {formatDate(published_date)}</p>
            </div>
            
            <Link to={"/one_article"} state={{article_id: `${id}`, likes: likes, liked: liked}}>
                    <Button text={"Read Now"} type={"bg-black text-white rounded-[10px]"}/>
                    </Link>
            
        </div>

      
       
        
    </div>
    }
    else{
        return (
            <div className="flex flex-col items-center p-4 lg:w-[350px] justify-start gap-4 rounded-[12px] border border-[#E8E8EA] bg-white" id="article_vertical">
                 <img src={img ? img : article_img} className="w-full h-auto rounded-[6px]"
                 style={{boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.09)"}} />
                 <div className="flex p-2 flex-col gap-5 items-center   h-full">
                 <h3 className="text-center lg:text-left text-[#363636]">{title}</h3>
            <div className="flex self-center items-center  gap-3 text-[#97989F]">
                <p className="paragraph font-semibold ">{author}</p>
            <p className="paragraph"> {formatDate(published_date)}</p>
            </div>
            
            <Link to={"/one_article"} state={{article_id: `${id}`, likes: likes, liked: liked}} className=" h-full flex items-end">
                    <Button text={"Read Now"} type={"bg-black text-white rounded-[10px] "}/>
                    </Link>
                
            </div>
           
                 </div>
        )
    }
}
export default Articles_Card