import AboutMember from "./about_member"
import member2_pic from "../../assets/images/team_members/lamia_hamdi.jpg"
import member1_pic from "../../assets/images/team_members/larini_abdllah.png"
import member3_pic from "../../assets/images/team_members/eyad_abdelfattah.jpg"
function About(){
    return <div className="landing_about flex flex-col justify-center items-center gap-8 px-16 " id="about">
       <h1>Why Melius</h1>
       <div className="gap-8 flex flex-col">
        <p>The idea behind Melius started from a personal experience with a close friend struggling with porn addiction. Watching this friend battle the addiction and trying different solutions without success motivated the team to create something that addresses the root of the problem in a more effective and compassionate way. We believe that privacy, community support, and easily accessible tools are crucial to overcoming this challenge. With this passion, the Melius team is dedicated to helping others take control of their lives.

Melius has grown into more than just a technical project. It’s a tool built with empathy, a product of deep thought and a desire to make a real difference in people’s lives.</p>
        
       </div>
       <div className="team gap-8 flex flex-col">
        <div className="members px-16 gap-16 flex flex-col">
        <AboutMember 
            name={"Eyad Abdelfattah"}  
            role={"Backend Developer"}
            about={"Eyad, a Muslim, an  Egyptian, an Arab, with a modest knowledge of backend programming and databases, deeply passionate about data and information and  Fond of statistics, especially those that can be used to solve problems. Add this description as the first cause on three other causes. First, going through one of the darkest experiences of my life, if not the darkest, with someone very close to me because of pornography. Second, a need for personal project to build my professional portfolio. Lastly, a profound desire to leave a positive impact that can benefit people, both during my lifetime and after. Those 4 reasons drove me to contribute to the creation of this humble platform. By God's grace."}
            linkedin={"https://www.linkedin.com/in/eyad-fattah/"} 
            gmail={"mailto:eyadabdelfattah4@gmail.com"} 
            github={"https://github.com/eyadfattah23"} 
            picture={member3_pic}/>
        <AboutMember 
            name={"Lamia Hamdi"} 
            role={"Frontend Developer"} 
            about={"I’m a frontend developer with hands-on experience in web projects and internships. Skilled in HTML, CSS, JavaScript, React, and React Native, I create responsive and intuitive interfaces. Fluent in English and Arabic, I thrive in collaborative environments and have strong problem-solving skills. I’m eager to continue growing my career in frontend development and contribute to impactful projects."} 
            linkedin={"https://www.linkedin.com/in/lamia-hamdi/"} 
            gmail={"mailto:lamia.hamdi1406@gmail.com"} 
            github={"https://github.com/Lamia1406"} 
            picture={member2_pic} reverse/>
        <AboutMember 
            name={"Larini Abdllah"} 
            role={"Backend Developer"} 
            about={"I am a skilled software developer with 4 years of experience working on freelance projects . I am proficient in PHP, C#, Java, Golang, JavaScript, Angular, SQL, and PostgreSQL. With a bachelor's degree in Management Computing, I bring a unique blend of technical and business knowledge to deliver impactful solutions."} 
            linkedin={"https://www.linkedin.com/in/larini-abdllah/"} 
            gmail={"mailto:laribox2014@gmail.com"} 
            github={"https://github.com/laribox"} 
            picture={member1_pic}/>
            
           
        </div>
       </div>
       
    </div>
}
export default About