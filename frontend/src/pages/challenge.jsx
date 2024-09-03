import Counter1 from "../components/counter1"
import Navbar from "../components/navbar"
import "../assets/styles/challenge.css"
import Counter2 from "../components/counter2"
import Achievement_Card from "../components/achievement_card"
import Badge from "../assets/icons/badge"
import Button from "../components/button"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import formatDate from "../functions/format_date"
import RelapsingCheck from "../components/relapsing_check"
import countNumberOfDays from "../functions/count_number_of_days"
import createOrResetTimer from "../functions/create_or_reset_timer"
import { useNavigate } from "react-router-dom"
function Challenge(){
    const level = localStorage.getItem("level")
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    const [number_of_days, setNumberOfDays] = useState(localStorage.getItem("number_of_days"))
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [starting_date, setStartingDate] = useState("")
    const [tries, setTries] = useState()
    const [maxDays, setMaxDays] = useState()
    
    useEffect(()=>{
        const fetchTimerStatus = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://127.0.0.1:5050/api/v1/timer/status/${user_id}`);
                console.log(response);
                setStartingDate(response.data.data.reset_date)
                setTries(response.data.data.no_tries)
                setMaxDays(response.data.data.max_time)
                localStorage.setItem("number_of_days", JSON.stringify(countNumberOfDays(starting_date)))
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
            
        };
        if (number_of_days !== null){
            fetchTimerStatus()
            setNumberOfDays(countNumberOfDays(starting_date))
        }
       }, [starting_date,tries,maxDays, number_of_days])
  
    return <>
    <Navbar/>
    {
        number_of_days != null ? <>
         <section className="counter_section">
        <div className="container">
         <h2> Starting date: {formatDate(starting_date)}</h2>   
        <Counter1 number_of_days = {number_of_days}/>
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
            <div className="achievements_list">
                <div className="achievements_row">
                <Achievement_Card badge={<Badge level={"3"} enabled={level >= 3} />} days={30}/>
<Achievement_Card badge={<Badge level={"2"} enabled={level >= 2} />} days={15}/>
<Achievement_Card badge={<Badge level={"1"} enabled={level >= 1} />} days={7}/>
<Achievement_Card badge={<Badge level={"0"} enabled={level >= 0} />} days={3}/>
</div>
<div className="achievements_row">
<Achievement_Card badge={<Badge level={"6"} enabled={level >= 6} />} days={365}/>
<Achievement_Card badge={<Badge level={"5"} enabled={level >= 5} />} days={90}/>
<Achievement_Card badge={<Badge level={"4"} enabled={level >= 4} />} days={60}/>
                </div>
            </div>
        </div>
    </section>
   <RelapsingCheck/>
        </>:
        <div className="join_challenge">
             <h4>
          Join our challenge today and start your journey towards a better you!
          </h4>
          <div>          <Button text={"Join the Challenge"} type={"primary"} onClick={()=>createOrResetTimer(setLoading, navigate)}/>
          </div>
        </div>
    }
    </>
}
export default Challenge