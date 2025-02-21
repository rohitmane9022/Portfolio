import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function About() {
  return (
    
      <section className="my-8 flex flex-row items-center justify-between px-3">
        <div>
          <h1 className="text-4xl font-bold">Rohit Mane.</h1>
          <p className="mt-2 text-lg">Frontend Developer, Blogger</p>
          <p className="mt-4 text-gray-400">Building Web apps, proficient in Frontend.</p>
          <Link to="https://rohitmane9022.hashnode.dev/" target="_blank" className="group mt-4 flex items-center gap-1 flex-row text-xl text-gray-400 transition-all duration-150 hover:text-white">Read my Blogs
          <AiOutlineArrowRight className="mt-1 transition-all duration-100 group-hover:ml-1 "/></Link>
          <Link to="https://www.buymeacoffee.com/rohitmane" target="_blank" className="group font-jost mt-4 flex items-center gap-1 flex-row text-xl text-gray-400 transition-all duration-150 hover:text-white">Love my work? Sponsor me!
          <AiOutlineArrowRight className="mt-1 transition-all duration-100 group-hover:ml-1 "/></Link>
        </div>
        <div className="hidden md:block">
          <img className="h-[200px] w-[200px] object-cover rounded-full" src="https://res.cloudinary.com/dj1awovlx/image/upload/v1740140701/IMG_20250221_175243_ppd6i6.jpg" alt=""/>
        </div>
      </section>
    
  );
}
