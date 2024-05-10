import {Button, Card} from "react-bootstrap";

function BookingsCard({booking, handleOnDelete, handleOnEdit}) {

    return (
        <Card style={{width: '17rem'}}>
            <Card.Body>
                <Card.Title>BOOKING NUMBER {booking.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Room ID: {booking.roomId}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Guest ID: {booking.guestId}</Card.Subtitle>
                <Card.Text>
                    Date of arrival: {booking.checkInDate} <br/>
                    Date of going out: {booking.checkOutDate}
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <Button onClick={() => handleOnEdit(booking.id)} >Edit</Button>
                    <Button variant="danger" onClick={() => handleOnDelete(booking.id)} >Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default BookingsCard;
