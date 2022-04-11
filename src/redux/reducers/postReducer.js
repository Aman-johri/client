import { fetchData } from "../actions/postActions"

const initialState = {
    data: [],
    error: "",
    isLoading: false,
    singleData:[],
    dataObject : []
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
                window.location.href = "/Home";
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
        default:
            return state
    }
}
export default reducer;


