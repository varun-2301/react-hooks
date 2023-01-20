import { SET_LOADER } from '../action-types'

/* action for show/hide loader */
export const setLoader = (payload) => (dispatch) => dispatch({ type: SET_LOADER, payload })
