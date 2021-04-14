import React from 'react';

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2>Available Appointment on {date.toDateString()}</h2>
        </section>
    );
};

export default BookAppointment;