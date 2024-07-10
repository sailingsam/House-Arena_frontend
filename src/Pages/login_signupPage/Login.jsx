import HouseArenaLogo from "../../assets/HAwhiteWithoutBG.png";
import HouseArenaBlackLogo from "../../assets/HAblackWithoutBG.png";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <main className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <img src={HouseArenaLogo} width={450} />
          <div className=" mt-16 space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Unlock the Gateway to Your House's Glory!
            </h3>
            <p className="text-gray-300">
              Welcome back! Log in to access your house details, track events,
              and stay updated with the latest scores and achievements.
            </p>
            <div className="flex items-center -space-x-2 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <p className="text-sm text-gray-400 font-medium translate-x-5">
                {`We are waiting... ;)`}
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        ></div>
      </div>
      <div className="flex-1 flex items-center justify-center h-screen bg-white">
        <div className="w-full max-w-md space-y-4 px-10  text-gray-600 sm:px-0">
          <img
            src={HouseArenaBlackLogo}
            width={150}
            className="lg:hidden m-auto"
          />
          <div className="flex-col text-center justify-around items-center space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl mb-2">
              Log in
            </h3>
            <p className="">
              What! You have not yet registered!{" "}
              <NavLink
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500 border-2 border-gray-400 px-1"
              >
                <span>Sign Up NOW</span>
              </NavLink>
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">
                <span className="text-red-600">* </span>Email
              </label>
              <input
                type="email"
                required
                placeholder="@sst.scaler.com / @scaler.com"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-full"
              />
            </div>
            <div>
              <label className="font-medium">
                <span className="text-red-600">* </span>Password
              </label>
              <input
                type="password"
                required
                placeholder="********"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-full"
              />
            </div>
            <div className="flex-col justify-center text-center">
              <button className="max-w-fit px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-full duration-150">
                Let's Dive In
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
