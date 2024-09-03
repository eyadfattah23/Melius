import Navbar from "../components/navbar"
import Posts_list from "../components/posts_list"
import "../assets/styles/community.css"
function Community(){
    
    return <>
    <Navbar loggedin/>
    <section className="posts_section">
       <Posts_list/>
    </section>
    </>
}
export default Community