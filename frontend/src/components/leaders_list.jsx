import Leader_card from "./leader_card"
import Avatar from "./avatar"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Button from "./button"
import createOrResetTimer from "../functions/create_or_reset_timer"
import { Link, useNavigate } from "react-router-dom"
function Leaders_List(){
    const navigate = useNavigate()
    const countLevel = (days) => {
        
        if (days >= 365) return 6;
        if (days > 90) return 5;
        if (days > 60) return 4;
        if (days > 30) return 3;
        if (days > 15) return 2;
        if (days > 7) return 1;
        if (days > 3) return 0;
    }
    const [leaders, setLeaders] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchLeaders = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://127.0.0.1:5050/api/v1/timer/top10`);
                console.log(response);
                setLeaders(response.data)
                // setNumberOfDays(countNumberOfDays(response.data.data.reset_date))
                // setLevel(countLevel(countNumberOfDays(response.data.data.reset_date)))
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
            
        };
        fetchLeaders();
        
    }, []); 
    return <>
    {
        leaders && leaders.length > 0 ? <div className="leaders_list">
       {
        leaders.map((leader, key) =>{
            return  <Leader_card key={key} name={leader.username} badge={<Avatar level={`${countLevel(Number(leader.max_time))}`}/>}/>
            // <Leader_card name={"random_name"} badge={<Avatar level={"6"}/>}/>
            // <Leader_card name={"random_name"} badge={<Avatar level={"6"}/>}/>
            // <Leader_card name={"random_name"} badge={<Avatar level={"6"}/>}/>
            // <Leader_card name={"random_name"} badge={<Avatar level={"5"}/>}/>
        })
       }
      </div>
    :
    <div className="no_leaders">
      <h4>No top achievers yet. Are you ready to take the lead?</h4>
      <Link to={"/challenge"}>
      <Button text={"Join the Challenge"} type={"primary"} onClick={() =>createOrResetTimer(setLoading, navigate)}/>
      </Link>
    </div>
    }
    </>
}
export default Leaders_List