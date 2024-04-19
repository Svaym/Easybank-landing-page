import { MdOutlineMenu } from 'react-icons/md';
import {MdClose} from 'react-icons/md';
import { useState } from "react";
export default function MobileNavigation( { className } ){
  const [click, setclick] = useState(false);
  const Hamburger = <MdOutlineMenu className="cursor-pointer right-[2%] absolute h-9 w-9 text-slate-700" onClick={() => setclick(!click)}/>
  const Close = <MdClose className="cursor-pointer right-[2%] absolute h-9 w-9 text-slate-700" onClick={() => setclick(!click)} />
  return (
    <div className={ className }>
      <div className="flex items-center justify-between">
        <div>
          <a className="transition duration-200 hover:contrast-50" href="#">
            <img className="pointer-events-none" src="../assets/logo.svg" alt="Logo" />
          </a>
        </div>
        { click ? Close : Hamburger }
        {click &&
        <nav>
          <ul className="flex flex-col justify-around fixed top-[10vh] left-1/2 -translate-x-1/2 h-56 w-56 p-3 text-center bg-white rounded-lg shadow-2xl animate-fade">
            <li><a className="hover:text-slate-500 transition-colors duration-200 ease-out active:text-slate-900" href="#" onClick={() => setclick(!click)}>Home</a></li>
            <li><a className="hover:text-slate-500 transition-colors duration-200 ease-out active:text-slate-900" href="#" onClick={() => setclick(!click)}>About</a></li>
            <li><a className="hover:text-slate-500 transition-colors duration-200 ease-out active:text-slate-900" href="#" onClick={() => setclick(!click)}>Contact</a></li>
            <li><a className="hover:text-slate-500 transition-colors duration-200 ease-out active:text-slate-900" href="#" onClick={() => setclick(!click)}>Blog</a></li>
            <li><a className="hover:text-slate-500 transition-colors duration-200 ease-out active:text-slate-900" href="#" onClick={() => setclick(!click)}>Careers</a></li>
          </ul>
        </nav>}
      </div>
    </div>
  )
}