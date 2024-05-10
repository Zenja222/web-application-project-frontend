import axios from "axios";
export const getAllBookings = async () => {
    return (await axios.get(`/booking`)).data
}

export const deleteBookingById = async (id) => {
    return (await axios.delete(`/booking/${id}`)).data
}

export const getBookingById = async (id) => {
    return (await axios.get(`/booking/${id}`)).data
}

export const updateBooking = async (booking) => {
    return (await axios.put(`/booking/${booking.id}`, booking))
}

export const addBooking = async (bookingData) => {
    return (await axios.post('/booking', bookingData)).data
}