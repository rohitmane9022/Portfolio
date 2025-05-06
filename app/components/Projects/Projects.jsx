
import Link from "next/link";
import { ProjectDeatils } from "./ProjectDetails";
import Image from "next/image";


export default function Project() {
  return (
    <section className="my-16 px-3"id="Projects">
      <p className="text-3xl font-semibold text-white">Featured Projects</p>
      
      {ProjectDeatils?.map(project=>(
        <article className="group my-10" key={project.id}>
          <div className="flex flex-col justify-center relative">
          
          <div className="flex flex-row peer absolute z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] duration-150 transition-opacity opacity-0 group-hover:opacity-100">
            <Link target="_blank" href={project.liveLink} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-2xl bg-transparent font-semibold uppercase outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150">
              Live
            </Link>
            <Link target="_blank" href={project.sourceLink} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-2xl bg-transparent font-semibold uppercase outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150">Source</Link>
          </div>
          <div className="peer-hover:blur-sm group hover:blur-sm transition-all duration-300 flex flex-col space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 md:max-w-3xl lg:max-w-4xl max-w-xl mx-auto border border-white bg-white">
          <div className="w-full bg-white grid place-items-center">
  <Image
    className="rounded-xl object-cover"
    src={project.img}
    alt={project.title} 
    width={800} 
    height={400}
/>
</div>
            <div className="bg-white flex flex-col p-3">
              <div>
                <h1 className="text-gray-800 text-xl md:text-3xl font-semibold">{project.title}</h1>
                <p className="md:text-lg text-gray-500 text-base mt-2	">
              <span className="text-m font-bold text-gray-800">Tech Stack:</span> {project.techStack}
                </p>
              </div>
            </div>
          </div>
          </div>
        </article>
      ))}
    </section>
  )
}
