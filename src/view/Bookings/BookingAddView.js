import React, {useState} from "react";
import {Spinner, ToastContainer} from "react-bootstrap";
import {addBooking} from "../../client/BookingApiClient";
import BookingAddForm from "../../components/Bookings/BookingAddForm";
import AddedSucessToast from "../../components/common/Toasts/AddedSucessToast";
import RoomUnavailableToast from "../../components/common/Toasts/RoomUnavailableToast";

function BookingAddView() {
    const [showGoodToast, setShowGoodToast] = useState(false);
    const [showBadToast, setShowBadToast] = useState(false);
    const [loading, setLoading] = useState(false);
    const [booking, setBooking] = useState({
        roomId: '',
        guestId: '',
        checkInDate: '',
        checkOutDate: '',
        errorMessage: '',
    });

    const handleBookingAdd = async (newBookingData) => {
        try {
            setLoading(true);
            const createdBooking = await addBooking(newBookingData);
            if (!createdBooking.errorMessage) {
                console.log(createdBooking);
                setShowGoodToast(true);
            } else {
                setShowBadToast(true);
            }
        } catch (error) {
            console.error("Error adding booking:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-center">
            <ToastContainer position="top-end" className="p-3" style={{zIndex: 1}}>
                <AddedSucessToast show={showGoodToast} onClose={() => setShowGoodToast(false)}/>
                <RoomUnavailableToast show={showBadToast} onClose={() => setShowBadToast(false)}/>
            </ToastContainer>
            {loading ? (
                <Spinner animation="border"/>
            ) : (
                <BookingAddForm handleBookingAdd={handleBookingAdd} booking={booking}/>
            )}
        </div>
    );
}

export default BookingAddView;
