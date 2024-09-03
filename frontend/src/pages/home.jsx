import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "../assets/styles/home.css"
import Counter2 from "../components/counter2"
import Button from "../components/button"
import Avatar from "../components/avatar"
import { useState } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Articles_Carousel from "../components/articles_carousel"
import Leaders_List from "../components/leaders_list"
import Edit_Profile from "./edit_profile"
import RelapsingCheck from "../components/relapsing_check"
import countNumberOfDays from "../functions/count_number_of_days"
import createOrResetTimer from "../functions/create_or_reset_timer"
function Home() {   

  const user = JSON.parse(localStorage.getItem("username"));
  const navigate = useNavigate()
  const loggedin = JSON.parse(localStorage.getItem("loggedin"));
  const [loading, setLoading] = useState(false);
  const number_of_days = JSON.parse(localStorage.getItem("number_of_days"))
    return (
      <>
      <Navbar/>
      <section className="counter">
        <div className="container">
            <h3>Welcome, {user}</h3>
           {
            number_of_days != null ?  <div className="stats">
            <h4>
              You're on
            </h4>
            <Counter2 achieved_days={number_of_days} unit={"Days"}/>
            <h4>
                of your journey to freedom
            </h4>
        </div> : <div className="stats">
          <h4>
          Ready for a Change?
          </h4>
          <p>
          Join our challenge today and start your journey towards a better you!
          </p>
          <div>          <Button text={"Join the Challenge"} type={"primary"} onClick={() =>createOrResetTimer(setLoading, navigate)}/>
          </div>
        </div>
           }
        </div>
      </section>
     {
      number_of_days != null &&  <RelapsingCheck/>
     }
      <section className="leaders-board">
        <div className="container">
          <h1>Leaders Board</h1>
         <Leaders_List/>
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