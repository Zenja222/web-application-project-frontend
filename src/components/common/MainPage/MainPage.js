import React from 'react';
import Image from 'react-bootstrap/Image';
import { Button } from "react-bootstrap";
import './MainPage.css';
import {useNavigate} from "react-router-dom";

function MainPage() {

    const navigate = useNavigate();

    const handleBookingPost = async () => {
        navigate('/booking/add')
    }

    return (
        <div>
            <Image src="https://t4.ftcdn.net/jpg/02/65/26/83/360_F_265268314_LmykO3vrtzmh3TQbBdnxj9vUczqqJXCU.jpg"
                   style={{width: '100%', height: '400px'}}/>
            <h1 className='bb-app' style={{paddingTop: '40px', textAlign: 'center'}}>
                Best Booking App
            </h1>
            <div className="text-center" style={{ marginTop: '20px' }}>
                <Button  onClick={() => handleBookingPost()} variant="primary" size='lg'>Book hotel </Button>
            </div>
        </div>
    );
}

export default MainPage;
