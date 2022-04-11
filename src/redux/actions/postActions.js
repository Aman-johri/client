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
            window.location.href = '/Home';
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
    console.log("create data",post);
    return (dispatch) => {
        axios.post('http://localhost:5000/posts',post)
            .then(response => {
                console.log(response);
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
            },window.alert("Congratulation! your post has been updated..."))
            .catch(err => {
                dispatch({ 
                    type: "ERROR",
                    msg: "Unable to update data" 
                })
            })
    }
}
