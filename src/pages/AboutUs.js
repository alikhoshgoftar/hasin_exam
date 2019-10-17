import React from 'react';
import data from './../mockData/aboutUs.json'

function AboutUs() {
    console.log(data.aboutUsText)
    return (
        <div className={"container"}>
            {
                data.aboutUsText
            }
        </div>
    );
}

export default AboutUs;
