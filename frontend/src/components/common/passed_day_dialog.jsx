import { useNavigate } from "react-router-dom";
import { DialogContent, DialogHeader, Dialog, DialogTrigger, DialogFooter } from "../shadcn/ui/dialog";
import Button from "./button";
/**
 * `PassedDayDialog` component displays a dialog to congratulate users on successfully completing the day.
 * It includes a trigger button to open the dialog, a congratulatory message, and a button to share the achievement with the community.
 */
function PassedDayDialog({daily_check}){
  const navigate = useNavigate()
    return <Dialog >
    <DialogTrigger >
    {daily_check(false)}
    </DialogTrigger>
    <DialogContent className="lg:min-w-[60vw] lg:max-w-[60vw] max-w-[90vw] min-w-[90vw] lg:px-20 py-16 passed_container gap-8 ">
      
      <DialogHeader className={"header"}>
      <h1 className="text-white text-center"> Well Done!</h1>
      </DialogHeader>
      <div className="content flex flex-col justify-center items-center gap-8 px-12 py-8 bg-white bg-opacity-90 rounded-[16px] text-center">
      <p className="paragraph">Well done! You've successfully stayed strong today. Each day brings you closer to freedom and self-control</p>
<p className="paragraph_small ">Celebrate this victory and use it as motivation to keep going tomorrow. You’re doing great!</p>
<Button text={"Share with the Community"} type="bg-[#51A2CF] rounded-[10px] p-3 text-white" onClick={()=> navigate("/community")} />
</div>
      
</DialogContent>

</Dialog>
}
export default PassedDayDialog