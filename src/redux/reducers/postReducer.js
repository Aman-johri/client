import { fetchData } from "../actions/postActions"

const initialState = {
    data: [],
    error: false,
    isLoading: false,
    singleData:[],
    dataObject : [],
    registerError : [],
}

const reducer = (state =initialState, action) => {
    
    switch (action.type) {
        case "FetchData":
            const obj = {};
            action.data.forEach(element => {
                obj[element._id] = element;
            })
            state.dataObject = obj;
            console.log(state.dataObject);
        return { ...state, data: action.data, isLoading: true , dataObject: obj};
        case "GETDATA":
            const data = action.data;
            if(data.length === 0){
                window.location.href = "/";
            }
            return {...state, singleData: action.data , isLoading: true };
        case "DELETE":
            return { ...state}
        case "CREATE":
            return { ...state , data:action.data}
        case "UPDATE":
            return { ...state}
        case "ERROR":
            return { ...state, error: action.msg }
        // case "REGISTER":
        //     return { ...state}
        case "SET_LOADER":
            return {...state, isLoading: true};
        case "CLOSE_LOADER":
            return {...state , isLoading: false};
        case "REGISTER_ERRORS":
            return {...state, registerError: action.payload}
        case "LOGIN_START":
            return {...state, isLoading: true};
        case "LOGIN_SUCCESS":
            return {...state, isLoading: false ,};

        default:
            return state
    }
}
export default reducer;


