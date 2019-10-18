import React from 'react';
import Layout from './../../components/Layout'
import postsData from './../../mockData/posts.json'
import './style.css'


const getPostId = () => {
    let str = window.location.search.replace("?id=", "")
    return str
}

const getPost = () => {
    let postId = getPostId()
    return postsData[postId]
}

function ShowPost(props) {
    let data = getPost()
    return (
        <Layout>
            <div className={"container"}>
                <div className="showPostBox">
                    <div className="ImageBox">
                        <img src={data.imageUrl} alt={data.title} />
                    </div>
                    <h1 className="postTitle">{data.title}</h1>
                    <div className="postDescription"><p>
                        {data.description}
                    </p></div>
                </div>
            </div>
        </Layout>
    );
}

export default ShowPost;
