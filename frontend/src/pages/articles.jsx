import Navbar from "../components/navbar"
import Articles_Card from "../components/articles_card"
import "../assets/styles/articles.css"
import Articles_list from "../components/articles_tab"
function Articles(){
    return <>
    <Navbar loggedin/>
    <section className="main_article_section">
        <div className="container">
        <h1> Article of The Week</h1>
        <div className="main_article_card">
           <Articles_Card orientation={"horizontal"}/>
        </div>
        </div>
    </section>
    
    <section className="articles_section">
                <Articles_list/>
                    </section>
    </>
}
export default Articles




