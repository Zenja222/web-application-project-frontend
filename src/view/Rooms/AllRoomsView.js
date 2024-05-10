import {useEffect, useState} from "react";
import {Col, Row, Spinner} from "react-bootstrap";
import RoomCard from "../../components/Rooms/RoomCard";
import {deleteRoomById, getAllRooms} from "../../client/RoomApiClient";
function AllRoomsView() {

    const [rooms, setRooms] = useState();

    const handleRoomDelete = async (id) => {
        await deleteRoomById(id)
        setRooms((prev) => {
            return  prev.filter(room => room.id !== id)
        })
    }

    const loadRooms = async () => {
        setRooms(await getAllRooms())
    }

    useEffect(() => {
        loadRooms()
    }, [])

    return (
        <Row className="justify-content-center">
            {rooms ?
                (<>{rooms.map(room => {
                    return (
                        <Col key={`product-card-${room.id}`} sm={12} md={4}
                             className="d-flex justify-content-center">
                            <div className="mt-4">
                                <RoomCard handleOnDelete={handleRoomDelete}
                                          room={room}/>
                            </div>
                        </Col>
                    );
                })}
                </>)
                : (<Spinner animation="border"/>)}

        </Row>
    );
}

export default AllRoomsView;
