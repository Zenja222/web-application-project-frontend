import axios from "axios";

export const getAllRooms = async () => {
    return (await axios.get(`/rooms`)).data
}

export const deleteRoomById = async (id) => {
    return (await axios.delete(`/rooms/${id}`)).data
}