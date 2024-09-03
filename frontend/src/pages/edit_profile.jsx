import Avatar from "../components/avatar"
import Button from "../components/button"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Dialog,
  DialogTrigger
} from "../components/shadcn/ui/dialog"

export default function Edit_Profile() {
  return (
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
            <Avatar level={"3"}/>
            <p>random name</p>
        </DialogHeader>
         {/* 
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
           
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
           
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>  */}
     </DialogContent>
   
  )
}

