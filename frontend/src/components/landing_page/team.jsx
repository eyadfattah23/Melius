import TeamMembers from "./team_members";

export default function Team() {
    return  <section>
    <div className="grid max-w-screen-xl px-32 py-8 landing_team mx-auto gap-32 lg:py-8 lg:grid-cols-12 ">
        <div className="place-self-center  flex flex-col py-16 lg:gap-16 gap-4">
        <h1>Meet <span>Our Team</span></h1>
        <p className="text-center">We are a team of passionate individuals committed to helping people overcome porn addiction.</p>      
        </div>
       <TeamMembers/>
    </div>
  </section>   
}

