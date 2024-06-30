import allhouse from "../../../assets/logos/aigenerated/p.png";

export default () => {
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "House of Phoenix",
      salary: "33",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "House of Kong",
      salary: "$90K",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "House of Leo",
      salary: "$80K",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "House of Tusker",
      salary: "$120K",
    },
  ];
  return (
    <section className="mt-10 md:mt-14 lg:mt-20 mx-auto max-w-screen-xl pb-12 px-4 items-center md:flex md:items-center md:px-8">
      <div className="space-y-4 m-auto text-center lg:text-left lg:max-w-md">
        <h1 className="text-white font-bold text-4xl xl:text-5xl">
          Current
          <br />
          <span className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff32ad] to-[#8800ff]">
            {" "}
            LeaderBoard
          </span>
        </h1>
        <p className="text-gray-300 max-w-lg leading-relaxed mx-auto lg:ml-0">
        Celebrate your house's achievements and strive for excellence!
        </p>
      </div>
      <div className="m-auto text-center mt-7 md:mt-0 lg:mt-0">
        {/* <img src={allhouse} className="w-3/4 mx-auto sm:w-80" /> */}
        <div className="mt-12 shadow-sm border rounded-lg w-max overflow-x-auto m-auto">
          <table className="w-full  table-auto text-sm text-left">
            <thead className="bg-gray-50 text-black text-xl border-b">
              <tr>
                <th className="py-3 px-6">House</th>
                <th className="py-3 px-6">Points</th>
              </tr>
            </thead>
            <tbody className="text-white text-lg divide-y">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 mr-10 whitespace-nowrap">
                    <img src={item.avatar} className="w-10 h-10 rounded-full" />
                    <div>
                      <span className="block">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{item.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
