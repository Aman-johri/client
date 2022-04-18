import axios from "axios"
export const fetchData = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/posts')
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: "FetchData",
                    data: response.data
                })
            })
            .catch(err => {
                dispatch({ 
                    type: "ERROR",
                    msg: "Unable to fetch data" 
                })
            })
    }
}

export const deleteData = (postId) => {
    return (dispatch) => {
        axios.delete('http://localhost:5000/posts/'+postId)
            .then(response => {
                dispatch({
                    type: "DELETE",
                    id: postId
                })
            })
            .catch(err => {
                dispatch({ 
                    type: "ERROR",
                    msg: "Unable to delete data" 
                })
            })
            window.location.reload();
            window.location.href = '/';
    }
}

export const getData = (postId) => {
    return (dispatch) => {
         axios.get('http://localhost:5000/posts/'+postId)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: "GETDATA",
                    data: response.data,
                })
            })
            .catch(err => {
                dispatch({ 
                    type: "ERROR",
                    msg: "Unable to fetch data" 
                })
            })
    }
}


export const createData = (post) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/posts',post)
            .then(response => {
                dispatch({
                    type: "CREATE",
                    data: response.data,
                })
            })
            .catch(err => {
                dispatch({ 
                    type: "ERROR",
                    msg: "Unable to create data" 
                })
            })
    }
}

export const updateData = (postId,post) => {
    return (dispatch) => {
        axios.put('http://localhost:5000/posts/'+postId,post)
            .then(response => {
                dispatch({
                    type: "UPDATE",
                    data: response.data,
                })
            })
            .catch(err => {
                dispatch({ 
                    type: "ERROR",
                    msg: "Unable to update data" 
                })
            })
    }
}

export const getDataObject = () => {
    return (dispatch) => {
        dispatch({
            type: "GETDATAOBJECT",
        })
    }
}

// export const registerUser = (state) => {
//     return (dispatch) => {
//         const config = {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         };
//         dispatch({
//             type: "SET_LOADER",
//         });
//         axios.post("http://localhost:5000/auth/register",state,config)
//             dispatch({
//                 type: "CLOSE_LOADER",
//             });
//         }
//         catch(error){
//             dispatch({
//                 type: "CLOSE_LOADER",
//             });
//             dispatch({
//                 type: "REGISTER_ERRORS",
//                 payload: error.response.data.errors,
//             });
//         }
//     }
// }

export const registerUser = (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        dispatch({
            type: "SET_LOADER",
        });
        await axios.post("http://localhost:5000/auth/register",state,config)
            .then(response => {
                dispatch({
                    type: "CLOSE_LOADER",
                });
            })
            .catch(error => {
                dispatch({
                    type: "CLOSE_LOADER",
                });
                dispatch({
                    type: "REGISTER_ERRORS",
                    payload: error.response.data.errors,
                });
            })
    }
}

export const loginUser = (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        dispatch({
            type: "LOGIN_START",
        });
        await axios.post("http://localhost:5000/auth/login",state,config)
            .then(response => {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data,
                });
            })
            .catch(error => {
                dispatch({
                    type: "LOGIN_FAILURE",
                });
            })
    }
}