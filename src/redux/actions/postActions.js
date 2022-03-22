export const fetchData = () => {

    return (dispatch) => {
        return fetch('http://localhost:5000/posts')
            .then(response => response.json())
            .then(json => dispatch(
                { type: "FetchData", data: json }))
            .catch(err => dispatch(
                { type: "ERROR",msg: "Unable to fetch data" }))
    }
}

