import Footer from "../components/footer";
import Navbar from "../components/common/navbar";
import "../assets/styles/home.css";
import Counter2 from "../components/common/counter2";
import Button from "../components/common/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Leaders_List from "../components/leaders_list";
import RelapsingCheck from "../components/common/relapsing_check";
import createOrResetTimer from "../functions/create_or_reset_timer";
import fetchUser from "../functions/fetch_user";
import countLevel from "../functions/count_level";
import { FourSquare } from "react-loading-indicators";
function Home() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const [username, setUsername] = useState("");
  const [maxDays, setMaxDays] = useState(-1);
  const [isUserLoading, setIsUserLoading] = useState(true); // Tracks user data loading state
  const [isLeadersLoading, setIsLeadersLoading] = useState(false); // Tracks leader board data loading state

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      setIsUserLoading(true);
      try {
        await fetchUser(user_id, token, setUsername, setMaxDays, navigate);
      } finally {
        setIsUserLoading(false);
      }
      if (maxDays){
        localStorage.setItem("level", JSON.stringify(`${countLevel(Number(maxDays))}`))
      }
      else{
        localStorage.setItem("level", JSON.stringify("-1"))
      }
    };
    
    fetchUserData();
  }, [user_id, token]);

  const handleJoinChallenge = () => {
    createOrResetTimer(user_id, token, setIsLeadersLoading, navigate);
  };

  return (
    <>
      <Navbar />
      <main className="main_layout">
        {/* If user data is being fetched, display FourSquare spinner */}
        {isUserLoading ? (
          <section className="full_screen_section px-16 py-8" id="hero">
            <FourSquare color="#040093" size="medium" text="Loading..." textColor="#000" />
          </section>
        ) : (
          <section className="full_screen_section px-16 py-8" id="hero">
            <h2>Welcome, {username}</h2>
            {maxDays >= 0 ? (
              <div className="stats flex flex-col justify-center items-center gap-8 py-8">
                <h4>You're on</h4>
                <Counter2
                  achieved_days={maxDays}
                  unit={maxDays > 1 ? "Days" : "Day"}
                />
                <h4>of your journey to freedom</h4>
              </div>
            ) : (
              <div className="stats flex flex-col justify-center items-center gap-8 py-8">
                <h4>Ready for a Change?</h4>
                <p>
                  Join our challenge today and start your journey towards a better
                  you!
                </p>
                <div>
                  <Button
                    text={"Join the Challenge"}
                    type={"cta_filled"}
                    onClick={handleJoinChallenge}
                  />
                </div>
              </div>
            )}
          </section>
        )}
        
        {/* Display loading spinner if leaders data is still being fetched */}
        {maxDays >= 0 && (isLeadersLoading ? (
          <section className="leaders-board flex flex-col gap-8 justify-center px-16">
            <FourSquare color="#32cd32" size="medium" text="Loading Leaders..." textColor="#000" />
          </section>
        ) : (
          <section className="leaders-board flex flex-col gap-8 justify-center px-16">
            <h1>Leaders Board</h1>
            <Leaders_List setMaxDays={setMaxDays} />
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Home;
