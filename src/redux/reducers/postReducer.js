import { fetchData } from "../actions/PostActions"

const intialState = {
    data: [],
    error: ""
}

const reducer = (state = intialState, action) => {

    switch (action.type) {
        case "FetchData":
            return { ...state, data: action.data }
        case "GETDATA":
            console.log(action.data)
            return {...state, data: action.data }
        case "DELETE":
            return { ...state}
        case "CREATE":
            return { ...state}
        case "UPDATE":
            return { ...state}
        case "ERROR":
            return { ...state, error: action.msg }
        default:
            return state
    }

}
export default reducer;
