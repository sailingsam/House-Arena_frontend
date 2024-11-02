import { NavLink } from "react-router-dom";

const LaunchSoon = () => {
  return (
    <section className="bg-whit">
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-indigo-600 font-medium">House Arena</h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Your personlised interactive House pages{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              will Lauch hopefully soon
            </span>
          </h2>
          <div className="flex justify-center items-center">
            <p className="max-w-2xl font-semibold">
              We are working hard to bring you the best experience possible.
            </p>
            <NavLink
              to="https://github.com/sailingsam/House-Arena_frontend  "
              className="block py-2 px-3 ml-2 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-3xl shadow-lg hover:shadow-none"
            >
              Contribute
            </NavLink>
          </div>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <NavLink
              to="/"
              className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              back to Arena
            </NavLink>
          </div>
        </div>
        <div className="mt-14">
          <img
            src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
            className="w-full shadow-lg rounded-lg border"
            alt="github"
          />
        </div>
      </div>
    </section>
  );
};

export default LaunchSoon;
