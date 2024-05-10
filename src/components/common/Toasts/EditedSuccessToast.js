import React from "react";
import { Toast } from "react-bootstrap";

function EditedSuccessToast({ show, onClose }) {
    return (
        <Toast
            bg={"success"}
            onClose={onClose}
            show={show}
            delay={8000}
            autohide
        >
            <Toast.Body>Booking was updated successfully</Toast.Body>
        </Toast>
    );
}

export default EditedSuccessToast;
