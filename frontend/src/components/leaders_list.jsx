import Leader_card from "../components/common/leader_card";
import Avatar from "./avatar";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./common/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./shadcn/ui/carousel";
import { Link, useNavigate } from "react-router-dom";
import createOrResetTimer from "../functions/create_or_reset_timer";
import config from "../config";
function Leaders_List({ setMaxDays}) {
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLeaders = async () => {
      setLoading(true);
      try {
        const response = await axios.get(config.API_URL + `timer/top10`);
        setLeaders(response.data);
        console.log(leaders)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaders();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : leaders && leaders.length > 0 ? (
        <div className="flex flex-col gap-16 items-center">
        <div className="first-3 flex flex-col items-center gap-0 lg:w-[65vw]  w-full">
 
  <div className="w-full flex justify-center">
    <Leader_card
      key={0}
      rank={1}
      name={leaders[0]?.username}
      days={Number(leaders[0]?.max_time)}
    />
  </div>

  {/* Bottom Row */}
  <div className="w-full flex justify-between relative lg:-top-[250px]  lg:gap-16">
    {leaders.slice(1, 3).map((leader, key) => (
      <Leader_card
        key={key + 1}
        rank={key + 2}
        name={leader.username}
        days={Number(leader.max_time)}
      />
    ))}
  </div>
</div>

          <div className="rest grid lg:grid-cols-3 lg:gap-20 gap-12 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] relative lg:-top-[250px] w-full">
          {leaders.slice(3).map((leader, key) => (
      <Leader_card
        key={key + 3}
        rank={key + 4} 
        name={leader.username}
        days={Number(leader.max_time)}
      />
    ))}
          </div>
          
         
        </div>
      ) : (
        <div className="no_leaders flex flex-col justify-center min-h-[50vh] items-center lg:gap-8 gap-4">
          <h4 className="text-center">No top achievers yet. Are you ready to take the lead?</h4>
          <Link to={"/challenge"}>
            <Button
              text={"Join the Challenge"}
              type={"secondary_filled"}
              onClick={() =>
                createOrResetTimer(
                  user_id,
                  token,
                  setLoading,
                  navigate
                )
              }
            />
          </Link>
        </div>
      )}
    </>
  );
}

export default Leaders_List;
