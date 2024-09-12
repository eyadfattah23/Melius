import { useNavigate } from "react-router-dom";
import { DialogContent, DialogHeader, DialogTitle, Dialog, DialogTrigger, DialogFooter } from "../shadcn/ui/dialog";
import Button from "./button";
function PassedDayDialog(){
  const navigate = useNavigate()
    return <Dialog>
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
<Button text={"Share with the Community"} type="cta_filled" onClick={()=> navigate("/community")} />
</div>
</DialogContent>

</Dialog>
}
export default PassedDayDialog