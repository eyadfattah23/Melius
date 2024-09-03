import { useState } from "react";
import Button from "./button"
import { useNavigate } from "react-router-dom";
import createOrResetTimer from "../functions/create_or_reset_timer";
function RelapsingCheck(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    return <section className="relapsing-check">
    <div className="container">
      <h2>How was your day ?</h2>
      <div className="check-btns">
        <div>
        <Button type={"daily_relapsing_check_fail"} text={"I couldn't make it"} onClick={() => createOrResetTimer(setLoading, navigate)}/>
        </div>
        <div>
        <Button type={"daily_relapsing_check_success"} text={"I passed the day successfuly"}/>

        </div>
      </div>
    </div>
  </section> 
}
export default RelapsingCheck