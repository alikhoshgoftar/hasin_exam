import React from 'react';
import CardRow from './../components/CardRow/CardRow'
import Layout from './../components/Layout/Layout'

function Home() {
    return (
        <Layout>
        <div className={'container'}>
            <CardRow />
        </div>
        </Layout>
    );
}

export default Home;