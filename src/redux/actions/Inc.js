import { INC } from "./types"

export const inc = () => dispatch => {
    dispatch({
        type: INC,
    }
    )
};