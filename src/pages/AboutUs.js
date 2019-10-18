import React from 'react';
import data from './../mockData/aboutUs.json'
import Layout from './../components/Layout/Layout'

function AboutUs() {
    return (
        <Layout>
        <div className={"container"}>

            {
                data.aboutUsText
            }
        </div>
        </Layout>
    );
}

export default AboutUs;
