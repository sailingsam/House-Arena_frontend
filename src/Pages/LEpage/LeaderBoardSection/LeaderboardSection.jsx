import kong from '../../../assets/logos/white bg/kong.webp';
import leo from '../../../assets/logos/white bg/leo.webp';
import phoenix from '../../../assets/logos/white bg/phoenix.webp';
import tusker from '../../../assets/logos/white bg/tusker.webp';
import goldMedal from '../../../assets/medals/gold-medal.webp';
import silverMedal from '../../../assets/medals/silver-medal.webp';
import bronzeMedal from '../../../assets/medals/bronze-medal.webp';
import { useSelector } from "react-redux";

const LeaderboardSection = () => {
  const medalImages = {
    0: goldMedal,
    1: silverMedal,
    2: bronzeMedal
  };

  const MedalIcon = ({index}) => {
    const medalSrc = medalImages[index];
    return medalSrc ? <img src={medalSrc} className="w-6 h-6 inline ml-2" alt="medal" /> : null;
  };
  
  const housePoints = useSelector((state) => state.totalHousePoints);
  const tableItems = [
    {
      avatar: kong,
      name: "House of kong",
      totalpoints: housePoints.kong,
    },{
      avatar: leo,
      name: "House of Leo",
      totalpoints: housePoints.leo,
    },{
      avatar: phoenix,
      name: "House of Phoenix",
      totalpoints: housePoints.phoenix,
    },{
      avatar: tusker,
      name: "House of Tusker",
      totalpoints: housePoints.tusker,
    }
  ];
  tableItems.sort((a,b) => b.totalpoints - a.totalpoints);

  return (
    <section className="mt-10 md:mt-14 lg:mt-10 mx-auto max-w-screen-xl pb-12 px-4 items-center md:flex md:items-center md:px-8">
      <div className="space-y-4 m-auto text-center lg:text-left lg:max-w-md">
        <h1 className="text-white font-bold text-4xl xl:text-5xl">
          Current
          <br />
          <span className="md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff32ad] to-[#8800ff]">
            {" "}
            LeaderBoard
          </span>
        </h1>
        <p className="text-gray-300 text-lg max-w-lg leading-relaxed mx-auto lg:ml-0">
          Celebrate your house achievements and strive for excellence!
        </p>
      </div>
      <div className="m-auto text-center mt-7 md:mt-0 lg:mt-0">
        <div className="mt-12 shadow-sm border max-w-fit rounded-lg  overflow-x-auto m-auto">
          <table className="table-auto text-sm text-left">
            <thead className="bg-gray-50 text-black text-xl border-b">
              <tr>
                <th className="py-3 px-6">House</th>
                <th className="py-3 px-6">Points</th>
              </tr>
            </thead>
            <tbody className="text-white text-lg divide-y">
              {tableItems.map((item, index) => (
                <tr key={index}>
                  <td className="flex items-center gap-x-3 py-3 px-4 lg:mr-10 whitespace-nowrap">
                    <img src={item.avatar} className="w-10 h-10 rounded-full" alt='avatar' />
                    <div>
                      <span className={`${index==0 ? "font-bold":""}`}>{item.name}
                        {index < 3 && <MedalIcon index={index} />}
                      </span>
                    </div>
                  </td>
                  <td className={`${index==0 ? "font-bold":""} px-6 py-4 whitespace-nowrap text-center`}>
                    {item.totalpoints}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="absolute inset-0 max-w-md mx-auto h-52 blur-[118px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
};

export default LeaderboardSection;
