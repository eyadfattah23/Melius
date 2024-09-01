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
function Challenge(){

    const [loading, setLoading] = useState(false);
    const [starting_date, setStartingDate] = useState("")
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    const [tries, setTries] = useState()
    const [maxDays, setMaxDays] = useState()
    const [number_of_days, setNumberOfDays] = useState()
    const [level, setLevel] = useState()
    const participated_in_challenge = JSON.parse(localStorage.getItem("challenge"))
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
    const countLevel = (days) => {
        if (days >= 365) return 6;
        if (days > 90) return 5;
        if (days > 60) return 4;
        if (days > 30) return 3;
        if (days > 15) return 2;
        if (days > 7) return 1;
        if (days > 3) return 0;
    }
    
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    }
    function countNumberOfDays(date) {
        const givenDate = new Date(date);
        const currentDate = new Date();
    
        const timeDifference = currentDate - givenDate;
    
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;
    
        return daysDifference;
    }
    useEffect(() => {
        const fetchTimerStatus = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://127.0.0.1:5050/api/v1/timer/status/${user_id}`);
                console.log(response);
                setStartingDate(response.data.data.reset_date)
                setTries(response.data.data.no_tries)
                setMaxDays(response.data.data.max_time + 1)
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
            
        };
        fetchTimerStatus();
        setNumberOfDays(countNumberOfDays(starting_date))
        setLevel(countLevel(number_of_days))
    }, [user_id, maxDays, tries, starting_date, number_of_days, level]); 
    return <>
    <Navbar loggedin/>
    {
        participated_in_challenge ? <>
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
    <section className="relapsing-check">
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
        </>:
        <div className="join_challenge">
             <h4>
          Join our challenge today and start your journey towards a better you!
          </h4>
          <div>          <Button text={"Join the Challenge"} type={"primary"} onClick={joinChallenge}/>
          </div>
        </div>
    }
    </>
}
export default Challenge