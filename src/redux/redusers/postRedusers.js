import { FETCH_POSTS, DELETE_POST_BY_ID } from "./../actions/types";

const initialState = {
    items: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };

        case DELETE_POST_BY_ID:
            let posts = state.items
            let postsBuf = []
            posts.forEach(element => {
                if (element.id === action.payload) {
                    let newElement = element
                    newElement.isActive = false
                    postsBuf.push(newElement)

                } else {
                    postsBuf.push(element)
                }

            });
            return {
                ...state,
                items: postsBuf
            }
        default:
            return state;
    }
}