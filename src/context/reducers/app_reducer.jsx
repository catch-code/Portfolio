import * as appActionType from '../actions/app_action'

export const AppReducer = (state, action) => {
    switch (action.type) {
        case appActionType.CHANGE_THEME:
            return {
                ...state,
                theme: action.payload
            }

        default:
            return state
    }
}