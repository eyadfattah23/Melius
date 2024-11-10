import AboutMember from "./about_member"
import member2_pic from "../../assets/images/team_members/lamia_hamdi.jpg"
import member1_pic from "../../assets/images/team_members/larini_abdllah.png"
import member3_pic from "../../assets/images/team_members/eyad_abdelfattah.jpg"
function About(){
    return <div className="landing_about flex flex-col justify-center items-center gap-8 px-16 " id="about">
       <h1>Why Melius</h1>
       <div className="gap-8 flex flex-col">
        <p className="text-center">The idea behind Melius started from a personal experience with a close friend struggling with porn addiction. Watching this friend battle the addiction and trying different solutions without success motivated the team to create something that addresses the root of the problem in a more effective and compassionate way. We believe that privacy, community support, and easily accessible tools are crucial to overcoming this challenge. With this passion, the Melius team is dedicated to helping others take control of their lives.

Melius has grown into more than just a technical project. It’s a tool built with empathy, a product of deep thought and a desire to make a real difference in people’s lives.</p>
        
       </div>
       <div className="members gap-8 flex flex-col lg:flex-row lg:gap-4">
        <AboutMember 
            name={"Eyad Abdelfattah"}  
            role={"Backend Developer"}
            about={"I'm a Muslim, an Egyptian, an Arab, with a growing knowledge of backend programming and a passion for data and statistics. My contribution to this platform is driven by four key reasons: a personal struggle with someone close due to pornography, the need to build my professional portfolio, and a deep desire to create a positive, lasting impact. These experiences have shaped my motivation to help build this platform, by God's grace."}
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
       
  
}
export default About