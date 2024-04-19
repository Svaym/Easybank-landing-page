import { choices } from '../choice';
function Choose(props) {
  return (
    <div className="mt-10">
      <img src={props.img} className="w-[18%] md:w-[15%] md:mx-auto xs:w-[20%]" />
      <h3 className="text-slate-700 text-xl mt-6 lg:text-lg xs:text-xl">
        {props.title}
      </h3>
      <p className="mt-5 w-[81%] xl:w-[85%] xl:text-[15px] lg:w-[95%] md:w-[75%] md:mx-auto xxs:w-[85%]">
        {props.description}
      </p>
    </div>
  )
}
export default function Choice() {
  return (
    <section className="bg-[#f3f4f6] pb-16">
      <div className="max-w-7xl mx-auto w-full px-2">
        <h2 className="text-4xl text-slate-700 pt-24 lg:text-3xl md:text-center">
          Why choose Easybank?
        </h2>
        <p className="mt-5 w-[50%] lg:w-[60%] md:text-center md:mx-auto md:w-[70%] xxs:w-[85%]">
          We leverage Open Banking to turn your bank account into your financial hub. Control
          your finances like never before.
        </p>
        <div className="grid grid-cols-4 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-1 md:grid-rows-4 md:text-center">
          <Choose title={choices[0].title} img={choices[0].img} description={choices[0].description}/>
          <Choose title={choices[1].title} img={choices[1].img} description={choices[1].description}/>
          <Choose title={choices[2].title} img={choices[2].img} description={choices[2].description}/>
          <Choose title={choices[3].title} img={choices[3].img} description={choices[3].description}/>
        </div>
      </div>
    </section>
  )
}