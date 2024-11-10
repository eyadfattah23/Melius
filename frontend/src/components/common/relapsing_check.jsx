import { useState } from "react";
import Button from "./button"
import { useNavigate } from "react-router-dom";
import createOrResetTimer from "../../functions/create_or_reset_timer";
import PassedDayDialog from "./passed_day_dialog";
import "../../assets/styles/common/relapsing_check.css"
import Emoji from "../../assets/icons/emoji";

/**
 * The RelapsingCheck component allows users to report their daily progress and manage their relapse state.
 * It provides two options for the user: to indicate a failure or to confirm a successful day, triggering appropriate actions.
 */
function RelapsingCheck({user_id, token}){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const daily_check = (relapsed) =>{
      if (relapsed) {
        return <div className="flex lg:w-[326px] flex-col items-center gap-6" >
          <Emoji className={"w-24 h-24"}  face={"sad"}/>
          <p className="button text-[#464646] text-center">I couldn't make it</p>
        </div>
      }
      else {
        return <div className="flex lg:w-[326px]  flex-col items-center gap-6">
          <Emoji className={"w-24 h-24"} />
          <p className="button text-[#464646] text-center">I passed the day successfuly</p>
        </div>
      }
    }
    return <section className="relapsing-check  flex flex-col py-8 gap-8">
    <h2 className="text-center">How was your day ?</h2>
    <div className="check-btns  grid grid-cols-2  items-start  gap-6 lg:gap-16">
      <PassedDayDialog daily_check={daily_check}/>
      <button onClick={()=> createOrResetTimer(user_id, token)}>
      {daily_check(true)}
      </button>
      
    </div>


   
  </section> 
}
export default RelapsingCheck