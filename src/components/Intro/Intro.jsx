import Button from "../Button/Button"
export default function Intro( className ) {
  return (
    <section className="bg-[#fafafa] relative">
      <img src="../assets/bg-intro-desktop.svg" alt="" className="absolute -top-[17.5rem] -right-[29rem] lg:-top-[12.5rem] lg:-right-[36rem] md:-right-[15rem] md:-top-[5.5rem] sm:-right-[6rem] sm:-top-[3.5rem] xxs:hidden"/>
      <img src="../assets/bg-intro-mobile.svg" alt="" className="hidden xxs:block" />
      <div className="max-w-7xl mx-auto w-full px-2">
        <div className="flex md:flex md:flex=col">
          <div className="w-[45%] md:w-full">
            <h1 className="mt-40 font-normal text-6xl text-slate-700 xl:text-4xl xl:mt-32 lg:mt-24 lg:text-3xl md:mt-[75%] md:mx-auto md:text-center md:text-5xl md:w-[370px] sm:text-4xl xs:text-3xl xs:w-[75%] xxs:-mt-[15%]">
              Next generation digital banking
            </h1>
            <p className="w-3/4 my-8 xl:text-[15px] lg:w-[85%] md:mx-auto md:w-[55%] md:text-center md:py-2 md:text-base sm:w-[60%] xs:w-[80%]">
              Take your financial life online. Your Easybank account will be a one-stop-shop
              for spending, saving, budgeting, investing, and much more.
            </p>
            <Button className="bg-gradient-to-r from-lime to-cyan rounded-full px-6 py-2 mb-52 text-white font-normal transition duration-200 ease-linear hover:contrast-125 active:contrast-150 xl:mb-48 lg:mb-32 md:block md:mb-4 md:mx-auto">Request Invite</Button>
          </div>
          <div>
            <img src="../assets/image-mockups.png" alt="Mockups" className="absolute -right-[135px] -top-32 z-10 xl:max-w-[60%] xl:-top-28 xl:-right-28 lg:max-w-[58%] md:left-1/2 md:-translate-x-1/2 md:max-w-[75%] xs:max-w-[80%] xxs:max-w-[95%] xxs:-top-28" />
          </div>
        </div>
      </div>
    </section>
  )
}
