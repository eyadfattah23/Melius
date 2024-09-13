import Achievement_Card from "./achievement_card";
import Badge from "../assets/icons/badge";
import "../assets/styles/achievements_board.css";

function AchievementsBoard({ level }) {
  return (
    <div className="achievements_list space-y-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 justify-center">
        <Achievement_Card badge={<Badge level={"3"} enabled={level >= 3} />} days={30} />
        <Achievement_Card badge={<Badge level={"2"} enabled={level >= 2} />} days={15} />
        <Achievement_Card badge={<Badge level={"1"} enabled={level >= 1} />} days={7} />
        <Achievement_Card badge={<Badge level={"0"} enabled={level >= 0} />} days={3} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center">
        <Achievement_Card badge={<Badge level={"6"} enabled={level >= 6} />} days={365} />
        <Achievement_Card badge={<Badge level={"5"} enabled={level >= 5} />} days={90} />
        <Achievement_Card badge={<Badge level={"4"} enabled={level >= 4} />} days={60} />
      </div>
    </div>
  );
}

export default AchievementsBoard;
