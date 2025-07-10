import { MdEmail } from 'react-icons/md';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineGithub,AiOutlineTwitter, AiFillHeart } from 'react-icons/ai';
import Link from 'next/link';


export default function Contect() {
  return (
    <div className="mt-16 pb-16 px-3" id="contact">
      <p  className="text-3xl font-semibold">Get in Touch</p>

      <div className='mt-8 mb-6 flex flex-row justify-center items-center'>
      <Link href="https://github.com/rohitmane9022" target="_black" className="rounded-lg bg-zinc-800 p-2 mx-2 text-2xl ring-zinc-500 hover:ring-2 transition-all duration-200">
      <AiOutlineGithub/>
      
      </Link>
      <Link href="https://twitter.com/RohitMane0" target="_black" className="rounded-lg bg-zinc-800 p-2 mx-2 text-2xl ring-zinc-500 hover:ring-2 transition-all duration-200">
      <AiOutlineTwitter />
      </Link>

      <Link href="https://www.linkedin.com/in/rohit-mane-89b180207/" target="_black" className="rounded-lg bg-zinc-800 p-2 mx-2 text-2xl ring-zinc-500 hover:ring-2 transition-all duration-200">
      <GrLinkedinOption/>
      </Link>

      <Link href="mailto:rohitmane8356@gmail.com" target="_black" className="rounded-lg bg-zinc-800 p-2 mx-2 text-2xl ring-zinc-500 hover:ring-2 transition-all duration-200">
      <MdEmail/>
      </Link>
      </div>

      <div className='flex flex-row justify-center items-center text-gray-400'>
        made with <AiFillHeart className='mx-1 text-red-500'/>and ReactJS
      </div>
      <div className='flex flex-row justify-center text-gray-400'>
        © {new Date().getFullYear()} Rohit Mane
      </div>
    </div>
  )
}
