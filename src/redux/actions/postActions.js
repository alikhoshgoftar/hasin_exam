import mydata from './../../mockData/products.json'

import { FETCH_POSTS } from "./types"

export const fetchPosts = () => dispatch => {
    let objStorage = JSON.parse(sessionStorage.getItem('persist:root'))
    let posts=[]
    if (objStorage) {
        posts = JSON.parse(objStorage.posts).items
    }

    if (posts.length === 0) {
        console.log("fetch data")
        dispatch({
            type: FETCH_POSTS,
            payload: mydata
        })
    }
};