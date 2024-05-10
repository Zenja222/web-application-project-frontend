import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

const BookingAddForm = ({ handleBookingAdd }) => {
    const validationSchema = Yup.object().shape({
        roomId: Yup.number()
            .min(0, "RoomCard ID cannot be negative")
            .required("RoomCard ID is required"),
        guestId: Yup.number()
            .min(0, "Guest ID cannot be negative")
            .required("Guest ID is required"),
        checkInDate: Yup.date().required("Check-in date is required"),
        checkOutDate: Yup.date().required("Check-out date is required"),
    });

    const initialValues = {
        roomId: "",
        guestId: "",
        checkInDate: "",
        checkOutDate: "",
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await handleBookingAdd(values);
        } catch (error) {
            console.error("Error adding booking:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="mt-4">
            <h1>Add Booking</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="input-wrapper">
                            <Field
                                className="form-control"
                                name="roomId"
                                type="number"
                                placeholder="Enter RoomCard ID"
                            />
                            {errors.roomId && touched.roomId && (
                                <div className="error">{errors.roomId}</div>
                            )}
                        </div>
                        <div className="input-wrapper">
                            <Field
                                className="form-control"
                                name="guestId"
                                type="number"
                                placeholder="Enter Guest ID"
                            />
                            {errors.guestId && touched.guestId && (
                                <div className="error">{errors.guestId}</div>
                            )}
                        </div>
                        <div className="input-wrapper">
                            <Field
                                className="form-control"
                                name="checkInDate"
                                type="date"
                            />
                            {errors.checkInDate && touched.checkInDate && (
                                <div className="error">{errors.checkInDate}</div>
                            )}
                        </div>
                        <div className="input-wrapper">
                            <Field
                                className="form-control"
                                name="checkOutDate"
                                type="date"
                            />
                            {errors.checkOutDate && touched.checkOutDate && (
                                <div className="error">{errors.checkOutDate}</div>
                            )}
                        </div>
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default BookingAddForm;
