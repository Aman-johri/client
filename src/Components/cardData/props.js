import { deleteData } from "../../redux/actions/postActions"
const mapDispatchToProps = dispatch => ({
    deleteData: (id) => dispatch(deleteData(id))
})

export {
    mapDispatchToProps
}