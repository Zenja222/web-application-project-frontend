import {Button, Card} from "react-bootstrap";

function RoomCard({room, handleOnDelete}) {

    return (
        <Card style={{width: '15rem'}}>
            <Card.Body>
                <Card.Title>ROOM {room.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Type of room: {room.roomType}</Card.Subtitle>
                <Card.Text>
                    Price: {room.price}$
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <Button variant="danger" onClick={() => handleOnDelete(room.id)} >Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default RoomCard;
