import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AllBookingView from "../view/Bookings/AllBookingView";
import AllRoomsView from "../view/Rooms/AllRoomsView";
import BookingEditView from "../view/Bookings/BookingEdtiView";
import BookingAddView from "../view/Bookings/BookingAddView";

export const ALL_BOOKINGS_VIEW_PATH = "/bookings";
export const BOOKING_EDIT_VIEW_PATH = "/booking/:bookingId/edit"
export const ALL_ROOMS_VIEW_PATH = "/rooms";
export const BOOKING_ADD_VIEW_PATH = "/booking/add";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: ALL_ROOMS_VIEW_PATH,
                element: <AllRoomsView/>
            },
            {
                path: ALL_BOOKINGS_VIEW_PATH,
                element: <AllBookingView/>
            },
            {
                path: BOOKING_EDIT_VIEW_PATH,
                element: <BookingEditView/>
            },
            {
                path: BOOKING_ADD_VIEW_PATH,
                element: <BookingAddView/>
            },
        ]
    },

]);


export default router;