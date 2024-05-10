import React from "react";
import { Toast } from "react-bootstrap";

function RoomUnavailableToast({ show, onClose }) {
    return (
        <Toast
            bg={"danger"}
            onClose={onClose}
            show={show}
            delay={8000}
            autohide
        >
            <Toast.Body>The room is not available at the specific time</Toast.Body>
        </Toast>
    );
}

export default RoomUnavailableToast;
