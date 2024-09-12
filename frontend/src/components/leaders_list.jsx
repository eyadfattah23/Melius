import Leader_card from "../components/common/leader_card";
import Avatar from "./avatar";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./common/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext  } from "./shadcn/ui/carousel";
import { Link, useNavigate } from "react-router-dom";
import createOrResetTimer from "../functions/create_or_reset_timer";

function Leaders_List() {
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
        const response = await axios.get(`http://127.0.0.1:5050/api/v1/timer/top10`);
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
        <Carousel className="w-full carousel">
        <CarouselContent className="carousel-content">
        {leaders.map((leader, key) => (
            <CarouselItem className="carousel-item">
            <Leader_card  name={leader.username} badge={<Avatar level={`${countLevel(Number(leader.max_time))}`} />} />
</CarouselItem>
          ))}
            
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      ) : (
        <div className="no_leaders">
          <h4>No top achievers yet. Are you ready to take the lead?</h4>
          <Link to={"/challenge"}>
            <Button text={"Join the Challenge"} type={"cta_filled"} onClick={() => createOrResetTimer(setLoading, navigate)} />
          </Link>
        </div>
      )}
    </>
  );
}

export default Leaders_List;
