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
  const countLevel = (days) => {
    if (days >= 365) return 6;
    if (days > 90) return 5;
    if (days > 60) return 4;
    if (days > 30) return 3;
    if (days > 15) return 2;
    if (days > 7) return 1;
    if (days > 3) return 0;
  };

  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLeaders = async () => {
      setLoading(true);
      try {
        const response = await axios.get(config.API_URL + `timer/top10`);
        setLeaders(response.data);
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
        <Carousel className="w-full">
          <CarouselContent>
            {leaders.map((leader, key) => (
              <CarouselItem className="carousel-content md:basis-1/3">
                <Leader_card
                  name={leader.username}
                  badge={
                    <Avatar level={`${countLevel(Number(leader.max_time))}`} />
                  }
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <div className="no_leaders flex flex-col justify-content items-center gap-4">
          <h4>No top achievers yet. Are you ready to take the lead?</h4>
          <Link to={"/challenge"}>
            <Button
              text={"Join the Challenge"}
              type={"cta_filled"}
              onClick={() =>
                createOrResetTimer(
                  user_id,
                  token,
                  setLoading,
                  navigate,
                  setMaxDays
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
