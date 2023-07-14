import * as appActionType from '../actions/app_action'

export const AppReducer = (state, action) => {
    switch (action.type) {
        case appActionType.CHANGE_THEME:
            return {
                ...state,
                theme: action.payload
            }

        case appActionType.NAVIGATE_TO_PROJECT:
            return {
                ...state,
                category: action.payload
            }


        case appActionType.CHANGE_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }

        default:
            return state
    }
}