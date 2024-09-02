import { RiBookLine, RiChat1Line, RiChat2Line, RiChat3Line, RiGroupLine, RiHandHeartLine, RiHeart3Line, RiHeartFill, RiLockFill, RiMailFill, RiShareLine, RiUserFill, RiUserLine } from "@remixicon/react";
import { RiAddLine } from "@remixicon/react";
import { RiArrowRightSLine } from "@remixicon/react";
import { RiArrowLeftSLine } from "@remixicon/react";
import { RiSurveyLine } from "@remixicon/react";
import { RiLogoutBoxRLine } from "@remixicon/react";
import { RiCalendarTodoLine } from "@remixicon/react";
import { RiInformationLine } from "@remixicon/react";
import { RiQuestionLine } from "@remixicon/react";
import {RiFlagLine} from "@remixicon/react"
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
        case "heart_fill":
            return <RiHeartFill size={size} className={color}/>
        default:
            return <RiAddLine size={size} className={color} />;
    }
}

export default Icon;
