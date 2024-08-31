import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "../assets/styles/home.css"
import Counter2 from "../components/counter2"
import Button from "../components/button"
import Avatar from "../components/avatar"
import Leader_card from "../components/leader_card"
import Articles_Carousel from "../components/articles_carousel"
function Home() {       
    return (
      <>
      <Navbar loggedin={true}/>
      <section className="counter">
        <div className="container">
            <h3>Welcome, random_name</h3>
            <div className="stats">
                <h4>
                  You're on
                </h4>
                <Counter2 achieved_days={"22"} unit={"Days"}/>
                <h4>
                    of your journey to freedom
                </h4>
            </div>
        </div>
      </section>
      <section className="relapsing-check">
        <div className="container">
          <h2>How was your day ?</h2>
          <div className="check-btns">
            <div>
            <Button type={"daily_relapsing_check_fail"} text={"I couldn't make it"}/>
            </div>
            <div>
            <Button type={"daily_relapsing_check_success"} text={"I passed the day successfuly"}/>

            </div>
          </div>
        </div>
      </section>
      <section className="leaders-board">
        <div className="container">
          <h1>Leaders Board</h1>
          <div className="leaders_list">
            <Leader_card name={"random_name"} badge={<Avatar level={"6"}/>}/>
            <Leader_card name={"random_name"} badge={<Avatar level={"6"}/>}/>
            <Leader_card name={"random_name"} badge={<Avatar level={"6"}/>}/>
            <Leader_card name={"random_name"} badge={<Avatar level={"6"}/>}/>
            <Leader_card name={"random_name"} badge={<Avatar level={"5"}/>}/>
          </div>
        </div>
      </section>
      <section className="latest-articles">
        <div className="container">
          <h1>Latest Articles</h1>
          <div className="articles_list">
            <Articles_Carousel/>
          </div>
        </div>
      </section>
      <Footer/>
      </>
    )
  }
export default Home