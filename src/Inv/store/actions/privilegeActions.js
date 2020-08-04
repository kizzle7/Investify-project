import { CLOSE_ALERT } from "../constant"

const closeAlert = () => (dispatch) => {
    dispatch({ type: CLOSE_ALERT })
}

export { closeAlert }