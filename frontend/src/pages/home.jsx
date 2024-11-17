import Footer from "../components/footer";
import Navbar from "../components/common/navbar";
import "../assets/styles/home.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import createOrResetTimer from "../functions/create_or_reset_timer";
import fetchUser from "../functions/fetch_user";
import Hero from "../components/home/hero";
import Leaders_Board from "../components/home/leaders_board";
/**
 * serves as the main landing page for authenticated users, providing a personalized welcome message, 
 * and options to join or reset a challenge, and view a leaderboard of top performers.
 */
function Home() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user_id = JSON.parse(localStorage.getItem("user_id"));

  if (!token || !user_id){
    // if token or user_id removed, it logs out the user
    handleLogout(navigate)
  }
  // Component state
  const [username, setUsername] = useState("");
  const [maxDays, setMaxDays] = useState(-1);
  const [isUserLoading, setIsUserLoading] = useState(true); // Tracks user data loading state
  const [isLeadersLoading, setIsLeadersLoading] = useState(false); // Tracks leader board data loading state
  const [elapsedDays, setDays] = useState(-1);
  const navigate = useNavigate();

  // Fetch user data on component mount and when relevant state variables change
  useEffect(() => {
    const fetchUserData = async () => {
      setIsUserLoading(true);
      try {
        await fetchUser(user_id, token, setUsername, setMaxDays, navigate,null, setDays);
      } finally {
        setIsUserLoading(false);
      }
    };
    
    fetchUserData();
    
  }, [user_id, token]);

  const handleJoinChallenge = () => {
    createOrResetTimer(user_id, token, setIsLeadersLoading, navigate);
  };

  return (
    <>
      <Navbar maxDays={maxDays}/>
      <main>
        <Hero isUserLoading={isLeadersLoading} elapsedDays={elapsedDays} handleJoinChallenge={handleJoinChallenge} user_id={user_id} token={token}/>
       
       <Leaders_Board isLeadersLoading={isLeadersLoading} setMaxDays={setMaxDays}/>
      </main>
      <Footer />
    </>
  );
}

export default Home;
