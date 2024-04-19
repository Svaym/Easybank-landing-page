import Button from "../Button/Button";
export default function DesktopNavigation( { className } ){
  return (
    <div className={ className }>
      <div className="flex items-center justify-between">
        <div>
          <a className="transition duration-200 hover:contrast-50" href="#">
            <img className="pointer-events-none" src="../assets/logo.svg" alt="Logo" />
          </a>
        </div>
        <nav>
          <ul className="flex gap-x-5 md:fixed md:-left-full md:top-20 md:bg-white md:flex-col md:w-full">
            <li><a className="relative after:block after:absolute after:l=0 after:w-0 after:-bottom-[38px] after:h-[2px] after:bg-gradient-to-r from-lime to-cyan after:content-[''] after:transition-all after:duration-200 after:ease-in-out hover:after:w-full hover:text-slate-500 transition-colors duration-200 ease-out active:text-slate-900 " href="#">Home</a></li>
            <li><a className="relative after:block after:absolute after:l=0 after:w-0 after:-bottom-[38px] after:h-[2px] after:bg-gradient-to-r from-lime to-cyan after:content-[''] after:transition-all after:duration-200 after:ease-in-out hover:after:w-full hover:text-slate-500 transition-colors duration-200 ease-out active:text-slate-900" href="#">About</a></li>
            <li><a className="relative after:block after:absolute after:l=0 after:w-0 after:-bottom-[38px] after:h-[2px] after:bg-gradient-to-r from-lime to-cyan after:content-[''] after:transition-all after:duration-200 after:ease-in-out hover:after:w-full hover:text-slate-500 transition-colors duration-200 ease-out active:text-slate-900" href="#">Contact</a></li>
            <li><a className="relative after:block after:absolute after:l=0 after:w-0 after:-bottom-[38px] after:h-[2px] after:bg-gradient-to-r from-lime to-cyan after:content-[''] after:transition-all after:duration-200 after:ease-in-out hover:after:w-full hover:text-slate-500 transition-colors duration-200 ease-out active:text-slate-900" href="#">Blog</a></li>
            <li><a className="relative after:block after:absolute after:l=0 after:w-0 after:-bottom-[38px] after:h-[2px] after:bg-gradient-to-r from-lime to-cyan after:content-[''] after:transition-all after:duration-200 after:ease-in-out hover:after:w-full hover:text-slate-500 transition-colors duration-200 ease-out active:text-slate-900" href="#">Careers</a></li>
          </ul>
        </nav>
        <Button className="bg-gradient-to-r from-lime to-cyan rounded-full px-6 py-2 text-white font-normal transition duration-200 ease-linear hover:contrast-125 active:contrast-150 md:hidden">Request Invite</Button>
      </div>
    </div>
  )
}