import ProcessStep from "./process_step"
import "../../assets/styles/landing_page/process.css"

function Process() {
    return <section className="landing_process flex flex-col  items-center justify-center lg:py-32 py-16 gap-16" id="process">
        <header className="flex flex-col items-center gap-4 lg:w-[80vw] px-4">
        <h1 className="text-center">Your Journey to Recovery Starts Here</h1>
        <p className="paragraph text-center">Get started on your path to recovery with clear milestones, detailed progress tracking, and valuable insights to guide you every step of the way.</p>
        </header>
        <div className="steps grid lg:grid-cols-4 grid-cols-1 items-start justify-between w-full  lg:px-20 px-6 gap-8">
          <ProcessStep label={"Sign Up or Login"} description={"Start by creating an account or logging in to begin your recovery journey."} step_num = {1}/>
          <ProcessStep label={"Track Your Progress"} description={"After logging in, head to the home page to see the latest updates, including how many days you've been on your recovery path, along with a leaderboard of fellow users and the latest articles."} step_num = {2}/>
          <ProcessStep label={"Challenge Yourself"} description={"Visit the challenge page for detailed statistics about your progress. Track your starting date, current progress, maximum days achieved, and any relapses along the way"} step_num = {3}/>
          <ProcessStep label={"Stay Informed"} description={"This guide highlights the key features users can expect after signing up, encouraging engagement and motivation."} step_num = {4}/>
        </div>
    </section>
}
export default Process