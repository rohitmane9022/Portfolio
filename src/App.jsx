import './App.css'
import About from './Components/About'
import Contect from './Components/Contect'
import Header from './Components/Header'
import Project from './Components/Project/Project'
import Skills from './Components/Skills'

function App() {

  return (
   <div className='px-2 xl:px-72 lg:px-48 sm:px-8 md:px-24 text-gray-200'>
    <Header/>
    <main>
    <About/>
    <Skills/>
    <Project/>
    <Contect/>
    </main>
    
   </div>
  )
}

export default App
