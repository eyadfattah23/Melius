import Counter1 from "../components/counter1"
import Navbar from "../components/navbar"
import "../assets/styles/challenge.css"
import Counter2 from "../components/counter2"
import Achievement_Card from "../components/achievement_card"
import Badge from "../assets/icons/badge"
import Button from "../components/button"
function Challenge(){
    const starting_date = "14/06/2024"
    const tries = 3
    const max_days = 30
    return <>
    <Navbar/>
    <section className="counter_section">
        <div className="container">
         <h2> Starting date: {starting_date}</h2>   
        <Counter1/>
        </div>
    </section>
    <section className="stats_section">
        <div className="container">
            <div className="stats_element">
                <h1>
                    Tries
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
               <Counter2 achieved_days={max_days} unit={"Days"}/>
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
                <Achievement_Card badge={<Badge level={"3"} enabled/>} days={30}/>
                    <Achievement_Card badge={<Badge level={"2"} enabled/>} days={15}/>
                    <Achievement_Card badge={<Badge level={"1"} enabled/>} days={7}/>
                    <Achievement_Card badge={<Badge level={"0"} enabled/>} days={3}/>
                </div>
                <div className="achievements_row">
                <Achievement_Card badge={<Badge level={"6"}/>} days={365}/>
                <Achievement_Card badge={<Badge level={"5"}/>} days={90}/>
                <Achievement_Card badge={<Badge level={"4"}/>} days={60}/>
                </div>
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
    </>
}
export default Challenge