import axios from "axios";

export const addEvent = async (event) => {
  console.log(`event details >` + event);
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL_BACKEND}/api/events`,
      event
    );
    return res.data;
  } catch (error) {
    console.log("error in add logic", error);
    return error.response.data;
  }
};

export const updateEvent = async (event) => {
  console.log(`ye hai recieved event for update ${event._id}`);
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_BASE_URL_BACKEND}/api/events/${event._id}`,
      event
    );
    return res.data;
  } catch (error) {
    console.log("error in update logic", error);
    return error.response.data;
  }
};

export const deleteEvent = async (id) => {
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_BASE_URL_BACKEND}/api/events/${id}`
    );
    return res.data;
  } catch (error) {
    console.log("error in delete logic", error);
    return error.response.data;
  }
};
