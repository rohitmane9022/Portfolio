import About from "./components/About";
import Contect from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Project from "./components/Projects/Projects";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <div className='px-2 xl:px-72 lg:px-48 sm:px-8 md:px-24 bg-zinc-900 text-gray-200'>
    <Header/>
    <main>
    <About/>
    <Experience/>
    <Skills/>
    <Project/>
    <Contect/>
    </main>
    
   </div>
  );
}
