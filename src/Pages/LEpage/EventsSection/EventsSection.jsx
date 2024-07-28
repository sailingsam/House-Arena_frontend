import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../../redux/actions/eventsActions";
import Loader from "../../../Components/Loader";

export default () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);

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
        <div class="p-5 overflow-hidden w-[60px] h-[60px] hover:w-[270px] bg-gray-800 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
          <div class="flex items-center justify-center fill-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Isolation_Mode"
              data-name="Isolation Mode"
              viewBox="0 0 24 24"
              width="22"
              height="22"
            >
              <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
            </svg>
          </div>
          <input
            type="text"
            class="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
          />
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm lg:text-xl text-left">
          <thead className="bg-gray-50  font-medium border-b">
            <tr>
              <th className="py-3 px-6">Event</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6 text-center bg-blue-500">Kong</th>
              <th className="py-3 px-6 text-center bg-yellow-500">Leo</th>
              <th className="py-3 px-6 text-center bg-red-500">Phoenix</th>
              <th className="py-3 px-6 text-center bg-green-500">Tusker</th>
            </tr>
          </thead>
          <tbody className="text-white font-semibold divide-y">
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  <Loader LoaderData={"Preparing for the house points. Data is on its way!"}/>
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Error: {error}
                </td>
              </tr>
            ) : (
              events.map((item, idx) => (
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
