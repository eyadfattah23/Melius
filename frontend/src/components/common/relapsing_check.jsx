import { useState } from "react";
import Button from "./button"
import { useNavigate } from "react-router-dom";
import createOrResetTimer from "../../functions/create_or_reset_timer";
import PassedDayDialog from "./passed_day_dialog";
import "../../assets/styles/common/relapsing_check.css"
function RelapsingCheck({user_id, token}){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    return <section className="relapsing-check flex flex-col items-center gap-8">
    <h2>How was your day ?</h2>
    <div className="check-btns flex justify-center items-center gap-8">
      <Button type={"daily_relapsing_check_fail"} text={"I couldn't make it"} onClick={() => createOrResetTimer(user_id, token, setLoading, navigate)}/>
    
      <PassedDayDialog/>
      
    </div>


   
  </section> 
}
export default RelapsingCheck