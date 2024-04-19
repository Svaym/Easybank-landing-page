import Button from "../Button/Button";
export default function Footer() {
  return(
    <footer className="bg-[#2d314d] text-white py-12 relative">
      <div className="max-w-7xl mx-auto w-full px-2">
        <div className="flex justify-between items-center md:flex-col md:gap-y-3">
          <div>
            <a className="contrast-200 transition duration-200 ease-in hover:brightness-125" href="#">
              <img className="pointer-events-none" src="../assets/logo.svg" alt="Logo" />
            </a>
            <div className="flex gap-x-3 mt-[3.75rem]">
              <a href="#" className="">
                <img src="../assets/icon-facebook.svg" className="transition duration-200 ease-out hover:invert-[60%] hover:hue-rotate-[190deg]" alt="" />
              </a>
              <a href="#" className="">
                <img src="../assets/icon-youtube.svg" className="transition duration-200 ease-out hover:invert-[60%] hover:hue-rotate-[190deg]" alt="" />
              </a>
              <a href="#" className="">
                <img src="../assets/icon-twitter.svg" className="transition duration-200 ease-out hover:invert-[60%] hover:hue-rotate-[190deg]" alt="" />
              </a>
              <a href="#" className="">
                <img src="../assets/icon-pinterest.svg" className="transition duration-200 ease-out hover:invert-[60%] hover:hue-rotate-[190deg]" alt="" />
              </a>
              <a href="#" className="">
                <img src="../assets/icon-instagram.svg" className="transition duration-200 ease-out hover:invert-[60%] hover:hue-rotate-[190deg]" alt="" />
              </a>
            </div>
          </div>
          <nav>
            <ul className="flex flex-col gap-y-2 text-center md:mt-8">
              <li><a href="#" className="font-normal transition-colors duration-200 ease-linear hover:text-[#31d35c] active:text-[#31d60c]">About Us</a></li>
              <li><a href="#" className="font-normal transition-colors duration-200 ease-linear hover:text-[#31d35c] active:text-[#31d60c]">Contact</a></li>
              <li><a href="#" className="font-normal transition-colors duration-200 ease-linear hover:text-[#31d35c] active:text-[#31d60c]">Blog</a></li>
            </ul>
          </nav>
          <nav>
            <ul className="flex flex-col gap-y-2 text-center">
              <li><a href="#" className="font-normal transition-colors duration-200 ease-linear hover:text-[#31d35c] active:text-[#31d60c]">Careers</a></li>
              <li><a href="#" className="font-normal transition-colors duration-200 ease-linear hover:text-[#31d35c] active:text-[#31d60c]">Support</a></li>
              <li><a href="#" className="font-normal transition-colors duration-200 ease-linear hover:text-[#31d35c] active:text-[#31d60c]">Privacy Policy</a></li>
            </ul>
          </nav>
          <div className="grid gap-y-14 justify-end">
            <Button className="bg-gradient-to-r from-lime to-cyan rounded-full px-6 py-2 ml-auto mr-0 text-white font-normal transition duration-200 ease-linear hover:contrast-125 active:contrast-150 md:block md:mx-auto md:mt-8">Request Invite</Button>
            <p className="text-zinc-400">© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}