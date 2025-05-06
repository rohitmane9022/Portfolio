import { BsArrowRightShort } from 'react-icons/bs';


function Skills() {
  return (
    <section className='my-16 px-3' id='Skills'>
      <p className='text-3xl font-semibold'>Skills & Uses</p>
      <div className='text-md md:text-lg my-8 flex flex-col'>
        <p className='flex flex-row flex-wrap border-b-[0.1px] py-1 border-gray-500 text-slate-300 items-center' >
          <BsArrowRightShort className='w-8 h-8'/>
          <span className='font-semibold text-white'>Next.js, React.js</span>
          &nbsp;as my Frontend Framework
        </p>
        <p className='flex flex-row flex-wrap border-b-[0.1px] py-1 border-gray-500 text-slate-300 items-center' >
          <BsArrowRightShort className='w-8 h-8'/>
          <span className='font-semibold text-white'>Javascript</span>
          &nbsp;as my main language
        </p>
        <p className='flex flex-row flex-wrap border-b-[0.1px] py-1 border-gray-500 text-slate-300 items-center' >
          <BsArrowRightShort className='w-8 h-8'/>
          <span className='font-semibold text-white'>Tailwind CSS</span>
          &nbsp;as my CSS framework
        </p>
        <p className='flex flex-row flex-wrap border-b-[0.1px] py-1 border-gray-500 text-slate-300 items-center' >
          <BsArrowRightShort className='w-8 h-8'/>
          <span className='font-semibold text-white'>Context API and Redux toolkit</span>
          &nbsp;as my State Management tool
        </p>
         <p className='flex flex-row flex-wrap border-b-[0.1px] py-1 border-gray-500 text-slate-300 items-center' >
          <BsArrowRightShort className='w-8 h-8'/>
          <span className='font-semibold text-white'>ExpressJs, NodeJs...</span>
          &nbsp;as my Backend Framework
        </p>
        <p className='flex flex-row flex-wrap border-b-[0.1px] py-1 border-gray-500 text-slate-300 items-center' >
          <BsArrowRightShort className='w-8 h-8'/>
          <span className='font-semibold text-white'>MongoDb...</span>
          &nbsp;as my Backend Database
        </p>
        
      </div>
      <p className='text-lg text-slate-300'>...more skills include <span className='text-white font-semibold'>HTML, CSS3</span></p>
    </section>
  )
}

export default Skills
