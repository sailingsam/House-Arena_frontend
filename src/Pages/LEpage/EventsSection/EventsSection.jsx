import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../../redux/actions/eventsActions";
import Loader from "../../../Components/Loader";
import { BiSearch } from "react-icons/bi";
import konglogo from "../../../assets/logos/transparentbg/kong.png";
import leologo from "../../../assets/logos/transparentbg/leo.png";
import phoenixlogo from "../../../assets/logos/transparentbg/phoenix.png";
import tuskerlogo from "../../../assets/logos/transparentbg/tusker.png";

export default () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((e) =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-center justify-between flex border-t-[1px] pt-10">
        <div className="text-white max-w-l">
          <h3 className="text-xl font-bold sm:text-2xl lg:text-4xl">
            Past Events
          </h3>
        </div>
        <div
          className={`p-5 overflow-hidden ${
            searchTerm ? "w-[270px]" : "w-[60px]"
          } h-[60px] hover:w-[270px] bg-gray-800 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300`}
        >
          <div className="flex items-center text-white justify-center fill-white">
            <BiSearch size={22} />
          </div>
          <input
            type="text"
            className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm lg:text-xl text-left">
          <thead className="bg-gray-50  font-medium border-b">
            <tr>
              <th className="py-3 px-6">Event</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-1 lg:px-5 text-center bg-blue-500">
                <img src={konglogo} className="w-14 h-14 m-auto" />
              </th>
              <th className="py-1 lg:px-5 text-center bg-yellow-500">
                <img src={leologo} className="w-14 h-14 m-auto" />
              </th>
              <th className="py-1 lg:px-5 text-center bg-red-500">
                <img src={phoenixlogo} className="w-14 h-14 m-auto" />
              </th>
              <th className="py-1 lg:px-5 text-center bg-green-500">
                <img src={tuskerlogo} className="w-14 h-14 m-auto" />
              </th>
            </tr>
          </thead>
          <tbody className="text-white font-semibold divide-y">
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  <Loader LoaderData={"Loading Events wise Points..."} />
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Error: {error}
                </td>
              </tr>
            ) : (
              filteredEvents.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {(() => {
                      const date = new Date(item.date);
                      const day = String(date.getDate()).padStart(2, "0");
                      const month = String(date.getMonth() + 1).padStart(
                        2,
                        "0"
                      ); // Months are zero-indexed
                      const year = date.getFullYear();
                      return `${day}-${month}-${year}`;
                    })()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center border-2 border-blue-500">
                    {item.housePoints.kong}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center border-2 border-yellow-500">
                    {item.housePoints.leo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center border-2 border-red-500">
                    {item.housePoints.phoenix}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center border-2 border-green-500">
                    {item.housePoints.tusker}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
