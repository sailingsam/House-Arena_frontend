import konglogo from "../../assets/logos/transparentbg/kong logo wbg.png";
import leologo from "../../assets/logos/transparentbg/leo logo wbg.png";
import phoenixlogo from "../../assets/logos/transparentbg/phoenix logo wbg.png";
import tuskerlogo from "../../assets/logos/transparentbg/tusker logo wbg.png";

export default () => {
  return (
    <section className="relative py-28 ">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex lg:justify-evenly md:px-8">
        <div className="mt-12 lg:mt-0">
          <ul className="grid gap-8 sm:grid-cols-2">
            <li className="flex gap-4">
              <KongCard />
            </li>
            <li className="flex gap-4">
              <LeoCard />
            </li>
            <li className="flex gap-4">
              <PhoenixCard />
            </li>
            <li className="flex gap-4">
              <TuskerCard />
            </li>
          </ul>
        </div>
        <div className="max-w-lg text-left">
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

function KongCard() {
  return (
    <div class="flex flex-col gap-5 group mx-2 cursor-pointer">
      <div class="bg-gradient-to-r w-44 sm:w-52 aspect-square items-center justify-center flex from-blue-400 to-blue-800">
        <img
          class="group-hover:ease-in-out transition duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-150 w-16 sm:w-40 aspect-square rotate-0 group-hover:-rotate-[360deg] group-hover:stroke-blue-500 fill-blue-500 group-hover:-translate-y-12 group-hover:-skew-y-12 group-hover:skew-x-12"
          fill="currentColor"
          src={konglogo}
          alt="kong logo"
        />
      </div>

      <div class="flex flex-row place-items-center place-content-between">
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-blue-500 dark:after:bg-blue-500 text-gray-600 dark:text-blue-500">
            House of Kong
          </p>
          <p class="text-sm text-gray-500">Curiosity</p>
        </div>
        <div class="-rotate-45 cursor-pointer">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-600 font-semibold text-lg sm:text-xl transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:text-gray-200 fill-blue-500 group-hover:bg-blue-500 group-hover:fill-white group-hover:rotate-45 p-px rounded-full w-10 group-hover:rounded-full group-hover:animate-pulse"
          >
            <path
              d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z"
              fill-rule="nonzero"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

function LeoCard() {
  return (
    <div class="flex flex-col gap-5 group mx-2 cursor-pointer">
      <div class="bg-gradient-to-r w-44 sm:w-52 aspect-square items-center justify-center flex from-yellow-300 to-yellow-700">
        <img
          class="group-hover:ease-in-out transition duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-150 w-16 sm:w-40 aspect-square rotate-0 group-hover:-rotate-[360deg] group-hover:stroke-yellow-500 fill-yellow-500 group-hover:-translate-y-12 group-hover:-skew-y-12 group-hover:skew-x-12"
          fill="currentColor"
          src={leologo}
          alt="kong logo"
        />
      </div>

      <div class="flex flex-row place-items-center place-content-between">
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-yellow-500 dark:after:bg-yellow-500 text-gray-600 dark:text-yellow-500">
            House of Leo
          </p>
          <p class="text-sm text-gray-500">Integrity</p>
        </div>
        <div class="-rotate-45 cursor-pointer">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-600 font-semibold text-lg sm:text-xl transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:text-gray-200 fill-yellow-500 group-hover:bg-yellow-500 group-hover:fill-white group-hover:rotate-45 p-px rounded-full w-10 group-hover:rounded-full group-hover:animate-pulse"
          >
            <path
              d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z"
              fill-rule="nonzero"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

function PhoenixCard() {
  return (
    <div class="flex flex-col gap-5 group mx-2 cursor-pointer">
      <div class="bg-gradient-to-r w-44 sm:w-52 aspect-square items-center justify-center flex from-red-400 to-red-700">
        <img
          class="group-hover:ease-in-out transition duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-150 w-16 sm:w-40 aspect-square rotate-0 group-hover:-rotate-[360deg] group-hover:stroke-red-500 fill-red-500 group-hover:-translate-y-12 group-hover:-skew-y-12 group-hover:skew-x-12"
          fill="currentColor"
          src={phoenixlogo}
          alt="kong logo"
        />
      </div>

      <div class="flex flex-row place-items-center place-content-between">
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-red-500 dark:after:bg-red-500 text-gray-600 dark:text-red-500">
            House of Phoenix
          </p>
          <p class="text-sm text-gray-500">Excellence</p>
        </div>
        <div class="-rotate-45 cursor-pointer">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-600 font-semibold text-lg sm:text-xl transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:text-gray-200 fill-red-500 group-hover:bg-red-500 group-hover:fill-white group-hover:rotate-45 p-px rounded-full w-10 group-hover:rounded-full group-hover:animate-pulse"
          >
            <path
              d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z"
              fill-rule="nonzero"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TuskerCard() {
  return (
    <div class="flex flex-col gap-5 group mx-2 cursor-pointer">
      <div class="bg-gradient-to-r w-44 sm:w-52 aspect-square items-center justify-center flex from-green-500 to-green-700">
        <img
          class="group-hover:ease-in-out transition duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-150 w-16 sm:w-40 aspect-square rotate-0 group-hover:-rotate-[360deg] group-hover:stroke-green-500 fill-green-500 group-hover:-translate-y-12 group-hover:-skew-y-12 group-hover:skew-x-12"
          fill="currentColor"
          src={tuskerlogo}
          alt="kong logo"
        />
      </div>

      <div class="flex flex-row place-items-center place-content-between">
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-green-500 dark:after:bg-green-500 text-gray-600 dark:text-green-500">
            House of Tusker
          </p>
          <p class="text-sm text-gray-500">Respect</p>
        </div>
        <div class="-rotate-45 cursor-pointer">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-600 font-semibold text-lg sm:text-xl transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:text-gray-200 fill-green-500 group-hover:bg-green-500 group-hover:fill-white group-hover:rotate-45 p-px rounded-full w-10 group-hover:rounded-full group-hover:animate-pulse"
          >
            <path
              d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z"
              fill-rule="nonzero"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
