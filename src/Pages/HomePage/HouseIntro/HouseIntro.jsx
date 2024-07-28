import konglogo from "../../../assets/logos/transparentbg/kong.png";
import leologo from "../../../assets/logos/transparentbg/leo.png";
import phoenixlogo from "../../../assets/logos/transparentbg/phoenix.png";
import tuskerlogo from "../../../assets/logos/transparentbg/tusker.png";

export default () => {
  const houseData = [
    {
      name: "House of Kong",
      attribute: "Curiosity",
      logo: konglogo,
      themecss: {
        bgGradient: "from-blue-400 to-blue-800",
        textGradient: "from-blue-500 to-blue-500",
        textColor: "text-gray-600 dark:text-blue-500",
      },
    },
    {
      name: "House of Leo",
      attribute: "Integrity",
      logo: leologo,
      themecss: {
        bgGradient: "from-yellow-300 to-yellow-700",
        textGradient: "from-yellow-500 to-yellow-500",
        textColor: "text-gray-600 dark:text-yellow-500",
      },
    },
    {
      name: "House of Phoenix",
      attribute: "Excellence",
      logo: phoenixlogo,
      themecss: {
        bgGradient: "from-red-400 to-red-700",
        textGradient: "from-red-500 to-red-500",
        textColor: "text-gray-600 dark:text-red-500",
      },
    },
    {
      name: "House of Tusker",
      attribute: "Respect",
      logo: tuskerlogo,
      themecss: {
        bgGradient: "from-green-500 to-green-700",
        textGradient: "from-green-500 to-green-500",
        textColor: "text-gray-600 dark:text-green-500",
      },
    },
  ];

  return (
    <section className="relative py-20">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 md:px-8">
        <div className="max-w-screen-xl text-center mb-12">
          <h3 className="text-white font-bold text-4xl font-semibold sm:text-4xl xl:text-5xl">
            Unity through Diversity:
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5b5b] to-[#15ff00]">
              {" "}
              SST's Houses
            </span>
          </h3>
          <p className="mt-3">
            To encourage a culture of healthy competition and camaraderie, the
            student community is divided into four houses. Each house sigil
            represents a key attribute necessary for personal growth and
            development.
          </p>
        </div>
        <div className="mt-12 lg:mt-0">
          <ul className="flex justify-center items-start gap-5 sm:gap-10 md:gap-12 lg:gap-16">
            {houseData.map((house, index) => (
              <li
                key={index}
                className="flex  justify-center group cursor-pointer"
              >
                <div className="flex flex-col justify-center items-center gap-5 group mx-2 cursor-pointer w-[70px] sm:w-20 md:w-32 lg:w-44">
                  <div
                    className={`relative bg-gradient-to-r w-[70px] sm:w-20 md:w-32 lg:w-44 aspect-square items-center justify-center flex ${house.themecss.bgGradient}`}
                  >
                    <img
                      className={`group-hover:ease-in-out transition duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-125 w-3/4 aspect-square rotate-0 group-hover:stroke-${
                        house.themecss.textGradient.split("-")[2]
                      }-500 fill-${
                        house.themecss.textGradient.split("-")[2]
                      }-500  group-hover:-skew-y-12 group-hover:skew-x-12`}
                      fill="currentColor"
                      src={house.logo}
                      alt={`${house.name} logo`}
                    />
                  </div>
                  <div className="flex flex-row place-items-center place-content-between">
                    <div className="flex flex-col justify-between gap-1">
                      <p
                        className={`font-semibold text-md lg:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:${house.themecss.textGradient} text-gray-600 dark:${house.themecss.textColor}`}
                      >
                        {house.name}
                      </p>
                      <p className="text-sm text-gray-500">{house.attribute}</p>
                    </div>
                    <div className="-rotate-45 cursor-pointer">
                      <svg
                        clipRule="evenodd"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`font-semibold text-lg fill-white sm:text-xl transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:text-gray-200 fill-${
                          house.themecss.textGradient.split("-")[1]
                        }-500 group-hover:bg-${
                          house.themecss.textGradient.split("-")[1]
                        }-500 group-hover:fill-white group-hover:rotate-45 p-px rounded-full w-10 group-hover:rounded-full group-hover:animate-pulse`}
                      >
                        <path
                          d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
};
