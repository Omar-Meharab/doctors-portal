import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 24/7',
        icon: '',
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: '',
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+15697854124',
        icon: '',
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="row">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
        </section>
    );
};

export default BusinessInfo;