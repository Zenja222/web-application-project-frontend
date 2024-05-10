import React from "react";
import { Toast } from "react-bootstrap";

function AddedSuccessToast({ show, onClose }) {
    return (
        <Toast
            bg={"success"}
            onClose={onClose}
            show={show}
            delay={3000}
            autohide
        >
            <Toast.Body>Booking was created successfully</Toast.Body>
        </Toast>
    );
}

export default AddedSuccessToast;
