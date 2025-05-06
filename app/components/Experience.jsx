import Image from "next/image"
import fiverr from "./Image/fiverr.png"


const Experience = () => {
  return (
    <section className="my-16 px-3 font-sen ctx" id="experience">
      <p className="text-3xl font-bold dark:text-white mb-8">Experience</p>
    <div className="flex flex-wrap sm:flex-nowrap	 relative border-l border-l-gray-600 px-4 py-2  border-gray-400">
      <div className="sm:flex">
      <div className="-ml-5">
        <Image src={fiverr}
    alt="Rohit Mane"
    width={100} 
  height={100}
    className="rounded-ful mb-2 sm:mb-0" />
      </div>
    <div className="w-full -ml-2 ">
        <p className="my-0 text-foreground font-bold text-xl">
         Freelancer - Full Stack Developer
        </p>
        <p className="my-0 text-lg font-bold">Fiverr</p>
        <p className="my-0 text-sm  dark:text-gray-300 text-gray-500">
          Oct 2024 - Present
        </p>
        <ul className="work dark:text-gray-400 text-gray-600">
          <li>
            <span className="text-foreground dark:text-gray-200 font-bold">
              Tech Stack:
            </span>
            &nbsp; NextJS, Typescript, TailwindCss, Shadcn, Expressjs, JWT, more...
          </li>
          <li>
            <span className="text-foreground dark:text-gray-200 font-bold">
              Tools:
            </span>
            &nbsp; Figma, Postman
          </li>
        </ul>
      </div>
      </div>
      
    </div>
    
    </section>
  )
}

export default Experience