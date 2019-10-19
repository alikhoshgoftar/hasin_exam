import { DELETE_POST_BY_ID } from "./types"

export const deletePostById = (postId) => dispatch => {
    dispatch({
        type: DELETE_POST_BY_ID,
        payload:postId
    }
    )
};