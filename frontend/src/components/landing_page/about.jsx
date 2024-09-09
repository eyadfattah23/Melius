import AboutMember from "./about_member"
import member2_pic from "../../assets/images/team_members/lamia_hamdi.jpg"
import member1_pic from "../../assets/images/team_members/larini_abdllah.png"
import member3_pic from "../../assets/images/team_members/eyad_abdelfattah.png"
function About(){
    return <div className="landing_about" id="about">
       <h1>About Us</h1>
       <p> We understand the challenges of recovery and have designed Melius to offer not just tools, but a supportive environment. Our mission is to provide guidance through every step of your journey, from relapse to recovery, from struggle to success.
       </p>
       <div className="team">
        <p>We are a team of passionate individuals committed to helping people overcome porn addiction.</p>
        <div className="members">
        <AboutMember 
            name={"Eyad Abdelfattah"}  
            role={"Backend Developer"}
            about={"With a background in data science and machine learning, I'm passionate about solving complex business problems. I developed a metaverse/VR therapy app that connects users with remote life coaches, offering the convenience of virtual sessions. I’ve worked on 40+ EDA projects and various machine learning models. As an ALX software engineering student, I’m building my skills to become a tech leader, having made 2100+ contributions on GitHub in 2023 across multiple software engineering projects."}
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