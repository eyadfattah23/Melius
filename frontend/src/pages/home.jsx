import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "../assets/styles/home.css"
import Counter2 from "../components/counter2"
import Button from "../components/button"
import Avatar from "../components/avatar"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Leader_card from "../components/leader_card"
import { useEffect } from "react"
import Articles_Carousel from "../components/articles_carousel"
function Home() {   
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate()
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const loggedin = JSON.parse(localStorage.getItem("loggedin"));
  const [loading, setLoading] = useState(false);
  const [number_of_days, setNumberOfDays] = useState()
    const [level, setLevel] = useState()
  const participated_in_challenge = JSON.parse(localStorage.getItem("challenge"))
  useEffect(() => {
    const fetchTimerStatus = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://127.0.0.1:5050/api/v1/timer/status/${user_id}`);
            console.log(response);
            setNumberOfDays(countNumberOfDays(response.data.data.reset_date))
            setLevel(countLevel(countNumberOfDays(response.data.data.reset_date)))
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        
    };
    fetchTimerStatus();
    
}, [user_id, number_of_days, level]); 
function countNumberOfDays(date) {
  const givenDate = new Date(date);
  const currentDate = new Date();

  const timeDifference = currentDate - givenDate;

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;

  return daysDifference;
}
  const joinChallenge = async () => {
    setLoading(true);
    try {
        const response = await axios.post("http://127.0.0.1:5050/api/v1/timer/reset_or_create",
          {
            user_id: JSON.parse(localStorage.getItem("user_id"))
          }
        );
        console.log(response);
        localStorage.setItem("challenge", JSON.stringify(true));
        navigate("/challenge");
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
    return (
      <>
      <Navbar loggedin={loggedin}/>
      <section className="counter">
        <div className="container">
            <h3>Welcome, {user}</h3>
           {
            participated_in_challenge ?  <div className="stats">
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
          <div>          <Button text={"Join the Challenge"} type={"primary"} onClick={joinChallenge}/>
          </div>
        </div>
           }
        </div>
      </section>
     {
      participated_in_challenge &&  <section className="relapsing-check">
      <div className="container">
        <h2>How was your day ?</h2>
        <div className="check-btns">
          <div>
          <Button type={"daily_relapsing_check_fail"} text={"I couldn't make it"} onClick={joinChallenge}/>
          </div>
          <div>
          <Button type={"daily_relapsing_check_success"} text={"I passed the day successfuly"}/>

          </div>
        </div>
      </div>
    </section> 
     }
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