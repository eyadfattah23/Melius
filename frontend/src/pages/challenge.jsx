import Counter1 from "../components/counter1"
import Navbar from "../components/common/navbar"
import "../assets/styles/challenge.css"
import Counter2 from "../components/common/counter2"
import Button from "../components/common/button"
import { useState } from "react"
import { useEffect } from "react"
import formatDate from "../functions/format_date"
import RelapsingCheck from "../components/common/relapsing_check"
import createOrResetTimer from "../functions/create_or_reset_timer"
import { useNavigate } from "react-router-dom"
import fetchTimerStatus from "../functions/fetch_timer_status"
import AchievementsBoard from "../components/achievements_board"
function Challenge(){
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    const token = JSON.parse(localStorage.getItem("token"))
    const [level, setLevel] = useState()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [starting_date, setStartingDate] = useState("")
    const [tries, setTries] = useState()
    const [maxDays, setMaxDays] = useState()
    
    useEffect(()=>{
       fetchTimerStatus(user_id,token, setStartingDate,setTries, setMaxDays, setLevel, setLoading)
       console.log(level)
       }, [starting_date,tries,maxDays])
  
    return <>
    <Navbar/>
    <main className="main_layout">
    {
        maxDays >= 0 ? <>
         <section className="counter_section">
        <div className="container">
         <h2> Starting date: {formatDate(starting_date)}</h2>   
        <Counter1 number_of_days = {maxDays}/>
        </div>
    </section>
    <section className="stats_section">
        <div className="container">
            <div className="stats_element">
                <h1>
                    {tries != 1 ? "Tries" : "Try"}
                </h1>
                <div className="stat_content">
                <Counter2 achieved_days={tries}/>
                </div>
            </div>
            <div className="stats_element">
                <h1>
                    Max Time
                </h1>
               <div className="stat_content">
               <Counter2 achieved_days={maxDays} unit={maxDays > 1 ? "Days": "Day"}/>
               </div>
            </div>
        </div>

    </section>
    <section className="achievements_section">
        <div className="container">
            <h1>
                Achievements
            </h1>
           <AchievementsBoard level={level} />
        </div>
    </section>
    <RelapsingCheck user_id={user_id} token={token}/>
        </>:
        <div className="join_challenge">
             <h4>
          Join our challenge today and start your journey towards a better you!
          </h4>
          <div>          <Button text={"Join the Challenge"} type={"primary"} onClick={()=>createOrResetTimer(setLoading, navigate, setMaxDays)}/>
          </div>
        </div>
    }

    </main>
    </>
}
export default Challenge