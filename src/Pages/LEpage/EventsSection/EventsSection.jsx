import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../../redux/actions/eventsActions";
import Loader from "../../../Components/Loader";
import { BiSearch } from "react-icons/bi";
import konglogo from "../../../assets/logos/transparentbg/13.svg";
import leologo from "../../../assets/logos/transparentbg/14.svg";
import phoenixlogo from "../../../assets/logos/transparentbg/15.svg";
import tuskerlogo from "../../../assets/logos/transparentbg/16.svg";
import { updateHousePoints } from "../../../redux/actions/totalHousePointsActions";
import {
  deleteEvent,
  addEvent,
  updateEvent,
} from "../../../backendCalls/event/EventCrud";
import {
  Button,
  message,
  Popconfirm,
  Modal,
  Form,
  Input,
  DatePicker,
} from "antd";
import moment from "moment";

export default () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [form] = Form.useForm();

  const reversedEvents = [...events].reverse();
  const filteredEvents = reversedEvents.filter((e) =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const housePoints = {
      kong: 0,
      leo: 0,
      phoenix: 0,
      tusker: 0,
    };

    events.forEach((event) => {
      housePoints.kong += event.housePoints.kong;
      housePoints.leo += event.housePoints.leo;
      housePoints.phoenix += event.housePoints.phoenix;
      housePoints.tusker += event.housePoints.tusker;
    });

    dispatch(updateHousePoints(housePoints));
  }, [events, dispatch]);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const DeleteEvent = async (id) => {
    const res = await deleteEvent(id);
    if (res.success) {
      message.success("Event deleted successfully");
      dispatch(fetchEvents());
    } else {
      message.error("Failed to delete event");
    }
  };

  const handleAddEvent = () => {
    setCurrentEvent(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditEvent = (event) => {
    setCurrentEvent(event);
    form.setFieldsValue({
      name: event.name,
      date: moment(event.date),
      housePoints: event.housePoints,
    });
    setIsModalVisible(true);
  };

  const handleSubmit = async (values) => {
    try {
      const eventData = {
        name: values.name,
        date: values.date.format("YYYY-MM-DD"),
        housePoints: {
          kong: values.housePoints.kong || 0,
          leo: values.housePoints.leo || 0,
          phoenix: values.housePoints.phoenix || 0,
          tusker: values.housePoints.tusker || 0,
        },
        description: values.description, // Include the description field
      };

      let res;
      if (currentEvent) {
        res = await updateEvent({ ...eventData, _id: currentEvent._id });
      } else {
        res = await addEvent(eventData);
      }

      if (res.success) {
        message.success(
          `Event ${currentEvent ? "updated" : "added"} successfully`
        );
        setIsModalVisible(false);
        dispatch(fetchEvents());
      } else {
        message.error(
          `Failed to ${currentEvent ? "update" : "add"} event: ${res.message}`
        );
      }
    } catch (error) {
      console.error("Error submitting event:", error);
      message.error("An error occurred while submitting the event");
    }
  };

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
              <th className="py-3 px-6 font-bold text-lg">Event</th>
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
              {user ? (
                <th className="text-center">
                  <Button
                    type="link"
                    className="font-semibold text-sm"
                    onClick={handleAddEvent}
                  >
                    add new event +
                  </Button>
                </th>
              ) : (
                <></>
              )}
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
            ) : filteredEvents.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  <span className="text-white">No event data found :(</span>
                </td>
              </tr>
            ) : (
              filteredEvents.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {(() => {
                      if (!item.date) return "No data";
                      const date = new Date(item.date);
                      const day = String(date.getDate()).padStart(2, "0");
                      const month = String(date.getMonth() + 1).padStart(
                        2,
                        "0"
                      );
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
                  {user ? (
                    <td className="text-center gap-2">
                      <Button
                        type="primary"
                        className="bg-purple-700 font-semibold text-sm"
                        onClick={() => handleEditEvent(item)}
                      >
                        Edit
                      </Button>
                      <Popconfirm
                        title="Are you sure to delete this event?"
                        onConfirm={() => DeleteEvent(item._id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button type="dashed" className="ml-1">
                          Delete
                        </Button>
                      </Popconfirm>
                    </td>
                  ) : (
                    <></>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Modal
        title={currentEvent ? "Edit Event" : "Add New Event"}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{ housePoints: {} }}
        >
          <Form.Item
            name="name"
            label="Event Name"
            rules={[
              { required: true, message: "Please input the event name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Event Date"
            rules={[
              { required: true, message: "Please select the event date!" },
            ]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="description"
            label="Event Description"
            rules={[
              {
                message: "Please input the event description!",
              },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item label="House Points" name='housePoints' rules={[{ required: true, message: "Required" }]}>
            <Input.Group compact>
              <Form.Item
                name={["kong"]}
                noStyle
                rules={[{ required: true, message: "Required" }]}
              >
                <Input
                  style={{ width: "25%" }}
                  placeholder="Kong"
                  type="number"
                />
              </Form.Item>
              <Form.Item
                name={["leo"]}
                noStyle
                rules={[{ required: true, message: "Required" }]}
              >
                <Input
                  style={{ width: "25%" }}
                  placeholder="Leo"
                  type="number"
                />
              </Form.Item>
              <Form.Item
                name={["phoenix"]}
                noStyle
                rules={[{ required: true, message: "Required" }]}
              >
                <Input
                  style={{ width: "25%" }}
                  placeholder="Phoenix"
                  type="number"
                />
              </Form.Item>
              <Form.Item
                name={["tusker"]}
                noStyle
                rules={[{ required: true, message: "Required" }]}
              >
                <Input
                  style={{ width: "25%" }}
                  placeholder="Tusker"
                  type="number"
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {currentEvent ? "Update" : "Add"} Event
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
