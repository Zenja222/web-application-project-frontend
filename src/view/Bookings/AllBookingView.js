import {useEffect, useState} from "react";
import {Col, Row, Spinner} from "react-bootstrap";
import {deleteBookingById, getAllBookings} from "../../client/BookingApiClient";
import BookingsCard from "../../components/Bookings/BookingsCard";
import {useNavigate} from "react-router-dom";

function AllBookingView() {

    const [bookings, setBookings] = useState();

    const navigate = useNavigate();

    const handleBookingEdit = (id) => {
        navigate(`/booking/${id}/edit`);
    }


    const handleBookingDelete = async (id) => {
        await deleteBookingById(id)
        setBookings((prev) => {
            return  prev.filter(product => product.id !== id)
        })
    }

    const loadBookings = async () => {
        setBookings(await getAllBookings())
    }

    useEffect(() => {
        loadBookings()
    }, [])

    return (
        <Row className="justify-content-center">
            {bookings ?
                (<>{bookings.map(booking => {
                    return (
                        <Col key={`product-card-${booking.id}`} sm={12} md={4}
                             className="d-flex justify-content-center">
                            <div className="mt-4">
                                <BookingsCard handleOnEdit={handleBookingEdit} handleOnDelete={handleBookingDelete}
                                              booking={booking} />
                            </div>
                        </Col>
                    );
                })}
                </>)
                : (<Spinner animation="border"/>)}

        </Row>
    );
}

export default AllBookingView;
