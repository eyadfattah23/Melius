import Navbar from "../components/common/navbar"
import Posts_list from "../components/posts_list"
import "../assets/styles/community.css"
import Footer from "../components/footer"
function Community(){
    
    return <>
    <Navbar/>
    <main className="main_layout">
    <Posts_list/>
    </main>
      <Footer/>
    </>
}
export default Community