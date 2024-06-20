import allhouse from "../../assets/logos/aigenerated/p.png";

export default () => {
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-white font-bold text-4xl xl:text-5xl">
          Track the Glory of Your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8945] to-[#00f7ff]">
            {" "}
            Houses
          </span>
        </h1>
        <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          House Arena is your one-stop platform for tracking house points,
          viewing past events, and fostering a competitive spirit within your
          individul houses.
        </p>
        <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
          <a
            href="javascript:void(0)"
            className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
          >
            LeaderBoard
          </a>
          <a
            href="javascript:void(0)"
            className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
          >
            Events scores
          </a>
        </div>
      </div>
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <img src={allhouse} className="w-4 mx-auto sm:w-10/12  lg:w-80" />
      </div>
    </section>
  );
};
