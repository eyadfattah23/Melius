import Medal from "../../assets/icons/rank_medal";
import userImage from "../../assets/images/user.png"
import "../../assets/styles/components/leader_card.css"
/**
 * Leader_card Component
 * 
 * This component displays a leader card with a name and a badge.
 * It is designed to showcase a user's badge or avatar and their name, typically used in profiles or leaderboards.
 */
function Leader_card({ name, days, rank }) {
 
  return (
    <div className={`leader_main  flex ${rank > 3 ? "gap-4 ": "flex-col lg:gap-[130px] gap-[60px]"} items-center  w-fit`}>
      <div className="leader_card relative z-[1] ">
        <img src={userImage}  className={`rounded-[50%] ${rank === 1 ? "lg:w-[300px] w-[150px] h-[150px] lg:h-[300px] ": rank === 2 || rank === 3  ? " lg:w-[250px] lg:h-[250px] w-[125px] h-[125px]": "lg:w-[150px] lg:h-[150px] min-w-[75px] h-[75px]"}`} style={{border: "10px solid white"}} />
        <Medal rank={rank}/>
      </div>
      <div className={`flex flex-col ${rank > 3 ? "items-start": "items-center"} lg:gap-2`}>
      {
        rank > 3? <h3 className="text-black">{name}</h3>: <h2 className="text-center">{name}</h2>
      }
      {
        rank > 3? <h4 className="text-[#808080]">{days} Days</h4>: <h3 className="text-center text-[#808080]">{days} Days</h3>
      }
      </div>
    </div>
  );
}

export default Leader_card;
