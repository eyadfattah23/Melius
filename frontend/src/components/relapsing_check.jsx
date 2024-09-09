import { useState } from "react";
import Button from "./button"
import { useNavigate } from "react-router-dom";
import { DialogContent, DialogHeader, DialogTitle, Dialog, DialogTrigger, DialogFooter } from "./shadcn/ui/dialog";
import createOrResetTimer from "../functions/create_or_reset_timer";
function RelapsingCheck(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [passed, setPassed] = useState(false)
    return <section className="relapsing-check">
   {
    !passed ?  <div className="container">
    <h2>How was your day ?</h2>
    <div className="check-btns">
      <div>
      <Button type={"daily_relapsing_check_fail"} text={"I couldn't make it"} onClick={() => createOrResetTimer(setLoading, navigate)}/>
      </div>
      <div>
      <Dialog>
                                  <DialogTrigger className="btn daily_relapsing_check_success">
                                  I passed the day successfully
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[726px] passed_container">
                                    <DialogHeader className={"header"}>
                                    <h1> Congratulations!</h1>
                                    <p>Well done! You've successfully stayed strong today. Each day brings you closer to freedom and self-control</p>
                                    </DialogHeader>
                                    <div className="content">
    <p>Celebrate this victory and use it as motivation to keep going tomorrow. You’re doing great!</p>
    <Button text={"Share with the Community"} type="primary" onClick={()=> navigate("/community")} />
   </div>
    </DialogContent>
   
                              </Dialog>
      </div>
    </div>
  </div>:
  <div>

  </div>
   }
  </section> 
}
export default RelapsingCheck