import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import "./BookingForm.css"
import {Button, Col, Row} from "react-bootstrap";

function BookingEditForm({handleBookingUpdate, booking}) {


    const SignupSchema = Yup.object().shape({
        roomId: Yup.number()
            .min(0, "Cannot be negative")
            .required('Required'),
        guestId: Yup.number()
            .min(0, "Cannot be negative")
            .required('Required')
    });

    const handleSubmit = (values) => {
        handleBookingUpdate({...booking, ...values});
    }


    return (
        <div className="mt-4">
            <h1>Edit booking</h1>
            <Formik
                initialValues={{
                    roomId: booking.roomId,
                    guestId: booking.guestId,
                    checkInDate: booking.checkInDate,
                    checkOutDate: booking.checkOutDate,
                }}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
            >
                {({errors, touched}) => (
                    <Form className={"form-group"}>
                        <div className="input-wrapper">
                            <Field className="form-control" placeholder="roomId" name="roomId" type="number"/>
                            {errors.roomId && touched.roomId ? <div>{errors.roomId}</div> : null}
                        </div>
                        <div className="input-wrapper">
                            <Field className="form-control" placeholder="GuestId" name="guestId" type="number"/>
                            {errors.guestId && touched.guestId ? <div>{errors.guestId}</div> : null}
                        </div>
                        <div className="input-wrapper">
                            <Field className="form-control" placeholder="Check In Date" name="checkInDate" type="date"/>
                            {errors.checkInDate && touched.checkInDate ? <div>{errors.checkInDate}</div> : null}
                        </div>
                        <div className="input-wrapper">
                            <Field className="form-control" placeholder="Check Out Date" name="checkOutDate" type="date"/>
                            {errors.checkOutDate && touched.checkOutDate ? <div>{errors.checkOutDate}</div> : null}
                        </div>
                        <Button type="submit">Submit</Button>

                    </Form>
                )}
            </Formik>

        </div>
    );
}

export default BookingEditForm;
