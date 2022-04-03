import { fetchData } from "../actions/PostActions"

const intialState = {
    data: [],
    error: "",
    isloading: false
}

const reducer = (state = intialState, action) => {

    switch (action.type) {
        case "FetchData":
            return { ...state, data: action.data, isloading: true}
        case "GETDATA":
            return {...state, data: action.data , isloading: true}
        case "DELETE":
            return { ...state}
        case "CREATE":
            return { ...state , data:action.data}
        case "UPDATE":
            return { ...state}
        case "ERROR":
            return { ...state, error: action.msg }
        default:
            return state
    }

}
export default reducer;
