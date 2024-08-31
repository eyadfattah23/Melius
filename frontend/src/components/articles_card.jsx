import Button from "./button"
import article_img from "../assets/images/article_image.jpg"
function Articles_Card({orientation}){
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
            <div className=" article_card_vertical">
                 <img src={article_img}/>
                 <div className="article_description">
                <div className="content">
                <h2>How I Took Control: My Journey to Quit Pornography Addiction </h2>
                <p>posted on: 14/06/2000</p>
                </div>
                <div className="cta_btn">
                    <Button text={"Read Now"} type={"primary"}/>
                </div>
            </div>
           
                 </div>
        )
    }
}
export default Articles_Card