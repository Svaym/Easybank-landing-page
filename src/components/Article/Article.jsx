import { articles } from '../article';
function Read(props) {
  return (
    <div className="bg-white rounded-md cursor-pointer transition duration-300 hover:scale-110 md:w-[70%] md:mx-auto sm:w-[85%] xs:w-[80%] xxs:w-[90%]">
      {/* md:w-[25%] */}
      <img src={props.img} className="rounded-t-md object-cover h-[14.25rem] lg:w-full md:h-[17rem]" />
      <div className="p-5">
        <h3 className="text-sm">
          {props.author}
        </h3>
        <h3 className="font-bold cursor-pointer text-slate-700 text-lg mt-2 w-[80%] transition-colors duration-200 ease-linear hover:text-[#31d35c] xl:w-[89%] xl:text-base lg:w-full sm:text-lg">
          {props.title}
        </h3>
        <p className="font-normal mt-2">
          {props.description}
        </p>
      </div>
    </div>
  )
}
export default function Article() {
  return (
    <section className="bg-[#fafafa] pb-20">
      <div className="max-w-7xl mx-auto w-full px-2">
        <h2 className="text-4xl text-slate-700 pt-24 lg:text-3xl md:text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-4 grid-rows-1 gap-x-5 mt-8 lg:grid-cols-2 lg:grid-rows-2 lg:gap-y-6 md:grid-cols-1 md:grid-rows-4 md:gap-x-0">
          <Read title={articles[0].title} author={articles[0].author} img={articles[0].img} description={articles[0].description}/>
          <Read title={articles[1].title} author={articles[1].author} img={articles[1].img} description={articles[1].description}/>
          <Read title={articles[2].title} author={articles[2].author} img={articles[2].img} description={articles[2].description}/>
          <Read title={articles[3].title} author={articles[3].author} img={articles[3].img} description={articles[3].description}/>
        </div>
      </div>
    </section>
  )
}