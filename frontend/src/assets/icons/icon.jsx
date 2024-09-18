import { 
    RiBookLine,
    RiBookOpenLine, 
    RiChat3Line, 
    RiCopyrightLine, 
    RiDeleteBinLine, 
    RiFacebookLine, 
    RiGithubLine, 
    RiGroupLine, 
    RiHandHeartLine, 
    RiHeart3Line, 
    RiHeartFill, 
    RiHome8Line, 
    RiHonorOfKingsLine, 
    RiLinkedinLine, 
    RiLockFill, 
    RiMailFill, 
    RiMailLine, 
    RiMenuLine, 
    RiMoreLine, 
    RiPencilLine, 
    RiSendPlane2Line, 
    RiShareLine, 
    RiTwitterXLine, 
    RiUserFill, 
    RiUserLine,
    RiAddLine,
    RiSurveyLine,
    RiLogoutBoxRLine,
    RiCalendarTodoLine,
    RiInformationLine,
    RiQuestionLine,
    RiFlagLine
 } from "@remixicon/react";
import "../styles/icons.css"
function Icon({ name, size, color }) {
    switch (name) {
        case "user":
            return <RiUserLine size={size} className={color} />;
        case "survey":
            return <RiSurveyLine size={size} className={color} />;
        case "calendar_todo":
            return <RiCalendarTodoLine size={size} className={color} />;
        case "info":
            return <RiInformationLine size={size} className={color} />;
        case "question":
            return <RiQuestionLine size={size} className={color} />;
        case "logout":
            return <RiLogoutBoxRLine size={size} className={color} />;
        case "heart":
            return <RiHeart3Line size={size} className={color}/>
        case "flag":
            return <RiFlagLine size={size} className={color}/>
        case "hand_heart":
            return <RiHandHeartLine size={size} className={color}/>
        case "chat":
            return <RiChat3Line size={size} className={color}/>
        case "share":
            return <RiShareLine size={size} className={color}/>
        case "user_fill":
            return <RiUserFill size={size} className={color}/>
        case "lock":
            return <RiLockFill size={size} className={color}/>
        case "book":
            return <RiBookLine size={size} className={color}/>
        case "users":
            return <RiGroupLine size={size} className={color}/>
        case "email_fill":
            return <RiMailFill size={size} className={color}/>
        case "email":
            return <RiMailLine size={size} className={color}/>
        case "github":
            return <RiGithubLine size={size} className={color}/>
        case "linkedin":
            return <RiLinkedinLine size={size} className={color}/>
        case "heart_fill":
            return <RiHeartFill size={size} className={color}/>
        case "send":
            return <RiSendPlane2Line size={size} className={color}/>
        case "more":
            return <RiMoreLine size={size} className={color}/>
        case "pencil":
            return <RiPencilLine  size={size} className={color}/>
        case "delete":
            return <RiDeleteBinLine size={size} className={color}/>
        case "group_users":
            return <RiGroupLine size={size} className={color}/>
        case "book_open":
            return <RiBookOpenLine size={size} className={color}/>
        case "facebook":
            return <RiFacebookLine size={size} className={color}/>
        case "twitter":
            return <RiTwitterXLine size={size} className={color}/>
        case "copyright":
            return <RiCopyrightLine size={size} className={color}/>
        case "home":
            return <RiHome8Line size={size} className={color}/>
        case "menu":
            return <RiMenuLine size={size} className={color}/>
        case "quiz":
            return <RiHonorOfKingsLine size={size} className={color}/>
        default:
            return <RiAddLine size={size} className={color} />;
    }
}

export default Icon;
