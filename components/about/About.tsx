import Education from "@/template/Education"
import Link from "next/link"
import { GrDocumentDownload } from "react-icons/gr"

const About = () => {
    return (
        <div id="about" className="w-full h-fit p-3 bg-black text-white">
            <p className="text-5xl font-bold text-center">About Me</p>
            <p className="px-5 py-3 lg:mx-36 text-gray-300 text-center">
                I&rsquo;m Deeksha Varhsney, a B.Tech. Undergrad focusing on Web Development. Proficient in Java ,and Springboot I specialize in crafting dynamic web applications. With a commitment to excellence, I constantly seek opportunities to enhance my skills and contribute meaningfully to projects.</p>
            <p className="text-4xl font-medium lg:mx-16 my-8 md:mx-10">Experience</p>
            <div className="lg:px-16 md:px-10">
                <Education course="Research Intern" institute="Defence Research & Development Organization DESIDOC Dellhi, India" description="During my internship, developed robust Java code to track and record network machine uptime and downtime with
99.9% accuracy.
• Collaborated to document outage information with 100% accuracy, detailing over 200 actions taken to resolve issues" />
            </div>
            <p className="text-4xl font-medium lg:mx-16 mb-8 mt-10 md:mx-10">Educational Qualifications</p>
            <div className="grid space-y-8 my-5 lg:mx-16 md:mx-10">
                <Education course="B.Tech in Information Technology" institute="Banasthali Vidyapith (2020-2024)" description="Persuing bachelor’s Of Technology from Banasthali Vidyapith in Jaipur, Uttar pradesh" />

                <Education course="Senior Secondary" institute="Banasthali Vidyapith (2018-2020)" description="Completed my Senior Secondary School from Banasthali Vidyapith in Jaipur, Uttar Pradesh with PCM." />

            </div>

            <Link href="/DEEKSHA_S_RESUME(15).pdf" download="DEEKSHA_S_RESUME(15).pdf">

                <button className="bg-blue-600 text-lg items-center gap-2 px-5 py-2 text-white mx-auto w-fit rounded-xl flex my-8">Download My Resume
                    <GrDocumentDownload className="text-2xl animate-bounce" />
                </button>
            </Link>
        </div>
    )
}

export default About