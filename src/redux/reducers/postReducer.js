import { fetchData } from "../actions/postActions"

const intialState = {
    data: [],
    error: ""
}

const reducer = (state = intialState, action) => {

    switch (action.type) {
        case "FetchData":
            return { ...state, data: action.data }
        case "FetchDataById":
            return { ...state, data: action.data }
        case "ERROR":
            return { ...state, error: action.msg }
        default:
            return state
    }

}
export default reducer;
