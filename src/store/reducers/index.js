import { SET_LOADER } from '../action-types'

const initialState = {
    blocking: false,
}

export function globalState(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case SET_LOADER:
            return {
                blocking: payload,
            }

        default:
            return state
    }
}
