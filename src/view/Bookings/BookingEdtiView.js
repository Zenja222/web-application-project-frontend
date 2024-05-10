import { useEffect, useState } from "react";
import { Spinner, Toast, ToastContainer } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BookingEditForm from "../../components/Bookings/BookingEditForm";
import { getBookingById, updateBooking } from "../../client/BookingApiClient";
import EditedSuccessToast from "../../components/common/Toasts/EditedSuccessToast";

function BookingEditView() {
    const [booking, setBooking] = useState({});
    const [showToast, setShowToast] = useState(false);
    const { bookingId } = useParams();

    useEffect(() => {
        const fetchBooking = async () => {
            const fetchedBooking = await getBookingById(bookingId);
            setBooking(fetchedBooking);
        };

        fetchBooking();
    }, [bookingId]);

    const handleBookingUpdate = async (booking) => {
        try {
            console.log('call the api');
            const updatedBooking = await updateBooking(booking);
            console.log(updatedBooking);
            setShowToast(true);
        } catch (error) {
            console.error("Error updating booking:", error);
        }
    };

    return (
        <div className="text-center">
            <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
                <EditedSuccessToast show={showToast} onClose={() =>setShowToast(false)} />
            </ToastContainer>

            {Object.keys(booking).length > 0 ? (
                <BookingEditForm handleBookingUpdate={handleBookingUpdate} booking={booking} />
            ) : (
                <Spinner animation="border" />
            )}
        </div>
    );
}

export default BookingEditView;
